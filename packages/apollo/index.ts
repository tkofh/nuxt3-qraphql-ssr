import * as VueApolloComposableImport from '@vue/apollo-composable'

export type {
  UseQueryOptions,
  UseQueryReturn,
  UseMutationOptions,
  UseMutationReturn,
  MutateFunction,
  MutateOverrideOptions,
  MutateResult,
  UseSubscriptionOptions,
  UseSubscriptionReturn,
  UseResultReturn,
  UseApolloClientReturn
} from '@vue/apollo-composable'

let VueApolloComposable!: typeof VueApolloComposableImport
if(process.server) {
  VueApolloComposable = (VueApolloComposableImport as unknown as { default: typeof VueApolloComposableImport}).default
} else {
  VueApolloComposable = VueApolloComposableImport
}

export const useQuery = VueApolloComposable.useQuery
export const useLazyQuery = VueApolloComposable.useLazyQuery
export const useMutation = VueApolloComposable.useMutation
export const useSubscription = VueApolloComposable.useSubscription
export const useResult = VueApolloComposable.useResult
export const useQueryLoading = VueApolloComposable.useQueryLoading
export const useGlobalQueryLoading = VueApolloComposable.useGlobalQueryLoading
export const useMutationLoading = VueApolloComposable.useMutationLoading
export const useGlobalMutationLoading = VueApolloComposable.useGlobalMutationLoading
export const useSubscriptionLoading = VueApolloComposable.useSubscriptionLoading
export const useGlobalSubscriptionLoading = VueApolloComposable.useGlobalSubscriptionLoading
export const DefaultApolloClient = VueApolloComposable.DefaultApolloClient
export const ApolloClients = VueApolloComposable.ApolloClients
export const useApolloClient = VueApolloComposable.useApolloClient
export const provideApolloClient = VueApolloComposable.provideApolloClient
