const { urlencoded } = require('express')
const express = require('express')
const nodemailer = require('nodemailer')
require('dotenv/config')

const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(express.static('public'))

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('index', { msg: '' })
})

app.post('/', (req, res) => {
  let output = `
    <h2>Contact Message from:</h2>
    <p>Name: ${req.body.name}</p>
    <p>Email: ${req.body.email}</p>
        <h2>Message</h2>
        <p>${req.body.message}</p>
    `

  var transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      type: 'OAuth2',
      user: process.env.USER_ID,
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      refreshToken: process.env.REFRESH_TOKEN
      // accessToken: process.env.ACCESS_TOKEN
    }
  })

  let mail = {
    from: `Website Contact ${process.env.USER_ID}`,
    to: process.env.USER_ID,
    subject: 'Contact Message',
    html: output
  }

  transporter.sendMail(mail, function (err, info) {
    if (err) {
      res
        .status(200)
        .render('index', { msg: 'Message Not Sent, try again!'})
    } else {
      res.render('index', {
        msg: `Message Sent! Thank you, ${req.body.name}, for contacting us`
      })
    }
    transporter.close()
  })
})

let PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log('app running...'))
