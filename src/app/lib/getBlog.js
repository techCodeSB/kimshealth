const blogData = {
    allBlog: async (limit) => {
        const url = process.env.NEXT_PUBLIC_CMS_API_URL + `/blog-posts?populate=*${limit ? '&pagination[limit]=' + limit : ''}`;
        const req = await fetch(url);
        const res = await req.json();

        return res.data;
    },

    getSingleBlog: async(slug)=>{
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

}


export default blogData;
