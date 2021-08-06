
module.exports = () => {
  const fs = require('fs');
  fs.readdir('./', 'utf-8', (err, files)=>{
    if(err){
      throw err;
    } else {
      process.stdout.write(files.join(' '));
      process.stdout.write("\nprompt > ");
    }
  })
}
