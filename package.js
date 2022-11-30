Package.describe({
    name: 'xerdi:caching',
    version: '0.0.3',
    summary: 'Universal service worker for caching resources in a Meteor project',
    git: 'https://github.com/Xerdi/meteor-caching.git',
    documentation: 'README.md'
});

Package.onUse(function (api) {
    api.versionsFrom('2.8.1');
    api.use([
        'meteor',
        'ecmascript',
        'xerdi:logging@0.0.3'
    ]);
    api.addAssets('service-worker.js', 'client');
    api.mainModule('index.js', 'client');
});
