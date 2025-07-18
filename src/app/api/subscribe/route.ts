import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  const { email } = await request.json();

  if (!email) {
    return NextResponse.json({ error: 'Email is required' }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    host: 'smtp.qq.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_SERVER_USER, // 你的QQ邮箱地址
      pass: process.env.EMAIL_SERVER_PASSWORD, // 你的QQ邮箱SMTP授权码
    },
  });

  const mailOptions = {
    from: `"个人网站" <${process.env.EMAIL_SERVER_USER}>`, // 发件人
    to: process.env.EMAIL_TO, // 收件人，即你自己
    subject: '新的邮件订阅', // 主题
    text: `新的订阅者邮箱地址: ${email}`, // 纯文本正文
    html: `<b>新的订阅者邮箱地址:</b> <a href="mailto:${email}">${email}</a>`, // HTML正文
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Subscription successful!' }, { status: 200 });
  } catch (error) {
    console.error('Failed to send email:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
} 