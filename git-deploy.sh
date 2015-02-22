#!/bin/sh
cd /home/vhrb.cz/tnpw1
git fetch
LAST_HASH=$(git rev-parse --verify HEAD)
git reset --hard $LAST_HASH