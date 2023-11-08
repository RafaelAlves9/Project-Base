
export const formatedShortString = (
    name: string | undefined | null,
    maxLength: number | undefined = 25
): string => {
    if(name === undefined || name === null) return "";
    let formatedName = name;
    if(name.length > maxLength){
        formatedName = `${name.slice(0, maxLength)}...`;
    };

    return formatedName;
};
