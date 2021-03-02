import { NextApiRequest, NextApiResponse } from 'next'
import { find, isString } from 'lodash'

import enablePublicAccess from '@cors'
import { users } from '@database'

const loginService = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    // Generally, you would not want this in your apps.
    // See more in 'cors.js'
    await enablePublicAccess(req, res)

    const { method, body } = req

    if (method === 'POST') {
      res.setHeader('Content-Type', 'application/json')
      const parsedBody = isString(body) ? JSON.parse(body) : body
      const user = find(
        users,
        ({ email }: ServerUser) => email === parsedBody?.email
      )
      if (user) {
        if (user?.password === parsedBody?.password) {
          const { password, ...rest } = user
          return res.status(200).json(rest)
        }
        return res.status(404).json({ error: 'invalidPassword' })
      }
      return res.status(404).json({ error: 'userNotFound' })
    } else {
      res.setHeader('Allow', ['POST'])
      res.status(405).end(`Method ${method} Not Allowed`)
    }
  } catch (e) {
    return res.status(500).json({ error: 'serverError' })
  }
}

export default loginService
