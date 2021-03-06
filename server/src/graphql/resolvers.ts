import { listings } from './../listings';

export const resolvers = {
  Query: {
    listings: () => {
      return listings;
    }
  },
  Mutation: {
    deleteListing: (_root: undefined, { id }) => {
      for (let i = 0; i < listings.length; i++) {
        if (listings[i].id === id) {
          return listings.splice(i, 1)[0];
        }

        return new Error('failed to delete listing');
      }
    }
  }
};
