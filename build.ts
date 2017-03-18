const head = "wifi-camera-app-qazwsxedcrfvtgba";
const tail = "wifi-camera-end-yhnujmzaqxswcdef";

const distDir = "./dist/";
const finalUpdateFile = distDir + 'update.bin';

const fs = require('fs');
const archiver = require('archiver');
const rimraf = require('rimraf');

/**
 * Main entry point to the build script.
 */
function main() {
    cleanDirectories();

    writeZipToBuffer(buffer => {
        writeUpdateFile(buffer);
        console.log("Complete!");
    });
}

/**
 * Removes and re-creates the needed output directories.
 */
function cleanDirectories(): void {
    console.log("Removing old directories");
    rimraf.sync(distDir);
    fs.mkdirSync(distDir);
}

/**
 * Writes the contents of the 'www/' directory to a buffer.
 * The callback method is called when the writing is completed, and the buffer is given as a parameter.
 * @param callback The method to call when writing is completed.
 */
function writeZipToBuffer(callback: Function) {
    console.log("Adding files to zip");
    let archive = archiver('zip');
    let dataArray: Buffer[] = [];

    archive.on('data', (data: Buffer) => {
        dataArray.push(data);
    });

    archive.on('end', () => {
        let buffer = Buffer.concat(dataArray);
        callback.call(this, buffer);
    });

    archive.glob('www/**');
    archive.finalize();
}

/**
 * Writes the head, zipBuffer (and size), and tail to the update file in /dist.
 * @param zipBuffer The buffer containing the zip file.
 */
function writeUpdateFile(zipBuffer: Buffer) {
    console.log("Writing update to " + finalUpdateFile);
    let updateFileStream = fs.createWriteStream(finalUpdateFile);

    // Head
    console.log("\tAppending Head");
    updateFileStream.write(head);

    // Size
    console.log("\tAppending Size");
    let updateSize = zipBuffer.length;
    console.log("\t - Size of zip: " + updateSize + " bytes");
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
}

main();