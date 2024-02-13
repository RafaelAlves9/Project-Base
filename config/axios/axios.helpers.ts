export const defaultApi = (): string => {
    console.log(import.meta.env.VITE_BASE_URL);
    if(import.meta.env.MODE === "development") {
    };
    return "";
};

