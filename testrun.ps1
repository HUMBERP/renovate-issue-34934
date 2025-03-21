
[System.Environment]::SetEnvironmentVariable('RENOVATE_TOKEN', '<Use your own token>', 'Process')
[System.Environment]::SetEnvironmentVariable('LOG_LEVEL', 'debug', 'Process')
[System.Environment]::SetEnvironmentVariable('LOG_FILE', 'renovate.log', 'Process')
[System.Environment]::SetEnvironmentVariable('LOG_FILE_FORMAT', 'pretty', 'Process')
[System.Environment]::SetEnvironmentVariable('LOG_FORMAT', 'pretty', 'Process')


npx renovate --dry-run=full
