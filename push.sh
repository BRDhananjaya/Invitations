#!/bin/bash



git add .

git commit -m "commit done"

git config credential.helper 'store --file=.git-credentials'

echo -e "protocol=https\nhost=github.com\nusername=chibhu\npassword=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" > .git-credentials

git push https://chibhu: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@repository_url main