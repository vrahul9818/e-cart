'use strict';

/**
 * game-display service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::game-display.game-display');
