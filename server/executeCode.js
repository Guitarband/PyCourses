const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

const codeDir = path.join(__dirname, 'code')

if(!fs.existsSync(codeDir)){
    fs.mkdirSync(codeDir)
}

function runCodeInDocker(language, code, callback) {
    const fileExtension = () => {
        switch (language) {
            case 'python':
                return 'py'
            case 'javascript':
                return 'js'
            default:
                return ''
        }
    }
    const filePath = path.join(codeDir, `code.${fileExtension()}`)
    fs.writeFileSync(filePath, code)

    exec('docker-compose up --abort-on-container-exit', (error, stdout, stderr) => {
        if (error) {
            callback(stderr)
        } else {
            callback(stdout)
        }
        exec('docker-compose down', { cwd: __dirname }, () => {})
    })
}

module.exports = runCodeInDocker