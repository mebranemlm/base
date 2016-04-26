#!/bin/bash
# scriptname mensaje
git add -A
git commit -m \'$1\'
git push --all
exit 0