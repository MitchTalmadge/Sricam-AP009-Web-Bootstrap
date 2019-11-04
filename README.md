> Update: I never was able to finish this project due to space limitations of the camera's internal memory. I have uploaded the original web firmware to /www for archival purposes.

# Sricam AP009 Web Bootstrap 

**The Sricam AP009 Web interface, redesigned in Bootstrap**

![Sricam AP009](http://i.imgur.com/b4Xaxw4.jpg)

---

This project was created to turn the ugly web interface that comes standard on the _Sricam AP009_ into something more pleasing to work with. The package can be uploaded on the _"Upgrade Device Embeded Web UI"_ section of the web interface.
 
I can't guarantee that this will work for any other Sricam devices, and I wouldn't try it. (Feel free to do so yourself, but don't hold me accountable if you screw up your camera.)
 
---
 
### How does it work?

The Sricam AP009 uses firmware that is nearly identical to that of the **vstarcam** camera line. With the help of some blog posts on the internet, I was able to deconstruct the upgrade file format and re-build it automatically, containing custom web files. 

Internally, the Sricam AP009 uses BusyBox linux and stores all web files in `/system/www`. The web upgrade file replaces all the files in this directory with the contents of an embedded zip file within the upgrade file. The structure of the file is as follows:

1. **Header (32 bytes):**

    `wifi-camera-app-qazwsxedcrfvtgba`

2. **Zip File Size (4 byte integer, _little endian_)**

3. **Zip File**

    * The zip file should contain a directory called `www` in which the web files reside. Any files in this directory will be accessible from the web.

    * The contents of the zip file are extracted into `/system`. This can be exploited to replace non-web files, such as the firmware in `/system/system/bin` or the startup script in `/system/init`.
    
    * Although the updater on the camera expects the zip file to be password protected using the password `vstarcam!@#$%`, it is not actually required, and the update works fine without it.  
    
4. **Tail (32 bytes):**

    `wifi-camera-end-yhnujmzaqxswcdef`
    
This repository uses npm to generate an update file from the contents of the repository's `www` directory.

I was able to get the original files from the camera by connecting via telnet with the username **root** and the password **123456**. Then, I used the ftp binary at `/system/system/bin/ftp` to download the contents of `/system/www` to my computer.

---

### Cloning:

This project was built for **WebStorm**. You should probably use that IDE.

---

### Building:

You can build everything using the command `npm run build`. The resulting update will be placed in `/dist/`. Make sure to run `npm install` beforehand to get the required dependencies.

---

### Installing:

1. Either build the package using the instructions above, or download one of the pre-built update packages from the [releases](https://github.com/MitchTalmadge/Sricam-AP009-Web-Bootstrap/releases) page.

2. Login to your Sricam web interface (usually on port 81, default username **admin** with no password)

3. Go to the settings page, then to **Upgrade Device Firmware**.

4. Upload the update package to the **Upgrade Device Embeded Web UI** field.

This should be all. Refresh the page if needed.

---

### Credit where it's due:

These blog posts helped me get to where I am. I appreciate these peoples' hard work. 

The posts are a great read if you're interested to learn more about the innerworkings of the Sricam (and similar) devices.

http://blog.badtrace.com/post/sricam-ap003-by-sricctv/

http://catdevzero.blogspot.com/2015/02/experiments-with-ip-camera-part-3.html

https://jumpespjump.blogspot.co.uk/2015/09/how-i-hacked-my-ip-camera-and-found.html

https://www.pentestpartners.com/blog/hacking-the-ip-camera-part-1

https://www.pentestpartners.com/blog/hacking-the-aldi-ip-cctv-camera-part-2/

---

### Moral of the story:

This camera is incredibly insecure and should not be in your home unless you _really_ know what you are doing.
