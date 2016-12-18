#!/usr/bin/env bash
git commit -am "'$@'"
git push
git push heroku master
