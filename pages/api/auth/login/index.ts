import { NextApiRequest, NextApiResponse } from 'next'
import { find } from 'lodash'

import enablePublicAccess from '@cors'
import { users, randomDelay } from '@database'

const loginService = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    // Generally, you would not want this in your apps.
    // See more in 'cors.js'
    await enablePublicAccess(req, res)

    const { method, body } = req

    switch (method) {
      case 'POST':
        res.setHeader('Content-Type', 'application/json')
        const parsedBody = JSON.parse(body)
        const user = find(
          users,
          ({ email }: ServerUser) => email === parsedBody?.email
        )
        if (user) {
          if (user?.password === parsedBody?.password) {
            const { password, ...rest } = user
            return res.status(200).json(rest)
          }
          return res.status(404).json({ message: 'invalidPassword' })
        }
        return res.status(404).json({ message: 'userNotFound' })
      default:
        res.setHeader('Allow', ['POST'])
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

export default loginService
