const fastify = require('fastify')();

fastify.get('/', async (req, res) => {
    return { test: 'OK' }
});

var port = process.env.PORT || 3000;
fastify.listen(port, '0.0.0.0', (err) => {
    if (err) {
        fastify.log.error(err);
    }
    console.log(`Server listening on ${port}`);
});

module.exports = fastify;