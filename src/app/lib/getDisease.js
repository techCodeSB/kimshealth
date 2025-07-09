const diseaseData = {
    getAll: async (limit) => {
        let url = process.env.NEXT_PUBLIC_CMS_API_URL + `/disease-details?populate=*${limit ? '&pagination[limit]=' + limit : ''}`;
        const req = await fetch(url);
        const res = await req.json();

        return res.data;
    },


    // FOR LISTING PAGE;
    getDisease: async () => {
        const baseUrl = process.env.NEXT_PUBLIC_CMS_API_URL;

        // Get total count first
        const initialUrl = `${baseUrl}/disease-details`;
        const initialReq = await fetch(initialUrl);
        const initialRes = await initialReq.json();
        const totalCount = initialRes.meta.pagination.total;

        const limit = 100;
        const pages = Math.ceil(totalCount / limit);
        let data = [];

        // Fetch all pages
        for (let i = 0; i < pages; i++) {
            const start = i * limit;
            const url = `${baseUrl}/disease-details?populate=*&pagination[start]=${start}&pagination[limit]=${limit}`;
            const res = await fetch(url);
            const json = await res.json();
            data = [...data, ...json.data];
        }

        return data;
    },

    



}


export default diseaseData;
