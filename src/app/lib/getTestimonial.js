const testimonialData = {
    getAll: async (start = 0, limit = 12) => {
        const url = process.env.NEXT_PUBLIC_CMS_API_URL + `/testimonials?populate=*&pagination[start]=${start}&pagination[limit]=${limit}&filters[testimonialType][$contain]=Video`;

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

    getBySpeciality: async (id) => {
        const url = process.env.NEXT_PUBLIC_CMS_API_URL + `/testimonials?populate=*&filters[specialities][id][$eq]=${id}&filters[testimonialType][$contain]=Video`;
        const req = await fetch(url);
        const res = await req.json();

        return res.data;
    },

    getAllPatientStories: async (start = 0, limit = 12) => {
        const url = process.env.NEXT_PUBLIC_CMS_API_URL + `/testimonials?populate=*&pagination[start]=${start}&pagination[limit]=${limit}&filters[testimonialType][$contain]=Text`;
        const req = await fetch(url);
        const res = await req.json();

        return res.data;
    },
}

export default testimonialData;
