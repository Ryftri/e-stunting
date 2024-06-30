export const rekomendasiPerbaikanGizi: { [key: string]: { [key: string]: { [key: string]: string[] } } } = {
    'Membutuhkan Perhatian Khusus': {
        '0-6 bulan': {
            'Energi dan Protein': ['ASI eksklusif'],
            'Zat Besi': ['ASI'],
            'Zinc': ['ASI'],
            'Vitamin A': ['ASI']
        },
        '6-12 bulan': {
            'Energi dan Protein': ['ASI', 'MPASI tinggi kalori dan protein', 'PMT-Pemulihan (bubur kacang hijau, susu, telur, dll.)'],
            'Zat Besi': ['Daging merah, hati ayam, ikan', 'Sayuran hijau gelap (bayam, kangkung)', 'Kacang-kacangan (lentil, buncis)', 'Tetes/sirup zat besi (jika diresepkan)'],
            'Zinc': ['Daging dan kerang', 'Kacang-kacangan, biji-bijian'],
            'Vitamin A': ['Sayuran dan buah-buahan berwarna kuning dan oranye', 'Hati ayam'],
            'Serat': ['Sayuran dan buah-buahan', 'Biji-bijian utuh'],
            'Kalsium': ['ASI, susu, yogurt, keju', 'Ikan dengan tulang lunak (sarden, salmon)'],
            'Vitamin D': ['Paparan sinar matahari pagi', 'Suplemen vitamin D (jika diresepkan)']
        },
        '12-24 bulan': {
            'Energi dan Protein': ['ASI', 'Nasi, kentang, ubi, singkong', 'Daging, ikan, telur, tahu, tempe', 'Susu pertumbuhan'],
            'Zat Besi': ['Daging merah, hati ayam', 'Telur', 'Sayuran hijau gelap', 'Kacang-kacangan', 'Tetes/sirup zat besi (jika diresepkan)'],
            'Zinc': ['Daging merah', 'Kerang', 'Kacang-kacangan', 'Biji-bijian utuh'],
            'Vitamin A': ['Sayuran dan buah-buahan berwarna kuning dan oranye', 'Hati ayam', 'Telur', 'Susu'],
            'Serat': ['Sayuran dan buah-buahan', 'Biji-bijian utuh'],
            'Kalsium': ['Susu pertumbuhan', 'Yogurt', 'Keju', 'Ikan dengan tulang lunak'],
            'Vitamin D': ['Paparan sinar matahari pagi', 'Susu pertumbuhan', 'Suplemen vitamin D (jika diresepkan)']
        },
        '24-36 bulan': {
            'Energi dan Protein': ['Nasi, kentang, ubi, singkong', 'Daging, ikan, telur, tahu, tempe', 'Susu pertumbuhan'],
            'Zat Besi': ['Daging merah, hati ayam', 'Telur', 'Sayuran hijau gelap', 'Kacang-kacangan'],
            'Zinc': ['Daging merah', 'Kerang', 'Kacang-kacangan', 'Biji-bijian utuh'],
            'Vitamin A': ['Sayuran dan buah-buahan berwarna kuning dan oranye', 'Hati ayam', 'Telur', 'Susu'],
            'Serat': ['Sayuran dan buah-buahan', 'Biji-bijian utuh'],
            'Kalsium': ['Susu pertumbuhan', 'Yogurt', 'Keju', 'Ikan dengan tulang lunak'],
            'Vitamin D': ['Paparan sinar matahari pagi', 'Susu pertumbuhan']
        },
        '36-48 bulan': {
            'Energi dan Protein': ['Nasi, kentang, ubi, singkong', 'Daging, ikan, telur, tahu, tempe', 'Susu'],
            'Zat Besi': ['Daging merah', 'Telur', 'Sayuran hijau gelap', 'Kacang-kacangan'],
            'Zinc': ['Daging merah', 'Kerang', 'Kacang-kacangan', 'Biji-bijian utuh'],
            'Vitamin A': ['Sayuran dan buah-buahan berwarna kuning dan oranye', 'Hati ayam', 'Telur', 'Susu'],
            'Serat': ['Sayuran dan buah-buahan', 'Biji-bijian utuh'],
            'Kalsium': ['Susu', 'Yogurt', 'Keju'],
            'Vitamin D': ['Paparan sinar matahari pagi', 'Susu']
        },
        '48-60 bulan': {
            'Energi dan Protein': ['Nasi, kentang, ubi, singkong', 'Daging, ikan, telur, tahu, tempe', 'Susu'],
            'Zat Besi': ['Daging merah', 'Telur', 'Sayuran hijau gelap', 'Kacang-kacangan'],
            'Zinc': ['Daging merah', 'Kerang', 'Kacang-kacangan', 'Biji-bijian utuh'],
            'Vitamin A': ['Sayuran dan buah-buahan berwarna kuning dan oranye', 'Telur', 'Susu'],
            'Serat': ['Sayuran dan buah-buahan', 'Biji-bijian utuh'],
            'Kalsium': ['Susu', 'Yogurt', 'Keju'],
            'Vitamin D': ['Paparan sinar matahari pagi', 'Susu']
        }
    },
    'Perlu Peningkatan Pertumbuhan': {
        '0-6 bulan': {
            'Energi dan Protein': ['ASI eksklusif'],
            'Zat Besi': ['ASI'],
            'Zinc': ['ASI'],
            'Vitamin A': ['ASI']
        },
        '6-12 bulan': {
            'Energi dan Protein': ['ASI', 'MPASI tinggi kalori dan protein', 'PMT-Pemulihan (bubur kacang hijau, susu, telur, dll.)'],
            'Zat Besi': ['Daging merah, hati ayam, ikan', 'Sayuran hijau gelap (bayam, kangkung)', 'Kacang-kacangan (lentil, buncis)', 'Tetes/sirup zat besi (jika diresepkan)'],
            'Zinc': ['Daging, kerang', 'Kacang-kacangan, biji-bijian'],
            'Vitamin A': ['Sayuran dan buah-buahan berwarna kuning dan oranye', 'Hati ayam'],
            'Serat': ['Sayuran dan buah-buahan', 'Biji-bijian utuh'],
            'Kalsium': ['ASI, susu, yogurt, keju', 'Ikan dengan tulang lunak (sarden, salmon)'],
            'Vitamin D': ['Paparan sinar matahari pagi', 'Suplemen vitamin D (jika diresepkan)']
        },
        '12-24 bulan': {
            'Energi dan Protein': ['ASI', 'Nasi, kentang, ubi, singkong', 'Daging, ikan, telur, tahu, tempe', 'Susu pertumbuhan'],
            'Zat Besi': ['Daging merah, hati ayam', 'Telur', 'Sayuran hijau gelap', 'Kacang-kacangan', 'Tetes/sirup zat besi (jika diresepkan)'],
            'Zinc': ['Daging merah', 'Kerang', 'Kacang-kacangan', 'Biji-bijian utuh'],
            'Vitamin A': ['Sayuran dan buah-buahan berwarna kuning dan oranye', 'Hati ayam', 'Telur', 'Susu'],
            'Serat': ['Sayuran dan buah-buahan', 'Biji-bijian utuh'],
            'Kalsium': ['Susu pertumbuhan', 'Yogurt', 'Keju', 'Ikan dengan tulang lunak'],
            'Vitamin D': ['Paparan sinar matahari pagi', 'Susu pertumbuhan', 'Suplemen vitamin D (jika diresepkan)']
        },
        '24-36 bulan': {
            'Energi dan Protein': ['Nasi, kentang, ubi, singkong', 'Daging, ikan, telur, tahu, tempe', 'Susu pertumbuhan'],
            'Zat Besi': ['Daging merah, hati ayam', 'Telur', 'Sayuran hijau gelap', 'Kacang-kacangan'],
            'Zinc': ['Daging merah', 'Kerang', 'Kacang-kacangan', 'Biji-bijian utuh'],
            'Vitamin A': ['Sayuran dan buah-buahan berwarna kuning dan oranye', 'Hati ayam', 'Telur', 'Susu'],
            'Serat': ['Sayuran dan buah-buahan', 'Biji-bijian utuh'],
            'Kalsium': ['Susu pertumbuhan', 'Yogurt', 'Keju', 'Ikan dengan tulang lunak'],
            'Vitamin D': ['Paparan sinar matahari pagi', 'Susu pertumbuhan']
        },
        '36-48 bulan': {
            'Energi dan Protein': ['Nasi, kentang, ubi, singkong', 'Daging, ikan, telur, tahu, tempe', 'Susu'],
            'Zat Besi': ['Daging merah', 'Telur', 'Sayuran hijau gelap', 'Kacang-kacangan'],
            'Zinc': ['Daging merah', 'Kerang', 'Kacang-kacangan', 'Biji-bijian utuh'],
            'Vitamin A': ['Sayuran dan buah-buahan berwarna kuning dan oranye', 'Hati ayam', 'Telur', 'Susu'],
            'Serat': ['Sayuran dan buah-buahan', 'Biji-bijian utuh'],
            'Kalsium': ['Susu', 'Yogurt', 'Keju'],
            'Vitamin D': ['Paparan sinar matahari pagi', 'Susu']
        },
        '48-60 bulan': {
            'Energi dan Protein': ['Nasi, kentang, ubi, singkong', 'Daging, ikan, telur, tahu, tempe', 'Susu'],
            'Zat Besi': ['Daging merah', 'Telur', 'Sayuran hijau gelap', 'Kacang-kacangan'],
            'Zinc': ['Daging merah', 'Kerang', 'Kacang-kacangan', 'Biji-bijian utuh'],
            'Vitamin A': ['Sayuran dan buah-buahan berwarna kuning dan oranye', 'Telur', 'Susu'],
            'Serat': ['Sayuran dan buah-buahan', 'Biji-bijian utuh'],
            'Kalsium': ['Susu', 'Yogurt', 'Keju'],
            'Vitamin D': ['Paparan sinar matahari pagi', 'Susu']
        }
    },
    'Tumbuh Sebagaimana Mestinya': {
        '0-6 bulan': {
            'Energi dan Protein': ['ASI eksklusif'],
            'Zat Besi': ['ASI'],
            'Zinc': ['ASI'],
            'Vitamin A': ['ASI']
        },
        '6-12 bulan': {
            'Energi dan Protein': ['ASI', 'MPASI bergizi seimbang'],
            'Zat Besi': ['Daging merah, hati ayam, ikan', 'Sayuran hijau gelap', 'Kacang-kacangan', 'Tetes/sirup zat besi (jika diresepkan)'],
            'Zinc': ['Daging, kerang', 'Kacang-kacangan, biji-bijian'],
            'Vitamin A': ['Sayuran dan buah-buahan berwarna kuning dan oranye', 'Hati ayam'],
            'Serat': ['Sayuran dan buah-buahan', 'Biji-bijian utuh'],
            'Kalsium': ['ASI, susu, yogurt, keju'],
            'Vitamin D': ['Paparan sinar matahari pagi']
        },
        '12-24 bulan': {
            'Energi dan Protein': ['ASI', 'Nasi, kentang, ubi, singkong', 'Daging, ikan, telur, tahu, tempe', 'Susu pertumbuhan'],
            'Zat Besi': ['Daging merah, hati ayam', 'Telur', 'Sayuran hijau gelap', 'Kacang-kacangan'],
            'Zinc': ['Daging merah', 'Kerang', 'Kacang-kacangan', 'Biji-bijian utuh'],
            'Vitamin A': ['Sayuran dan buah-buahan berwarna kuning dan oranye', 'Hati ayam', 'Telur', 'Susu'],
            'Serat': ['Sayuran dan buah-buahan', 'Biji-bijian utuh'],
            'Kalsium': ['Susu pertumbuhan', 'Yogurt', 'Keju'],
            'Vitamin D': ['Paparan sinar matahari pagi', 'Susu pertumbuhan']
        },
        '24-36 bulan': {
            'Energi dan Protein': ['Nasi, kentang, ubi, singkong', 'Daging, ikan, telur, tahu, tempe', 'Susu pertumbuhan'],
            'Zat Besi': ['Daging merah, hati ayam', 'Telur', 'Sayuran hijau gelap', 'Kacang-kacangan'],
            'Zinc': ['Daging merah', 'Kerang', 'Kacang-kacangan', 'Biji-bijian utuh'],
            'Vitamin A': ['Sayuran dan buah-buahan berwarna kuning dan oranye', 'Hati ayam', 'Telur', 'Susu'],
            'Serat': ['Sayuran dan buah-buahan', 'Biji-bijian utuh'],
            'Kalsium': ['Susu pertumbuhan', 'Yogurt', 'Keju'],
            'Vitamin D': ['Paparan sinar matahari pagi', 'Susu pertumbuhan']
        },
        '36-48 bulan': {
            'Energi dan Protein': ['Nasi, kentang, ubi, singkong', 'Daging, ikan, telur, tahu, tempe', 'Susu'],
            'Zat Besi': ['Daging merah', 'Telur', 'Sayuran hijau gelap', 'Kacang-kacangan'],
            'Zinc': ['Daging merah', 'Kerang', 'Kacang-kacangan', 'Biji-bijian utuh'],
            'Vitamin A': ['Sayuran dan buah-buahan berwarna kuning dan oranye', 'Hati ayam', 'Telur', 'Susu'],
            'Serat': ['Sayuran dan buah-buahan', 'Biji-bijian utuh'],
            'Kalsium': ['Susu', 'Yogurt', 'Keju'],
            'Vitamin D': ['Paparan sinar matahari pagi', 'Susu']
        },
        '48-60 bulan': {
            'Energi dan Protein': ['Nasi, kentang, ubi, singkong', 'Daging, ikan, telur, tahu, tempe', 'Susu'],
            'Zat Besi': ['Daging merah', 'Telur', 'Sayuran hijau gelap', 'Kacang-kacangan'],
            'Zinc': ['Daging merah', 'Kerang', 'Kacang-kacangan', 'Biji-bijian utuh'],
            'Vitamin A': ['Sayuran dan buah-buahan berwarna kuning dan oranye', 'Telur', 'Susu'],
            'Serat': ['Sayuran dan buah-buahan', 'Biji-bijian utuh'],
            'Kalsium': ['Susu', 'Yogurt', 'Keju'],
            'Vitamin D': ['Paparan sinar matahari pagi', 'Susu']
        }
    },
    'Tumbuh Optimal': {
        '0-6 bulan': {
            'Energi dan Protein': ['ASI eksklusif'],
            'Zat Besi': ['ASI'],
            'Zinc': ['ASI'],
            'Vitamin A': ['ASI']
        },
        '6-12 bulan': {
            'Energi dan Protein': ['ASI', 'MPASI bergizi seimbang'],
            'Zat Besi': ['Daging merah, hati ayam, ikan', 'Sayuran hijau gelap', 'Kacang-kacangan', 'Tetes/sirup zat besi (jika diresepkan)'],
            'Zinc': ['Daging, kerang', 'Kacang-kacangan, biji-bijian'],
            'Vitamin A': ['Sayuran dan buah-buahan berwarna kuning dan oranye', 'Hati ayam'],
            'Serat': ['Sayuran dan buah-buahan', 'Biji-bijian utuh'],
            'Kalsium': ['ASI, susu, yogurt, keju'],
            'Vitamin D': ['Paparan sinar matahari pagi']
        },
        '12-24 bulan': {
            'Energi dan Protein': ['ASI', 'Nasi, kentang, ubi, singkong', 'Daging, ikan, telur, tahu, tempe', 'Susu pertumbuhan'],
            'Zat Besi': ['Daging merah, hati ayam', 'Telur', 'Sayuran hijau gelap', 'Kacang-kacangan'],
            'Zinc': ['Daging merah', 'Kerang', 'Kacang-kacangan', 'Biji-bijian utuh'],
            'Vitamin A': ['Sayuran dan buah-buahan berwarna kuning dan oranye', 'Hati ayam', 'Telur', 'Susu'],
            'Serat': ['Sayuran dan buah-buahan', 'Biji-bijian utuh'],
            'Kalsium': ['Susu pertumbuhan', 'Yogurt', 'Keju'],
            'Vitamin D': ['Paparan sinar matahari pagi', 'Susu pertumbuhan']
        },
        '24-36 bulan': {
            'Energi dan Protein': ['Nasi, kentang, ubi, singkong', 'Daging, ikan, telur, tahu, tempe', 'Susu pertumbuhan'],
            'Zat Besi': ['Daging merah, hati ayam', 'Telur', 'Sayuran hijau gelap', 'Kacang-kacangan'],
            'Zinc': ['Daging merah', 'Kerang', 'Kacang-kacangan', 'Biji-bijian utuh'],
            'Vitamin A': ['Sayuran dan buah-buahan berwarna kuning dan oranye', 'Hati ayam', 'Telur', 'Susu'],
            'Serat': ['Sayuran dan buah-buahan', 'Biji-bijian utuh'],
            'Kalsium': ['Susu pertumbuhan', 'Yogurt', 'Keju'],
            'Vitamin D': ['Paparan sinar matahari pagi', 'Susu pertumbuhan']
        },
        '36-48 bulan': {
            'Energi dan Protein': ['Nasi, kentang, ubi, singkong', 'Daging, ikan, telur, tahu, tempe', 'Susu'],
            'Zat Besi': ['Daging merah', 'Telur', 'Sayuran hijau gelap', 'Kacang-kacangan'],
            'Zinc': ['Daging merah', 'Kerang', 'Kacang-kacangan', 'Biji-bijian utuh'],
            'Vitamin A': ['Sayuran dan buah-buahan berwarna kuning dan oranye', 'Hati ayam', 'Telur', 'Susu'],
            'Serat': ['Sayuran dan buah-buahan', 'Biji-bijian utuh'],
            'Kalsium': ['Susu', 'Yogurt', 'Keju'],
            'Vitamin D': ['Paparan sinar matahari pagi', 'Susu']
        },
        '48-60 bulan': {
            'Energi dan Protein': ['Nasi, kentang, ubi, singkong', 'Daging, ikan, telur, tahu, tempe', 'Susu'],
            'Zat Besi': ['Daging merah', 'Telur', 'Sayuran hijau gelap', 'Kacang-kacangan'],
            'Zinc': ['Daging merah', 'Kerang', 'Kacang-kacangan', 'Biji-bijian utuh'],
            'Vitamin A': ['Sayuran dan buah-buahan berwarna kuning dan oranye', 'Telur', 'Susu'],
            'Serat': ['Sayuran dan buah-buahan', 'Biji-bijian utuh'],
            'Kalsium': ['Susu', 'Yogurt', 'Keju'],
            'Vitamin D': ['Paparan sinar matahari pagi', 'Susu']
        }
    }
};