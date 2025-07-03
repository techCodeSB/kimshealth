const blogData = {
    allBlog: async () => {
        const url = process.env.NEXT_PUBLIC_CMS_API_URL + "/blog-posts?populate=*&pagination[limit]=10";
        const req = await fetch(url);
        const res = await req.json();

        return res.data;

    }
}


export default blogData;
