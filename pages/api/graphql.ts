import { ApolloServer, BaseContext } from "@apollo/server";
import { startServerAndCreateNextHandler } from "../../utils/graphqlConnector";
import { User } from "next-auth";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const resolvers = {
  Query: {
    hello: (_parent: any, _arg: any, context: Context, info: any) => {
      console.log(context);
      return context.hello;
    },
  },
  Mutation: {
    addUser: async (_parent: any, args: any, context: Context, info: any) => {
      const { email, image, name }: { [x: string]: string } = args;
      await prisma.user.upsert({
        where: {
          email,
        },
        update: {
          image,
          name,
        },
        create: {
          email,
          name,
          image,
        },
      });
      return true;
    },
  },
};

const typeDefs = `
  type Query {
    hello: String
  }
  
  type Mutation {
    addUser(
      name: String
      email: String
      image: String
    ): Boolean
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
