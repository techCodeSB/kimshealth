const courseData = {
    getAll: async (id=0,start = 0, limit = 25) => {
        const url = process.env.NEXT_PUBLIC_CMS_API_URL + `/courses?populate=*&filters[courseCategory][$eq]=${id}&pagination[start]=${start}&pagination[limit]=${limit}`;
        const req = await fetch(url);
        const res = await req.json();

        return res.data;
    },

    getSingleCourse: async (slug) => {
        let url = process.env.NEXT_PUBLIC_CMS_API_URL + `/courses/?filters[slug][$eq]=${slug}&populate=*`;
        const req = await fetch(url);
        const res = await req.json();

        return res.data[0];

    },

}

export default courseData;