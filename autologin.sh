#!/bin/bash

. ~/.nvm/nvm.sh

nvm use v0.10.31


SSID=`nmcli dev wifi | grep -e 'ja' | cut -d\' -f2`

[ "$SSID" == "WIFI-PUBLIC" ] || exit 0

node src/app.js
