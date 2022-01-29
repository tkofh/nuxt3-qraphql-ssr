import { defineNuxtPlugin } from '#app'
import {SchemaLink} from "@apollo/client/link/schema";
import {ApolloClient, InMemoryCache} from "@apollo/client";
import { ApolloServer } from "apollo-server";
import {schema} from "~/graphql/schema";
import { GetNameDocument } from '~/graphql/codegen'

export default defineNuxtPlugin(async (nuxtApp) => {
  const server = new ApolloServer({
    schema,
  })

  const link = new SchemaLink({
    schema
  })

  const cache = new InMemoryCache()

  const client = new ApolloClient({
    cache,
    link,
    ssrMode: true,
  })

  nuxtApp.hook('app:rendered', () => {
    nuxtApp.payload.state.APOLLO_CACHE_DATA = cache.extract()
  })

  await client.query({ query: GetNameDocument })

  return {
    provide: {
      apolloServer: server,
      apollo: client,
    }
  }
})