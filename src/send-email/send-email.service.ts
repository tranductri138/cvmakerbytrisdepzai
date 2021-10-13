import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

export const API_KEY =
  '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';

export const msg = {
  to: 'tris.tran@techvify.com.vn',
  from: 'tritocao@gmail.com',
  subject: 'Hello I am tris',
  text: 'Hello ',
  html: '<h1> Hello Im tris come from Sendgrid </h1>',
};

@Injectable()
export class SendEmailService {
  constructor(private readonly mailerService: MailerService) {}
  // async createKey(email: string) {
  //   await sgMail.setApiKey(API_KEY);
  //   await sgMail
  //     .send(this.messeage(email))
  //     .then((res) => console.log('Email sent'))
  //     .catch((error) => console.log(error.meseage));
  // }

  messeage(email: string) {
    return {
      to: 'tris.tran@techvify.com.vn',
      from: email,
      subject: 'Hello I am tris',
      text: 'Hello ',
      html: '<h1> Hello Im tris come from Sendgrid </h1>',
    };
  }

  sendEmail(email: string) {
    this.mailerService.sendMail({
      to: email, // list of receivers
      from: 'noreply@nestjs.com', // sender address
      subject: 'Testing Nest MailerModule ✔', // Subject line
      text: 'welcome', // plaintext body
      html: '<b>welcome</b>', // HTML body content
    });
    console.log('sent succees ');
  }
}
