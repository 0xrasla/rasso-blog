import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    await prisma.$connect().then(e => {
        console.log('Prisma Clinet connected...')
    })
}

main()

export default prisma;