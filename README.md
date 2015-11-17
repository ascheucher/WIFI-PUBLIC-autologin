# WIFI-PULBLIC-autologin

Auto login script for the Public WIFI Wireless-LAN. Prevents the pollution of the browser history.

## requirements

nvm
npm
node
phantomjs 

### installation of requirements

#### NVM

Got to [NVM](https://github.com/creationix/nvm) and follow the instructions.

#### npm

Is either installed with nvm, do something like `sudo apt-get install npm` or 
got to [NPM - Node Package Manager](https://nodejs.org/en/download/) and follow 
the installation instructions for your operating system.
  
#### Node

Install node with `nvm install v0.10.31`.

This script is tested (a bit) with v0.10.31. Can work with other versions, but you have been warned. ;)

#### Phantomjs

Install with `npm install -g phantomjs`
 
### Installation of dependencies

Change into the project directory and execute `npm install`

## Use the script

As the script enables the login before opening any browser, you need to do it in the morning before opening a browser. ;)
If you open a browser and accept the login manually, then it has no effect.

### Manual test

Test it once manually with `cd scriptdir; phantomjs src/app.js`

### Automate it
 
To set up an automation, you need to use the /etc/network/if-up.d scripts.

Follow this steps:

 * In the script WIFI-PUBLIC-autologin search for the line `USER=your_ubuntu_user_name` and replace 
 `your_ubuntu_user_name` with your Ubuntu user name.
 * create a symbolic link to the script `ln -s /etc/network/if-up.d/WIFI-PUBLIC-autologin {CHECK_OUT_DIR}/WIFI-PUBLIC-autologin`. 
 Replace {CHECK_OUT_DIR} with the directory this README is located.
 
## Debugging

To see, what's going on on the phantomjs client, set `export DEBUG=debug` before starting. This will allow you to
 open the debugger on http://localhost:9000 and see the log statements in the browser console.
