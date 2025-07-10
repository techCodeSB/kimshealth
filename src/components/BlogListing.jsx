"use client"
import blogData from '@/app/lib/getBlog';
import getStaticText from '@/helper/getStaticText';
import React, { useEffect, useRef, useState } from 'react';
import formatDate from '@/app/lib/formatDate';
import getSpecialityData from '@/app/lib/getSpeciality';
import Link from 'next/link';


const BlogListing = ({ basePath, slug }) => {
    const [allBlog, setallBlog] = useState([]); //Doctors
    const [count, setCount] = useState(12)
    const [staticText, setStaticTexts] = useState({});
    const limit = 12;
    const observerRef = useRef(null);
    const [loading, setLoading] = useState(false);
    const [endData, setEndData] = useState(false);

    const [allSpeciality, setAllSpeciality] = useState([]);
    const [filterSplty, setFilterSplty] = useState([]);
    const [noData, setNoData] = useState(false);


    useEffect(() => {
        const fetchTexts = async () => {
            setStaticTexts({ ...await getStaticText() })
        };
        const getFstLoad = async () => {
            const tempStoreBlog = await blogData.allBlog(count, limit, slug);
            const tempStoreSpeciality = await getSpecialityData.getAllSpeciality();
            console.log(tempStoreSpeciality)


            setAllSpeciality(tempStoreSpeciality);
            setFilterSplty(tempStoreSpeciality);
            setallBlog(tempStoreBlog);
        }


        getFstLoad();
        fetchTexts();
    }, [slug]);


    const loadDoctor = async () => {
        if (loading) return; // prevent multiple triggers
        setLoading(true);

        const data = await blogData.allBlog(count, limit, slug);
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



    // SideBar Speciality search
    const onSpltySearch = async (e) => {
        const value = e.target.value.trim();
        setLoading(true);
        setNoData(false);

        if (!value) {
            setFilterSplty(allSpeciality);
            setLoading(false);
            return;
        }

        const temp = allSpeciality.filter((splty) =>
            splty.title.toLowerCase().includes(value.toLowerCase())
        );

        if (temp.length < 1) {
            setFilterSplty([]);
            setNoData(true);
        } else {
            setFilterSplty(temp);
            setNoData(false);
        }

        setLoading(false);
    };




    return (
        <section className="section">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 mb-3">
                        <div className="blog-left-col">
                            <h3>{staticText['By Specialties']}</h3>

                            <div className="rounded-field-form my-3">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="input-group">
                                            <input type="text" className="form-control" placeholder="Search Blog"
                                                aria-label="Recipient's username" aria-describedby="basic-addon2" onChange={onSpltySearch} />
                                            <span className="input-group-text"><i
                                                className="fa-solid fa-magnifying-glass"></i></span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* ::::::::: Speciality for searching ::::::: */}
                            <div className="d-lg-block d-none">
                                {loading ? (
                                    <p>Loading...</p>
                                ) : noData ? (
                                    <p>No data found</p>
                                ) : (
                                    filterSplty.map((splty, i) => {
                                        return splty.speciality ? <p key={i}>
                                            <Link href={basePath + "/blog?spciality=" + splty.speciality?.slug}>{splty.title}</Link>
                                        </p> : null
                                    })
                                )}
                            </div>
                        </div>


                    </div>

                    <div className="col-md-9 blog-page-right-col mb-3">
                        {
                            allBlog?.length > 0 && <div className="row">
                                <div className="col-md-6 mb-4">
                                    <div className="card border-0">
                                        <div className="card-top">
                                            <a href={basePath + "/blog/" + allBlog[0]?.slug}>
                                                <img src={process.env.NEXT_PUBLIC_IMAGE_URL + allBlog[0]?.featuredImage?.url} className="img-fluid w-100" alt="" />
                                            </a>
                                        </div>
                                        <div className="card-content">
                                            <a href={basePath + "/blog/" + allBlog[0]?.slug}>
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