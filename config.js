module.exports = {
   platform: process.env.RENOVATE_PLATFORM,
   endpoint: process.env.RENOVATE_ENDPOINT,
   token: process.env.RENOVATE_TOKEN,
   autoApprove: true,
   automerge: true,
   automergeType: 'pr',
   automergeStrategy: 'squash',
   prConcurrentLimit: 2,
   includeForks: false,
   onboarding: false,
   requireConfig: false,
   packageRules: [
      {
         matchDepNames: [
            'dotnet-sdk', 
            'dotnet-ef'
         ],
         allowedVersions: '<9'
      },
      {
         matchDepNames: [
            'Microsoft\\.AspNetCore\\.Authentication\\.JwtBearer',
            'Microsoft\\.AspNetCore\\.Authentication\\.OpenIdConnect',
            'Microsoft\\.AspNetCore\\.Mvc\\.NewtonsoftJson',
            'Microsoft\\.Extensions\\.Diagnostics\\.HealthChecks\\.EntityFrameworkCore',
            'Microsoft\\.AspNetCore\\.Mvc\\.Testing'
         ],
         rangeStrategy: 'pin',
         versioning: 'nuget',
         allowedVersions: '<9'
      },
      {
         matchPackageNames: [
            'FluentAssertions'
         ],
         rangeStrategy: 'pin',
         allowedVersions: "<8",
      },
      {
         matchDepNames: [
            '!/(DurableTask)$/'
         ],
         matchUpdateTypes: [
            'major'
         ],
         groupName: 'all dependencies'
      },
      {
         matchDepNames: [
            '!/(DurableTask)$/'
         ],
         matchUpdateTypes: [
            'minor',
            'patch'
         ],
         groupName: 'all non-major dependencies'
      }
   ],
   lockFileMaintenance: {
      'enabled': false
   },
   hostRules: [
      {
         hostName: 'pkgs.dev.azure.com',
         username: 'renovate',
         password: process.env.RENOVATE_TOKEN
      }
   ],
   repositories: [
      'Reporting/Ecockpit.ShiftEvents'
   ]
};