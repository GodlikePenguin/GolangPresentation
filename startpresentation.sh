#!/bin/bash

# exit script on any failure
set -e

# this function is called when Ctrl-C is sent
function trap_ctrlc () {
    # perform cleanup here
    echo "Ctrl-C caught...performing clean up"
 
    docker rm -f goexec
 
    # exit shell script with no error (ctrl-c is how to quit)
    exit 0
}
 
# initialise trap to call trap_ctrlc function
# when signal 2 (SIGINT) is received
trap "trap_ctrlc" 2

docker run --name goexec --rm -d -p 127.0.0.1:9000:8080 edwarddobson/goexec

npm start

