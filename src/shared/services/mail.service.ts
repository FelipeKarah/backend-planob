import * as nodemailer from 'nodemailer';

interface IData {
  to: string;
  subject: string;
  message: string;
}

export class MailService {
  static async sendSingle(data?: IData) {
    const transporter = nodemailer.createTransport({
      // host: process.env.MAIL_HOST,
      // port: Number.parseInt(process.env.MAIL_PORT),
      // auth: {
      //     user: process.env.MAIL_ADDRESS,
      //     pass: process.env.MAIL_PASSWORD
      // }
      host: 'smtp-mail.outlook.com',
      port: 587,
      secure: false, // Usar SSL/TLS
      auth: {
        user: 'karahfelipe@gmail.com',
        pass: '',
      },
    });

    const mailOptions = {
      // from: process.env.MAIL_ADDRESS,
      // to: data.to,
      // subject: data.subject,
      // text: data.message
      from: 'felipekarah@hotmail.com',
      to: 'felipekarah@hotmail.com',
      subject: 'Assunto do e-mail',
      text: 'Conteúdo do e-mail',
    };

    try {
      await new Promise((reject, resolve) => {
        transporter.sendMail(mailOptions, function (error, info) {
          if (error) {
            console.log('Error while send mail: ', error.message);
            reject(error);
          } else {
            resolve('Email sent: ' + info.response);
          }
        });
      });
    } catch {}
  }
}
