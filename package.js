Package.describe({
  name: 'firfi:meteor-baconjs',
  version: '0.0.1',
  summary: 'Baconjs build for Meteor',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/Firfi/meteor-baconjs',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'METEOR.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.5');
  api.addFiles('dist/Bacon.js');
  // exports 'Bacon' global
});

Package.onTest(function(api) {

});
