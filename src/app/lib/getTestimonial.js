const testimonialData = {
    getAll: async (limit) => {
        const url = process.env.NEXT_PUBLIC_CMS_API_URL + `/testimonials?populate=*${limit ? '&pagination[limit]=' + limit : ''}`;
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
}

export default testimonialData;
