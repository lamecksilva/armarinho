/**
 * This file create and exports a User GraphQL Type, like:
 * type User {
 * 		id: String!
 *    name: String!
 *    email: String!
 *    password: String!
 * }
 *
 */

import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLID
} from 'graphql';

// import Resolver from './resolvers';

export default new GraphQLObjectType({
  description: 'A User',
  fields: () => ({
    _id: {
      description: "User's ID",
      type: GraphQLID
    },
    email: {
      description: "The user's email",
      type: GraphQLString
    },
    name: {
      description: "The user's name",
      type: new GraphQLNonNull(GraphQLString)
    }
  }),
  name: 'User'
});
