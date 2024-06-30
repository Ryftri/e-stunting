import UAParser from "ua-parser-js";

export const cekDevice = () => {
    const parser = new UAParser();
    const result = parser.getResult();

    return result.os.name;
}