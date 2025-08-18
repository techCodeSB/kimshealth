import { cookies } from 'next/headers';

export const getBaseUrl = async(lang = false, loc = false) => {
    const cookieStore = await cookies();
    let langFromStorage;
    let locationFromStorage;
    let baseUrl = process.env.NEXT_PUBLIC_BASE_URL;


    langFromStorage = JSON.parse(cookieStore.get("systemLang")?.value);
    locationFromStorage = JSON.parse(cookieStore.get("systemLocation")?.value);


    if (lang && langFromStorage.default === false) {
        baseUrl = `${baseUrl}/${langFromStorage.slug}`;
    }

    if (loc && locationFromStorage.default === false) {
        baseUrl = `${baseUrl}/${locationFromStorage.slug}`;
    }

    return baseUrl;

}
