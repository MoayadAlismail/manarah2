import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const response = await axios.post('https://api.tap.company/v2/charges', {
        amount: req.body.amount,
        currency: req.body.currency,
        description: req.body.description,
        source: { id: 'src_all' },
        customer: {
          first_name: req.body.firstName,
          email: req.body.email,
          phone: {
            country_code: '966',
            number: req.body.phone
          }
        },
        // Add other required fields
      }, {
        headers: {
          'Authorization': 'Bearer YOUR_TAP_SECRET_KEY',
          'Content-Type': 'application/json'
        }
      })

      res.status(200).json(response.data)
    } catch (error) {
      res.status(500).json({ error: 'Payment failed' })
    }
  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}