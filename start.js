const { exec } = require('child_process');

exec('~/nodevenv/next.isolab-dz.com/18/bin/npm run start', (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error: ${error}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.error(`stderr: ${stderr}`);
});
