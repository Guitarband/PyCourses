const WebSocket = require('ws');
const runCodeInDocker = require('./executeCode')

const wss = new WebSocket.Server({ port: 8080 })

wss.on('connection', (ws) => {
    console.log('Client connected')

    ws.on('message', (message) => {
        const data = JSON.parse(message)
        if(data.type === 'execute'){
            const { language, code } = data
            runCodeInDocker(language, code, (output) => {
                ws.send(JSON.stringify({ type: 'output', output }))
            })
        }
    });

    ws.on('close', () => {
        console.log('Client disconnected');
    });
})

console.log('WebSocket server is running on ws://localhost:8080')