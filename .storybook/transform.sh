#!/bin/bash

DEBUG="${DEBUG:-shinkansen-engine*}"

node -e 'import("./.storybook/transform.mjs").then(({ default: transform }) => transform())'
