const express = require('express');
const WebSocket = require('ws');
const Docker = require('dockerode');

const app = express();
const server = require('http').createServer(app);
const wss = new WebSocket.Server({ server });
const docker = new Docker();

wss.on('connection', (ws) => {
    console.log('Client connected');
    ws.on('message', async (message) => {
        const data = JSON.parse(message);
        console.log(data)
        try{
            const output = await runCodeInDocker( data.language ,data.code, data.input);
            ws.send(JSON.stringify({ type: 'output', output:output.output, statusCode: output.statusCode }));
        } catch (error) {
            ws.send(JSON.stringify({ type: 'error', output: error }));
        }
    });

    ws.on('close', () => {
        console.log('Client disconnected');
    });
});

async function runCodeInDocker(langauge, code, input) {
    let container;
    try {
        console.log('Creating Container')
        container = await docker.createContainer({
            Image: 'python:3.8',
            Cmd: ['python', '-c', code],
            Tty: true,
            AttachStdin: true,
            AttachStdout: true,
            AttachStderr: true,
        });

        await container.start();

        const stream = await container.attach({stream: true, stdin: true, stdout: true, stderr: true});

        const output = [];
        stream.on('data', (data) => {
            console.log(data.toString());
            output.push(data.toString());
        });

        if (input) {
            stream.write(`${input}\n`);
        }

        stream.on('end', () => {
            console.log('Stream ended');
        });

        const { StatusCode } = await container.wait();

        const logs = await container.logs({stdout: true, stderr: true});

        return {
            output: logs.toString() + output.join(''),
            statusCode: StatusCode,
        }

    } catch (error){
        throw new Error(`Execution failed: ${error.message}`)
    } finally {
        if(container) {
            await container.remove({force: true});
        }
    }
}

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});