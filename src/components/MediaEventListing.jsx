"use client"
import formatDate from '@/app/lib/formatDate';
import hospitalData from '@/app/lib/getHospital';
import mediaData from '@/app/lib/getMediaEvent';
import getSpecialityData from '@/app/lib/getSpeciality';
import getStaticText from '@/helper/getStaticText';
import React, { useEffect, useRef, useState } from 'react'

const MediaEventListing = ({ basePath }) => {
    const [allEvents, setallEvents] = useState([]);
    const [count, setCount] = useState(0);
    const [staticText, setStaticTexts] = useState({});
    const limit = 6;
    const observerRef = useRef(null);
    const [loading, setLoading] = useState(false);
    const [endData, setEndData] = useState(false);
    const [allSpeciality, setAllSpeciality] = useState([]);
    const [allMediaEvents, setAllMedaiEvents] = useState([]);
    const [allHospital, setAllHospital] = useState([]);
    const [filterSplty, setFilterSplty] = useState([]);
    const [noData, setNoData] = useState(false);


    useEffect(() => {
        const fetchTexts = async () => {
            setStaticTexts({ ...await getStaticText() })
        };

        const getFstLoad = async () => {
            console.log(await getSpecialityData.getAllSpeciality())
            setallEvents(await mediaData.getAll({ start: 0, limit: count }));
            setAllSpeciality(await getSpecialityData.getAllSpeciality());
            setAllMedaiEvents(await mediaData.getAll({ all: true }))
            setAllHospital(await hospitalData.getAll(false, true))
            setCount(limit); // ✅ Set count so next fetch starts correctly
        };

        getFstLoad();
        fetchTexts();
    }, []);

    const loadDoctor = async () => {
        if (loading) return;
        setLoading(true);

        const newCount = count;
        const data = await mediaData.getAll({ start: newCount, limit: limit });

        if (data.length < 1) {
            setEndData(true);
        } else {
            setallEvents(prev => [...prev, ...data]);
            setCount(prev => prev + limit); // ✅ Count updated only after new data fetched
        }

        setLoading(false);
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                if (entries[0].isIntersecting && !endData && !loading) {
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
    }, [count, endData, loading]); // ✅ Added all dependencies.


    const onMediaSearch = async (e) => {
        const searchText = e.target.value.trim().toLowerCase();

        if (!searchText) {
            setallEvents(await mediaData.getAll({ start: 0, limit: 6 }));
            return;
        }

        const filterData = allEvents.filter(event => {
            return event.title?.toLowerCase().includes(searchText);
        });

        if (filterData.length > 0) {
            setallEvents(filterData);
            setNoData(false);
        } else {
            setallEvents([]);
        }
    };

    const onHospitalChange = async (e) => {
        const hospitalId = e.target.value;;

        if (!hospitalId) {
            // Show all loaded events (or reload from API if needed)
            const all = await mediaData.getAll({ start: 0, limit: 6 });
            setallEvents(all);
            setNoData(false);
            return;
        }

        const all = await mediaData.getAll({ start: 0, limit: 6 }); // Or fetch fresh data if needed
        const filtered = all.filter(event => event.hospital[0]?.id === hospitalId);
        if (filtered.length > 0) {
            setallEvents(filtered);
            setNoData(false);
        } else {
            setallEvents([]);
            setNoData(true);
        }
    };


    return (
        <>
            <section className="section">
                <div className="container">
                    <div className="row justify-content-between">

                        <div className="col-md-4  mb-3">
                            {/* <form action="">
                            <div className="input-group p-0 position-relative justify-content-center">
                                <input type="text" name="" id="" className='diseases-page-search' onChange={onMdiaSearch} />
                                <button className="input-group-text border-0 search-btn-page">
                                    <i className="fa-solid fa-magnifying-glass"></i>
                                </button>
                            </div>
                            </form> */}

                            <input type="text" name="" id="" className='form-control' onChange={onMediaSearch} />
                        </div>

                        <div className="col-md-4 mb-3">
                            {/* <form action="">
                                <div className="input-group p-0 position-relative justify-content-center">
                                    <select className="form-select diseases-page-search">
                                        <option value={''}>Select by Hospital </option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                    <button className="input-group-text border-0 search-btn-page">
                                        <i className="fa-solid fa-chevron-down"></i>
                                    </button>
                                </div>
                            </form> */}

                            <select className="form-select" onChange={onHospitalChange}>
                                <option value={''}>Select by Hospital </option>
                                {
                                    allHospital.map((h, i) => {
                                        return <option value={h.id} key={i}>
                                            {h.title}
                                        </option>
                                    })
                                }
                            </select>
                        </div>

                        <div className="col-md-4 mb-3">
                            {/* <form action="">
                                <div className="input-group p-0 position-relative justify-content-center">
                                    <select className="form-select diseases-page-search">
                                        <option value={''}>Search for Speciality </option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                    <button className="input-group-text border-0 search-btn-page">
                                        <i className="fa-solid fa-chevron-down"></i>
                                    </button>
                                </div>
                            </form> */}

                            <select className="form-select ">
                                <option value={''}>Select by Speciality </option>
                                {
                                    allSpeciality.map((h, i) => {
                                        return <option value={h.speciality?.id} key={i}>
                                            {h.title}
                                        </option>
                                    })
                                }
                            </select>
                        </div>

                    </div>
                </div>
            </section>

            {/* Desktop View */}
            <section className="section d-lg-block d-none pt-0">
                <div className="container">
                    <div className="row">
                        {
                            allEvents?.map((av, i) => (
                                <div className="col-xl-3 col-lg-3 col-md-3 col-12 mb-4" key={i}>
                                    <div className="media-card" data-aos="fade-right" data-aos-duration="1800" data-aos-delay="100">
                                        <div className="media-img">
                                            <a href={basePath + "/media-and-events/" + av.slug}>
                                                <img
                                                    src={av.featuredImage?.url ? process.env.NEXT_PUBLIC_IMAGE_URL + av.featuredImage?.url : '/img/no-image.jpg'}
                                                    className="img-fluid w-100"
                                                    alt={av.title}
                                                />
                                            </a>
                                        </div>
                                        <div className="media-content">
                                            <p>{av.shortDetails}</p>
                                            <div className="d-flex align-items-center justify-content-between mt-3">
                                                <div className="media-name">
                                                    <div>
                                                        <img src="/img/kims-small-logo.png" className="img-fluid" alt="" />
                                                    </div>
                                                    <p>{av.title.slice(0, 25) + "..."} <br /> {formatDate(av?.date)}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>


            {/* Mobile View */}
            <section className="section d-lg-none d-block pt-0" data-aos="fade-up">
                <div className="container">
                    <div className="row g-2">
                        {
                            allEvents?.map((e, i) => (
                                <div className="col-xl-3 col-lg-3 col-md-3 col-6 mb-2" key={i}>
                                    <div className="media-card">
                                        <div className="media-img">
                                            <a href={basePath + "/media-and-events/" + e.slug}>
                                                <img
                                                    src={e.featuredImage?.url ? process.env.NEXT_PUBLIC_IMAGE_URL + e.featuredImage?.url : '/img/no-image.jpg'}
                                                    className="img-fluid w-100"
                                                    alt={e.title}
                                                />
                                            </a>
                                        </div>
                                        <div className="media-content">
                                            <p>{e.shortDetails}</p>
                                            <div className="d-flex align-items-center justify-content-between mt-3">
                                                <div className="media-name">
                                                    <div>
                                                        <img src="/img/kims-small-logo.png" className="img-fluid" alt="" />
                                                    </div>
                                                    <p>{e.title} <br /> {formatDate(e?.date)}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>

            {loading && <p className='text-center p-3'>Loading...</p>}
            <div ref={observerRef} style={{ height: "1px" }}></div>
        </>
    );
};

export default MediaEventListing;
