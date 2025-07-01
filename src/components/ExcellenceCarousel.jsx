"use client"
import React from 'react'

const ExcellenceCarousel = () => {
    return (
        <>
            <section className="section exellence-section" data-aos="fade-up">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-md-4 col-8">
                            <div className="main-heading">
                                <h2>Centers of Excellence</h2>
                            </div>
                        </div>
                        <div className="col-md-2 col-4">
                            <div className="over-all-btn text-end">
                                <a href="#">View All <span><img src="/img/slider-right-arrow.svg" className="img-fluid"
                                    alt="" /></span></a>
                            </div>
                        </div>
                    </div>

                    <div className="owl-carousel owl-theme exellence">
                        <div className="item">
                            <div className="card border-0">
                                <div className="card-top">
                                    <img src="/img/exellence1.jpg" className="img-fluid w-100" alt="" />
                                </div>
                                <div className="card-content">
                                    <h4>Cardiology</h4>
                                    <p>The KIMSHEALTH Heart Institute brings together a distinguished KIMSHEALTH</p>
                                    <div className="main-btn">
                                        <a href="#">Read More <span><i className="fa-solid fa-arrow-right"></i></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="card border-0">
                                <div className="card-top">
                                    <img src="/img/exellence2.jpg" className="img-fluid w-100" alt="" />
                                </div>
                                <div className="card-content">
                                    <h4>Orthopedics & Trauma</h4>
                                    <p>KIMSHEALTH is a specialized center with state-of-the-art facility specialized
                                        facility</p>
                                    <div className="main-btn">
                                        <a href="#">Read More <span><i className="fa-solid fa-arrow-right"></i></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="item">
                            <div className="card border-0">
                                <div className="card-top">
                                    <img src="/img/exellence3.jpg" className="img-fluid w-100" alt="" />
                                </div>
                                <div className="card-content">
                                    <h4>Neurology</h4>
                                    <p>The KIMSHEALTH Department of Neurology is one of the best Department</p>
                                    <div className="main-btn">
                                        <a href="#">Read More <span><i className="fa-solid fa-arrow-right"></i></span></a>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="item">
                            <div className="card border-0">
                                <div className="card-top">
                                    <img src="/img/exellence4.jpg" className="img-fluid w-100" alt="" />
                                </div>
                                <div className="card-content">
                                    <h4>Respiratory Medicine</h4>
                                    <p>The KIMSHEALTH Department of Respiratory Medicine is regarded Respiratory</p>
                                    <div className="main-btn">
                                        <a href="#">Read More <span><i className="fa-solid fa-arrow-right"></i></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="card border-0">
                                <div className="card-top">
                                    <img src="/img/exellence4.jpg" className="img-fluid w-100" alt="" />
                                </div>
                                <div className="card-content">
                                    <h4>Respiratory Medicine</h4>
                                    <p>The KIMSHEALTH Department of Respiratory Medicine is regarded Respiratory</p>
                                    <div className="main-btn">
                                        <a href="#">Read More <span><i className="fa-solid fa-arrow-right"></i></span></a>
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

export default ExcellenceCarousel