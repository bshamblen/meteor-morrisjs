Package.describe({
  name: 'bshamblen:morrisjs',
  version: '0.5.3',
  summary: 'Charting library Morris.js v0.5.1',
  git: 'https://github.com/bshamblen/meteor-morrisjs.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.3.2');
  api.use(['jquery', 'clubfest:raphael@1.0.0']);
  api.addFiles('morris.js', 'client');
  api.addFiles('morris.css', 'client');
});
