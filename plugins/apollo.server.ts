import {defineNuxtPlugin} from '#app'
import {SchemaLink} from "@apollo/client/link/schema";
import {ApolloClient} from "@apollo/client/core/ApolloClient";
import {InMemoryCache} from "@apollo/client/cache/inmemory/inMemoryCache";
import {provideApolloClient} from "~/packages/apollo";
import {schema} from "~/graphql/schema";

export default defineNuxtPlugin(async (nuxtApp) => {
  const link = new SchemaLink({schema})

  const cache = new InMemoryCache()

  const client = new ApolloClient({cache, link, ssrMode: true})

  nuxtApp.hook('app:rendered', () => {
    nuxtApp.payload.state.APOLLO_CACHE_DATA = cache.extract()
  })

  provideApolloClient(client)

  return {
    provide: {
      apollo: client,
    }
  }
})