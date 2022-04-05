#!/usr/bin/env bash
#
# Copyright (c) 2022 Leanplum Inc. All rights reserved.
# Bumps the version in the constants file to a desired version.
#

# Replaces a string in a file.
replace() {
  if [[ "$OSTYPE" == "darwin"* ]]; then
    sed -i '' -e "s|$2|$3|g" "$1"
  else
    sed -i -e "s|$2|$3|g" "$1"
  fi
  cd "$(dirname "$1")" || echo "Change to directory containing the file failed."
  if ! git status --porcelain 2>/dev/null | grep "$(basename "$1")"; then
    echo "${RED}Error patching file: $1${NORMAL}" && exit 1
  fi
  cd ~- || echo "Change back to original folder failed."
  echo "Updated file: $1"
}

replace package.json "version\": \"$1\"" "version\": \"$2\""
replace src/Constants.ts "SDK_VERSION: '$1'" "SDK_VERSION: '$2'"
