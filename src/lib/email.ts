import { createTransport, type SendMailOptions } from "nodemailer";

class EmailService {
  private readonly transporter = createTransport({
    host: "smtp.gmail.com",
    tls: {
      rejectUnauthorized: false,
    },
    debug: true,
    auth: {
      user: process.env.email,
      pass: process.env.password,
    },
  });

  public sendEmail(from: string, html: string, subject: string) {
    const opts: SendMailOptions = {
      from,
      to: process.env.email,
      html,
      subject,
    };

    return new Promise((resolve, reject) => {
      this.transporter
        .verify()
        .then(() => {
          this.transporter.sendMail(opts, (err, info) => {
            if (err) reject(err);

            resolve(info);
          });
        })
        .catch((err) => reject(err));
    });
  }

  public sendText(from: string, text: string, subject: string) {
    const opts: SendMailOptions = {
      from,
      to: process.env.email,
      text,
      subject,
    };

    return new Promise((resolve, reject) => {
      this.transporter
        .verify()
        .then(() => {
          this.transporter.sendMail(opts, (err, info) => {
            if (err) reject(err);

            resolve(info);
          });
        })
        .catch((err) => reject(err));
    });
  }
}

const emailService = new EmailService();

export default emailService;
