import { Body, Controller, Get, Post } from '@nestjs/common';
import e from 'express';
import { EmailDto } from './email.dto';
import { SendEmailService } from './send-email.service';

@Controller('email')
export class SendEmailController {
  constructor(private sendEmailService: SendEmailService) {}

  @Post('ma')
  invinite3(@Body() email: EmailDto) {
    this.sendEmailService.sendEmail(email.email);
  }
}
