const leaderData = {
    getAll: async (type) => {
        const url = process.env.NEXT_PUBLIC_CMS_API_URL + `/leaderships?populate=*&filters[type][$contains]=${type}`;
        const req = await fetch(url);
        const res = await req.json();

        return res.data;
    },

    getSingleLeader: async (slug) => {
        let url = process.env.NEXT_PUBLIC_CMS_API_URL + `/leaderships/?filters[slug][$eq]=${slug}&populate[0]=manageAppearance&populate[1]=metaSection&populate[2]=image`;
        const req = await fetch(url);
        const res = await req.json();

        return res.data[0];

    },
}


export default leaderData;