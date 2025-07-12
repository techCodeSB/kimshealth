const doctorData = {
    getDoctorAll: async (start = 0, limit = 12) => {
        let url = process.env.NEXT_PUBLIC_CMS_API_URL + `/doctor-details?populate=*&pagination[start]=${start}&pagination[limit]=${limit}&sort=name:asc`;
        const req = await fetch(url);
        const res = await req.json();

        return res.data;
    },

    getSingleDoctor: async (slug) => {
        let url = process.env.NEXT_PUBLIC_CMS_API_URL + `/doctor-details/?filters[slug][$eq]=${slug}&populate[0]=doctorImage&populate[1]=hospitals&populate[2]=diseases&populate[3]=locations&populate[4]=procedures&populate[5]=specialities&populate[6]=manageAppearance&populate[7]=metaSection&populate[8]=blogSection&populate[9]=doctorTalk`;
        const req = await fetch(url);
        const res = await req.json();

        return res.data[0];

    },

    // USE IN DOCTOR LISTING
    getAllDoctor: async () => {
        const baseUrl = process.env.NEXT_PUBLIC_CMS_API_URL;
        // Get total count
        const initialReq = await fetch(`${baseUrl}/doctor-details`);
        const initialRes = await initialReq.json();
        const totalCount = initialRes.meta.pagination.total;

        const limit = 100;
        const pages = Math.ceil(totalCount / limit);
        let data = [];

        // Actual Data
        for (let i = 0; i < pages; i++) {
            const start = i * limit;
            const url = `${baseUrl}/doctor-details?populate=*&pagination[start]=${start}&pagination[limit]=${limit}`;
            const res = await fetch(url);
            const json = await res.json();
            data = [...data, ...json.data];
        }


        return data;
    },

    getBySpeciality: async (id) => {
        const url = process.env.NEXT_PUBLIC_CMS_API_URL + `/doctor-details?populate=*&filters[specialities][id][$eq]=${id}`;
        const req = await fetch(url);
        const res = await req.json();

        return res.data;
    },


    getFilterDoctor: async ({ langLoc, limit = 12 }) => {
        let baseUrl = process.env.NEXT_PUBLIC_CMS_API_URL;
        const url = baseUrl + `/doctor-details?populate=*&filters[locations][id][$eq]=${langLoc.loc.id}&filters[manageAppearance][showInFeaturedList][$eq]=true&sort=name:asc&pagination[limit]=${limit}`;

        const req = await fetch(url);
        const res = await req.json();

        console.log(res)

        return res.data;

    }


};






export default doctorData;
