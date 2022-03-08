import { ApolloError } from "apollo-server-core";
import { MutationAddUserArgs } from "../generated/graphql";
import User from "../services/user.services";

const service = new User()

export const resolvers = {
  Query: {
    // (parent, args, context, info).
    getUsers: () => [
      {
        name: 'Vic Ferman',
        lastName: 'Flores Escobar',
        email: 'vicflores2211@gmail.com',
        password: 'abc12345',
      },
      {
        name: 'Madeleyne Melissa',
        lastName: 'Henriquez Cañada',
        email: 'maddy@gmail.com',
        password: 'abc12345',
      },
    ],

    getMovies: () => [
      { name: 'Deadpool', category: 'Action/Comedy', age: 2018 },
      { name: 'Green Linter', category: 'Action/Comedy', age: 2015 },
    ],
  },
  Mutation: {
    addUser: async(parent:undefined, args:MutationAddUserArgs) => {
      try {
        const response = await service.create(args.input)
        console.log(response);
        return 'New user created successfully'
      } catch (error) {
        throw new ApolloError(String(error));
      }
    },
  }
};
