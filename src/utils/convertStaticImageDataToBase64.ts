import { StaticImageData } from "next/image";

export const convertStaticImageDataToBase64 = async (imageData: StaticImageData): Promise<string> => {
    const blob = await fetch(imageData.src).then(r => r.blob());
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result as string);
        reader.onerror = reject;
        reader.readAsDataURL(blob);
    });
}