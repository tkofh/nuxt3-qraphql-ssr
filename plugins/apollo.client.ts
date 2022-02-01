import {defineNuxtPlugin} from "#app";
import {ApolloClient} from "@apollo/client/core/ApolloClient";
import {InMemoryCache} from "@apollo/client/cache/inmemory/inMemoryCache";
import {HttpLink} from '@apollo/client/link/http'
// import {GetNameDocument} from "~/graphql/codegen";
import {provideApolloClient} from "~/packages/apollo";

export default defineNuxtPlugin(async (nuxtApp) => {
  const link = new HttpLink({
    uri: '/api/graphql',
  })

  const cache = new InMemoryCache()
  cache.restore(nuxtApp.payload.state.APOLLO_CACHE_DATA)

  const client = new ApolloClient({link, cache})

  provideApolloClient(client)

  return {
    provide: {
      apollo: client,
    }
  }
})