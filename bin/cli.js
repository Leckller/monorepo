#!/usr/bin/env node

const { execSync } = require('child_process');

const runCommand = (command) => {
  try {
    execSync(`${command}`, { stdio: 'inherit' });
  } catch (err) {
    console.log(`Hmmmm... Acho que aconteceu alguma coisa de errado; ${err}`);
    return false;
  }
  return true;
};

const randomNumbers = Math.floor(Math.random() * 1000);

const repoName = process.argv[2] !== undefined ? process.argv[2] : `Projeto-${randomNumbers}`;
const gitCheckoutCommand = `git clone --depth 1 git@github.com:Leckller/exprize.git ${repoName}`;
const installDepsCommand = `cd ${repoName} && npm install`;

console.log(`Clonando repositório com o nome ${repoName}`);
const checkedOut = runCommand(gitCheckoutCommand);
if (!checkedOut) process.exit(-1);

console.log('Instalando dependências... talvez demore um pouco D:');
const installDeps = runCommand(installDepsCommand);
if (!installDeps) process.exit(-1);

console.log('Tudo certo, agora mão na massa!!');
console.log(`cd ${repoName} && npm run dev`);