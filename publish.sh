#!/bin/bash

PACKAGE_NAME=$(node -p -e "require('./package.json').name")
CURRENT_VERSION=$(node -p -e "require('./package.json').version")
PUBLISHED_VERSION=$(npm info $PACKAGE_NAME version)

echo "Current version: $CURRENT_VERSION"
echo "Published version: $PUBLISHED_VERSION"

if [ "$CURRENT_VERSION" == "$PUBLISHED_VERSION" ]
then
  echo "Skip publishing."
else
  echo "Publishing..."
  npm publish --unsafe-perm
fi
