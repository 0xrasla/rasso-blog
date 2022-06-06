import { ApolloServer } from 'apollo-server-micro'
import "reflect-metadata"
import { buildSchema, Field, ID, ObjectType, Query, Resolver } from "type-graphql"
import type { NextApiRequest, NextApiResponse } from 'next'
import cors from "micro-cors"
import { send } from 'micro'
@ObjectType()
export class User {

    @Field(() => ID)
    id!: string

    @Field()
    name!: string
}

@Resolver(() => User)
export class UserResolver {

    @Query(() => User)
    user(): User {
        return {
            id: "1",
            name: "John Doe"
        }
    }

}

const schema = await buildSchema({
    resolvers: [UserResolver]
})


const server = new ApolloServer({ schema: schema, csrfPrevention: true })
const startServer = server.start()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS")

    if (req.method === "OPTIONS") {
        res.end()
        return false;
    }

    await startServer;
    await server.createHandler({ path: "/api/graphql" })(req, res)
}

export const config = {
    api: {
        bodyParser: false
    }
}