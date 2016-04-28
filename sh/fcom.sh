#!/bin/bash
git add -A
git commit -m "$1"
git push -f --all
exit 0