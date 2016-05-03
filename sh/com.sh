#!/bin/bash
espacio='-----------------------------------------------------------------'
# RED='\033[0;31m'
# NC='\033[0m' # No Color
# # printf "I ${RED}love${NC} Stack Overflow\n"
before=`tput setaf 3`
after=`tput setaf 2`
reset=`tput sgr0`

echo "${before}$espacio"
# echo "$espacio"
echo "GIT STATUS BEFORE ${reset}"
git status
# echo "${before}$espacio"
echo "${before}$espacio ${reset}"
git add -A
git commit -m "$1"
echo "${after}$espacio"
# echo "$espacio"
echo "GIT STATUS AFTER ${reset}"
git status 
echo "${after}$espacio"
# echo "$espacio"
echo "${reset}"
exit 0