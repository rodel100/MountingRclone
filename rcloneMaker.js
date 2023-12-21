const { exec } = require('child_process');
const fs = require('fs');
const remoteName = "Myseedbox";
const localMountPath = "./seedbox" 
const rcloneCommand = "rclone";

const mountRemote = () => {
  if(fs.existsSync(localMountPath)) {
	  ///Checks if path exist, this is for incorrect closing procedures
    console.log("Removing existing mount path");
    fs.rmdirSync(localMountPath, { recursive: true, force: true });
  }
  const command = `${rcloneCommand} mount ${remoteName}: "${localMountPath}"`;
  const child = exec(command);

  child.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
  });

  child.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
  });

  child.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
  });
}
mountRemote(); 
