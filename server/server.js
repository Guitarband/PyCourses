const path = require('path');
const fs = require('fs').promises;
const { exec } = require('child_process');

async function runCode(language, code, input) {
    const tempDir = path.join(process.cwd(), 'tmp');
    const codeFile = path.join(tempDir, `code.${getFileExtension(language)}`);

    await fs.mkdir(tempDir, { recursive: true });

    await fs.writeFile(codeFile, code);

    return new Promise((resolve, reject) => {
        const command = getCommand(language, codeFile);
        exec(command, (error, stdout, stderr) => {
            if (error) {
                console.log(error);
                reject(stderr);
            } else {
                resolve({ output: stdout, statusCode: 0 });
            }
        });
    });
}

function getFileExtension(language) {
    switch (language) {
        case 'python':
            return 'py';
        case 'javascript':
            return 'js';
        default:
            throw new Error('Unsupported language');
    }
}

function getCommand(language, codeFile) {
    switch (language) {
        case 'python':
            return `python3 ${codeFile}`;
        case 'javascript':
            return `node ${codeFile}`;
        default:
            throw new Error('Unsupported language');
    }
}
