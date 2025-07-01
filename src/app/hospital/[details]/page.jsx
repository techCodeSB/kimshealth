import BlogCarousel from '@/components/BlogCarousel';
import ExcellenceCarousel from '@/components/ExcellenceCarousel';
import ExpertCarousel from '@/components/ExpertCarousel';
import Footer from '@/components/Footer';
import FromDoctor from '@/components/FromDoctor';
import Header from '@/components/Header';
import OtherHospital from '@/components/OtherHospital';
import TestimonialSection from '@/components/TestimonialSection';
import React from 'react';


const HospitalDetails = () => {
    return (
        <>
            <Header />
            <div role="main" className="main">
                {/* <!-- <section className="section details-page-before py-0">
        <div className="procedures-details-page-header">
            <div className="container-fluid px-0">
                <div className="row">
                    <div className="col-md-6 details-proceduce-banner-left-col">

                        <div className="hospital-banner-container">
                            <div className="breadcrumb-wrapper py-2 ps-2 ms-1">
                                <div className="row">
                                    <div className="col-12 px-0">
                                        <ul className="breadcrumb mb-0">
                                            <li>
                                                <a href="index.php">Home</a>
                                            </li>
                                            <li>
                                                <a href="hospital-master.php">Our Hospital</a>
                                            </li>
                                            <li className="active"> KIMSHEALTH Trivandrum </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="details-banner">
                                <div className="details-heading">
                                    <div className="hospital-content">
                                        <ul>
                                            <li className="hospital-icon-custom"> KIMSHEALTH Trivandrum </li>
                                            <li className="location-icon-custom"> KIMSHEALTH, P.B.No.1, Anayara P.O, Trivandrum – 695029, Kerala, India</li>
                                            <li className="telephone-icon-custom"><a href="tel:04714711000"> Appointment Number- 0471 471 1000</a></li>
                                            <li className="send-custom-icon"><a href="#"> Get Direction</a></li>
                                        </ul>
                                        <div className="d-flex align-items-center">
                                            <img src="/img/google.png" alt="Google Logo" className="me-2" />
                                            <div className="star-rating" data-rating="4.7">
                                                <i className="fa fa-solid fa-star ms-1" style={{color: "#ffc107"}}></i>
                                                <i className="fa fa-solid fa-star ms-1" style={{color: "#ffc107"}}></i>
                                                <i className="fa fa-solid fa-star ms-1" style={{color: "#ffc107"}}></i>
                                                <i className="fa fa-solid fa-star ms-1" style={{ color: "#ffc107" }}></i>
                                                <i className="fa fa-solid fa-star-half ms-1" style={{ color: "#ffc107" }}></i>
                                                4.5
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 details-proceduce-banner-right-col">
                        <div className="owl-carousel owl-theme hospital-details-slider">
                            <div className="item">
                                <img src="/img/hospital-details-img1.jpg" alt="" className="img-fluid w-100" />
                            </div>
                            <div className="item">
                                <img src="/img/hospital-details-img1.jpg" alt="" className="img-fluid w-100" />
                            </div>

                            <div className="item">
                                <img src="/img/hospital-details-img1.jpg" alt="" className="img-fluid w-100" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section> --> */}

                <section className="section pt-3 hospital-details-page-section d-lg-block  d-none">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5 pt-4">
                                <div className="breadcrumb-wrapper py-2 ps-2 ms-1">
                                    <div className="row">
                                        <div className="col-12 px-0">
                                            <ul className="breadcrumb mb-0">
                                                <li>
                                                    <a href="index.php">Home</a>
                                                </li>
                                                <li>
                                                    <a href="hospital-master.php">Our Hospital</a>
                                                </li>
                                                <li className="active"> KIMSHEALTH Trivandrum </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-7">
                                <div className="row">
                                    <div className="col-md-6 ">
                                        <div className="details-banner">
                                            <div className="details-heading">
                                                <div className="hospital-content">
                                                    <ul>
                                                        <li className="hospital-icon-custom"> KIMSHEALTH Trivandrum </li>
                                                        <li> KIMSHEALTH, P.B.No.1, Anayara P.O, Trivandrum – 695029, Kerala, India</li>

                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="details-banner">
                                            <div className="details-heading">
                                                <div className="hospital-content">
                                                    <ul>
                                                        <li className="telephone-icon-custom"><a href="tel:04714711000"> Appointment Number- 0471 471 1000</a></li>
                                                        <li className="send-custom-icon"><a href="#"> Get Direction</a></li>
                                                    </ul>
                                                    <div className="d-flex align-items-center">
                                                        <img src="/img/google.png" alt="Google Logo" className="me-2" />
                                                        <div className="star-rating" data-rating="4.7">
                                                            <i className="fa fa-solid fa-star ms-1" style={{ color: "#ffc107" }}></i>
                                                            <i className="fa fa-solid fa-star ms-1" style={{ color: "#ffc107" }}></i>
                                                            <i className="fa fa-solid fa-star ms-1" style={{ color: "#ffc107" }}></i>
                                                            <i className="fa fa-solid fa-star ms-1" style={{ color: "#ffc107" }}></i>
                                                            <i className="fa fa-solid fa-star-half ms-1" style={{ color: "#ffc107" }}></i>
                                                            4.5
                                                        </div>
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

                <section className="section hospital-details-page-md-section py-0  d-lg-none  d-block">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 px-0">
                                <img src="/img/hospital-detailsbg.jpg" alt="" className="img-fluid hospital-details-mobile-banner" />
                            </div>
                            <div className="col-12">
                                <div className="row">
                                    <div className="col-12 pt-">
                                        <div className="breadcrumb-wrapper py-2 ps-2 ms-1">
                                            <div className="row">
                                                <div className="col-12 px-0">
                                                    <ul className="breadcrumb mb-0">
                                                        <li>
                                                            <a href="index.php">Home</a>
                                                        </li>
                                                        <li>
                                                            <a href="hospital-master.php">Our Hospital</a>
                                                        </li>
                                                        <li className="active"> KIMSHEALTH Trivandrum </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="details-banner">
                                                    <div className="details-heading">
                                                        <div className="hospital-content">
                                                            <ul>
                                                                <li className="hospital-icon-custom"> KIMSHEALTH Trivandrum </li>
                                                                <li> KIMSHEALTH, P.B.No.1, Anayara P.O, Trivandrum – 695029, Kerala, India</li>
                                                                <li className="telephone-icon-custom"><a href="tel:04714711000"> Appointment Number- 0471 471 1000</a></li>
                                                                <li className="send-custom-icon"><a href="#"> Get Direction</a></li>
                                                            </ul>

                                                            <div className="d-flex align-items-center mt-2">
                                                                <img src="/img/google.png" alt="Google Logo" className="me-2" />
                                                                <div className="star-rating" data-rating="4.7">
                                                                    <i className="fa fa-solid fa-star ms-1" style={{ color: "#ffc107" }}></i>
                                                                    <i className="fa fa-solid fa-star ms-1" style={{ color: "#ffc107" }}></i>
                                                                    <i className="fa fa-solid fa-star ms-1" style={{ color: "#ffc107" }}></i>
                                                                    <i className="fa fa-solid fa-star ms-1" style={{ color: "#ffc107" }}></i>
                                                                    <i className="fa fa-solid fa-star-half ms-1" style={{ color: "#ffc107" }}></i>
                                                                    4.5
                                                                </div>
                                                            </div>
                                                        </div>
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




                <section className="section py-4 d-lg-block d-none">
                    <div className="container">
                        <div className="custom-from">
                            <div className="row justify-content-between">

                                <div className="col-xl-3 col-lg-3 col-md-3 col-12">
                                    <div className="input-group mb-lg-0 mb-3">
                                        <span className="input-group-text" id="from-icon"><i
                                            className="fa-solid icon-location-pin"></i></span>
                                        <select className="form-select from-location">
                                            <option >Select Trivandrum</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>

                                    </div>
                                </div>

                                <div className="col-xl-3 col-lg-3 col-md-3 col-12">
                                    <div className="input-group mb-lg-0 mb-3">
                                        <span className="input-group-text" id="from-icon"><i
                                            className="fa-solid fa-magnifying-glass"></i></span>
                                        <input type="text" className="form-control pe-0" placeholder="Search doctor/specialities"
                                            aria-label="Username" aria-describedby="basic-addon1" />
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-3 col-12">
                                    <div className="from-btn">
                                        <button type="button" className="btn">Book An Appointment</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!--=========== fromsection end =======--> */}
                <section className="section py-0 d-lg-block d-none">
                    <div className="container-fluid ps-0">
                        <div className="row">
                            <div className="cta-col ctn-left-col">
                                <div className="cta-diff">
                                    <h3>I am here to <i className="icon-arrow-right"></i></h3>
                                </div>
                            </div>
                            <div className="cta-col">
                                <a href="#">
                                    <div className="cta-diff">
                                        <div className="d-flex align-items-center justify-content-center">
                                            <img src="/img/doctor.png" alt="" />
                                            <h3>Find a <br /> <span>Doctor</span></h3>
                                            {/* <!-- <div className="cta-right-arrow">
                                        <img src="/img/right-arrow.svg" className="img-fluid" alt="" />
                                    </div> --> */}
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="cta-col">
                                <a href="#">
                                    <div className="cta-diff">
                                        <div className="d-flex align-items-center justify-content-center">
                                            <img src="/img/appointment.png" alt="" />
                                            <h3>Book an <br /> <span>Appointment</span></h3>
                                            {/* <!-- <div className="cta-right-arrow">
                                        <img src="/img/right-arrow.svg" className="img-fluid" alt="" />
                                    </div> --> */}
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="cta-col">
                                <a href="#">
                                    <div className="cta-diff">
                                        <div className="d-flex align-items-center justify-content-center">
                                            <img src="/img/health.png" alt="" />
                                            <h3>Book a <br /> <span>Health Checkup</span></h3>
                                            {/* <!-- <div className="cta-right-arrow">
                                        <img src="/img/right-arrow.svg" className="img-fluid" alt="" />
                                    </div> --> */}
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="cta-col">
                                <a href="#">
                                    <div className="cta-diff">
                                        <div className="d-flex align-items-center justify-content-center">
                                            <img src="/img/opinion.png" alt="" />
                                            <h3>Get <br /> <span>Second Opinion</span></h3>
                                            {/* <!-- <div className="cta-right-arrow">
                                        <img src="/img/right-arrow.svg" className="img-fluid" alt="" />
                                    </div> --> */}
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section pt-lg-0 pt-2 pb-0 d-lg-none d-block" data-aos="fade-up">
                    <div className="container-fluid ps-0">
                        <div className="row">
                            <div className="cta-col ctn-left-col">
                                <div className="cta-diff">
                                    <div className="d-flex align-items-center justify-content-center">
                                        <img src="/img/appointment-mb.png" alt="" />
                                        <h3>Book an <br /> Appointment</h3>
                                        {/* <!-- <div className="cta-right-arrow">
                                    <img src="/img/right-arrow.svg" className="img-fluid" alt="" />
                                </div> --> */}
                                    </div>
                                </div>
                            </div>
                            <div className="cta-col">
                                <a href="#">
                                    <div className="cta-diff">
                                        <div className="d-flex align-items-center justify-content-center">
                                            <img src="/img/doctor.png" alt="" />
                                            <h3>Find a <br /> <span>Doctor</span></h3>
                                            {/* <!-- <div className="cta-right-arrow">
                                        <img src="/img/right-arrow.svg" className="img-fluid" alt="" />
                                    </div> --> */}
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="cta-col">
                                <a href="#">
                                    <div className="cta-diff">
                                        <div className="d-flex align-items-center justify-content-center">
                                            <img src="/img/opinion.png" alt="" />
                                            <h3>Health <br /> <span> Check-up</span></h3>
                                            {/* <!-- <div className="cta-right-arrow">
                                        <img src="/img/right-arrow.svg" className="img-fluid" alt="" />
                                    </div> --> */}
                                        </div>
                                    </div>
                                </a>
                            </div>


                        </div>
                    </div>
                </section>

                <section className="section hospital-details-overview-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5 my-auto order-lg-1 order-2">
                                <div className="details-right-col text-center">
                                    <img src="/img/hospital-details-overview-img.jpg" alt="" className="img-fluid w-100" />
                                    <h5>KIMSHEALTH Trivandrum</h5>
                                    <p>An Integrated Healthcare Destination </p>
                                    <div className="main-btn">
                                        <a href="#">Watch Video <span><i className="fa-solid fa-arrow-right"></i></span></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-7 sub-heading order-lg-2 order-1 mb-lg-0 mb-3">
                                <div className="main-heading">
                                    <h2 className="mb-1">KIMSHEALTH Trivandrum</h2>
                                    <h4 className="mb-3">Where Expertise Meets Care</h4>
                                </div>

                                <p>KIMSHEALTH Trivandrum, the flagship hospital of the KIMSHEALTH Group, is a premier quaternary care facility offering comprehensive medical services across all specialties. Established in 2002, it is accredited by NABH and ACHSI, reflecting its commitment to international healthcare standards. </p>
                                <p>With over 650 beds, advanced ICUs, modern operating theatres, and a robust transplant program, it delivers high-quality, patient-centered care. Supported by renowned doctors and 23 academic programs, it is also a hub for medical education.</p>
                                <p>The International Patient Relations Department ensures a smooth experience for global patients through visa support, language services, and personalized care. KIMSHEALTH stands for courtesy, compassion, and competence in every aspect of care.</p>

                                <div className="details-counter-section">
                                    <div className="row">
                                        <div className="col-md-3 col-6 mb-lg-0 mb-3">
                                            <div className="details-counter-box">
                                                <h2><span className="counter">100</span> <span>+</span></h2>
                                                <p>Beds Facility</p>
                                            </div>
                                        </div>
                                        <div className="col-md-3 col-6 mb-lg-0 mb-3">
                                            <div className="details-counter-box">
                                                <h2><span className="counter">100</span> <span>+</span></h2>
                                                <p>Doctors</p>
                                            </div>
                                        </div>
                                        <div className="col-md-3 col-6 mb-lg-0 mb-3">
                                            <div className="details-counter-box">
                                                <h2><span className="counter">100</span> <span>+</span></h2>
                                                <p>Specialities </p>
                                            </div>
                                        </div>
                                        <div className="col-md-3 col-6 mb-lg-0 mb-3">
                                            <div className="details-counter-box">
                                                <h2><span className="counter">100</span> <span>+</span></h2>
                                                <p>Trained Staff</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <div className="line-divider"></div>
                <ExcellenceCarousel/>


                <div className="line-divider"> </div>
                <ExpertCarousel/>

                <div className="line-divider"></div>
                <TestimonialSection/>

                <div className="line-divider"></div>
                <FromDoctor/>

                <div className="line-divider"></div>
                <BlogCarousel/>

                <div className="line-divider"></div>
                <OtherHospital/>


            </div>
            <Footer />
        </>
    )
}

export default HospitalDetails