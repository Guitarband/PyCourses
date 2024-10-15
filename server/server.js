const express = require('express');
const WebSocket = require('ws');
const { exec } = require('child_process');
const path = require('path');

const app = express();
const server = require('http').createServer(app);
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
    console.log('Client connected');
    ws.on('message', async (message) => {
        const data = JSON.parse(message);
        console.log(data)
        try{
            const output = await runCodeInDocker( data.language ,data.code);
            ws.send(JSON.stringify({ type: 'output', output:output.output, statusCode: output.statusCode }));
        } catch (error) {
            ws.send(JSON.stringify({ type: 'error', output: error }));
        }
    });

    ws.on('close', () => {
        console.log('Client disconnected');
    });
});

async function runCodeInDocker(langauge, code) {
    const containerName = 'code-executor'
    const image = () => {
        switch (langauge) {
            case 'python':
                return 'python:3.8'
            case 'node':
                return 'node:14'
        }
    }
    const tempDir = path.join(process.cwd(), 'tmp')
    const codeFile = path.join(tempDir, 'code.py')
    const fs = require('fs').promises
    await fs.mkdir(tempDir, { recursive: true })
    await fs.writeFile(codeFile, code)

    return new Promise((resolve, reject) => {
        exec(`docker run --rm --name code-executor -v ${tempDir}:/code -i python:3.8 python3 /code/code.py
`, (error, stdout, stderr) => {
            if (error) {
                console.log(error)
                reject(stderr)
            } else {
                resolve({output: stdout, statusCode: 0})
            }
        })
    })
}

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});