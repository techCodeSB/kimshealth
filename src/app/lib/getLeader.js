const leaderData = {
    getAll: async (limit) => {
        const url = process.env.NEXT_PUBLIC_CMS_API_URL + `/leaderships?populate=*${limit ? '&pagination[limit]=' + limit : ''}`;
        const req = await fetch(url);
        const res = await req.json();

        return res.data;
    }

}


export default leaderData;