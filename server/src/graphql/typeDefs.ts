import { gql } from 'apollo-server-core';

export const typeDefs = gql`
  type Listing {
    id: ID!
    title: string!
    image: string!
    address: string!
    price: Int!
    numOfGuests: Int!
    numOfBeds: Int!
    numOfBaths: Int!
    rating: Int!
  }

  type Query {
    listings: [Listing!]!
  }

  type Mutation {
    deleteListing(id: ID!): Listing!
  }
`;
