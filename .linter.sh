#!/bin/bash
cd /tmp/kavia/workspace/code-generation/weatherease-125907-ba4f6a09/main_container_for_weatherease
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

