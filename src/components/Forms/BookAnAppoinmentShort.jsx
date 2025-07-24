"use client"
import getCurrentLangLocClient from '@/helper/getCurrentLangLocClient'
import langLoc from '@/helper/getLangLoc'
import getStaticText from '@/helper/getStaticText'
import React, { useEffect, useState } from 'react'

const BookAnAppoinmentShort = ({ basePath, extraClass }) => {
    const [staticTexts, setStaticTexts] = useState({});
    const [locationList, setLocationList] = useState()
    const [selectedLocation, setSelectedLocation] = useState("")
    const [selectedSpeciality, setSelectedSpeciality] = useState();
    const [allSpeciality, setAllSpeciality] = useState();


    useEffect(() => {
        const fetchTexts = async () => {
            setStaticTexts({ ...await getStaticText() })
        };

        fetchTexts();
    }, []);


    const getSpeciality = async ({ lang, loc }) => {

        const baseUrl = process.env.NEXT_PUBLIC_CMS_API_URL;
        // Get total count
        const initialReq = await fetch(`${baseUrl}/specialty-details?filters[locations][slug][$eq]=${loc}`);
        const initialRes = await initialReq.json();
        const totalCount = initialRes.meta.pagination.total;

        const limit = 100;
        const pages = Math.ceil(totalCount / limit);
        let data = [];

        // Actual Data
        for (let i = 0; i < pages; i++) {
            const start = i * limit;
            const url = `${baseUrl}/specialty-details?populate=*&pagination[start]=${start}&pagination[limit]=${limit}&filters[locations][slug][$eq]=${loc}&sort=title:asc`;
            const res = await fetch(url);
            const json = await res.json();
            data = [...data, ...json.data];
        }


        return data;
    }



    useEffect(() => {
        const get = async () => {
            let currentLangLoc = await getCurrentLangLocClient();
            setLocationList(await langLoc.getLocations())
            setAllSpeciality(await getSpeciality({ loc: selectedLocation == "" ? currentLangLoc.loc.slug : selectedLocation }));
        
        
            setSelectedSpeciality("")}
        get()

    }, [selectedLocation])










    return (
        <section className={'section d-lg-block d-none' + extraClass}>
            <div className="container">
                <div className="custom-from">
                    <div className="row justify-content-between">
                        <div className="col-xl-4 col-lg-3 col-md-3 col-12">
                            <div className="input-group mb-lg-0 mb-3">
                                <span className="input-group-text" id="from-icon"><i
                                    className="fa-solid icon-location-pin"></i></span>
                                <select className="form-select from-location" onChange={(e) => {
                                    setSelectedLocation(e.target.value)
                                }}>
                                    <option value={""}>{staticTexts['Select hospital location']}</option>
                                    {
                                        locationList?.map((loc, i) => {
                                            return <option value={loc.slug} key={i}>{loc.title}</option>
                                        })
                                    }
                                </select>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-3 col-md-3 col-12">
                            <div className="input-group mb-lg-0 mb-3">
                                <span className="input-group-text" id="from-icon"><i
                                    className="fa-solid fa-magnifying-glass"></i></span>
                                <select className="form-select from-location" value={selectedSpeciality} onChange={(e) => {
                                    setSelectedSpeciality(e.target.value)
                                }}>
                                    <option value={""}>{staticTexts['Select Speciality']}</option>
                                    {
                                        allSpeciality?.map((splty, i) => {
                                            return <option value={splty.speciality?.slug} key={i}>{splty.title}</option>
                                        })
                                    }
                                </select>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-3 col-12">
                            <div className="from-btn">
                                <a
                                    href={
                                        basePath +
                                        '/book-an-appointment' +
                                        (selectedLocation || selectedSpeciality
                                            ? '?' +
                                            [
                                                selectedLocation ? `location=${encodeURIComponent(selectedLocation)}` : null,
                                                selectedSpeciality ? `speciality=${encodeURIComponent(selectedSpeciality)}` : null,
                                            ]
                                                .filter(Boolean)
                                                .join('&')
                                            : '')
                                    }
                                    className="btn w-100"
                                >
                                    {staticTexts['Book An Appointment']}
                                </a>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BookAnAppoinmentShort;
