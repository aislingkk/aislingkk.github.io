#!/bin/bash


cp -r _site/* ../../aislingkk.github.io/visualization/
cd ../../aislingkk.github.io/visualization/
git add .
git commit -m "update web page"
git push
gcloud compute --project "core-yew-235919" ssh --zone "asia-east1-b" "ssr-1" --command 'cd aislingkk.github.io/ ; git pull'