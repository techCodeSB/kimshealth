"use client"
import Cookies from "js-cookie";

const getStaticPage = async () => {
    const baseUrl = process.env.NEXT_PUBLIC_CMS_API_URL;
    const getLang = JSON.parse(Cookies.get("systemLang"));
    const getLoc = JSON.parse(Cookies.get("systemLocation"));
    const langId = getLang.id;
    const locId = getLoc.id;


    let staticData = {};

    // Step 1: Get total count
    const initialRes = await fetch(`${baseUrl}/static-pages?pagination[limit]=100`);
    const pages = await initialRes.json();

    // Step 2: Get all static text in selected locale
    for (let i = 0; i < pages.data.length; i++) {
        const url = `${baseUrl}/static-page-contents?filters[pageCategory][id][$eq]=${pages.data[i]['id']}&filters[locations][id][$eq]=${locId}`;
        const res = await fetch(url);
        const json = await res.json();

        staticData[pages.data[i]['slug']] = json.data.length > 0 ? true : false;
    }


    console.log(staticData)


    return staticData;
};


export default getStaticPage;
