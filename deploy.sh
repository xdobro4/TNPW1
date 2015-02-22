#!/bin/sh
ssh root@31.31.76.249 'bash -s' < ./git-deploy.sh $(git log -n 1 --pretty=format:"%H")