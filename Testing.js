const fs = require('fs');
const path = require('path');

if (fs.existsSync("./rcloneMaker.js")) {
    console.log("Directory exists.")
    fs.rmdirSync("C:/Users/rodel/Documents/mnt/seedbox", { recursive: true, force: true });
} else {
    console.log("Directory not found.")
}