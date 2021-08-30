import { NextApiRequest, NextApiResponse } from 'next'
import DB from '@database'

const getAvo = async (request: NextApiRequest, response: NextApiResponse) => {
  const db = new DB()
  const { id } = request.query
  const avo = await db.getById(id as string)

  response.status(200).json(avo)
}

export default getAvo
