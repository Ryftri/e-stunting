export default function getStyleByClassification(classification: string): string {
    switch (classification) {
        case 'Membutuhkan Perhatian Khusus':
            return 'fillTextDanger';
        case 'Perlu Peningkatan Pertumbuhan':
            return 'fillTextWarning';
        case 'Tumbuh Sebagaimana Mestinya':
            return 'fillTextNormal';
        case 'Tumbuh Optimal':
            return 'fillTextHight';
        default:
            return '';
    }
}