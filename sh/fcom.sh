#!/bin/bash
# scriptname mensaje
git add -A
git commit -m '$mensaje'
git push -f --all
exit 0