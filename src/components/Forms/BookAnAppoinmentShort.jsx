"use client"
import getCurrentLangLocClient from '@/helper/getCurrentLangLocClient';
import langLoc from '@/helper/getLangLoc';
import getStaticText from '@/helper/getStaticText';
import React, { useEffect, useState } from 'react';

const BookAnAppoinmentShort = ({ basePath, extraClass }) => {
    const [staticTexts, setStaticTexts] = useState({});
    const [locationList, setLocationList] = useState()
    const [selectedLocation, setSelectedLocation] = useState("")
    const [selectedSpeciality, setSelectedSpeciality] = useState();
    const [selectedDoctor, setSelectedDoctor] = useState();
    const [allSpeciality, setAllSpeciality] = useState();
    const [allDoctors, setAllDoctors] = useState([]);
    const [doctorLoading, setDoctorLoading]= useState(true);


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

    const getDoctor = async ({ lang, loc, speciality }) => {
        setDoctorLoading(true)
        const baseUrl = process.env.NEXT_PUBLIC_CMS_API_URL;

        const locationFilter = loc
            ? `&filters[locations][slug][$eq]=${loc}`
            : ``;

        const specialityFilter = speciality
            ? `&filters[specialities][slug][$eq]=${speciality}`
            : ``;

        // Get total count
        const initialReq = await fetch(`${baseUrl}/doctor-details?${locationFilter}${specialityFilter}`);
        const initialRes = await initialReq.json();
        const totalCount = initialRes.meta.pagination.total;

        const limit = 100;
        const pages = Math.ceil(totalCount / limit);
        let data = [];

        // Actual Data
        for (let i = 0; i < pages; i++) {
            const start = i * limit;
            const url = `${baseUrl}/doctor-details?populate=*&pagination[start]=${start}&pagination[limit]=${limit}${locationFilter}${specialityFilter}&sort=name:asc`;
            const res = await fetch(url);
            const json = await res.json();
            data = [...data, ...json.data];
        }

        setAllDoctors(data);
        setDoctorLoading(false)
    }



    useEffect(() => {
        const get = async () => {
            let currentLangLoc = await getCurrentLangLocClient();
            setLocationList(await langLoc.getLocationsOnlyCMS())
            setAllSpeciality(await getSpeciality({ loc: selectedLocation == "" ? currentLangLoc.loc.slug : selectedLocation }));
            await getDoctor({ loc: selectedLocation == "" ? "" : selectedLocation, speciality: selectedSpeciality == "" ? "" : selectedSpeciality });

        }
        get()

    }, [selectedLocation, selectedSpeciality])



    return (
        <section className={'section book-form-mobile-card ' + extraClass}>
            <div className="container">
                <div className="custom-from">
                    <div className="row justify-content-between">
                        <div className="col-xl-3 col-lg-3 col-md-3 col-12">
                            <div className="input-group mb-lg-0 mb-3">
                                <span className="input-group-text" id="from-icon"><i
                                    className="fa-solid icon-location-pin"></i></span>
                                <select className="form-select from-location" onChange={(e) => {
                                    setSelectedLocation(e.target.value);
                                    setSelectedSpeciality("");
                                    setSelectedDoctor("");
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
                        <div className="col-xl-3 col-lg-3 col-md-3 col-12">
                            <div className="input-group mb-lg-0 mb-3">
                                <span className="input-group-text" id="from-icon"><i
                                    className="fa-solid fa-magnifying-glass"></i></span>
                                <select className="form-select from-location" value={selectedSpeciality} onChange={(e) => {
                                    setSelectedSpeciality(e.target.value);
                                    setSelectedDoctor("");
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
                            <div className="input-group mb-lg-0 mb-3">
                                <span className="input-group-text" id="from-icon"><i className="fa-solid fa-user-doctor"></i></span>
                                <select className="form-select from-location" value={selectedDoctor} onChange={(e) => {
                                    setSelectedDoctor(e.target.value)
                                }}>
                                    {!doctorLoading ? (
                                        <>
                                            <option value="">{staticTexts['Select a Doctor']}</option>
                                            {allDoctors.map((d, i) => (
                                                <option value={d?.slug} key={i}>
                                                    {d.name}
                                                </option>
                                            ))}
                                        </>
                                    ) : (
                                        <option value="">{staticTexts['Loading...'] || 'Loading...'}</option>
                                    )}

                                </select>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-3 col-12">
                            <div className="from-btn">
                                <a
                                    href={
                                        basePath +
                                        '/book-an-appointment' +
                                        (selectedLocation || selectedSpeciality || selectedDoctor
                                            ? '?' +
                                            [
                                                selectedLocation ? `location=${encodeURIComponent(selectedLocation)}` : null,
                                                selectedSpeciality ? `speciality=${encodeURIComponent(selectedSpeciality)}` : null,
                                                selectedDoctor ? `doctor=${encodeURIComponent(selectedDoctor)}` : null,
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
