# 34934

## Current behavior

Using the renovate cli command `npx renovate --azure-work-item-id=25608 --dry-run=full` renovate did not update FluentAssertions to version 7.2.0 because it reports "SkipReason": "invalid-version".

## Expected behavior

Renovate should handle the package range and update FluentAssertions to version 7.2.0 instead of skipping the package.

## Link to the Renovate issue or Discussion

[discussion 34934](https://github.com/renovatebot/renovate/discussions/34934)
