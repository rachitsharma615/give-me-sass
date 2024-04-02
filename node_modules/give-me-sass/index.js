const { exec } = require("child_process");
const os = require("os");
const sassyMessages = require("./sassyMessages");

const randomSassyMessage =
  sassyMessages[Math.floor(Math.random() * sassyMessages.length)];

let command;

if (os.platform() === "darwin") {
  // macOS
  command = `say -r 180 -v Siri "${randomSassyMessage}"`;
}

exec(command, (err, stdout, stderr) => {
  if (err) {
    console.error(`Error executing command: ${err}`);
    return;
  }
  console.log(stdout);
});
