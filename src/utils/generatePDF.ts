import { cekDevice } from "./cekDevice";
import { docDefinition } from "./pdfLayout";
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from "pdfmake/build/vfs_fonts";

export const generatePDF = () => {
    const device = cekDevice();

    pdfMake.vfs = pdfFonts.pdfMake.vfs;
    if (device === 'Windows') {
        pdfMake.createPdf(docDefinition).open();
    } else if (device === 'Mac OS') {
        pdfMake.createPdf(docDefinition).open();
    } else if (device === 'Android') {
        pdfMake.createPdf(docDefinition).download('oke.pdf');
    } else if (device === 'iOS') {
        pdfMake.createPdf(docDefinition).download('oke.pdf');
    } else {
        pdfMake.createPdf(docDefinition).download('oke.pdf');
    }
}