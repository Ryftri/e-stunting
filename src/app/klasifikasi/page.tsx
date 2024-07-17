"use client"

import { ChangeEvent, useState } from 'react';
import { Alert, Spinner } from "flowbite-react"
import * as tfjs from '@tensorflow/tfjs';
import getTotalMonthsSince from '@/utils/getTotalMonthsSince';
import ModalKlasifikasiComponent from '@/components/ModalKlasifikasiComponent';
import useKlasifikasiModel from '@/utils/custom-hooks/useKlasifikasiModel';
import HasilKlasifikasiComponent from '@/components/HasilKlasifikasiComponent';
import FormInputKlasifikasiComponent from '@/components/FormInputKlasifikasiComponent';
import { DataBalita } from '@/types/balita';
import { HiInformationCircle } from 'react-icons/hi';

export default function KlasifikasiPage () {
    const [dataBalita, setDataBalita] = useState<DataBalita>({
        namaOrtu: "",
        namaBalita: "",
        tanggalLahir: new Date(),
        jenisKelamin: "laki-laki",
        tinggiBadan: 0.0,
        totalBulan: 0.0,
        hasilKlasifikasi: "",
    });
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [openModal, setOpenModal] = useState(false);
    const [isError, setIsError] = useState<boolean>(false);
    const [error, setError] = useState<string>("");

    const { model, isLoadingModel } = useKlasifikasiModel();

    const handleChange =<T extends HTMLInputElement | HTMLSelectElement> (event: ChangeEvent<T>) => {
        const { name, value } = event.target;

        setDataBalita(() => {
            let newData = { ...dataBalita, [name]: value };

            if(name === "tinggiBadan") {
                newData.tinggiBadan = parseFloat(value ?? 0.0)
            }

            if(name === "tanggalLahir") {
                newData.totalBulan = getTotalMonthsSince(newData.tanggalLahir.toLocaleDateString('id'))
            }

            return newData;
        });
    }

    const klasifikasiModel = async () => {
        try {
            setIsLoading(true);
            console.log(dataBalita)
            if(dataBalita.totalBulan >= 61) throw new Error(`Mohon maaf anak anda berumur lebih dari 60 bulan. Total umur anak anda ${dataBalita.totalBulan} bulan`)
            const jenisKelaminToNumber = dataBalita.jenisKelamin === 'laki-laki' ? 1 : 0
            const input_data = tfjs.tensor2d([[dataBalita.totalBulan, jenisKelaminToNumber, dataBalita.tinggiBadan]]);
            const mean: number[] = [30.251764803587744, 0.4957021842039698, 88.72211969600622];
            const scale: number[] = [17.597697382324316, 0.49998152843818483, 17.30571227642312];
            const input_data_scaled = input_data.sub(tfjs.tensor1d(mean)).div(tfjs.tensor1d(scale));
        
            const class_mapping: { [key: number]: string } = {0: 'Membutuhkan Perhatian Khusus', 1: 'Perlu Peningkatan Pertumbuhan', 2: 'Tumbuh Sebagaimana Mestinya', 3: 'Tumbuh Optimal'};
        
            const class_predict = (model?.predict(input_data_scaled) as tfjs.Tensor<tfjs.Rank>).argMax(-1).dataSync()[0]
            setDataBalita(prevData => ({
                ...prevData,
                hasilKlasifikasi: class_mapping[class_predict]
            }))
        } catch (error) {
            setIsError(true)
            console.log(error)
            setError(`${error}`)
    
        } finally {
            setIsLoading(false)
            setOpenModal(false)
        }
      };

    return (
        <> 
        <div className="container mx-1 p-1">
            {isError ? (
                <Alert className='my-5 mx-1' onDismiss={() => {
                    setIsError(false)
                    setError("")
                }} color="failure" icon={HiInformationCircle}>
                    {error}
                </Alert>
            ) : ""}
            {isLoadingModel ? (
                <div className='flex items-center justify-center w-full h-full'>
                    <Spinner size="xl"/>
                </div>
            ) : (
                <>
                    <FormInputKlasifikasiComponent
                        dataBalita={dataBalita}
                        handleChange={handleChange}
                        setOpenModal={setOpenModal}
                    />

                    <ModalKlasifikasiComponent 
                        dataBalita={dataBalita}
                        runKlasifikasi={klasifikasiModel}
                        openModal={openModal}
                        setOpenModal={setOpenModal}
                        />

                    <div className="mt-8 content-center">
                        {isLoading && 
                            <div className='flex items-center justify-center'>
                                <Spinner size="xl"/>
                            </div>
                        }
                        {dataBalita.hasilKlasifikasi && 
                            <HasilKlasifikasiComponent
                                dataBalita={dataBalita}
                                setDataBalita={setDataBalita}
                            />
                        }
                    </div>
                </>
            )}
        </div>
        </>
    )
}