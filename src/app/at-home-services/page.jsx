import BlogCarousel from '@/components/BlogCarousel';
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import TestimonialSection from '@/components/TestimonialSection';
import React from 'react';


const HomeServices = () => {
    return (
        <>
            <Header />
            <div role="main" className="main">
                <div className="home-service-main-page">
                    <div className="page-header">
                        <div className="container">
                            <h2>At Home Services</h2>
                        </div>
                    </div>
                    <section className="breadcrumb-wrapper py-2">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <ul className="breadcrumb mb-0">
                                        <li>
                                            <a href="index.php">Home</a>
                                        </li>
                                        <li className="active"> At Home Services </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="section">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-5 mb-lg-0 mb-4 order-lg-1 order-2">
                                    <div className="details-right-col text-center">
                                        <img src="/img/home-services-left-col.jpg" alt="" className="img-fluid w-100"/>
                                            <h5>KIMSHEALTH Home Care Services</h5>
                                            <p>KIMSHEALTH Home Care Services is a private, dedicated . . . . </p>
                                            <div className="main-btn">
                                                <a href="#">Watch Video <span><i className="fa-solid fa-arrow-right"></i></span></a>
                                            </div>
                                    </div>
                                </div>

                                <div className="col-md-7 home-service-right-col mb-3  order-lg-2 order-1">
                                    <div className="main-heading sub-heading">
                                        <h2>KIMSHEALTH Home Care Services: Compassionate Healthcare in the Comfort of Your Home</h2>
                                        <p>KIMSHEALTH Home Care Services offers compassionate, professional medical support in the comfort of your home. Designed for patients who require clinical care but prefer to recover in familiar surroundings, our services bring hospital-quality nursing directly to your doorstep. Our team of trained and certified nurses provide a range of services including post-operative care, elderly care, chronic disease management, wound care, medication administration, and more.</p>
                                        <p>Whether you're managing a long-term condition or recovering from surgery, KIMSHEALTH ensures personalized attention and round-the-clock support tailored to your needs. Our goal is to enhance patient comfort, reduce hospital readmissions, and promote faster recovery through skilled,
                                            dignified, and attentive care.</p>
                                        <p>Backed by the trusted legacy of KIMSHEALTH, one of the region’s leading healthcare networks, our home care services uphold the highest standards of medical excellence, safety, and compassion. With KIMSHEALTH, you’re not just receiving care — you’re being cared for like family.</p>
                                    </div>
                                </div>

                            </div>

                            <div className="row">
                                <div className="col-md-4">
                                    <div className="home-service-card">
                                        <div className="home-service-card-image text-center">
                                            <img src="/img/home-services-doctor.png" alt="" className="img-fluid"/>
                                        </div>
                                        <div className="home-service-content text-center">
                                            <h3>Doctor Consultation</h3>
                                            <p>We value every guest and believe in offering personalized believe in offering personalized believe in offering personalized </p>
                                            <div className="main-btn text-center">
                                                <a href="#">Read More <span><i className="fa-solid fa-arrow-right"></i></span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <div className="home-service-card">
                                        <div className="home-service-card-image text-center">
                                            <img src="/img/home-service-microscope.png" alt="" className="img-fluid"/>
                                        </div>
                                        <div className="home-service-content text-center">
                                            <h3>Laboratory Services</h3>
                                            <p>We value every guest and believe in offering personalized believe in offering personalized believe in offering personalized </p>
                                            <div className="main-btn text-center">
                                                <a href="#">Read More <span><i className="fa-solid fa-arrow-right"></i></span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="home-service-card">
                                        <div className="home-service-card-image text-center">
                                            <img src="/img/home-service-nurse.png" alt="" className="img-fluid"/>
                                        </div>
                                        <div className="home-service-content text-center">
                                            <h3>Nursing Care</h3>
                                            <p>We value every guest and believe in offering personalized believe in offering personalized believe in offering personalized </p>
                                            <div className="main-btn text-center">
                                                <a href="#">Read More <span><i className="fa-solid fa-arrow-right"></i></span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <div className="home-service-card">
                                        <div className="home-service-card-image text-center">
                                            <img src="/img/home-service-scooter.png" alt="" className="img-fluid"/>
                                        </div>
                                        <div className="home-service-content text-center">
                                            <h3>Medicine Delivery</h3>
                                            <p>We value every guest and believe in offering personalized believe in offering personalized believe in offering personalized </p>
                                            <div className="main-btn text-center">
                                                <a href="#">Read More <span><i className="fa-solid fa-arrow-right"></i></span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <div className="home-service-card">
                                        <div className="home-service-card-image text-center">
                                            <img src="/img/home-service-wheelchair.png" alt="" className="img-fluid"/>
                                        </div>
                                        <div className="home-service-content text-center">
                                            <h3>Equipment Rentals</h3>
                                            <p>We value every guest and believe in offering personalized believe in offering personalized believe in offering personalized </p>
                                            <div className="main-btn text-center">
                                                <a href="#">Read More <span><i className="fa-solid fa-arrow-right"></i></span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <div className="home-service-card">
                                        <div className="home-service-card-image text-center">
                                            <img src="/img/home-service-physical-therapy.png" alt="" className="img-fluid"/>
                                        </div>
                                        <div className="home-service-content text-center">
                                            <h3>Physiotherapy At Home</h3>
                                            <p>We value every guest and believe in offering personalized believe in offering personalized believe in offering personalized </p>
                                            <div className="main-btn text-center">
                                                <a href="#">Read More <span><i className="fa-solid fa-arrow-right"></i></span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="line-divider"></div>
                    <TestimonialSection/>


                    <div className="line-divider"></div>
                    <BlogCarousel/>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default HomeServices