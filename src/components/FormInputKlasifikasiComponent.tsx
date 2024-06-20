import { Card, Label, Datepicker, Select, TextInput, Button } from "flowbite-react";
import { Dispatch, SetStateAction } from "react";

export default function FormInputKlasifikasiComponent ({
    tanggalLahir,
    handleDatePickerChange,
    isKlasifikasi,
    jenisKelamin,
    setJenisKelamin,
    setTinggiBadan,
    tinggiBadan,
    setOpenModal
} : {
    tanggalLahir: Date,
    handleDatePickerChange: (date: SetStateAction<Date>) => void,
    isKlasifikasi: boolean,
    jenisKelamin: string,
    setJenisKelamin: Dispatch<SetStateAction<string>>,
    setTinggiBadan: Dispatch<SetStateAction<number>>,
    tinggiBadan: number,
    setOpenModal: Dispatch<SetStateAction<boolean>>
}) {
    return (
        <Card className="w-full max-w-[calc(100%-5px)] mx-auto p-4">
                <h1 className="text-2xl font-bold text-center mb-4">Klasifikasi Status Gizi</h1>
                <form className="flex flex-col min-[954px]:flex-row min-[954px]:gap-4">
                    <div className="w-full min-[954px]:w-1/2">
                        <div className="mb-2 block">
                            <Label htmlFor="tanggal-lahir" value="Pilih Tanggal Lahir" />
                        </div>
                        <Datepicker
                            value={tanggalLahir.toLocaleDateString('id', { day: 'numeric', month: 'long', year: 'numeric' })}
                            onSelectedDateChanged={handleDatePickerChange}
                            language="id"
                            title="Tanggal Lahir Balita"
                            labelTodayButton='Pilih'
                            className="w-full"
                            disabled={isKlasifikasi}
                        />
                    </div>
                    <div className="w-full min-[954px]:w-1/2">
                        <div className="mb-2 block">
                            <Label htmlFor="jenis-kelamin" value="Pilih Jenis Kelamin" />
                        </div>
                        <Select
                            id="jenis-kelamin"
                            value={jenisKelamin}
                            onChange={e => setJenisKelamin(e.target.value)}
                            required
                            disabled={isKlasifikasi}
                            >
                            <option value="laki-laki">Laki-laki</option>
                            <option value="perempuan">Perempuan</option>
                        </Select>
                    </div>
                    <div className="w-full min-[954px]:w-1/2">
                        <div className="mb-2 block">
                            <Label htmlFor="tinggi-badan" value="Tinggi Badan Balita (cm)" />
                        </div>
                        <TextInput
                            onChange={e => setTinggiBadan(parseFloat(e.currentTarget.value))}
                            id="tinggi-badan"
                            type="number"
                            value={tinggiBadan}
                            required
                            disabled={isKlasifikasi}
                            />
                    </div>
                    <Button
                        onClick={() => setOpenModal(true)}
                        className="py-2 px-4 mt-4 min-[954px]:mt-0"
                        disabled={isKlasifikasi}
                        >
                            Cek Klasifikasi
                    </Button>
                </form>
            </Card>
    )
}