import { TDocumentDefinitions } from "pdfmake/interfaces";

export const docDefinition: TDocumentDefinitions = {
    content: [
        { text: 'This is a header', style: 'header', alignment: 'center' },
        'This is an unstyled paragraph.',
        { text: 'This is a subheader', style: 'subheader' },
        { text: 'This is a link', link: 'https://example.com', style: 'link' },
        {
            style: 'tableExample',
            table: {
                body: [
                    ['Column 1', 'Column 2', 'Column 3'],
                    ['One value goes here', 'Another one here', 'OK?']
                ]
            }
        },
        { text: 'Bulleted list example', style: 'subheader' },
        {
            ul: [
                'Item 1',
                'Item 2',
                'Item 3'
            ]
        }
    ],
    styles: {
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
        tableExample: {
            margin: [0, 5, 0, 15]
        }
    }
};