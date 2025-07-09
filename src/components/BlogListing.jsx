"use client"
import blogData from '@/app/lib/getBlog';
import getStaticText from '@/helper/getStaticText';
import React, { useEffect, useRef, useState } from 'react';
import formatDate from '@/app/lib/formatDate';


const BlogListing = ({ basePath }) => {
    const [allBlog, setallBlog] = useState() //Doctors
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
            const data = await blogData.allBlog(count, limit);
            setallBlog(data);
        }

        getFstLoad();
        fetchTexts();
    }, []);


    const loadDoctor = async () => {
        if (loading) return; // prevent multiple triggers
        setLoading(true);

        const data = await blogData.allBlog(count, limit);
        if (data.length < 1) {
            setEndData(true)
        }
        setallBlog(prev => [...prev, ...data]);
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
        <section className="section">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 mb-3">
                        <div className="blog-left-col">
                            <h3>{staticText['By Specialties']}</h3>

                            <div className="rounded-field-form my-3">
                                <form action="">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="input-group">
                                                <input type="text" className="form-control" placeholder="Search Blog"
                                                    aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                                <span className="input-group-text"><i
                                                    className="fa-solid fa-magnifying-glass"></i></span>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>

                            <div className="d-lg-block d-none">
                                <p>Arthroscopic Surgery <span>(2)</span></p>
                                <p>Cardiac Sciences <span>(91)</span></p>
                                <p>Cardiology <span>(59)</span></p>
                                <p>Dental Care <span>(9)</span></p>
                                <p>Dermatology <span>(10)</span></p>
                                <p>Dietetics <span>(37)</span></p>
                                <p>Emergency Medicine <span>(6)</span></p>
                                <p>Endocrinology & Diabetes <span>(20)</span></p>
                                <p>ENT <span>(12)</span></p>
                                <p>General Surgery <span>(13)</span></p>
                                <p>Internal Medicine <span>(38)</span></p>
                                <p>IVF <span>(17)</span></p>
                                <p>Medical Oncology <span>(59)</span></p>
                                <p>Mental Health <span>(22)</span></p>
                                <p>Metabolic And Bariatric Surgery <span>(29)</span></p>
                                <p>Minimal Access/Laparoscopic Surgery <span>(19)</span></p>
                                <p>Neonatology <span>(4)</span></p>
                                <p>Nephrology <span>(14)</span></p>
                                <p>Neurology <span>(47)</span></p>
                                <p>Neurosurgery <span>(29)</span></p>
                                <p>Nuclear Medicine <span>(1)</span></p>
                                <p>Obstetrics And Gynaecology <span>(58)</span></p>
                                <p>Ophthalmology <span>(12)</span></p>
                                <p>Orthopaedics & Joint Replacement <span>(34)</span></p>
                                <p>Paediatric (Ped) <span>(19)</span></p>
                                <p>Paediatric (Ped) Cardiac Surgery <span>(1)</span></p>
                                <p>Paediatric (Ped) Cardiology <span>(5)</span></p>
                                <p>Paediatric (Ped) Endocrinology <span>(8)</span></p>
                                <p>Paediatric (Ped) Gastroenterology <span>(2)</span></p>
                                <p>Paediatric (Ped) Nephrology <span>(1)</span></p>
                                <p>Paediatric (Ped) Oncology <span>(2)</span></p>
                                <p>Paediatric (Ped) Orthopaedics <span>(5)</span></p>
                                <p>Paediatric (Ped) Pulmonology <span>(1)</span></p>
                                <p>Physiotherapy & Rehabilitation Medicine <span>(4)</span></p>
                                <p>Podiatry <span>(2)</span></p>
                                <p>Arthroscopic Surgery <span>(2)</span></p>
                                <p>Cardiac Sciences <span>(91)</span></p>
                                <p>Cardiology <span>(59)</span></p>
                                <p>Dental Care <span>(9)</span></p>
                                <p>Dermatology <span>(10)</span></p>
                                <p>Dietetics <span>(37)</span></p>
                                <p>Emergency Medicine <span>(6)</span></p>
                                <p>Endocrinology & Diabetes <span>(20)</span></p>
                                <p>ENT <span>(12)</span></p>
                                <p>General Surgery <span>(13)</span></p>
                                <p>Internal Medicine <span>(38)</span></p>
                                <p>IVF <span>(17)</span></p>
                                <p>Medical Oncology <span>(59)</span></p>
                                <p>Mental Health <span>(22)</span></p>
                                <p>Metabolic And Bariatric Surgery <span>(29)</span></p>
                                <p>Minimal Access/Laparoscopic Surgery <span>(19)</span></p>
                                <p>Neonatology <span>(4)</span></p>
                                <p>Nephrology <span>(14)</span></p>
                                <p>Internal Medicine <span>(38)</span></p>
                                <p>IVF <span>(17)</span></p>
                                <p>Medical Oncology <span>(59)</span></p>
                            </div>
                        </div>


                    </div>

                    <div className="col-md-9 blog-page-right-col mb-3">
                        {
                            allBlog && <div className="row">
                                <div className="col-md-6 mb-4">
                                    <div className="card border-0">
                                        <div className="card-top">
                                            <a href={basePath + "/blog/" + allBlog[0].slug}>
                                                <img src={process.env.NEXT_PUBLIC_IMAGE_URL + allBlog[0]?.featuredImage?.url} className="img-fluid w-100" alt="" />
                                            </a>
                                        </div>
                                        <div className="card-content">
                                            <a href={basePath + "/blog/" + allBlog[0].slug}>
                                                <h4>{allBlog[0].title} </h4>
                                            </a>
                                            <p>
                                                {allBlog[0].shortDetails.slice(0, 90)}
                                                <span> {staticText['Read More']}</span>
                                            </p>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div>
                                                    <strong> By: {allBlog[0].doctor[0]?.name}</strong>
                                                </div>
                                                <div className="main-btn">
                                                    <p>{formatDate(allBlog[0].date)}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6 mb-4">
                                    <div className="card border-0">
                                        <div className="card-top">
                                            <a href={basePath + "/blog/" + allBlog[1].slug}>
                                                <img src={process.env.NEXT_PUBLIC_IMAGE_URL + allBlog[1].featuredImage.url} className="img-fluid w-100" alt="" />
                                            </a>
                                        </div>
                                        <div className="card-content">
                                            <a href={basePath + "/blog/" + allBlog[1].slug}>
                                                <h4>{allBlog[1].title} </h4>
                                            </a>
                                            <p>
                                                {allBlog[1].shortDetails.slice(0, 90)}
                                                <span>{staticText['Read More']}</span>
                                            </p>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div>
                                                    <strong> {staticText['By']}: {allBlog[1].doctor[0]?.name}</strong>
                                                </div>
                                                <div className="main-btn">
                                                    <p>{formatDate(allBlog[1].date)}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="col-md-12 my-3">
                                    <div className="owl-carousel owl-theme blog-page-slider">
                                        {
                                            allBlog.slice(0, 4).map((b, index) => {
                                                return <div className="card border-0" key={index}>
                                                    <div className="card-content">
                                                        <h4>{b.title}</h4>
                                                        <p>{b.shortDetails} <span> {staticText['Read More']}</span></p>
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <div>
                                                                <strong> {staticText['By']}: {b.doctor[0]?.name}</strong>
                                                            </div>
                                                            <div className="main-btn">
                                                                <p>{formatDate(b.date)}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            })
                                        }

                                    </div>
                                </div>

                                <div className="col-md-12 mb-4">
                                    <div className="blog-tagging">
                                        <h3>{staticText['Trending']}</h3>
                                        <span className="active">COVID 19</span>
                                        <span>Fever</span>
                                        <span>Kne Replacement</span>
                                        <span>Malaria</span>
                                        <span>Medication</span>
                                        <span>Cardiology</span>
                                    </div>
                                </div>


                                {
                                    allBlog.map((b, index) => {
                                        return <div className="col-md-6 mb-4" key={index}>
                                            <div className="card border-0">
                                                <div className="card-top">
                                                    <a href={basePath + "/blog/" + b.slug}>
                                                        <img src={b.featuredImage?.url? process.env.NEXT_PUBLIC_IMAGE_URL + b.featuredImage.url : "/img/no-image.jpg"} className="img-fluid w-100" alt="" />
                                                    </a>
                                                </div>
                                                <div className="card-content">
                                                    <a href={basePath + "/blog/" + b.slug}>
                                                        <h4>{b.title} </h4>
                                                    </a>
                                                    <p>
                                                        {b?.shortDetails?.slice(0, 90)}
                                                        <span>{staticText['Read More']}</span>
                                                    </p>
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <div>
                                                            <strong> {staticText['By']}: {b?.doctor[0]?.name}</strong>
                                                        </div>
                                                        <div className="main-btn">
                                                            <p>{formatDate(b?.date)}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    })
                                }
                            </div>
                        }
                        {loading && <p className='text-center p-3'>Loading more doctors...</p>}
                        <div ref={observerRef} style={{ height: "1px" }}></div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default BlogListing