import { defineNuxtPlugin } from "#app";
import {ApolloClient, HttpLink, InMemoryCache} from "@apollo/client/core";
import {GetNameDocument} from "~/graphql/codegen";

export default defineNuxtPlugin(async (nuxtApp) => {
  const link = new HttpLink({
    uri: '/api/graphql',
  })

  const cache = new InMemoryCache()
  cache.restore(nuxtApp.payload.state.APOLLO_CACHE_DATA)

  const client = new ApolloClient({ link, cache })

  console.log(await client.query({ query: GetNameDocument, fetchPolicy: 'cache-first' }))

  return {
    provide: {
      apollo: client,
    }
  }
})