import nodemailer from 'nodemailer'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' })
  }

  const { email } = req.body

  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: 'Invalid email' })
  }

  res.status(200).json({ success: true })

  // SMTP-конфиг
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  try {
    // Отправляем себе уведомление
    await transporter.sendMail({
      from: `"Resume Bot" <${process.env.SMTP_USER}>`,
      to: process.env.MY_EMAIL,
      subject: 'New resume request',
      text: `New request from: ${email}`,
    })

    // (опционально) отправляем пользователю письмо с PDF
    // await transporter.sendMail({
    //   from: `"Resume Bot" <${process.env.SMTP_USER}>`,
    //   to: email,
    //   subject: 'Your resume PDF',
    //   html: `<p>Hi!</p><p>Here’s the PDF version of my resume: <a href="https://yourdomain.com/resume.pdf">Download here</a></p>`,
    // })

  } catch (error) {
    console.error('Email send error:', error)
    res.status(500).json({ error: 'Failed to send emails' })
  }
}