const testimonialData = {
    getAll: async ({start, limit, langLoc}) => {
        const url = process.env.NEXT_PUBLIC_CMS_API_URL + `/testimonials?populate=*&filters[locations][id][$eq]=${langLoc.loc.id}&pagination[start]=${start}&pagination[limit]=${limit}&filters[testimonialType][$contains]=Video&sort=date:desc,manageAppearance.orderInMasterList:asc,title:asc`;

        console.log(url)
        const req = await fetch(url);
        const res = await req.json();

        return res.data;
    },

    getSingleTestimonaial: async (slug) => {
        let url = process.env.NEXT_PUBLIC_CMS_API_URL + `/testimonials/?filters[slug][$eq]=${slug}&populate=*`;
        const req = await fetch(url);
        const res = await req.json();

        return res.data[0];

    },

    getBySpeciality: async ({ id, langLoc }) => {
        const url = process.env.NEXT_PUBLIC_CMS_API_URL + `/testimonials?populate=*&filters[testimonialType][$contains]=Video&filters[specialities][id][$eq]=${id}&pagination[start]=0&pagination[limit]=4&filters[locations][id][$eq]=${langLoc.loc.id}&sort=manageAppearance.orderInMasterList:asc,title:asc`;
        const req = await fetch(url);
        const res = await req.json();

        return res.data;
    },

    getFeaturedAll: async ({langLoc}) => {
        const url = process.env.NEXT_PUBLIC_CMS_API_URL + `/testimonials?populate=*&pagination[start]=0&pagination[limit]=4&filters[testimonialType][$contains]=Video&filters[locations][id][$eq]=${langLoc.loc.id}&filters[manageAppearance][showInFeaturedList][$eq]=true&sort=manageAppearance.orderInFeaturedList:asc,title:asc`;

        const req = await fetch(url);
        const res = await req.json();

        return res.data;
    },

     getTestimonialByHospital: async ({langLoc, hospitalId}) => {
        const url = process.env.NEXT_PUBLIC_CMS_API_URL + `/testimonials?populate=*&filters[hospitals][$eq]=${hospitalId}&pagination[start]=0&pagination[limit]=4&filters[testimonialType][$contains]=Video&filters[locations][id][$eq]=${langLoc.loc.id}&sort=manageAppearance.orderInMasterList:asc,title:asc`;

        const req = await fetch(url);
        const res = await req.json();

        return res.data;
    },

     getRecent: async ({langLoc}) => {
        const url = process.env.NEXT_PUBLIC_CMS_API_URL + `/testimonials?populate=*&pagination[start]=0&pagination[limit]=4&filters[testimonialType][$contains]=Video&filters[locations][id][$eq]=${langLoc.loc.id}&sort=date:desc,manageAppearance.orderInMasterList:asc,title:asc`;

        const req = await fetch(url);
        const res = await req.json();

        return res.data;
    },


     getAllPatientStories: async ({start, limit, langLoc}) => {
        const url = process.env.NEXT_PUBLIC_CMS_API_URL + `/testimonials?populate=*&filters[locations][id][$eq]=${langLoc.loc.id}&pagination[start]=${start}&pagination[limit]=${limit}&filters[testimonialType][$contains]=Text&sort=date:desc,manageAppearance.orderInMasterList:asc,title:asc`;

        console.log(url)
        const req = await fetch(url);
        const res = await req.json();

        return res.data;
    },


}

export default testimonialData;
