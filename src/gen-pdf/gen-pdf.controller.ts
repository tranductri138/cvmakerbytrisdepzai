import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { CVdto } from './dto';
import { PdfSerVice } from './gen-pdf.service';

@Controller('pdf')
export class PdfController {
  constructor(private pdfService: PdfSerVice) {}

  @Post()
  async createFilePdf(@Body() info: CVdto): Promise<any> {
    await this.pdfService.createPdf(info);
    return 'succes';
  }
}
