"use client"

import { SetStateAction, useState } from 'react';
import { Spinner } from "flowbite-react"
import * as tfjs from '@tensorflow/tfjs';
import getTotalMonthsSince from '@/utils/getTotalMonthsSince';
import ModalKlasifikasiComponent from '@/components/ModalKlasifikasiComponent';
import useKlasifikasiModel from '@/utils/custom-hooks/useKlasifikasiModel';
import HasilKlasifikasiComponent from '@/components/HasilKlasifikasiComponent';
import FormInputKlasifikasiComponent from '@/components/FormInputKlasifikasiComponent';

export default function KlasifikasiPage () {
    const [tanggalLahir, setTanggalLahir] = useState(new Date());
    const [jenisKelamin, setJenisKelamin] = useState<string>("laki-laki");
    const [tinggiBadan, setTinggiBadan] = useState<number>(0.0)
    const [hasilKlasifikasi, setHasilKlasifikasi] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [openModal, setOpenModal] = useState(false);
    const [isError, setIsError] = useState<boolean>(false);
    const [isKlasifikasi, setIsKlasifikasi] = useState<boolean>(false);
    const [error, setError] = useState<string>("");

    const { model, isLoadingModel } = useKlasifikasiModel();

    const getDataBalita = {
        umurBalita: getTotalMonthsSince(tanggalLahir.toLocaleDateString('id')),
        jenisKelamin,
        tinggiBadan,
        tanggalLahir
    };

    const handleDatePickerChange = (date: SetStateAction<Date>) => {
        setTanggalLahir(date);
    };

    const klasifikasiModel = async () => {
        try {
            setIsKlasifikasi(true)
            setIsLoading(true);
            const dataBalita = getDataBalita;
            const jenisKelaminToNumber = dataBalita.jenisKelamin === 'laki-laki' ? 1 : 0
        
            const input_data = tfjs.tensor2d([[dataBalita.umurBalita, jenisKelaminToNumber, dataBalita.tinggiBadan]]);
        
            const mean: number[] = [30.241221547486266, 0.4949911182715743, 88.72335670691771];
            const scale: number[] = [17.585110677253205, 0.49997491047434633, 17.282394105566333];
        
            const input_data_scaled = input_data.sub(tfjs.tensor1d(mean)).div(tfjs.tensor1d(scale));
        
            const class_mapping: { [key: number]: string } = {0: 'severely stunted', 1: 'stunted', 2: 'normal', 3: 'tinggi'};
        
            const class_predict = (model?.predict(input_data_scaled) as tfjs.Tensor<tfjs.Rank>).argMax(-1).dataSync()[0]
            setHasilKlasifikasi(class_mapping[class_predict])
        } catch (error) {
            setIsError(true)
            console.log(error)
            setError(`${error}`)
            setIsKlasifikasi(false)
        } finally {
            setIsLoading(false)
        }
      };

    return (
        <> 
        <div className="container mx-1 p-1">
            {isLoadingModel ? (
                <div className='flex items-center justify-center w-full h-full'>
                    <Spinner size="xl"/>
                </div>
            ) : (
                <>
                    <FormInputKlasifikasiComponent
                        tanggalLahir={tanggalLahir}
                        handleDatePickerChange={handleDatePickerChange}
                        isKlasifikasi={isKlasifikasi}
                        jenisKelamin={jenisKelamin}
                        setJenisKelamin={setJenisKelamin}
                        setTinggiBadan={setTinggiBadan}
                        tinggiBadan={tinggiBadan}
                        setOpenModal={setOpenModal}
                    />

                    <ModalKlasifikasiComponent 
                        dataBalita={getDataBalita}
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
                        {hasilKlasifikasi && 
                            <HasilKlasifikasiComponent
                                hasilKlasifikasi={hasilKlasifikasi}
                                tinggiBadan={tinggiBadan}
                                jenisKelamin={jenisKelamin}
                                tanggalLahir={tanggalLahir}
                                setHasilKlasifikasi={setHasilKlasifikasi}
                                setIsKlasifikasi={setIsKlasifikasi}
                            />
                        }
                    </div>
                </>
            )}
        </div>
        </>
    )
}