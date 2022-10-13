# Meteor Caching

The [universal service worker](https://github.com/ilan-schemoul/meteor-service-worker) for caching resources in a Meteor project.

## Getting Started
The caching service is started automatically on the client.
The service can be stopped by:
```javascript
import {CacheService} from 'xerdi:caching';

CacheService.stop();
```
