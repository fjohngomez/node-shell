// Output a prompt
process.stdout.write("prompt > ");
const pwdCall = require('./pwd.js');
const lsCall = require('./ls');

// The stdin 'data' event fires after a user types in a line
process.stdin.on("data", (data) => {
  const cmd = data.toString().trim();
  if (cmd === "pwd") {
    pwdCall();
  }
  if(cmd === "ls"){
    lsCall();
  }
  else {
    process.stdout.write("You typed: " + cmd);
    process.stdout.write("\nprompt > ");
  }
});


