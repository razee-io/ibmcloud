Package.describe({
  name: 'razee-io:ibmcloud',
  version: '0.1.0',
  summary: 'IBM Cloud OAuth flow',
  git: 'https://github.com/razee-io/ibmcloud.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.use('oauth2@1.0.0', ['client', 'server']);
  api.use('oauth@1.0.0', ['client', 'server']);
  api.use('http@1.0.0', ['server']);
  api.use('underscore@1.0.0', 'client');
  api.use('templating@1.0.0', 'client');
  api.use('random@1.0.0', 'client');
  api.use('service-configuration@1.0.0', ['client', 'server']);

  api.export('Ibmcloud');

  api.addFiles(['ibmcloud_configure.html', 'ibmcloud_configure.js'], 'client');

  api.addFiles('ibmcloud_server.js', 'server');
  api.addFiles('ibmcloud_client.js', 'client');
});
