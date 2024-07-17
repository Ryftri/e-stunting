import { rekomendasiPerbaikanGizi } from "@/data/rekomendasiPerbaikanizi";
import { DataBalita } from "@/types/balita";
import { TDocumentDefinitions } from "pdfmake/interfaces";
import checkRange from "./checkRange";
import getStyleByClassification from "./getStyleByClassification";
import { style } from "./stylePDF";

const options: Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

function getDescriptionByClassification(classification: string): string {
    switch (classification) {
        case 'Membutuhkan Perhatian Khusus':
            return 'Anak dalam kategori ini memiliki tinggi badan yang perlu diperhatikan lebih lanjut dibandingkan dengan anak seusianya. Kondisi ini menunjukkan adanya kebutuhan untuk meningkatkan asupan gizi dan memantau pertumbuhan anak secara lebih intensif. Dengan perhatian yang tepat, anak dapat mencapai potensi pertumbuhan optimalnya.';
        case 'Perlu Peningkatan Pertumbuhan':
            return 'Anak dalam kategori ini memiliki tinggi badan yang perlu ditingkatkan dibandingkan dengan anak seusianya. Kondisi ini menunjukkan adanya peluang untuk meningkatkan asupan gizi dan pola makan agar anak dapat tumbuh dan berkembang dengan lebih optimal.';
        case 'Tumbuh Sebagaimana Mestinya':
            return 'Anak dalam kategori ini memiliki tinggi badan yang berada dalam rentang normal untuk anak seusianya. Ini menunjukkan bahwa anak tumbuh dan berkembang dengan baik. Penting untuk terus menjaga pola makan sehat dan gaya hidup aktif agar anak tetap berada dalam kategori ini.';
        case 'Tumbuh Optimal':
            return 'Anak dalam kategori ini memiliki tinggi badan yang melebihi rata-rata anak seusianya. Kondisi ini umumnya tidak perlu dikhawatirkan, namun tetap penting untuk memastikan bahwa pertumbuhan yang cepat ini tidak disebabkan oleh faktor medis tertentu.';
        default:
            return '';
    }
}

export function docDefinition(dataBalita: DataBalita): TDocumentDefinitions {
    return {
        content: [
            { text: 'HASIL KLASIFIKASI DAN REKOMENDASI GIZI', style: 'header', alignment: 'center', margin: [0, 0, 0, 10] },
            {
                layout: 'noBorders',
                table: {
                    body: [
                        ['Nama Orang Tua', ' : ', `${dataBalita.namaOrtu}`],
                        ['Nama Balita   ', ' : ', `${dataBalita.namaBalita}`],
                        ['Tanggal Lahir ', ' : ', `${dataBalita.tanggalLahir.toLocaleDateString('id-ID', options)}`],
                        ['Jenis Kelamin ', ' : ', `${dataBalita.jenisKelamin}`],
                        ['Tinggi Badan  ', ' : ', `${dataBalita.tinggiBadan} cm`],
                        ['Umur (bulan)  ', ' : ', `${dataBalita.totalBulan} bulan`],
                        [{ text: 'Hasil Klasifikasi', style: 'boldText' }, { text: ' : ', style: 'boldText' }, { text: `${dataBalita.hasilKlasifikasi}`, style: getStyleByClassification(dataBalita.hasilKlasifikasi) }],
                    ],
                },
                margin: [0, 0, 0, 10]
            },
            { text: getDescriptionByClassification(dataBalita.hasilKlasifikasi), alignment: 'justify' },
            { text: '', pageBreak: "after" },
            // halaman 2
            { text: 'TABEL REKOMENDASI GIZI', style: 'header', alignment: 'center', margin: [0, 0, 0, 10] },
            {
                table: {
                    body: [
                        [{ text: 'NAMA GIZI', style: 'tableHeader' }, { text: 'SUMBER', style: 'tableHeader' }],
                        ...Object.entries(rekomendasiPerbaikanGizi[dataBalita.hasilKlasifikasi][checkRange(dataBalita.totalBulan)]).map(([gizi, sumber]) => {
                            const sumberGizi = sumber.map((item, index) => {
                                const lenght = sumber.length;

                                if (lenght > 1) {
                                    if (index === lenght - 1) return `dan ${item}.`

                                    return `${item}, `
                                } else {
                                    return `${item}.`
                                }
                            })

                            return [{ text: gizi }, { text: sumberGizi.join('') }]
                        })
                    ],
                },
                margin: [0, 0, 0, 10]
            },
        ],
        styles: style
    }
};