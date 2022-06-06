import { ApolloServer } from 'apollo-server-micro'
import "reflect-metadata"
import { buildSchema, Field, ID, ObjectType, Query, Resolver } from "type-graphql"
import type { NextApiRequest, NextApiResponse } from 'next'

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


const server = new ApolloServer({ schema, csrfPrevention: true })

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    await server.start();
    await server.createHandler({ path: '/api/graphql' })(req, res)
}

export const config = {
    api: {
        bodyParser: false
    }
}