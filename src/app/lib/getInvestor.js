const investorData = {
    getAll: async (type) => {
        const url = process.env.NEXT_PUBLIC_CMS_API_URL + `/investors?populate=*&filters[type][$contains]=${type}`;
        const req = await fetch(url);
        const res = await req.json();

        return res.data;
    },
    getSingleInvestor: async (slug) => {
        let url = process.env.NEXT_PUBLIC_CMS_API_URL + `/investors/?filters[slug][$eq]=${slug}&populate[0]=manageAppearance&populate[1]=metaSection&populate[2]=image`;
        const req = await fetch(url);
        const res = await req.json();

        return res.data[0];

    },

}


export default investorData;