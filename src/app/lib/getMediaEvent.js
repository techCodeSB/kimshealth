const mediaData = {
    getAll: async ({ start = 0, limit = 12, all = false }) => {
        const baseUrl = process.env.NEXT_PUBLIC_CMS_API_URL;

        if (!all) {
            let url = baseUrl + `/media-and-events?populate=*&pagination[start]=${start}&pagination[limit]=${limit}`;
            const req = await fetch(url);
            const res = await req.json();

            return res.data;
        }
        else {
            // Get total count
            const initialReq = await fetch(`${baseUrl}/media-and-events`);
            const initialRes = await initialReq.json();
            const totalCount = initialRes.meta.pagination.total;

            const limit = 100;
            const pages = Math.ceil(totalCount / limit);
            let data = [];

            // Actual Data
            for (let i = 0; i < pages; i++) {
                const start = i * limit;
                const url = `${baseUrl}/media-and-events?populate=*&pagination[start]=${start}&pagination[limit]=${limit}`;
                const res = await fetch(url);
                const json = await res.json();
                data = [...data, ...json.data];
            }

            return data;
        }
    },

    getSingleMedia: async (slug) => {
        let url = process.env.NEXT_PUBLIC_CMS_API_URL + `/media-and-events/?filters[slug][$eq]=${slug}&populate[0]=speaker&populate[1]=speaker.speaker&populate[3]=featuredImage`;
        const req = await fetch(url);
        const res = await req.json();

        return res.data[0];

    },


}


export default mediaData;