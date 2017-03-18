var password = "vstarcam!@#$%";
var wwwDir = "./www/";
var tmpDir = "./tmp/";
var distDir = "./dist/";
var updateZip = tmpDir + 'update.zip';
var headFile = "./build_templates/head.bin";
var tailFile = "./build_templates/tail.bin";
var finalUpdateFile = distDir + 'update.bin';
var fs = require('fs');
var rimraf = require('rimraf');
var glob = require('glob');
var concat = require('concat-stream');
var Minizip = require('minizip-asm.js');
var mz = new Minizip();
console.log("Removing old directories");
// Remove and create tmp and dist folders
rimraf.sync(tmpDir);
fs.mkdirSync(tmpDir);
rimraf.sync(distDir);
fs.mkdirSync(distDir);
console.log("Adding files to zip");
// Get a list of all the files to add
var files = glob.sync("**", {
    'nodir': true,
    'cwd': wwwDir
});
// For each of the files, add to the zip
files.forEach(function (file) {
    console.log("\tAdding " + wwwDir + file);
    mz.append(file, fs.readFileSync(wwwDir + file), { 'password': password });
});
console.log("Writing zip file");
// Create the zip file
fs.writeFileSync(updateZip, new Buffer(mz.zip()));
console.log("Zip File written to " + updateZip);
console.log("Building update");
// Concatenate the head, size, zip, and tail.
var concatStream = concat(function (data) {
    console.log("\tWriting update to " + finalUpdateFile);
    // Called after concatStream.end().
    // Write the data to the update file.
    fs.writeFileSync(finalUpdateFile, data);
    console.log("Complete!");
});
// Head
console.log("\tAppending Head");
concatStream.write(fs.readFileSync(headFile));
// Size
console.log("\tAppending Size");
var updateSize = fs.statSync(updateZip).size;
console.log("\t - Size of zip: " + updateSize);
var updateSizeBuffer = new Buffer(4);
updateSizeBuffer.writeUInt32BE(updateSize, 0);
console.log("\t - Size as hex: " + updateSizeBuffer.toString('hex'));
concatStream.write(updateSizeBuffer, "hex");
// Zip
console.log("\tAppending Zip File");
concatStream.write(fs.readFileSync(updateZip));
// Tail
console.log("\tAppending Tail");
concatStream.write(fs.readFileSync(tailFile));
concatStream.end();
