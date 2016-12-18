#!/usr/bin/env bash
git add .
git commit -m "'$@'"
echo git push
echo git push heroku master
