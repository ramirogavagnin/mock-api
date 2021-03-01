import { NextApiRequest, NextApiResponse } from 'next'
import { find } from 'lodash'
import jwt_decode from 'jwt-decode'

import { users, randomDelay } from '@database'
import enablePublicAccess from '@cors'

const meService = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    // Generally, you would not want this in your apps.
    // See more in 'cors.js'
    await enablePublicAccess(req, res)

    const { method, headers } = req

    switch (method) {
      case 'GET':
        res.setHeader('Content-Type', 'application/json')
        const { authorization } = headers
        if (authorization) {
          const { id: userId }: any = jwt_decode(authorization as string)
          const user = find(users, ({ id }: ServerUser) => id === userId)
          if (user) {
            const { password, ...rest } = user
            return res.status(200).json(rest)
          }
          return res.status(401).json({ message: 'unauthorized' })
        }
        return res.status(401).json({ message: 'unauthorized' })
      default:
        res.setHeader('Allow', ['GET'])
        res.status(405).end(`Method ${method} Not Allowed`)
    }
  } catch (e) {
    res.status(500).end(
      JSON.stringify({
        length: 0,
        data: [],
        error: 'Something went wrong',
        message: 'serverError',
      })
    )
  }
}

export default meService
