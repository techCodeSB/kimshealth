"use client"
import doctorData from '@/app/lib/getDoctor'
import getStaticText from '@/helper/getStaticText'
import React, { useEffect, useState, useRef } from 'react'

const DoctorListing = ({ baseURL, allLocation, allSpeciality, allDoctor }) => {
    const [docData, setDocData] = useState() //Doctors
    const [count, setCount] = useState(12)
    const [staticText, setStaticTexts] = useState({});
    const [locationList, setLocationList] = useState()
    const [specialityList, seSpecialityList] = useState()
    const [doctorList, setDoctorList] = useState();
    const limit = 12;
    const observerRef = useRef(null);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        setLocationList(allLocation);
        seSpecialityList(allSpeciality);
        setDoctorList(allDoctor)
    }, [allLocation, allSpeciality, allDoctor])


    useEffect(() => {
        const fetchTexts = async () => {
            setStaticTexts({ ...await getStaticText() })
        };
        const getFstLoad = async () => {
            const data = await doctorData.getDoctorAll(0, count)
            setDocData(data);
            console.log("doc", data)
        }

        getFstLoad();
        fetchTexts();
    }, []);


    const loadDoctor = async () => {
        if (loading) return; // prevent multiple triggers
        setLoading(true);

        const data = await doctorData.getDoctorAll(count, limit);
        setDocData(prev => [...prev, ...data]);
        setCount(prev => prev + limit);

        setLoading(false);
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                if (entries[0].isIntersecting) {
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
    }, [count]);


    const onLocationChange = (e) => {
        const search = e.target.value;
        // const temp = allLocation.filter((loca))


    }


    return (
        <>
            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-6">
                            <div className="main-heading">
                                <h2>{allDoctor?.length} {staticText['Doctors Found']}</h2>
                            </div>
                        </div>
                        <div className="col-6 d-lg-none d-block">
                            <button type="button" className="btn-tab form-btn mx-2 filter-box-mobile">{staticText['Filters']} <i
                                className="fa-solid fa-filter"></i></button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3 mb-4">
                            <div className="find-doctor-left-col filter-form mt-3">
                                <h4>{staticText['Select Filters']}</h4>
                                <div className="find-doc-box">
                                    <h3>By City</h3>
                                    <div className="rounded-field-form mb-3">
                                        {/* <form action=""> */}
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="input-group">
                                                    <input type="text" className="form-control" placeholder="Search ....."
                                                        name="search" onChange={onLocationChange} />
                                                    <span className="input-group-text"><i
                                                        className="fa-solid fa-magnifying-glass"></i></span>
                                                </div>
                                            </div>
                                        </div>
                                        {/* </form> */}

                                        <div className="option-find-doc">
                                            <ul>
                                                {
                                                    locationList?.map((loc, index) => {
                                                        return <li key={index}>
                                                            {loc.title}
                                                        </li>
                                                    })
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="find-doc-box">
                                    <h3>By Departments</h3>
                                    <div className="rounded-field-form mb-3">
                                        <form action="">
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="input-group">
                                                        <input type="text" className="form-control" placeholder="Search ....."
                                                            name="search" />
                                                        <span className="input-group-text"><i
                                                            className="fa-solid fa-magnifying-glass"></i></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>

                                        <div className="option-find-doc">
                                            <ul>
                                                {
                                                    specialityList?.map((s, index) => {
                                                        return <li key={index}>
                                                            {s.title}
                                                        </li>
                                                    })
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="find-doc-box">
                                    <h3>By Gender</h3>
                                    <div className="rounded-field-form mb-3">
                                        <form action="">
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="input-group">
                                                        <select className="form-select" aria-label="Default select example">
                                                            <option value={""}>Gender</option>
                                                            <option value="male">Male</option>
                                                            <option value="female">Female</option>
                                                            <option value="others">Others</option>
                                                        </select>
                                                        <span className="input-group-text"><i
                                                            className="fa-solid fa-chevron-down"></i></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>

                                        <div className="option-find-doc">
                                            <ul>
                                                {
                                                    doctorList?.map((s, index) => {
                                                        return <li key={index}>
                                                            {s.name}
                                                        </li>
                                                    })
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="find-doc-box">
                                    <h3>Need Help Making an Appointment?</h3>
                                    <div className="rounded-field-form mb-3">
                                        <form action="">
                                            <div className="row">
                                                <div className="col-12 mb-3">
                                                    <label className="form-label">Name <span>*</span></label>
                                                    <input type="text" className="form-control" placeholder="Enter your name"
                                                        name="name" />
                                                </div>

                                                <div className="col-12 mb-3">
                                                    <label className="form-label">Mobile Number <span>*</span></label>
                                                    <input type="text" className="form-control" placeholder="000 000 0000"
                                                        name="name" />
                                                </div>

                                                <div className="col-12 mb-3">
                                                    <button className="form-btn">Submit</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-9 expert-section">
                            <div className="row">
                                {
                                    docData?.map((d, index) => {
                                        return <div className="col-md-4 col-6 mb-3" key={index}>
                                            <div className="expert-card">
                                                <div className="card border-0 p-lg-4 p-0">
                                                    <div className="card-top">
                                                        <a href="#">
                                                            <img src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${d.doctorImage.url}`} className="img-fluid w-100" alt="" />
                                                        </a>
                                                    </div>
                                                    <div className="card-content">
                                                        <h4>{d.name}</h4>
                                                        <p>{d.doctorDesignation}</p>
                                                        <h5>{d.specialities[0]?.title}</h5>
                                                        <div className="from-btn">
                                                            <a href="#" className="btn">{staticText['Appointment']}</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="main-btn  text-lg-center text-start ms-lg-0 ms-2 mt-2">
                                                    <a href={baseURL + "/doctor/" + d.slug}>{staticText['View Profile']}</a>
                                                </div>
                                            </div>
                                        </div>
                                    })
                                }
                                {loading && <p className='text-center p-3'>Loading more doctors...</p>}
                                <div ref={observerRef} style={{ height: "1px" }}></div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default DoctorListing;

