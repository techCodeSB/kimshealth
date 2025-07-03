const doctorTalkData = {
    allData: async () => {
        const url = process.env.NEXT_PUBLIC_CMS_API_URL + "/doctor-talks?populate=*&pagination[limit]=10";
        const req = await fetch(url);
        const res = await req.json();

        return res.data;
    }

}

export default doctorTalkData;