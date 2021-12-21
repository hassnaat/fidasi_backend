'use strict';

/**
 * getstarted service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::getstarted.getstarted');
