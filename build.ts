const head = "wifi-camera-app-qazwsxedcrfvtgba";
const tail = "wifi-camera-end-yhnujmzaqxswcdef";
const password = "vstarcam!@#$%";

const wwwDir = "./www/";
const tmpDir = "./tmp/";
const distDir = "./dist/";

const updateZip = tmpDir + 'update.zip';
const finalUpdateFile = distDir + 'update.bin';

const fs = require('fs');
const rimraf = require('rimraf');
const glob = require('glob');

const Minizip = require('minizip-asm.js');
let mz = new Minizip();

console.log("Removing old directories");

// Remove and create tmp and dist folders
rimraf.sync(tmpDir);
fs.mkdirSync(tmpDir);
rimraf.sync(distDir);
fs.mkdirSync(distDir);

console.log("Adding files to zip");

// Get a list of all the files to add
let files = glob.sync("www/**", {
    'nodir': true
});

// For each of the files, add to the zip
files.forEach(function (file) {
    console.log("\tAdding " + file);
    mz.append(file, fs.readFileSync(file));
});


console.log("Writing zip file");

// Create the zip file
fs.writeFileSync(updateZip, new Buffer(mz.zip()));

console.log("Zip File written to " + updateZip);

console.log("\tWriting update to " + finalUpdateFile);
let updateFileStream = fs.createWriteStream(finalUpdateFile);

// Head
console.log("\tAppending Head");
updateFileStream.write(head);

let zipBuffer = new Buffer(mz.zip());

// Size
console.log("\tAppending Size");
let updateSize = zipBuffer.length;
console.log("\t - Size of zip: " + updateSize);
let updateSizeBuffer = new Buffer(4);
updateSizeBuffer.writeUInt32LE(updateSize, 0);
console.log("\t - Size as hex: " + updateSizeBuffer.toString('hex'));
updateFileStream.write(updateSizeBuffer, "hex");

// Zip
console.log("\tAppending Zip File");
updateFileStream.write(zipBuffer, "hex");

// Tail
console.log("\tAppending Tail");
updateFileStream.write(tail);

updateFileStream.end();

console.log("Complete!");