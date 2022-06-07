import { ApolloServer, gql } from "apollo-server-micro"
import { typeDefs } from "../../src/graphql/schemas/schema";
import { userResolver } from "../../src/graphql/resolvers";
import { NextApiRequest, NextApiResponse } from "next";
import cors from "micro-cors"

const server = new ApolloServer({
    typeDefs,
    resolvers: [userResolver],
    csrfPrevention: true
});
const Cors = cors()
const startServer = server.start()

export default Cors(async (req, res) => {

    await startServer;

    if (req.method == "OPTIONS") {
        res.end()
        return false
    }

    return server.createHandler({
        path: "/api/graphql"
    })(req, res)
})

export const config = {
    api: {
        bodyParser: false,
    }
}