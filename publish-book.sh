#!/bin/bash

DATE=$(date +%Y%m%d_%H%M%s)
TRAVIS_BRANCH="$1"

if [ "$#" -ne 1 ]; then
	echo "Please provide a branch (master, london, scotland)"
	exit 1
fi

REPO_NAME="syllabus-$TRAVIS_BRANCH"


git clone git@github.com:Code-Your-Future/$REPO_NAME.git
cp -a _book/* ./$REPO_NAME
cd $REPO_NAME
rm cyf-key cyf-key.enc
git config --global user.email "kabaros+cyf@gmail.com"
git config --global user.name "Syllabus bot"
git config --global push.default simple
git add . --all
git commit --allow-empty -m "Rebuild on $DATE"
git push
