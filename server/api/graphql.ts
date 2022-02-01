import type { IncomingMessage, ServerResponse } from 'http'
import {ApolloServerBase as ApolloServer} from "apollo-server-core";
import {useBody, isMethod, appendHeader} from "h3";
import { schema } from '~/graphql/schema'

const server = new ApolloServer({
  schema
})

export default async (req: IncomingMessage, res: ServerResponse) => {
  if(!isMethod(req, 'POST', true)) {
    res.statusCode = 405
    res.statusMessage = 'Method not allowed'
    res.end()
  } else {
    const body = await useBody(req)
    const { http: { headers }, ...result } = await server.executeOperation(body)
    res.statusCode = 200
    res.statusMessage = 'OK'

    for(const [name, value] of Object.entries(headers)) {
      appendHeader(res, name, value)
    }

    return result
  }
}
