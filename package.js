Package.describe({
    name: 'xerdi:caching',
    version: '0.0.4',
    summary: 'Universal service worker for caching resources in a Meteor project',
    git: 'https://github.com/Xerdi/meteor-caching.git',
    documentation: 'README.md'
});

Package.onUse(function (api) {
    api.versionsFrom('2.11.0');
    api.use([
        'meteor',
        'ecmascript',
        'xerdi:logging@0.0.4'
    ]);
    api.addAssets('service-worker.js', 'client');
    api.mainModule('index.js', 'client');
});
