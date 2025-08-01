"use client"
import Cookies from "js-cookie";

const getLocation = async () => {
    const getLoc = JSON.parse(Cookies.get("systemLocation"));

    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_CMS_API_URL}/locations?filters[slug][$eq]=${getLoc.slug}`);
        const data = await res.json();
        return data.data.length ? data.data[0] : false;
    } catch {
        return false;
    }
}

export default getLocation;
