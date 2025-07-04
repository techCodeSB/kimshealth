const doctorData = {
    getDoctorAll: async (limit) => {
        let url = process.env.NEXT_PUBLIC_CMS_API_URL + `/doctor-details?populate=*${limit ? '&pagination[limit]=' + limit : ''}`;
        const req = await fetch(url);
        const res = await req.json();

        return res.data;
    },

    getSingleDoctor: async(slug)=>{
        let url = process.env.NEXT_PUBLIC_CMS_API_URL + `/doctor-details/?filters[slug][$eq]=${slug}&populate=*`;
        const req = await fetch(url);
        const res = await req.json();

        return res.data[0];

    },


}



export default doctorData;
