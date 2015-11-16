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
 

