import { GraphQLResolveInfo } from 'graphql';
import gql from 'graphql-tag';
import * as VueApolloComposable from '~/packages/apollo';
import * as VueCompositionApi from 'vue';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type ReactiveFunction<TParam> = () => TParam;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  name: Scalars['String'];
  number: Scalars['Int'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean'];
  Int: Scalars['Int'];
  Query: {};
  String: Scalars['String'];
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  number?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Query?: QueryResolvers<ContextType>;
};


export type GetNameQueryVariables = Exact<{ [key: string]: never; }>;


export type GetNameQuery = { __typename?: 'Query', name: string };

export type GetNumberQueryVariables = Exact<{ [key: string]: never; }>;


export type GetNumberQuery = { __typename?: 'Query', number: number };


export const GetName = gql`
    query GetName {
  name
}
    `;
export const GetNumber = gql`
    query GetNumber {
  number
}
    `;

export const GetNameDocument = gql`
    query GetName {
  name
}
    `;

/**
 * __useGetNameQuery__
 *
 * To run a query within a Vue component, call `useGetNameQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetNameQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useGetNameQuery();
 */
export function useGetNameQuery(options: VueApolloComposable.UseQueryOptions<GetNameQuery, GetNameQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<GetNameQuery, GetNameQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<GetNameQuery, GetNameQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<GetNameQuery, GetNameQueryVariables>(GetNameDocument, {}, options);
}
export type GetNameQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<GetNameQuery, GetNameQueryVariables>;
export const GetNumberDocument = gql`
    query GetNumber {
  number
}
    `;

/**
 * __useGetNumberQuery__
 *
 * To run a query within a Vue component, call `useGetNumberQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetNumberQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useGetNumberQuery();
 */
export function useGetNumberQuery(options: VueApolloComposable.UseQueryOptions<GetNumberQuery, GetNumberQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<GetNumberQuery, GetNumberQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<GetNumberQuery, GetNumberQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<GetNumberQuery, GetNumberQueryVariables>(GetNumberDocument, {}, options);
}
export type GetNumberQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<GetNumberQuery, GetNumberQueryVariables>;