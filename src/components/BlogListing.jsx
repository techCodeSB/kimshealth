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
                                <a herf="#">Arthroscopic Surgery <span>(2)</span></a>
                                <a herf="#">Cardiac Sciences <span>(91)</span></a>
                                <a herf="#">Cardiology <span>(59)</span></a>
                                <a herf="#">Dental Care <span>(9)</span></a>
                                <a herf="#">Dermatology <span>(10)</span></a>
                                <a herf="#">Dietetics <span>(37)</span></a>
                                <a herf="#">Emergency Medicine <span>(6)</span></a>
                                <a herf="#">Endocrinology & Diabetes <span>(20)</span></a>
                                <a herf="#">ENT <span>(12)</span></a>
                                <a herf="#">General Surgery <span>(13)</span></a>
                                <a herf="#">Internal Medicine <span>(38)</span></a>
                                <a herf="#">IVF <span>(17)</span></a>
                                <a herf="#">Medical Oncology <span>(59)</span></a>
                                <a herf="#">Mental Health <span>(22)</span></a>
                                <a herf="#">Metabolic And Bariatric Surgery <span>(29)</span></a>
                                <a herf="#">Minimal Access/Laparoscopic Surgery <span>(19)</span></a>
                                <a herf="#">Neonatology <span>(4)</span></a>
                                <a herf="#">Nephrology <span>(14)</span></a>
                                <a herf="#">Neurology <span>(47)</span></a>
                                <a herf="#">Neurosurgery <span>(29)</span></a>
                                <a herf="#">Nuclear Medicine <span>(1)</span></a>
                                <a herf="#">Obstetrics And Gynaecology <span>(58)</span></a>
                                <a herf="#">Ophthalmology <span>(12)</span></a>
                                <a herf="#">Orthopaedics & Joint Replacement <span>(34)</span></a>
                                <a herf="#">Paediatric (Ped) <span>(19)</span></a>
                                <a herf="#">Paediatric (Ped) Cardiac Surgery <span>(1)</span></a>
                                <a herf="#">Paediatric (Ped) Cardiology <span>(5)</span></a>
                                <a herf="#">Paediatric (Ped) Endocrinology <span>(8)</span></a>
                                <a herf="#">Paediatric (Ped) Gastroenterology <span>(2)</span></a>
                                <a herf="#">Paediatric (Ped) Nephrology <span>(1)</span></a>
                                <a herf="#">Paediatric (Ped) Oncology <span>(2)</span></a>
                                <a herf="#">Paediatric (Ped) Orthopaedics <span>(5)</span></a>
                                <a herf="#">Paediatric (Ped) Pulmonology <span>(1)</span></a>
                                <a herf="#">Physiotherapy & Rehabilitation Medicine <span>(4)</span></a>
                                <a herf="#">Podiatry <span>(2)</span></a>
                                <a herf="#">Arthroscopic Surgery <span>(2)</span></a>
                                <a herf="#">Cardiac Sciences <span>(91)</span></a>
                                <a herf="#">Cardiology <span>(59)</span></a>
                                <a herf="#">Dental Care <span>(9)</span></a>
                                <a herf="#">Dermatology <span>(10)</span></a>
                                <a herf="#">Dietetics <span>(37)</span></a>
                                <a herf="#">Emergency Medicine <span>(6)</span></a>
                                <a herf="#">Endocrinology & Diabetes <span>(20)</span></a>
                                <a herf="#">ENT <span>(12)</span></a>
                                <a herf="#">General Surgery <span>(13)</span></a>
                                <a herf="#">Internal Medicine <span>(38)</span></a>
                                <a herf="#">IVF <span>(17)</span></a>
                                <a herf="#">Medical Oncology <span>(59)</span></a>
                                <a herf="#">Mental Health <span>(22)</span></a>
                                <a herf="#">Metabolic And Bariatric Surgery <span>(29)</span></a>
                                <a herf="#">Minimal Access/Laparoscopic Surgery <span>(19)</span></a>
                                <a herf="#">Neonatology <span>(4)</span></a>
                                <a herf="#">Nephrology <span>(14)</span></a>
                                <a herf="#">Internal Medicine <span>(38)</span></a>
                                <a herf="#">IVF <span>(17)</span></a>
                                <a herf="#">Medical Oncology <span>(59)</span></a>
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
                                            <div className="d-flex align-items-center justify-content-between blog-list-doc-name">
                                                <div>
                                                    <p><strong> By: {allBlog[0].doctor[0]?.name}</strong></p>
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

                                        <div className="scroll-container ms-3">
                                            <div className="blog-listing-scroll-tab active"><span>COVID 19</span></div>
                                            <div className="blog-listing-scroll-tab"><span>Fever</span></div>
                                            <div className="blog-listing-scroll-tab"><span>Kne Replacement</span></div>
                                            <div className="blog-listing-scroll-tab"><span>Malaria</span></div>
                                            <div className="blog-listing-scroll-tab"><span>Medication</span></div>
                                            <div className="blog-listing-scroll-tab"><span>Cardiology</span></div>
                                            <div className="blog-listing-scroll-tab"><span>Cardiology</span></div>
                                            <div className="blog-listing-scroll-tab"><span>Cardiology</span></div>
                                            <div className="blog-listing-scroll-tab"><span>Cardiology</span></div>
                                        </div>

                                        
                                    </div>
                                </div>


                                {
                                    allBlog.map((b, index) => {
                                        return <div className="col-md-6 mb-4" key={index}>
                                            <div className="card border-0">
                                                <div className="card-top">
                                                    <a href={basePath + "/blog/" + b.slug}>
                                                        <img src={b.featuredImage?.url ? process.env.NEXT_PUBLIC_IMAGE_URL + b.featuredImage.url : "/img/no-image.jpg"} className="img-fluid w-100" alt="" />
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