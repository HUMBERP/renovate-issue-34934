module.exports = {
   platform: 'github',
   packageRules: [
      {
         matchPackageNames: [
            'FluentAssertions'
         ],
         allowedVersions: "<8",
      }
   ],
   repositories: [
      'HUMBERP/renovate-issue-34934'
   ]
};