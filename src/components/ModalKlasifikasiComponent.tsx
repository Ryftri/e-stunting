import { DataBalita } from "@/types/balita";
import { Button, List, Modal } from "flowbite-react";
import { Dispatch, SetStateAction } from "react";

export default function ModalKlasifikasiComponent (
    {
        openModal, 
        setOpenModal,
        runKlasifikasi,
        dataBalita
    } : {
        openModal: boolean,
        setOpenModal: Dispatch<SetStateAction<boolean>>,
        runKlasifikasi: () => Promise<void>,
        dataBalita: DataBalita
    }) {

    return (
        <>
            <Modal show={openModal} onClose={() => setOpenModal(false)}>
                <Modal.Header>Cek Kembali</Modal.Header>
                <Modal.Body>
                    <List>
                        <List.Item>Tinggi Badan  : {dataBalita.tinggiBadan} cm</List.Item>
                        <List.Item>Jenis Kelamin : {dataBalita.jenisKelamin}</List.Item>
                        <List.Item>Tanggal Lahir  : {dataBalita.tanggalLahir.toLocaleDateString('id', { day: 'numeric', month: 'long', year: 'numeric' })}</List.Item>
                    </List>
                </Modal.Body>
                <Modal.Footer className="flex flex-col">
                    <div className="w-full">
                        <h1 className="mx-3 text-black dark:text-white text-start">Apakah Data Balita Tersebut Sudah Benar?</h1>
                    </div>
                    
                    <div className="flex flex-row justify-normal w-full space-x-4">
                        <Button color="success" onClick={async () => await runKlasifikasi()}>Benar</Button>
                        <Button color="failure" onClick={() => setOpenModal(false)}>
                            Kembali
                        </Button>
                    </div>
                </Modal.Footer>
            </Modal>
        </>
    )
}