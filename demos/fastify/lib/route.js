
import { logger, delay } from './utils.js'

function routes(fastify, options) {
  // Declare a route
  fastify.get('/', function (request, reply) {
    reply.send({ hello: 'world' })
  })

  fastify.get('/test', {
    schema: {
      query: {
        type: 'object',
        properties: {
          name: {
            type: 'string'
          },
        },
        required: ['name'],
        additionalProperties: false
      }
    }
  }, async (request, reply) => {
    const { query } = request
    logger.info({
      query
    })

    await delay(300)
    reply.send({
      msg: 'good night',
    })
  })
}

//ESM
export default routes;