"use client"
import formatDate from "@/app/lib/formatDate";
import getStaticText from "@/helper/getStaticText";
import { useEffect, useState } from "react";

const FromDoctor = ({ dataSet }) => {
    const [staticTexts, setStaticTexts] = useState({});

    useEffect(() => {
        const fetchTexts = async () => {
            setStaticTexts({ ...await getStaticText() })
        };

        fetchTexts();


    }, []);

    if (dataSet.data.length < 1) {
        return;
    }

    return (
        <>
            <section className="section">
                <div className="container">
                    <div className="row justify-content-between" data-aos="fade-up">
                        <div className="col-md-4 col-8">
                            <div className="main-heading">
                                <h2>{dataSet?.sectionTitle} </h2>
                            </div>
                        </div>
                        <div className="col-md-2 col-4">
                            <div className="over-all-btn text-end">
                                <a href={dataSet.buttonURL}>{staticTexts[dataSet?.buttonText]} <span><img src="/img/slider-right-arrow.svg" className="img-fluid"
                                    alt="" /></span></a>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xl-8 col-lg-8 col-md-8 col-12 hear-doctor-img mb-lg-0 mb-3">
                            <div className="position-relative overflow-hidden" data-aos="fade-up">
                                <img src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${dataSet.data[0]?.thumbnailImage?.url}`} className="img-fluid d-lg-block d-none doc-image-hover w-100" alt={dataSet.data[0].title} />
                                <img src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${dataSet.data[0].thumbnailImage?.url}`} className="img-fluid w-100 d-lg-none d-block doc-image-hover" alt={dataSet.data[0].title} />
                                <div className="hear-doctor-content">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div>
                                            <p>{dataSet.data[0].title}</p>
                                        </div>
                                        <div className="main-btn d-lg-block d-none">
                                            <span><img src="/img/play-button.png" className="img-fluid" alt="" /> </span>
                                            <a href={dataSet.baseUrl + "/doctor-talk/" + dataSet.data[0].slug}>{staticTexts['Watch Video']} <span><i className="fa-solid fa-arrow-right"></i></span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-4 col-md-4 col-12 blog-right-col">
                            <div className="row g-2">
                                <div className="col-md-12 col-6 mb-3">
                                    <div className="position-relative overflow-hidden" data-aos="fade-up">
                                        <img src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${dataSet.data[1].thumbnailImage?.url}`}
                                            className="img-fluid w-100 hear-doc-image d-lg-block d-none" alt="" />
                                        <img src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${dataSet.data[1].thumbnailImage?.url}`} className="img-fluid w-100 d-lg-none d-block" alt="" />
                                        <div className="hear-doctor-content">
                                            <div className="d-block align-items-center justify-content-between">
                                                <div>
                                                    <h5 className="d-lg-block d-none">{formatDate(dataSet.data[1].date)}</h5>
                                                    <p>{dataSet.data[1].title}</p>
                                                </div>
                                                <div className="main-btn d-lg-block d-none">
                                                    <span><img src="/img/play-button.png" className="img-fluid" alt="" /> </span>
                                                    <a href={dataSet.baseUrl + "/doctor-talk/" + dataSet.data[1].slug}>{staticTexts['Watch Video']} <span><i
                                                        className="fa-solid fa-arrow-right"></i></span></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-12 col-6 mb-3">
                                    <div className="position-relative overflow-hidden" data-aos="fade-up">
                                        <img src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${dataSet.data[2].thumbnailImage?.url}`}
                                            className="img-fluid w-100 hear-doc-image d-lg-block d-none" alt="" />
                                        <img src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${dataSet.data[2].thumbnailImage?.url}`} className="img-fluid w-100 d-lg-none d-block" alt="" />
                                        <div className="hear-doctor-content">
                                            <div className="d-block align-items-center justify-content-between">
                                                <div>
                                                    <h5 className="d-lg-block d-none">{formatDate(dataSet.data[2].date)}</h5>
                                                    <p>{dataSet.data[2].title}</p>
                                                </div>
                                                <div className="main-btn d-lg-block d-none">
                                                    <span><img src="/img/play-button.png" className="img-fluid" alt="" /> </span>
                                                    <a href={dataSet.baseUrl + "/doctor-talk/" + dataSet.data[2].slug}>{staticTexts['Watch Video']} <span><i
                                                        className="fa-solid fa-arrow-right"></i></span></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </section>
        </>
    )



}

export default FromDoctor;
