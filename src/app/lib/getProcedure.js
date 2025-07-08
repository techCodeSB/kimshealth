const procedureData = {
    getAll: async (limit) => {
        let url = process.env.NEXT_PUBLIC_CMS_API_URL + `/procedure-details?populate=*${limit ? '&pagination[limit]=' + limit : ''}`;
        const req = await fetch(url);
        const res = await req.json();

        return res.data;
    },

    getProcedureBySpeciality: async (filterId) => {
        console.log(filterId)
        const baseUrl = process.env.NEXT_PUBLIC_CMS_API_URL;
        const limit = 100;

        // Step 1: Get total count
        const initialReq = await fetch(
            `${baseUrl}/procedure-details?filters[procedure][specialities][documentId][$eq]=${filterId}&pagination[limit]=1`
        );
        const initialRes = await initialReq.json();
        const totalCount = initialRes.meta.pagination.total;

        const pages = Math.ceil(totalCount / limit);
        let allData = [];

        // Step 2: Paginated fetch
        for (let i = 0; i < pages; i++) {
            const start = i * limit;
            const url = `${baseUrl}/procedure-details?populate[0]=procedure&populate[1]=procedure.specialities&filters[procedure][specialities][documentId][$eq]=${filterId}&pagination[start]=${start}&pagination[limit]=${limit}`;

            const res = await fetch(url);
            const json = await res.json();
            allData = [...allData, ...json.data];
        }

        return allData;
    }

}


export default procedureData;
