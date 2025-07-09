"use client"
import blogData from '@/app/lib/getBlog';
import getStaticText from '@/helper/getStaticText';
import React, { useEffect, useRef, useState } from 'react';
import formatDate from '@/app/lib/formatDate';
import testimonialData from '@/app/lib/getTestimonial';


const TestimonialListing = ({basePath}) => {
    const [allTestimonial, setallTestimonial] = useState() //Doctors
    const [count, setCount] = useState(12)
    const [staticText, setStaticTexts] = useState({});
    const limit = 12;
    const observerRef = useRef(null);
    const [loading, setLoading] = useState(false);
    const [endData, setEndData] = useState(false);


    useEffect(() => {
        const fetchTexts = async () => {
            setStaticTexts({ ...await getStaticText() })
        };
        const getFstLoad = async () => {
            const data = await testimonialData.getAll(count, limit);
            setallTestimonial(data);
        }

        getFstLoad();
        fetchTexts();
    }, []);


    const loadDoctor = async () => {
        if (loading) return; // prevent multiple triggers
        setLoading(true);

        const data = await testimonialData.getAll(count, limit);
        if (data.length < 1) {
            setEndData(true)
        }
        setallTestimonial(prev => [...prev, ...data]);
        setCount(prev => prev + limit);

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
    }, [count]);
    return (
        <>
            <section className="section">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-md-6 mb-3">
                            <div className="main-heading">
                                <h2 className="mb-0">Patient Testimonials </h2>
                            </div>
                        </div>
                        <div className="col-md-4 details-key-row">
                            <form action="">
                                <div className="input-group p-0 position-relative justify-content-center">
                                    <select className="form-select diseases-page-search">
                                        <option value="">Search for Speciality </option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                    <button className="input-group-text border-0 search-btn-page"><i className="fa-solid fa-magnifying-glass"></i></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <div className="section section pt-0">
                <div className="container">
                    <div className="row">
                        {
                            allTestimonial?.map((t, index) => {
                                return <div className="col-xl-6 col-lg-6 col-md-6 col-12"
                                    data-aos={index % 2 == 0 ? "fade-right" : "fade-left"} key={index}>
                                    <div className="row testi-card">
                                        <div className="col-md-3">
                                            <div className="overflow-hidden">
                                                <a href={basePath + "/testimonial/" + t.slug}>
                                                    <img src={t.thumbnailImage?.url ? `${process.env.NEXT_PUBLIC_IMAGE_URL}${t.thumbnailImage?.url}` : "/img/no-image.jpg"} alt={t.title} className="img-fluid w-100" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-md-9 my-auto">
                                            <div className="testi-rightbox">
                                                <h3>{t.title}</h3>
                                                <p>{`${t.shortDetails.slice(0, 80)}...`}
                                                    <a href={basePath + "/testimonial/" + t.slug}>{staticText['Watch Video']}</a>
                                                </p>

                                                <div className="d-flex align-items-center justify-content-between mt-3">
                                                    <div className="doctor-name">
                                                        <p><span><img src="/img/doctor.png" className="img-fluid" alt="" /></span> {t.doctor?.name} </p>
                                                    </div>
                                                    <div className="doctor-catagory">
                                                        <p>{t.specialities[0]?.title}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                    {loading && <p className='text-center p-3'>Loading more doctors...</p>}
                    <div ref={observerRef} style={{ height: "1px" }}></div>
                </div>
            </div>
        </>
    )
}

export default TestimonialListing