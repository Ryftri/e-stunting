export default function checkRange(umurBalita: number) {
    const jarakTotalBulan = [[0, 6], [6, 12], [12, 24], [24, 36], [36, 48], [48, 60]];
    for (const [min, max] of jarakTotalBulan) {
        if (umurBalita >= min && umurBalita < max) {
            return `${min}-${max} bulan`;
        }
    }
    return '48-60 bulan'
}