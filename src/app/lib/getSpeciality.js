const getSpecialityData = {
    // FOR CAROUSEL COMPONENT
    getAll: async (limit,) => {
        const url = process.env.NEXT_PUBLIC_CMS_API_URL + `/specialty-details/?populate[0]=overviewSection&populate[1]=manageAppearance&populate[2]=speciality&populate[3]=speciality.featuredImage${limit ? '&pagination[limit]=' + limit : ''}`;
        const req = await fetch(url);
        const res = await req.json();

        return res.data;
    },

    getAllFeatured: async ({ langLoc }) => {
        let baseUrl = process.env.NEXT_PUBLIC_CMS_API_URL;
        const url = `${baseUrl}/specialty-details?filters[locations][id][$eq]=${langLoc.loc.id}&populate[0]=overviewSection&populate[1]=manageAppearance&populate[2]=speciality&populate[3]=speciality.featuredImage&filters[manageAppearance][showInFeaturedList][$eq]=true&sort=manageAppearance.orderInFeaturedList:asc,title:asc`;

        const req = await fetch(url);
        const res = await req.json();

        return res.data;
    },

    getAllByHospital: async ({ langLoc, hospitalId }) => {
        let baseUrl = process.env.NEXT_PUBLIC_CMS_API_URL;
        const url = `${baseUrl}/specialty-details?filters[locations][id][$eq]=${langLoc.loc.id}&populate[0]=overviewSection&populate[1]=manageAppearance&populate[2]=speciality&populate[3]=speciality.featuredImage&filters[speciality][hospitals][$eq]=${hospitalId}&sort=manageAppearance.orderInMasterList:asc,title:asc`;


        const req = await fetch(url);
        const res = await req.json();

        return res.data;
    },


    // FOR LISTING PAGE;
    getSpeciality: async ({ field, langLoc, URLParams }) => {
        const baseUrl = process.env.NEXT_PUBLIC_CMS_API_URL;


        const hospitalFilter = URLParams?.hospital
            ? `&filters[speciality][hospitals][slug][$eq]=${URLParams.hospital}`
            : ``;

        // Get total count
        const initialReq = await fetch(`${baseUrl}/specialty-details?filters[locations][id][$eq]=${langLoc.loc.id}${hospitalFilter}`);
        const initialRes = await initialReq.json();
        const totalCount = initialRes.meta.pagination.total;

        const limit = 100;
        const pages = Math.ceil(totalCount / limit);
        let data = [];


        for (let i = 0; i < pages; i++) {
            const start = i * limit;
            const url = baseUrl + `/specialty-details/?populate[0]=overviewSection&populate[1]=manageAppearance&populate[2]=speciality&filters[chooseSpecialityCategory][$eq]=${field}${hospitalFilter}&populate[3]=speciality.iconImage&pagination[start]=${start}&pagination[limit]=${limit}&filters[locations][id][$eq]=${langLoc.loc.id}&sort=manageAppearance.orderInMasterList:asc,title:asc`;
            const res = await fetch(url);
            const json = await res.json();
            data = [...data, ...json.data];
        }


        return data;

    },


    // FOR DETAILS PAGE;
    getSingleSpeciality: async ({slug, langLoc}) => {
        // get speciality id;
        const getIdReq = await fetch(process.env.NEXT_PUBLIC_CMS_API_URL + `/specialities?filters[slug][$eq]=${slug}`);
        const getIdRes = await getIdReq.json();
        const id = getIdRes.data[0].id;

        // Get speciality data using id;
        const req = await fetch(process.env.NEXT_PUBLIC_CMS_API_URL + `/specialty-details?populate[0]=overviewSection&populate[1]=locations&populate[2]=metaSection&populate[3]=manageAppearance&populate[4]=blogSection&populate[5]=expertSection&populate[6]=testimonialSection&populate[7]=doctorTalk&populate[8]=subSpecialitySection&populate[9]=diseasesAndProceduresSection&populate[10]=speciality&populate[11]=pageBanner&populate[12]=pageBanner.bannerImageDesktop&populate[13]=pageBanner.bannerImageMobile&populate[14]=speciality.featuredImage&populate[15]=speciality.specialities&filters[speciality][$eq]=${id}&filters[locations][id][$eq]=${langLoc.loc.id}`);
        const res = await req.json();

        return res.data[0];
    },


    getHeaderSpeciality: async ({ LangLoc }) => {
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
            const url = `${baseUrl}/specialty-details?populate[0]=speciality&populate[1]=manageAppearance&populate[2]=speciality.iconImage&populate[3]=speciality.featuredImage&filters[manageAppearance][showingHeader][$eq]=true&pagination[start]=${start}&pagination[limit]=${limit}&filters[locations][id][$eq]=${LangLoc.loc.id}&sort=manageAppearance.orderInMasterList:asc,title:asc`;
            const res = await fetch(url);
            const json = await res.json();
            data = [...data, ...json.data];
        }


        return data;
    },


    getFooterSpeciality: async ({ langLoc }) => {
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
            const url = `${baseUrl}/specialty-details?populate[0]=speciality&filters[locations][id][$eq]=${langLoc.loc.id}&populate[1]=manageAppearance&filters[manageAppearance][showingFooter][$eq]=true&pagination[start]=${start}&pagination[limit]=${limit}&sort=manageAppearance.orderInMasterList:asc,title:asc`;
            const res = await fetch(url);
            const json = await res.json();
            data = [...data, ...json.data];
        }


        return data;
    },


    getSpecialityForSearch: async () => {
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
            const url = `${baseUrl}/specialty-details?populate[0]=speciality&pagination[start]=${start}&pagination[limit]=${limit}`;
            const res = await fetch(url);
            const json = await res.json();
            data = [...data, ...json.data];
        }


        return data;
    },


    getAllSpeciality: async ({ langLoc }) => {
        const baseUrl = process.env.NEXT_PUBLIC_CMS_API_URL;
        // Get total count
        const initialReq = await fetch(`${baseUrl}/specialty-details?filters[locations][id][$eq]=${langLoc.loc.id}`);
        const initialRes = await initialReq.json();
        const totalCount = initialRes.meta.pagination.total;

        const limit = 100;
        const pages = Math.ceil(totalCount / limit);
        let data = [];

        // Actual Data
        for (let i = 0; i < pages; i++) {
            const start = i * limit;
            const url = `${baseUrl}/specialty-details?populate=*&pagination[start]=${start}&pagination[limit]=${limit}&filters[locations][id][$eq]=${langLoc.loc.id}&sort=manageAppearance.orderInMasterList:asc,title:asc`;
            const res = await fetch(url);
            const json = await res.json();
            data = [...data, ...json.data];
        }


        return data;
    },


    getAllSubSpeciality: async (id) => {
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
            const url = `${baseUrl}/specialty-details?filters[speciality][specialities][id][$eq]=${id}&populate=*&pagination[start]=${start}&pagination[limit]=${limit}`;
            const res = await fetch(url);
            const json = await res.json();
            data = [...data, ...json.data];
        }


        return data;
    },


    getAllBaseSpeciality: async () => {
        const baseUrl = process.env.NEXT_PUBLIC_CMS_API_URL;
        // Get total count
        const initialReq = await fetch(`${baseUrl}/specialities`);
        const initialRes = await initialReq.json();
        const totalCount = initialRes.meta.pagination.total;

        const limit = 100;
        const pages = Math.ceil(totalCount / limit);
        let data = [];

        // Actual Data
        for (let i = 0; i < pages; i++) {
            const start = i * limit;
            const url = `${baseUrl}/specialities?populate=*&pagination[start]=${start}&pagination[limit]=${limit}&sort=title:asc`;
            const res = await fetch(url);
            const json = await res.json();
            data = [...data, ...json.data];
        }


        return data;
    },






}

export default getSpecialityData;
