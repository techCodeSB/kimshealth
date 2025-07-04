const getSpecialityData = {
    // FOR CAROUSEL COMPONENT
    getAll: async (limit) => {
        const url = process.env.NEXT_PUBLIC_CMS_API_URL + `/specialty-details/?populate[0]=overviewSection&populate[1]=manageAppearance&populate[2]=speciality&populate[3]=speciality.featuredImage${limit ? '&pagination[limit]=' + limit : ''}`;
        const req = await fetch(url);
        const res = await req.json();

        return res.data;
    },


    // FOR LISTING PAGE;
    getSpeciality: async (field) => {
        const url = process.env.NEXT_PUBLIC_CMS_API_URL + `/specialty-details/?populate[0]=overviewSection&populate[1]=manageAppearance&populate[2]=speciality&filters[chooseSpecialityCategory][$eq]=${field}`;
        const req = await fetch(url);
        const res = await req.json();

        return res.data;

    },


    // FOR DETAILS PAGE;
    getSingleSpeciality: async (slug) => {
        // get speciality id;
        const getIdReq = await fetch(process.env.NEXT_PUBLIC_CMS_API_URL + `/specialities?filters[slug][$eq]=${slug}`);
        const getIdRes = await getIdReq.json();
        const id = getIdRes.data[0].id;
        console.log(id)

        // Get speciality data using id;
        const req = await fetch(process.env.NEXT_PUBLIC_CMS_API_URL + `/specialty-details?populate=*&filters[speciality][$eq]=${id}`);
        const res = await req.json();

        return res.data[0];
    }

}

export default getSpecialityData;
