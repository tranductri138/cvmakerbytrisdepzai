import PDFDocument from 'pdfkit';
import pdfDocument from 'pdfkit';
import fs from 'fs';
import { CVdto } from './dto';

export class PdfSerVice {
  async generatePDF(): Promise<Buffer> {
    const pdfBuffer: Buffer = await new Promise((resolve) => {
      const doc = new PDFDocument({
        size: 'LETTER',
        bufferPages: true,
      });

      // customize your PDF document
      doc.text('hello world', 100, 50);
      doc.end();

      const buffer = [];
      doc.on('data', buffer.push.bind(buffer));
      doc.on('end', () => {
        const data = Buffer.concat(buffer);
        resolve(data);
      });
    });

    return pdfBuffer;
  }

  createPdf(info: CVdto) {
    const doc = new pdfDocument();
    // Add a 50 point margin on all sides
    doc.pipe(fs.createWriteStream('output.pdf'));
    doc.fontSize(24);
    doc.font('Times-Roman').text("candidate's name :" + '    ' + info.name);
    doc.font('Times-Roman').text("candidate's age :" + '    ' + info.age);
    doc.font('Times-Roman').text("candidate's email :" + '    ' + info.email);
    doc.font('Times-Roman').text("candidate's phone :" + '    ' + info.phone);
    doc
      .font('Times-Roman')
      .text("candidate's address :" + '    ' + info.address);

    // doc.addPage({
    //   margin: 50,
    // });
    // // Add different margins on each side
    // doc.addPage({
    //   margins: {
    //     top: 50,
    //     bottom: 50,
    //     left: 72,
    //     right: 72,
    //   },
    // });

    doc.end();
  }
}
