import { StyleDictionary } from "pdfmake/interfaces";

export const style: StyleDictionary = {
    header: {
        fontSize: 18,
        bold: true
    },
    subheader: {
        fontSize: 15,
        bold: true
    },
    link: {
        color: 'blue',
        decoration: 'underline'
    },
    boldText: {
        bold: true
    },
    fillTextDanger: {
        fillColor: 'red',
        color: 'white',
        bold: true,
        margin: [0, 0, 5, 0]
    },
    fillTextWarning: {
        fillColor: 'yellow',
        bold: true,
        margin: [0, 0, 5, 0]
    },
    fillTextNormal: {
        fillColor: 'green',
        color: 'white',
        bold: true,
        margin: [0, 0, 5, 0]
    },
    fillTextHight: {
        fillColor: '#ADD8E6',
        bold: true,
        margin: [0, 0, 5, 0]
    },
    tableHeader: {
        fillColor: '#87CEFA',
        bold: true,
    }
}