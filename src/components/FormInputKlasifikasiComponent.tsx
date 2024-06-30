import { DataBalita } from "@/types/balita";
import { Card, Label, Datepicker, Select, TextInput, Button } from "flowbite-react";
import { ChangeEvent, Dispatch, SetStateAction } from "react";

export default function FormInputKlasifikasiComponent ({
    dataBalita,
    handleChange,
    setOpenModal
} : {
    dataBalita: DataBalita,
    handleChange: (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void,
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
                            value={dataBalita.tanggalLahir.toLocaleDateString('id', { day: 'numeric', month: 'long', year: 'numeric' })}
                            onSelectedDateChanged={date => {
                                const mockEvent = {
                                    target: {
                                        name: 'tanggalLahir',
                                        value: date,
                                    } as unknown as HTMLInputElement,
                                  } as ChangeEvent<HTMLInputElement>;
                                  handleChange(mockEvent);
                            }}
                            language="id"
                            name="tanggalLahir"
                            title="Tanggal Lahir Balita"
                            labelTodayButton='Pilih'
                            className="w-full"
                            disabled={!(!dataBalita.hasilKlasifikasi)}
                        />
                    </div>
                    <div className="w-full min-[954px]:w-1/2">
                        <div className="mb-2 block">
                            <Label htmlFor="jenis-kelamin" value="Pilih Jenis Kelamin" />
                        </div>
                        <Select
                            id="jenis-kelamin"
                            value={dataBalita.jenisKelamin}
                            onChange={handleChange}
                            name="jenisKelamin"
                            required
                            disabled={!(!dataBalita.hasilKlasifikasi)}
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
                            onChange={handleChange}
                            id="tinggi-badan"
                            type="number"
                            name="tinggiBadan"
                            value={dataBalita.tinggiBadan}
                            required
                            disabled={!(!dataBalita.hasilKlasifikasi)}
                            />
                    </div>
                    <Button
                        onClick={() => setOpenModal(true)}
                        className="py-2 px-4 mt-4 min-[954px]:mt-0"
                        disabled={!(!dataBalita.hasilKlasifikasi)}
                        >
                            Cek Klasifikasi
                    </Button>
                </form>
            </Card>
    )
}