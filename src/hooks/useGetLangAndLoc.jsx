import Cookies from "js-cookie";

const useGetLangAndLoc = (type) => {
    let cookieStore = Cookies()
    let data;

    if (type === "lang") {
        data = JSON.parse(cookieStore.get("systemLang"));
    }
    else if (type === "loc") {
        data = JSON.parse(cookieStore.get("systemLocation"));
    }

    return data;

}

export default useGetLangAndLoc;
