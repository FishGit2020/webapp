'use strict'

const got = require('got');

const youversionGot = got.extend({
    headers: {
        'X-YouVersion-Developer-Token': 'BW418JO8HNtHKgiSQoxVnnLsze0',
        'Accept-Language': 'en',
        Accept: 'application/json',
    }
});

exports.todayverse = (callback) => {
    const date = Math.floor(Math.random() * 365);
    youversionGot(`https://developers.youversionapi.com/1.0/verse_of_the_day/${date}?version_id=12`)
    .then((result) => callback(null, result.body))
    .catch((error) => callback(error))
}

