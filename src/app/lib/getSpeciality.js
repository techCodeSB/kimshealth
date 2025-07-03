const getSpecialityData = {
    getAll: async (limit) => {
        const url = process.env.NEXT_PUBLIC_CMS_API_URL + `/specialty-details/?populate[0]=overviewSection&populate[1]=manageAppearance&populate[2]=speciality&populate[3]=speciality.featuredImage${limit ? '&pagination[limit]=' + limit : ''}`;
        const req = await fetch(url);
        const res = await req.json();

        return res.data;
    },

    getSpeciality: async (field) => {
        const url = process.env.NEXT_PUBLIC_CMS_API_URL + `/specialty-details/?populate[0]=overviewSection&populate[1]=manageAppearance&populate[2]=speciality&filters[chooseSpecialityCategory][$eq]=${field}`;
        const req = await fetch(url);
        const res = await req.json();

        return res.data;

    }

}

export default getSpecialityData;
