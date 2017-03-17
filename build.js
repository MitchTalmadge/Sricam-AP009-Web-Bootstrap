var password = "vstarcam!@#$%";
var wwwDir = "./www/";
var tmpDir = "./tmp/";

var fs = require('fs');
var rimraf = require('rimraf');
var glob = require('glob');

var Minizip = require('minizip-asm.js');
var mz = new Minizip();

// Remove and create tmp folder
rimraf.sync(tmpDir);
fs.mkdirSync(tmpDir);

// Get a list of all the files to add
var files = glob.sync("**", {
    'nodir': true,
    'cwd': wwwDir
});

// For each of the files, add to the zip
files.forEach(function (file) {
    mz.append(file, fs.readFileSync(wwwDir + file), {'password': password});
});

// Create the zip file
fs.writeFileSync(tmpDir + 'update.zip', new Buffer(mz.zip()));

// TODO: Combine zip with head and tail