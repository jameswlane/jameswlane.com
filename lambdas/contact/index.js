const sgMail = require('@sendgrid/mail')
const { send, json } = require('micro')

module.exports = async (req, res) => {
  const data = await json(req)
  await sendEmail(data)
  send(res, 200, { ok: true })
}

async function sendEmail(data) {
  const { email = '', name = '', type = '', body = '' } = data

  const key = process.env.SENDGRID_API_KEY
  if (!key) {
    throw new Error('Missing KEY')
  }

  sgMail.setApiKey(key)
  const msg = {
    to: 'james.w.lane@mac.com',
    from: email,
    subject: `New message from ${name} about ${type}`,
    text: body,

  }
  await sgMail.send(msg)
}
