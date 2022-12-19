import { ApolloServer, BaseContext } from "@apollo/server";
import { startServerAndCreateNextHandler } from "../../utils/graphqlConnector";

const resolvers = {
  Query: {
    hello: (_parent: any, _arg: any, context: Context, info: any) => {
      console.log(context);
      return context.hello;
    },
  },
};

const typeDefs = `
  type Query {
    hello: String
  }
`;

interface Context extends BaseContext {
  hello: string;
}

const server = new ApolloServer<Context>({
  resolvers,
  typeDefs,
});

export default startServerAndCreateNextHandler<Context>(server, {
  context: async () => ({ hello: "world" }),
});
