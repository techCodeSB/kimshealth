const allTitles = {
    staticPageTitles: async () => {
        const baseUrl = process.env.NEXT_PUBLIC_CMS_API_URL;
        // Get total count
        const initialReq = await fetch(`${baseUrl}/static-pages`);
        const initialRes = await initialReq.json();
        const totalCount = initialRes.meta.pagination.total;

        const limit = 100;
        const pages = Math.ceil(totalCount / limit);
        let data = [];

        // Actual Data
        for (let i = 0; i < pages; i++) {
            const start = i * limit;
            const url = `${baseUrl}/static-pages?fields=title&fields=slug&pagination[start]=${start}&pagination[limit]=${limit}`;
            const res = await fetch(url);
            const json = await res.json();
            data = [...data, ...json.data];
        }

        return data;
    },

    getHospitalTitle: async () => {
        const baseUrl = process.env.NEXT_PUBLIC_CMS_API_URL;
        // Get total count
        const initialReq = await fetch(`${baseUrl}/hospitals`);
        const initialRes = await initialReq.json();
        const totalCount = initialRes.meta.pagination.total;

        const limit = 100;
        const pages = Math.ceil(totalCount / limit);
        let data = [];

        // Actual Data
        for (let i = 0; i < pages; i++) {
            const start = i * limit;
            const url = `${baseUrl}/hospitals?fields=title&fields=slug&fields=type&pagination[start]=${start}&pagination[limit]=${limit}`;
            const res = await fetch(url);
            const json = await res.json();
            data = [...data, ...json.data];
        }

        return data;
    },

    getSpecialityTitle: async () => {
        const baseUrl = process.env.NEXT_PUBLIC_CMS_API_URL;
        // Get total count
        const initialReq = await fetch(`${baseUrl}/specialty-details`);
        const initialRes = await initialReq.json();
        const totalCount = initialRes.meta.pagination.total;

        const limit = 100;
        const pages = Math.ceil(totalCount / limit);
        let data = [];

        // Actual Data
        for (let i = 0; i < pages; i++) {
            const start = i * limit;
            const url = `${baseUrl}/specialty-details?populate[0]=speciality&pagination[start]=${start}&pagination[limit]=${limit}`;
            const res = await fetch(url);
            const json = await res.json();
            json.data.forEach((d, _) => data.push(d.speciality))
        }

        return data;
    }

}

export default allTitles;