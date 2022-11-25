// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../lib/prismaclient'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  await prisma.post.create({
    data: {
      body: "dada",
      slug: "dada-dada",
      title: "dadada"
    }
  })

  res.status(200).json({ name: 'John Doe' })
}
