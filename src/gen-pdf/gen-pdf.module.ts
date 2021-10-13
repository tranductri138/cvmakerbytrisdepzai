import { Module } from '@nestjs/common';
import { PdfController } from './gen-pdf.controller';
import { PdfSerVice } from './gen-pdf.service';

@Module({
  imports: [],
  controllers: [PdfController],
  providers: [PdfSerVice],
})
export class GenPdfModule {}
