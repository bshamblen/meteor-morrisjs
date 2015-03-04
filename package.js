Package.describe({
  name: 'bshamblen:morrisjs',
  version: '0.5.1',
  // Brief, one-line summary of the package.
  summary: 'Wrapper for Morris.js version 0.5.1',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/bshamblen/meteor-morrisjs.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.3.2');
  api.use(['jquery', 'clubfest:raphael@1.0.0']);
  api.addFiles('morris.js', 'client');
  api.addFiles('morris.css', 'client');
});
