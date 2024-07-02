import { List } from "flowbite-react";

export default function PetunjukPage () {
    return (
        <section className="w-full">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
                <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12 mb-8">
                    <h1 className="text-gray-900 dark:text-white text-3xl md:text-5xl font-extrabold mb-2">Penginstalan Aplikasi E-Stunting Berbasis Progressive Web Application {"(PWA)"}</h1>
                    <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-6">Agar aplikasi E-Stunting dapat diakses secara offline maka diperlukan instalasi aplikasi dengan mengikuti langkah-langkah dibawah ini.</p>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
                        <h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">Instalasi di Chrome {"(Windows & Android)"}</h2>
                        <List ordered>
                            <List.Item className="text-xl">Buka Google Chrome: Buka aplikasi Google Chrome di perangkat Anda.</List.Item>
                            <List.Item className="text-xl">Kunjungi Situs Web: Akses situs web aplikasi E-Stunting.</List.Item>
                            <List.Item className="text-xl">Klik Tombol Instal: Cari tombol Install {"(biasanya berbentuk tanda plus atau ikon aplikasi)"} di sebelah kanan address bar. Klik tombol tersebut.</List.Item>
                            <List.Item className="text-xl">Konfirmasi Instalasi: Sebuah jendela pop-up akan muncul. Klik "Install" untuk mengonfirmasi.</List.Item>
                            <List.Item className="text-xl">Aplikasi Terpasang: Aplikasi akan terpasang di perangkat Anda dan dapat diakses dari layar utama atau daftar aplikasi.</List.Item>
                        </List>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
                        <h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">Instalasi di Safari {"(macOS & iOS)"}</h2>
                        <List ordered>
                            <List.Item className="text-xl">Buka Safari: Buka aplikasi Safari di perangkat Anda.</List.Item>
                            <List.Item className="text-xl">Kunjungi Situs Web: Akses situs web aplikasi E-Stunting.</List.Item>
                            <List.Item className="text-xl">Klik Tombol Bagikan: Ketuk tombol Share {"(ikon kotak dengan panah ke atas)"}.</List.Item>
                            <List.Item className="text-xl">Pilih Add to Home Screen: Gulir ke bawah dan pilih opsi Add to Home Screen.</List.Item>
                            <List.Item className="text-xl">Beri Nama Aplikasi: Beri nama aplikasi Anda {"(misalnya, E-Stunting)"} dan ketuk Add.</List.Item>
                            <List.Item className="text-xl">Aplikasi Terpasang: Aplikasi akan muncul di layar utama Anda.</List.Item>
                        </List>
                    </div>
                </div>
            </div>
        </section>
    )
}