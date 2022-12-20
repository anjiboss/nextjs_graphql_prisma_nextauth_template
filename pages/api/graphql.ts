import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "../../utils/graphqlConnector";
import gatewaySchema from "../../utils/graphqlGateway";
import { GQContext } from "../../types/type";

const server = new ApolloServer<GQContext>({
  schema: gatewaySchema(),
});

export default startServerAndCreateNextHandler<GQContext>(server, {
  context: async () => ({ hello: "world" }),
});
