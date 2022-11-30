//@flow
import {Meteor} from "meteor/meteor";
import {log} from 'meteor/xerdi:logging';

export class CacheServicePrototype {
    url = '/packages/xerdi_caching/service-worker.js';
    status = 'uninitialized';
    registration : ServiceWorkerRegistration = null;

    start() {
        if (navigator && 'serviceWorker' in navigator) {
            navigator.serviceWorker.register(this.url)
                .then(this.onRegistered.bind(this))
                .catch(this.onRegisterFail.bind(this));
        }
    }

    stop() {
        if (this.registration) {
            this.registration.unregister().catch((err) => {
                log.error('Failed to stop caching service worker', err);
            });
        }
    }

    onRegistered(registration) {
        log.info('caching service started');
        this.registration = registration;
        this.status = 'started';
    }

    onRegisterFail(err) {
        log.error('caching service unsupported', err);
        this.status = 'unsupported';
    }
}

export const CacheService = new CacheServicePrototype();

Meteor.startup(function () {
    CacheService.start();
});
