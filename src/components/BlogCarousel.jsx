'use client'
import React from 'react'

const BlogCarousel = () => {
    return (
        <>
            <section className="section blog-section d-lg-block d-none">
                <div className="container">
                    <div className="row justify-content-between" data-aos="fade-down">
                        <div className="col-md-3 col-8">
                            <div className="main-heading">
                                <h2>Blogs </h2>
                            </div>
                        </div>
                        <div className="col-md-2 col-4">
                            <div className="over-all-btn text-end">
                                <a href="#">View All <span><img src="/img/slider-right-arrow.svg" className="img-fluid"
                                    alt="" /></span></a>
                            </div>
                        </div>
                    </div>

                    <div className="owl-carousel owl-theme blog">
                        <div className="card border-0" data-aos="slide-down" data-aos-duration="1000">
                            <div className="card-top">
                                <a href="#">
                                    <img src="/img/blog1.jpg" className="img-fluid w-100" alt="" />
                                </a>
                            </div>
                            <div className="card-content">
                                <a href="#">
                                    <h4>Stapled Hemorrhoidectomy </h4>
                                </a>
                                <p>Many individuals, at some point in thier lives, confront the Many individuals,</p>
                                <div className="d-flex align-items-center justify-content-between">
                                    <div>
                                        <strong> By: KIMSHEALTH</strong>
                                    </div>
                                    <div className="main-btn">
                                        <a href="#">Read More <span><i className="fa-solid fa-arrow-right"></i></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card border-0" data-aos="slide-down" data-aos-duration="1400">
                            <div className="card-top">
                                <a href="#">
                                    <img src="/img/blog2.jpg" className="img-fluid w-100" alt="" />
                                </a>
                            </div>
                            <div className="card-content">
                                <a href="#">
                                    <h4>In-Vitro Fertilization (IVF)</h4>
                                </a>
                                <p>The journey towards parenthood isn't always straightforward towards parenthood </p>
                                <div className="d-flex align-items-center justify-content-between">
                                    <div>
                                        <strong> By: KIMSHEALTH</strong>
                                    </div>
                                    <div className="main-btn">
                                        <a href="#">Read More <span><i className="fa-solid fa-arrow-right"></i></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card border-0" data-aos="slide-down" data-aos-duration="1800">
                            <div className="card-top">
                                <a href="#">
                                    <img src="/img/blog3.jpg" className="img-fluid w-100" alt="" />
                                </a>
                            </div>
                            <div className="card-content">
                                <a href="#">
                                    <h4>High Cholesterol</h4>
                                </a>
                                <p>Cholesterol is a type of fat, it is a
                                    double-edged sword Cholesterol is a type of fat</p>
                                <div className="d-flex align-items-center justify-content-between">
                                    <div>
                                        <strong> By: KIMSHEALTH</strong>
                                    </div>
                                    <div className="main-btn">
                                        <a href="#">Read More <span><i className="fa-solid fa-arrow-right"></i></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card border-0" data-aos="slide-down" data-aos-duration="2200">
                            <div className="card-top">
                                <a href="#">
                                    <img src="/img/blog4.jpg" className="img-fluid w-100" alt="" />
                                </a>
                            </div>
                            <div className="card-content">
                                <a href="#">
                                    <h4>Skincare Routines</h4>
                                </a>
                                <p>Having oily skin can be detrimental since that makes you prone to can be detrimental</p>
                                <div className="d-flex align-items-center justify-content-between">
                                    <div>
                                        <strong> By: KIMSHEALTH</strong>
                                    </div>
                                    <div className="main-btn">
                                        <a href="#">Read More <span><i className="fa-solid fa-arrow-right"></i></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card border-0" data-aos="slide-down" data-aos-duration="2400">
                            <div className="card-top">
                                <a href="#">
                                    <img src="/img/blog2.jpg" className="img-fluid w-100" alt="" />
                                </a>
                            </div>
                            <div className="card-content">
                                <a href="#">
                                    <h4>In-Vitro Fertilization (IVF)</h4>
                                </a>
                                <p>The journey towards parenthood isn't always straightforward towards parenthood </p>
                                <div className="d-flex align-items-center justify-content-between">
                                    <div>
                                        <strong> By: KIMSHEALTH</strong>
                                    </div>
                                    <div className="main-btn">
                                        <a href="#">Read More <span><i className="fa-solid fa-arrow-right"></i></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card border-0" data-aos="slide-down" data-aos-duration="2600">
                            <div className="card-top">
                                <a href="#">
                                    <img src="/img/blog3.jpg" className="img-fluid w-100" alt="" />
                                </a>
                            </div>
                            <div className="card-content">
                                <a href="#">
                                    <h4>High Cholesterol</h4>
                                </a>
                                <p>Cholesterol is a type of fat, it is a
                                    double-edged sword Cholesterol is a type of fat</p>
                                <div className="d-flex align-items-center justify-content-between">
                                    <div>
                                        <strong> By: KIMSHEALTH</strong>
                                    </div>
                                    <div className="main-btn">
                                        <a href="#">Read More <span><i className="fa-solid fa-arrow-right"></i></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section blog-section d-lg-none d-block">
                <div className="container">
                    <div className="row justify-content-between" data-aos="fade-up">
                        <div className="col-md-3 col-8">
                            <div className="main-heading">
                                <h2>Blogs </h2>
                            </div>
                        </div>
                        <div className="col-md-2 col-4">
                            <div className="over-all-btn text-end">
                                <a href="#">View All <span><img src="/img/slider-right-arrow.svg" className="img-fluid"
                                    alt="" /></span></a>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <div className="blog-card" data-aos="fade-up">
                                <div className="row">
                                    <div className="col-6 my-auto">
                                        <div className="testi-rightbox">
                                            <a href="#">
                                                <h3>In-Vitro Fertilization (IVF)</h3>
                                            </a>
                                            <p>Many individuals, at some point in thier lives, confront the Many
                                                individuals,
                                            </p>
                                            <div className="d-block align-items-center justify-content-between">
                                                <div>
                                                    <strong> By: Dr Aman Agarwal</strong>
                                                </div>
                                                <div className="main-btn mt-lg-0 mt-1">
                                                    <a href="#">Read More <span><i
                                                        className="fa-solid fa-arrow-right"></i></span></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <a href="#">
                                            <img src="/img/blog2.jpg" className="img-fluid w-100" alt="" />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="blog-card" data-aos="fade-up">
                                <div className="row">
                                    <div className="col-6 my-auto">
                                        <div className="testi-rightbox">
                                            <a href="#">
                                                <h3>High Cholesterol</h3>
                                            </a>
                                            <p>Cholesterol is a type of fat, it is a
                                                double-edged sword Cholesterol is a type of fat </p>

                                            <div className="d-block align-items-center justify-content-between">
                                                <div>
                                                    <strong> By: Dr Aman Agarwal </strong>
                                                </div>
                                                <div className="main-btn mt-lg-0 mt-1">
                                                    <a href="#">Read More <span><i
                                                        className="fa-solid fa-arrow-right"></i></span></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <a href="#">
                                            <img src="/img/blog3.jpg" className="img-fluid w-100" alt="" />
                                        </a>
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

export default BlogCarousel