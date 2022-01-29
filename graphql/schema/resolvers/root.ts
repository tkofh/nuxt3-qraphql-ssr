import { Resolvers } from '../../codegen'

export const root: Resolvers = {
  Query: {
    name: () => 'Tim'
  }
}