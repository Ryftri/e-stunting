"use client"

import { List } from 'flowbite-react';
import React from 'react';

export default function Home() {
  return (
    <>
      <section className="bg-center bg-no-repeat bg-[url('/icons/icon-512x512.png')] bg-gray-700 bg-blend-multiply w-full">
          <div className="px-4 mx-auto max-w-screen-xl text-center py-56">
              <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">Aplikasi E-Stunting</h1>
              <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">Aplikasi ini dilengkapi dengan model kecerdasan buatan (Artificial Intelligence/AI) yang telah melalui proses pelatihan ekstensif dan mencapai tingkat akurasi 98%. Model AI ini dioptimalkan menggunakan metode <i>hyperparameter tuning</i> untuk mengidentifikasi kombinasi hyperparameter optimal guna mencapai kinerja model yang unggul untuk menentukan klasifikasi stunting.</p>
          </div>
      </section>
      <section className="w-full">
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
              <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
                      <h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">Fitur Aplikasi</h2>
                      <List>
                        <List.Item className='text-lg'>Dapat diakses offline dengan menggunakan teknologi website Progressive Web Application {'(PWA)'} untuk semua platform.</List.Item>
                        <List.Item className='text-lg'>Klasifikasi stunting berdasarkan tinggi badan {'(cm)'}, jenis kelamin, dan umur balita dengan umur 0-5 tahun.</List.Item>
                        <List.Item className='text-lg'>Memberikan rekomendasi perbaikan gizi dan hasil klasifikasi berdasarkan uraian pada poin ke-2 yang bisa diunduh dengan format PDF.</List.Item>
                      </List>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
                      <h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">Klasifikasi Stunting</h2>
                      <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">Pada aplikasi ini terdapat 4 kategori klasifikasi stunting sebagai berikut :</p>
                      <List>
                        <List.Item className='text-lg'>Membutuhkan Perhatian Khusus berada dibawah -3 SD {'(Standar Deviasi)'}</List.Item>
                        <List.Item className='text-lg'>Perlu Peningkatan Pertumbuhan berada diantara -3 SD s/d -2 SD {'(Standar Deviasi)'}</List.Item>
                        <List.Item className='text-lg'>Tumbuh Sebagaimana Mestinya berada diantara -2 SD s/d +3 SD {'(Standar Deviasi)'}</List.Item>
                        <List.Item className='text-lg'>Tumbuh Optimal berada diatas +3 SD {'(Standar Deviasi)'}</List.Item>
                      </List>
                      <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">SD adalah ukuran statistik yang menunjukkan seberapa jauh data menyebar dari nilai rata-rata.</p>
                  </div>
              </div>
          </div>
      </section>
    </>
  );
}
