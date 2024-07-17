import getTotalMonthsSince from "@/utils/getTotalMonthsSince";

type TotalBulan = ReturnType<typeof getTotalMonthsSince>

export interface DataBalita {
    namaOrtu: string;
    namaBalita: string;
    tanggalLahir: Date;
    jenisKelamin: "laki-laki" | "perempuan";
    tinggiBadan: number;
    totalBulan: TotalBulan;
    hasilKlasifikasi: string;
}