import { table } from '../../lib/client'

export default async (req, res) => {
  if (req.method !== 'POST')
    return res.json({
      msg: 'Method not allowed'
    })

  if (!req.body) return

  const { firstName, lastName, email, message } = JSON.parse(req.body)

  if (!email)
    return res.json({
      msg: 'Email is required'
    })

  // console.log(email)

  try {
    table.create(
      [
        {
          fields: { firstName, lastName, email, message }
        }
      ],
      { typecast: true },
      (err, rec) => {
        if (err) return
        // console.log({ rec })
      }
    )
    res.statusCode = 200
    res.json({ msg: `thank you ${email}` })
  } catch (err) {
    res.statusCode = 500
    res.json({
      msg: 'Method not allowed',
      err: `${err}`
    })
  }
}
