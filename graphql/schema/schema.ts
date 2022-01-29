import {makeExecutableSchema} from "@graphql-tools/schema";
import gql from 'graphql-tag'
// import typeDefs from './merged.graphql?raw'
import {resolvers} from "./resolvers";

export const schema = makeExecutableSchema({
  typeDefs: gql`
    type Query {
      name: String!
    }
  `,
  resolvers,
})