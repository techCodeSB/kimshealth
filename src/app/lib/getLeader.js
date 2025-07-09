const leaderData = {
    getAll: async () => {
        const url = process.env.NEXT_PUBLIC_CMS_API_URL + `/leaderships?populate=*&filters[type][$contains]=Promoters`;
        const req = await fetch(url);
        const res = await req.json();

        return res.data;
    }

}


export default leaderData;