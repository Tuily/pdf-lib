import { PDFDocument } from 'pdf-lib';

// PDF Creation
export async function generatePdf() {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([350, 400]);
  page.moveTo(110, 200);
  page.drawText('Hello World!');
  const pdfDataUri = await pdfDoc.saveAsBase64({ dataUri: true });
  document.getElementById('pdf').src = pdfDataUri;
}
