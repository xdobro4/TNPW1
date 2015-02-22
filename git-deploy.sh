#!/bin/sh
cd /home/vhrb.cz/tnpw1
git fetch
LAST_HASH=$(git log -n 1 --pretty=format:"%H")
#echo $LAST_HASH
git reset --hard "$LAST_HASH"