// import { useEffect, useState } from 'react';
// import Cookies from 'js-cookie';

// const useStaticPageText = (slug) => {
//     const [data, setData] = useState(null);

//     useEffect(() => {
//         const fetchStaticPage = async () => {
//             try {
//                 const langFromStorage = JSON.parse(Cookies.get("systemLang") || "{}");
//                 const locationFromStorage = JSON.parse(Cookies.get("systemLocation") || "{}");

//                 const res = await fetch(`${process.env.NEXT_PUBLIC_CMS_API_URL}/static-pages?filters[slug][$eq]=${slug}`);
//                 const json = await res.json();
//                 setData(json);


//             } catch (err) {
//                 console.log(err)
//             }
//         };

//         if (slug) {
//             fetchStaticPage();
//         }
//     }, [slug]);

//     return { data };
// };

// export default useStaticPageText;
