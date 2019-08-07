#!/bin/sh

# Regular Colors
Black="\033[0;30m"     # Black
Red="\033[0;31m"       # Red
Green="\033[0;32m"     # Green
Yellow="\033[0;33m"    # Yellow
Blue="\033[0;34m"      # Blue
Purple="\033[0;35m"    # Purple
Cyan="\033[0;36m"      # Cyan
BICyan="\033[1;96m"    # Bold Cyan
White="\033[0;37m"     # White
# Reset
Color_Off="\033[0m"    # Text Reset

printf "\n\n$BIGreen$( echo Building the project..: )$Color_Off"

npm run build

printf "\n\n$BIGreen$( echo Bumping the release number..: )$Color_Off"

npm run release

printf "\n\n$BIGreen$( echo Publishing new version..: )$Color_Off"

npm run publish-release