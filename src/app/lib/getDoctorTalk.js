const doctorTalkData = {
    allData: async ({start = 0, limit = 12, langLoc}) => {
        const url = process.env.NEXT_PUBLIC_CMS_API_URL + `/doctor-talks?populate=*&pagination[start]=${start}&pagination[limit]=${limit}&filters[locations][id][$eq]=${langLoc.loc.id}&sort=date:desc,manageAppearance.orderInMasterList:asc,title:asc`;
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

    getByDoctor: async ({id, langLoc}) => {
        const url = process.env.NEXT_PUBLIC_CMS_API_URL + `/doctor-talks?populate=*&filters[doctor][id][$eq]=${id}&pagination[limit]=3&filters[locations][id][$eq]=${langLoc.loc.id}&sort=manageAppearance.orderInMasterList:asc,title:asc`;
        const req = await fetch(url);
        const res = await req.json();

        return res.data;
    },

    getBySpeciality: async ({ id, langLoc }) => {
        const url = process.env.NEXT_PUBLIC_CMS_API_URL + `/doctor-talks?populate=*&filters[specialities][id][$eq]=${id}&pagination[start]=0&pagination[limit]=3&filters[locations][id][$eq]=${langLoc.loc.id}&sort=manageAppearance.orderInMasterList:asc,title:asc`;
        const req = await fetch(url);
        const res = await req.json();

        return res.data;
    },

    getFeaturedAll: async ({ langLoc }) => {
        const url = process.env.NEXT_PUBLIC_CMS_API_URL + `/doctor-talks?populate=*&pagination[start]=0&pagination[limit]=3&filters[locations][id][$eq]=${langLoc.loc.id}&filters[manageAppearance][showInFeaturedList][$eq]=true&sort=manageAppearance.orderInFeaturedList:asc,title:asc`;

        const req = await fetch(url);
        const res = await req.json();

        return res.data;
    },

    getRecent: async ({ langLoc }) => {
        const url = process.env.NEXT_PUBLIC_CMS_API_URL + `/doctor-talks?populate=*&pagination[start]=0&pagination[limit]=3&filters[locations][id][$eq]=${langLoc.loc.id}&sort=date:desc,manageAppearance.orderInMasterList:asc,title:asc`;


        const req = await fetch(url);
        const res = await req.json();

        return res.data;
    },


     getByHospital: async ({ langLoc, hospitalId }) => {
        const url = process.env.NEXT_PUBLIC_CMS_API_URL + `/doctor-talks?populate=*&filters[hospitals][$eq]=${hospitalId}&pagination[start]=0&pagination[limit]=3&filters[locations][id][$eq]=${langLoc.loc.id}&sort=date:desc,manageAppearance.orderInMasterList:asc,title:asc`;

        const req = await fetch(url);
        const res = await req.json();

        return res.data;
    },


}

export default doctorTalkData;