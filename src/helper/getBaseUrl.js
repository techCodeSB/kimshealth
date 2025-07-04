import Cookies from "js-cookie";

export const getBaseUrl = (lang = false, loc = false) => {
    let langFromStorage;
    let locationFromStorage;
    let baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

    langFromStorage = JSON.parse(Cookies.get("systemLang"));
    locationFromStorage = JSON.parse(Cookies.get("systemLocation"));


    if (lang && langFromStorage.default === false) {
        baseUrl = `${baseUrl}/${langFromStorage.slug}`;
    }

    if (loc && locationFromStorage.default === false) {
        baseUrl = `${baseUrl}/${locationFromStorage.slug}`;
    }

    return baseUrl;

}
