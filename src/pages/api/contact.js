import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { name, email, message } = req.body;

  console.log("EMAIL_USER:", process.env.EMAIL_USER);
  console.log("EMAIL_PASS:", process.env.EMAIL_PASS ? "EXISTS" : "MISSING");

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER, // Gmailの送信元アドレス
      pass: process.env.EMAIL_PASS, // アプリパスワード
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER, // 送信元はGmailの制約上、SMTPアカウントと同じにする
    to: process.env.EMAIL_USER, // 受信先
    subject: `お問い合わせ: ${name} さん`,
    text: `【お問い合わせがありました】

名前: ${name}
メールアドレス: ${email}

メッセージ:
${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: "メール送信に成功しました！" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "メール送信に失敗しました。" });
  }
}
