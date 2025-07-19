"use client"
import langLoc from '@/helper/getLangLoc'
import getStaticText from '@/helper/getStaticText'
import React, { useEffect, useState } from 'react'

const BookAnAppoinmentShort = ({ basePath }) => {
    const [locationList, setLocationList] = useState()
    const [staticTexts, setStaticTexts] = useState({});
    const [selectedLocation, setSelectedLocation] = useState()
    const [searchDoctor, setSearchDoctor] = useState([]);
    const [selectedDoctor, setSelectedDoctor] = useState();


    useEffect(() => {
        const fetchTexts = async () => {
            setStaticTexts({ ...await getStaticText() })
        };

        fetchTexts();
    }, []);



    useEffect(() => {
        const get = async () => {
            setLocationList(await langLoc.getLocations())
        }
        get()
    }, [])


    let debounceTimeout;

    const getDoctor = async (e) => {
        const text = e.target.value;
        setSelectedDoctor(text);


        // Clear the previous timeout
        clearTimeout(debounceTimeout);

        // Set a new timeout
        debounceTimeout = setTimeout(async () => {
            if (!text) {
                setSearchDoctor([]);
                return;
            };

            const base = process.env.NEXT_PUBLIC_CMS_API_URL;
            // Determine the correct filter
            const locationFilter = selectedLocation ? `&filters[locations][slug][$eq]=${selectedLocation}` : "";

            const searcFilter = `&filters[$or][0][name][$contains]=${text}&filters[$or][1][specialities][title][$contains]=${text}`

            const url = `${base}/doctor-details?populate=*${locationFilter}${searcFilter}&pagination[start]=${0}&pagination[limit]=${100}&sort=name:asc,manageAppearance.orderInMasterList:asc`;

            try {
                const req = await fetch(url);
                const res = await req.json();

                if (res.data.lengtn < 0) {
                    setSearchDoctor([]);
                } else {
                    setSearchDoctor([...res.data])
                }

            } catch (err) {
                console.error('Fetch error:', err);
            }
        }, 300); // Wait 600ms after user stops typing
    };




    return (
        <section className="section py-5 d-lg-block d-none">
            <div className="container">
                <div className="custom-from">
                    <div className="row justify-content-between">
                        <div className="col-xl-3 col-lg-3 col-md-3 col-12">
                            <div className="input-group mb-lg-0 mb-3">
                                <span className="input-group-text" id="from-icon"><i
                                    className="fa-solid icon-location-pin"></i></span>
                                <select className="form-select from-location" onChange={(e) => {
                                    setSelectedLocation(e.target.value)
                                    setSearchDoctor([]);
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
                                <input type="text" className="form-control pe-0"
                                    placeholder={staticTexts["Search doctor/specialities"]}
                                    aria-label="Username" aria-describedby="basic-addon1"
                                    onChange={getDoctor}
                                    value={selectedDoctor}
                                />
                                {searchDoctor.length > 0 && <div className='w-100 overflow-y-auto doctor__searchlist' id='searchBox'>
                                    <ul>
                                        {
                                            searchDoctor.map((d, i) => {
                                                return <li key={i} onClick={(e) => {
                                                    setSelectedDoctor(e.target.innerText);
                                                    setSearchDoctor([]);
                                                }}>
                                                    {d.name}
                                                </li>
                                            })
                                        }
                                    </ul>
                                </div>}
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-3 col-12">
                            <div className="from-btn">
                                <a
                                    href={
                                        basePath +
                                        `/book-an-appointment?` +
                                        (selectedLocation ? `location=${encodeURIComponent(selectedLocation)}&` : '') +
                                        `doctorname=${encodeURIComponent(selectedDoctor)}`
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
