/* eslint-disable no-undef */
Package.describe({
    name: 'razee-io:ibmcloud',
    version: '0.1.0',
    summary: 'IBM Cloud OAuth flow',
    git: 'https://github.com/razee-io/ibmcloud.git',
    documentation: 'README.md'
});

Package.onUse(function(api) {
    api.use('oauth2', ['client', 'server']);
    api.use('oauth', ['client', 'server']);
    api.use('http', ['server']);
    api.use('underscore', 'client');
    api.use('templating', 'client');
    api.use('random', 'client');
    api.use('service-configuration', ['client', 'server']);

    api.export('Ibmcloud');

    api.addFiles(['ibmcloud_configure.html', 'ibmcloud_configure.js'], 'client');

    api.addFiles('ibmcloud_server.js', 'server');
    api.addFiles('ibmcloud_client.js', 'client');
});
