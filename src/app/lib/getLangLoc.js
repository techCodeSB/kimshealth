const langLoc = {
    //Get all locations
    getLocations: async () => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_CMS_API_URL}/locations?filters[isDefault][$eq]=false`)
            const res = await response.json();

            return res.data;

        } catch (error) {
            console.log("Err:", error)
        }
    },


    // Get all languages;
    getLanguages: async () => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_CMS_API_URL}/i18n/locales`);
            const res = await response.json();

            return res;

        } catch (error) {
            console.log("Err:", error)
        }
    },

}


export default langLoc;
