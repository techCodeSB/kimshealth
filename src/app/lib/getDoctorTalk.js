const doctorTalkData = {
    allData: async (start = 0, limit = 12) => {
        const url = process.env.NEXT_PUBLIC_CMS_API_URL + `/doctor-talks?populate=*&pagination[start]=${start}&pagination[limit]=${limit}`;
        const req = await fetch(url);
        const res = await req.json();

        return res.data;
    },

    getSingleDoctor: async (slug) => {
        let url = process.env.NEXT_PUBLIC_CMS_API_URL + `/doctor-talks/?filters[slug][$eq]=${slug}&populate=*`;
        const req = await fetch(url);
        const res = await req.json();

        return res.data[0];

    },

    getByDoctor: async (id) => {
        const url = process.env.NEXT_PUBLIC_CMS_API_URL + `/doctor-talks?populate=*&filters[doctor][id][$eq]=${id}`;
        const req = await fetch(url);
        const res = await req.json();

        return res.data;
    },

    getBySpciality: async (id) => {
        const url = process.env.NEXT_PUBLIC_CMS_API_URL + `/doctor-talks?populate=*&filters[specialities][id][$eq]=${id}`;
        const req = await fetch(url);
        const res = await req.json();

        return res.data;
    },

}

export default doctorTalkData;