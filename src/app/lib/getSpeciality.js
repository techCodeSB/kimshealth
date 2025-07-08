const getSpecialityData = {
    // FOR CAROUSEL COMPONENT
    getAll: async (limit) => {
        const url = process.env.NEXT_PUBLIC_CMS_API_URL + `/specialty-details/?populate[0]=overviewSection&populate[1]=manageAppearance&populate[2]=speciality&populate[3]=speciality.featuredImage${limit ? '&pagination[limit]=' + limit : ''}`;
        const req = await fetch(url);
        const res = await req.json();

        return res.data;
    },


    // FOR LISTING PAGE;
    getSpeciality: async (field) => {
        const url = process.env.NEXT_PUBLIC_CMS_API_URL + `/specialty-details/?populate[0]=overviewSection&populate[1]=manageAppearance&populate[2]=speciality&filters[chooseSpecialityCategory][$eq]=${field}`;
        const req = await fetch(url);
        const res = await req.json();

        return res.data;

    },


    // FOR DETAILS PAGE;
    getSingleSpeciality: async (slug) => {
        // get speciality id;
        const getIdReq = await fetch(process.env.NEXT_PUBLIC_CMS_API_URL + `/specialities?filters[slug][$eq]=${slug}`);
        const getIdRes = await getIdReq.json();
        const id = getIdRes.data[0].id;

        // Get speciality data using id;
        const req = await fetch(process.env.NEXT_PUBLIC_CMS_API_URL + `/specialty-details?populate=*&filters[speciality][$eq]=${id}`);
        const res = await req.json();

        return res.data[0];
    },


    getHeaderSpeciality: async () => {
        const baseUrl = process.env.NEXT_PUBLIC_CMS_API_URL;
        // Get total count
        const initialReq = await fetch(`${baseUrl}/specialty-details`);
        const initialRes = await initialReq.json();
        const totalCount = initialRes.meta.pagination.total;

        const limit = 100;
        const pages = Math.ceil(totalCount / limit);
        let data = [];

        // Actual Data
        for (let i = 0; i < pages; i++) {
            const start = i * limit;
            const url = `${baseUrl}/specialty-details?populate[0]=speciality&populate[1]=manageAppearance&populate[2]=speciality.iconImage&populate[3]=speciality.featuredImage&filters[manageAppearance][showingHeader][$eq]=true&pagination[start]=${start}&pagination[limit]=${limit}`;
            const res = await fetch(url);
            const json = await res.json();
            data = [...data, ...json.data];
        }


        return data;
    },

    getFooterSpeciality: async () => {
        const baseUrl = process.env.NEXT_PUBLIC_CMS_API_URL;
        // Get total count
        const initialReq = await fetch(`${baseUrl}/specialty-details`);
        const initialRes = await initialReq.json();
        const totalCount = initialRes.meta.pagination.total;

        const limit = 100;
        const pages = Math.ceil(totalCount / limit);
        let data = [];

        // Actual Data
        for (let i = 0; i < pages; i++) {
            const start = i * limit;
            const url = `${baseUrl}/specialty-details?populate[0]=speciality&populate[1]=manageAppearance&filters[manageAppearance][showingFooter][$eq]=true&pagination[start]=${start}&pagination[limit]=${limit}`;
            const res = await fetch(url);
            const json = await res.json();
            data = [...data, ...json.data];
        }


        return data;
    }



}

export default getSpecialityData;
