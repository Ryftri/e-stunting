export const textColoring = ({
    darkColor,
    lightColor,
    useHover = true,
    useActive = true,
    useFocus = true,
}: {
    darkColor: string,
    lightColor: string,
    useHover?: boolean,
    useActive?: boolean,
    useFocus?: boolean,
}): string => {
    var fontColor = `${lightColor}-onPrimary dark:${darkColor}-onPrimary`

    if (useHover) {
        fontColor = `${fontColor} hover:${lightColor}-secondary hover:dark:${darkColor}-secondary`
    }

    if (useActive) {
        fontColor = `${fontColor} active:${lightColor}-secondary active:dark:${darkColor}-secondary`
    }

    if (useFocus) {
        fontColor = `${fontColor} focus:${lightColor}-secondary focus:dark:${darkColor}-secondary`;
    }

    return fontColor;
}