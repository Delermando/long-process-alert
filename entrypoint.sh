#!/bin/bash
set -e

cd /usr/src/app
npm install
node server.js
# tail -f /dev/null