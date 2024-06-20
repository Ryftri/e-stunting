import { rekomendasiPerbaikanGizi } from "@/data/rekomendasiPerbaikanizi";
import getTotalMonthsSince from "@/utils/getTotalMonthsSince";
import { Card, Tabs, List, Table, Button } from "flowbite-react";
import { Dispatch, SetStateAction } from "react";
import { HiUserCircle, HiAdjustments, HiClipboardList } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";

export default function HasilKlasifikasiComponent ({
    hasilKlasifikasi,
    tinggiBadan,
    jenisKelamin,
    tanggalLahir,
    setHasilKlasifikasi,
    setIsKlasifikasi
} : {
    hasilKlasifikasi: string,
    tinggiBadan: number,
    jenisKelamin: string,
    tanggalLahir: Date,
    setHasilKlasifikasi: Dispatch<SetStateAction<string>>,
    setIsKlasifikasi: Dispatch<SetStateAction<boolean>>
}) {
    return (
        <Card className="flex flex-col justify-center">
                            <h1 className="text-center">HASIL KLASIFIKASI DAN REKOMENDASI PERBAIKAN GIZI</h1>
                        
                            <h5 className="text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
                                {hasilKlasifikasi}
                            </h5>
                            <Tabs>
                                <Tabs.Item active title="Data Balita" icon={HiUserCircle}>
                                    <List>
                                        <List.Item>Tinggi Badan  : {tinggiBadan} cm</List.Item>
                                        <List.Item>Jenis Kelamin : {jenisKelamin}</List.Item>
                                        <List.Item>Umur (Bulan)  : {getTotalMonthsSince(tanggalLahir.toLocaleDateString('id'))} Bulan</List.Item>
                                        <List.Item>Tanggal Lahir  : {tanggalLahir.toLocaleDateString('id', { day: 'numeric', month: 'long', year: 'numeric' })}</List.Item>
                                    </List>
                                </Tabs.Item>
                                <Tabs.Item title="Rekomendasi Pemberian Gizi" icon={MdDashboard}>
                                    <Table hoverable className="dark:text-white text-black">
                                        <Table.Head className="dark:text-white text-black">
                                            <Table.HeadCell>Nama Gizi</Table.HeadCell>
                                            <Table.HeadCell>Sumber</Table.HeadCell>
                                        </Table.Head>
                                        <Table.Body className="divide-y">
                                            {Object.entries(rekomendasiPerbaikanGizi["severly stunted"]["6-12 bulan"]).map(([gizi, sumber]) => (
                                                <Table.Row className="divide-y" key={gizi}>
                                                    <Table.Cell>{gizi}</Table.Cell>
                                                    <Table.Cell>{sumber.map((item, index) => {
                                                        const lenght = sumber.length;

                                                        if(index === lenght - 1) return `dan ${item}.`

                                                        return `${item}, `
                                                    })}</Table.Cell>
                                                </Table.Row>
                                            ))}
                                        </Table.Body>
                                    </Table>
                                </Tabs.Item>
                                <Tabs.Item title="Settings" icon={HiAdjustments}>

                                </Tabs.Item>
                                <Tabs.Item title="Contacts" icon={HiClipboardList}>

                                </Tabs.Item>
                            </Tabs>
                            <Button onClick={() => {
                                setHasilKlasifikasi("")
                                setIsKlasifikasi(false)
                            }} className="py-2 px-4 mt-4 min-[954px]:mt-0">Klasifikasi Lagi</Button>
                        </Card>
    )
}