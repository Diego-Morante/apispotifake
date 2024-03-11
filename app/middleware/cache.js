const getExpeditiousCache = require('express-expeditious');

const defaultOptions = {
    namespace: 'expresscache',
    defaultTtl: '15 minute', 
    statusCodeExpires: {
        404: '5 minutes',
        500: 0 
    }
}

const cacheInit = getExpeditiousCache(defaultOptions)

module.exports = { cacheInit }
