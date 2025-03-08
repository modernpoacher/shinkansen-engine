#!/bin/bash

DEBUG="${DEBUG:-shinkansen-engine*}"

node -e 'import("./build/transform.mjs").then(({ default: transform }) => transform())'
