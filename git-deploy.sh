#!/bin/sh
cd /home/vhrb.cz/tnpw1
git fetch && git rev-parse --verify HEAD | git reset --hard