#!/usr/bin/env node

const { program } = require('commander');
const { exec } = require("child_process");
const os = require("os");
const sassyMessages = require("./sassyMessages");

const randomSassyMessage =
  sassyMessages[Math.floor(Math.random() * sassyMessages.length)];

let command;

program
  .name('give-me-sass')
  .description('Praise your coding skills with a voice message, followed by a sassy roast.')
  .action(() => {
if (os.platform() === "darwin") {
  // macOS
  command = `say -r 180 -v Daniel "${randomSassyMessage}"`;
  console.log(randomSassyMessage)
}

exec(command, (err, stdout, stderr) => {
  if (err) {
    console.error(`Error executing command: ${err}`);
    return;
  }
  console.log(stdout);
})
})

program.parse(process.argv);
