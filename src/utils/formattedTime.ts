
export const getTime = (date: Date | string) => {
    if(typeof date === "string"){
        date = new Date(date);
    };

    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
};

export const getDate = (date: Date | string) => {
    if(typeof date === "string"){
        date = new Date(date);
    };

    const dia = date.getDate().toString().padStart(2, '0');
    const mes = (date.getMonth() + 1).toString().padStart(2, '0'); // Adicionamos 1 pois os meses começam em 0
    const ano = date.getFullYear();
    return `${dia}/${mes}/${ano}`;
};
