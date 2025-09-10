"use client";
import doctorData from '@/app/lib/getDoctor';
import getStaticText from '@/helper/getStaticText';
import React, { useEffect, useState, useRef } from 'react';
import Form3 from './Forms/Form3';



const DoctorListing = ({ baseURL, allLocation, allHospital, allSpeciality, allDoctorCount, langLoc, URLParams }) => {
    const [docData, setDocData] = useState([]);
    const [count, setCount] = useState(0);
    const [staticText, setStaticTexts] = useState({});
    const [locationList, setLocationList] = useState([]);
    const [hospitalList, setHospitalList] = useState([]);
    const [selectedHospital, setHospital] = useState('');
    const [selectedSearchText, setSearchText] = useState('');
    const [specialityList, setSpecialityList] = useState([]);
    const observerRef = useRef(null);
    const loadingRef = useRef(false); // throttle loading
    const [loading, setLoading] = useState(false);
    const [endData, setEndData] = useState(false);
    const limit = 12;


    useEffect(() => {
        setLocationList(allLocation);
        setHospitalList(allHospital);
        setSpecialityList(allSpeciality);
    }, [allLocation, allSpeciality]);


    useEffect(() => {
        const fetchTexts = async () => {
            const texts = await getStaticText();
            setStaticTexts(texts);
        };

        // const getFstLoad = async () => {
        //     const tempStore = await doctorData.getDoctorAll(count, limit, langLoc);
        //     setDocData(tempStore);
        //     setCount(prev => prev + limit);
        // }


        // getFstLoad();
        fetchTexts();
    }, []);


    const loadDoctor = async (reset = false) => {
        if (loading) return;
        setLoading(true);

        const start = reset ? 0 : count; // 👈 if reset, start from 0

        const data = await doctorData.getDoctorAllOnFindDoctor(
            start,
            limit,
            langLoc,
            selectedHospital,
            selectedSearchText,
            URLParams
        );

        if (data.length < 1) {
            setEndData(true);
        }

        if (reset) {
            setDocData(data);   // replace with fresh data
            setCount(limit);    // next batch will start after limit
            setEndData(false);
        } else {
            setDocData(prev => [...prev, ...data]); // append to old
            setCount(prev => prev + limit);
        }

        setLoading(false);
    };


    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                if (entries[0].isIntersecting && !endData) {
                    loadDoctor();
                }
            },
            { threshold: 1 }
        );

        const currentRef = observerRef.current;
        if (currentRef) observer.observe(currentRef);

        return () => {
            if (currentRef) observer.unobserve(currentRef);
        };
    }, [count, loading, endData]);


    useEffect(() => {
        loadDoctor(true);
    }, [selectedSearchText, selectedHospital]);



    return (
        <section className="section">
            <div className="container">
                <div className="row">

                    {/* Doctor Cards */}
                    <div className="col-md-12 expert-section">
                        <div className="row desktop-doc-top-bar-from">
                            <div className="col-md-6 mb-3">
                                <div className="find-doctor-left-col filter-form d-block">
                                    <div className="rounded-field-form">
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="input-group">
                                                    <select className="form-select" aria-label="Default select example" value={selectedHospital} onChange={(e) => {
                                                        setHospital(e.target.value)
                                                    }}>
                                                        <option value={''}>{staticText['Select Hospital / Medical Center']}</option>

                                                        {hospitalList?.map((loc, index) => (
                                                            <option value={loc.slug} key={index + "1"}>{loc.title}</option>
                                                        ))}
                                                    </select>
                                                    <span onClick={(e) => {
                                                        const selectEl = e.currentTarget.closest(".input-group")?.querySelector("select");

                                                        if (selectEl) {
                                                            if (typeof selectEl.showPicker === "function") {
                                                                // ✅ Chrome / Edge
                                                                selectEl.showPicker();
                                                            } else {
                                                                // 🔄 Safari / Firefox fallback
                                                                selectEl.focus();
                                                            }
                                                        }
                                                    }} className="input-group-text">
                                                        <i className="fa-solid fa-angle-down"></i>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 mb-3">
                                <div className="find-doctor-left-col filter-form d-block">
                                    <div className="rounded-field-form">
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="input-group">
                                                    <input type='text' className='form-control' placeholder={staticText['Search by Speciality or Doctor Name']} value={selectedSearchText} onChange={(e) => {
                                                        setSearchText(e.target.value)
                                                    }} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row expert-doc-listing-box ">
                            {docData?.map((d, index) => (
                                <div className="col-md-3 col-6 mb-3" key={d.slug + index}>
                                    <div className="expert-card">
                                        <div className="card border-0 p-lg-4 p-0">
                                            <div className="card-top video-iconfor-doc">
                                                <a href={baseURL + "/doctor/" + d.slug}>
                                                    <img
                                                        src={d.doctorImage?.url ? `${process.env.NEXT_PUBLIC_IMAGE_URL}${d.doctorImage?.url}` : "/img/no-image.jpg"}
                                                        className="img-fluid w-100"
                                                        alt={`${d.salutation ? d.salutation + " " : ""}${d.name}`}
                                                    />

                                                </a>
                                                {d.teleConsultationAvailable && <a href='https://consult.bestdocapp.com/home/KIMSTVM?version=new' target='_blank'>
                                                    <span className="video-iconfor-listing"><i className="fa-solid fa-video"></i></span>
                                                </a>}
                                            </div>
                                            <div className="card-content px-0">
                                                <h4>{`${d.salutation ? d.salutation + " " : ""}${d.name}`}</h4>
                                                <p>{d.doctorDesignation}</p>
                                                <h5>{d.specialities[0]?.title}</h5>
                                                {/* <div className="from-btn">
                                                    <a href={`${baseURL}/book-an-appointment/?doctor=${d.slug}`} className="btn">{staticText['Appointment']}</a>
                                                </div> */}
                                                <div className="from-btn">
                                                    {d.appointmentAvailable && <a href={baseURL + "/book-an-appointment/?doctor=" + d.slug} className="btn">{staticText['Appointment']}</a>}
                                                    <a href={baseURL + "/doctor/" + d.slug} className="btn vice-btn">{staticText['View Profile']}</a>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <div className="main-btn text-lg-center text-start ms-lg-0 ms-2 mt-2">
                                                <a href={`${baseURL}/doctor/${d.slug}`}>{staticText['View Profile']}</a>
                                            </div> */}

                                    </div>
                                </div>
                            ))}
                        </div>
                        {loading && <p className="text-center p-3">Loading...</p>}
                        <div ref={observerRef} style={{ height: "1px" }}></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DoctorListing;
