import { DataBalita } from "@/types/balita";
import { cekDevice } from "./cekDevice";
import { docDefinition } from "./pdfLayout";
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from "pdfmake/build/vfs_fonts";

export const generatePDF = (dataBalita: DataBalita) => {
    const device = cekDevice();

    pdfMake.vfs = pdfFonts.pdfMake.vfs;
    if (device === 'Windows') {
        pdfMake.createPdf(docDefinition(dataBalita)).open();
    } else if (device === 'Mac OS') {
        pdfMake.createPdf(docDefinition(dataBalita)).open();
    } else if (device === 'Android') {
        pdfMake.createPdf(docDefinition(dataBalita)).download('REKOMENDASI GIZI.pdf');
    } else if (device === 'iOS') {
        pdfMake.createPdf(docDefinition(dataBalita)).download('REKOMENDASI GIZI.pdf');
    } else {
        pdfMake.createPdf(docDefinition(dataBalita)).download('REKOMENDASI GIZI.pdf');
    }
}