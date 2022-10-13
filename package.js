Package.describe({
    name: 'xerdi:caching',
    version: '0.0.2',
    summary: 'Universal service worker for caching resources in a Meteor project',
    git: 'https://github.com/Xerdi/meteor-caching.git',
    documentation: 'README.md'
});

Package.onUse(function (api) {
    api.use([
        'meteor',
        'ecmascript@0.16.2',
        'xerdi:logging@0.0.3'
    ]);
    api.addAssets('service-worker.js', 'client');
    api.mainModule('index.js', 'client');
});
