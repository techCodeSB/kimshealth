const blogData = {
    allBlog: async (start = 0, limit = 12, speciality) => {
        const url = process.env.NEXT_PUBLIC_CMS_API_URL + `/blog-posts?populate=*&pagination[start]=${start}&pagination[limit]=${limit} ${speciality ? `filters[specialities][slug][$eq]=${speciality}` : ''}`;
        const req = await fetch(url);
        const res = await req.json();

        return res.data;
    },

    getSingleBlog: async (slug) => {
        let url = process.env.NEXT_PUBLIC_CMS_API_URL + `/blog-posts/?filters[slug][$eq]=${slug}&populate=*`;
        const req = await fetch(url);
        const res = await req.json();

        return res.data[0];

    },

    getByDoctor: async (id) => {
        const url = process.env.NEXT_PUBLIC_CMS_API_URL + `/blog-posts?populate=*&filters[doctor][id][$eq]=${id}`;
        const req = await fetch(url);
        const res = await req.json();

        return res.data;
    },

    getBySpeciality: async (id) => {
        const url = process.env.NEXT_PUBLIC_CMS_API_URL + `/blog-posts?populate=*&filters[specialities][id][$eq]=${id}`;
        const req = await fetch(url);
        const res = await req.json();

        return res.data;
    },

}


export default blogData;
