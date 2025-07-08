import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'

const AboutUs = () => {
    return (
        <>
            <Header />
            <div role="main" className="main">
                <div className="about-us-main-page">
                    <section className="section details-page-before py-0">
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
                                                            <li className="active"> About Us </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="details-banner">
                                                <div className="details-heading">
                                                    <div className="hospital-content">
                                                        <div className="row">
                                                            <div className="col-md-6 col-6 mb-3">
                                                                <div className="d-flex align-items-center">
                                                                    <div>
                                                                        <img src="/img/about-hospital-ic.png" alt=""
                                                                            className="img-fluid"/>
                                                                    </div>
                                                                    <div>
                                                                        <h3>5</h3>
                                                                        <p>Hospitals</p>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="col-md-6 col-6 mb-3">
                                                                <div className="d-flex align-items-center">
                                                                    <div>
                                                                        <img src="/img/about-hospital-ic.png" alt=""
                                                                            className="img-fluid"/>
                                                                    </div>
                                                                    <div>
                                                                        <h3>7</h3>
                                                                        <p>Medical Centres</p>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="col-md-6 col-6 mb-3">
                                                                <div className="d-flex align-items-center">
                                                                    <div>
                                                                        <img src="/img/about-doctor-ic.png" alt="" className="img-fluid"/>
                                                                    </div>
                                                                    <div>
                                                                        <h3>500 +</h3>
                                                                        <p>Doctors</p>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="col-md-6 col-6 mb-3">
                                                                <div className="d-flex align-items-center">
                                                                    <div>
                                                                        <img src="/img/about-patient-ic.png" alt=""
                                                                            className="img-fluid"/>
                                                                    </div>
                                                                    <div>
                                                                        <h3>10 Millions+</h3>
                                                                        <p>Happy Patients</p>
                                                                    </div>
                                                                </div>
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
                                                <img src="/img/hospital-details-img1.jpg" alt="" className="img-fluid w-100"/>
                                            </div>
                                            <div className="item">
                                                <img src="/img/hospital-details-img1.jpg" alt="" className="img-fluid w-100"/>
                                            </div>

                                            <div className="item">
                                                <img src="/img/hospital-details-img1.jpg" alt="" className="img-fluid w-100"/>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <!-- <div className="col-md-6">
                                        <img src="/img/details-banner.png" alt="" className="img-fluid w-100"/>
                                    </div> --> */}
                                </div>
                            </div>
                        </div>

                    </section>

                    <section className="section">
                        <div className="container">
                            <div className="row">

                                <div className="col-md-12 sub-heading order-lg-2 order-1 mb-lg-0 mb-3">
                                    <div className="main-heading">
                                        <h2 className="mb-lg-1">About KIMSHEALTH</h2>
                                        <h3 className="mb-lg-3">World-class medical care for patients everywhere.</h3>
                                    </div>

                                    <p>KIMSHEALTH is a quaternary care hospital network offering end-to-end healthcare services,
                                        right from
                                        primary to quaternary care in India and Middle-east. KIMSHEALTH has pioneered the quality
                                        revolution in the field of healthcare delivery in the country, making quality healthcare
                                        affordable and accessible to everyone. Due to our relentless and keen focus on quality
                                        healthcare delivery, KIMSHEALTH has been accredited by the National Accreditation Board for
                                        Hospitals (NABH) and the Australian Council on Healthcare Standards International (ACHSI)
                                        2006, thus making it the first hospital in India with both National & International
                                        accreditations. In addition to this, the Blood Center is also accredited by NABH and the
                                        laboratory is NABL (National Accreditation Board for Testing and Calibration of
                                        Laboratories) accredited. </p>
                                    <p>Today, KIMSHEALTH stands among the top 10 hospitals in India with top-notch healthcare
                                        delivery systems, evidence-based medicine, high-end facilities and quality-oriented
                                        practices. The Group, started in the year 2002 with its flagship quaternary-care hospital at
                                        Trivandrum. From there. . . . <span> Read More</span></p>

                                    <div className="row">
                                        <div className="col-md-4 mb-3 main-heading sub-heading mission-box ">
                                            <div className="d-flex align-items-center mb-2">
                                                <img src="/img/mission.png" alt="" className="img-fluid me-2"/>
                                                    <h3 className="mb-0">Our Mission</h3>
                                            </div>
                                            <p>To provide high quality cost effective care with courtesy, compassion and competence.
                                            </p>
                                        </div>

                                        <div className="col-md-4 mb-3 main-heading sub-heading mission-box ">
                                            <div className="d-flex align-items-center mb-2">
                                                <img src="/img/vision.png" alt="" className="img-fluid me-2"/>
                                                    <h3 className="mb-0">Our Vision</h3>
                                            </div>
                                            <p>To be a leading healthcare organization of excellence that transforms lives through
                                                exceptional care.</p>
                                        </div>

                                        <div className="col-md-4 mb-3 main-heading sub-heading mission-box ">
                                            <div className="d-flex align-items-center mb-2">
                                                <img src="/img/values.png" alt="" className="img-fluid me-2"/>
                                                    <h3 className="mb-0">Our Values</h3>
                                            </div>
                                            <p>Compassion, Affordability, Ethics, Quality, Excellence, Transparency, Innovation,
                                                Trust.</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>




                    <div className="line-divider"> </div>

                    <section className="section chairman-section pb-0">
                        <div className="container">
                            <div className="main-heading">
                                <h2>Chairman's Message</h2>
                            </div>

                            <div className="row">
                                <div className="col-md-5 mt-lg-auto mb-0">
                                    <img src="/img/chairman-img.png" alt="" className="img-fluid"/>
                                </div>
                                <div className="col-md-7 mb-3 pb-lg-5 mt-3 mt-lg-0">
                                    <div className="sub-heading main-heading">
                                        <p>KIMSHEALTH has transformed healthcare delivery by prioritizing quality, patient safety,
                                            and ethical practices. Built on a foundation of competence, compassion, and advanced
                                            technology, we are now the largest healthcare network in Kerala and among the top in
                                            India.</p>
                                        <p>With a team of skilled professionals, world-class protocols, and cutting-edge
                                            infrastructure, we deliver high-quality care while balancing rising expectations and
                                            medical costs. For us, healthcare is more than a profession—it’s a calling.</p>
                                        <p>Now in our 18th year, we operate across six countries, with 600 doctors and 6,000
                                            employees serving millions of patients. Our flagship hospital in Thiruvananthapuram is
                                            expanding to 900 beds with the launch of KIMSHEALTH East, a modern facility offering
                                            advanced surgical and transplant programs. Designed for sustainability and excellence,
                                            it aspires to IGBC Platinum certification.</p>
                                        <p>Our mission remains: to deliver cost-effective, compassionate care with competence and
                                            courtesy.</p>
                                        <p>Wish you good health!</p>
                                        <h3>Dr. M. I. Sahadulla</h3>
                                        <p>Group Chairman & Managing Director, KIMSHEALTH</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </section>


                    <div className="line-divider"></div>
                    <section className="section expert-section">
                        <div className="container">
                            <div className="main-heading">
                                <h2>Our Leadership</h2>
                            </div>

                            <div className="row">
                                <div className="col-md-3 col-6 mb-4">
                                    <div className="expert-card" data-aos="fade-right">
                                        <div className="card border-0 p-lg-4 p-0">
                                            <div className="card-top">
                                                <a href="#">
                                                    <img src="/img/leader1.jpg" className="img-fluid w-100" alt=""/>
                                                </a>
                                            </div>
                                            <div className="card-content">
                                                <h4>Dr. M. I. Sahadulla</h4>
                                                <p>Group Chairman & Managing Director</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="col-md-3 col-6 mb-4">
                                    <div className="expert-card" data-aos="fade-right">
                                        <div className="card border-0 p-lg-4 p-0">
                                            <div className="card-top">
                                                <a href="#">
                                                    <img src="/img/leader1.jpg" className="img-fluid w-100" alt=""/>
                                                </a>
                                            </div>
                                            <div className="card-content">
                                                <h4>Dr. M. I. Sahadulla</h4>
                                                <p>Group Chairman & Managing Director</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div className="col-md-3 col-6 mb-4">
                                    <div className="expert-card" data-aos="fade-right">
                                        <div className="card border-0 p-lg-4 p-0">
                                            <div className="card-top">
                                                <a href="#">
                                                    <img src="/img/leader1.jpg" className="img-fluid w-100" alt=""/>
                                                </a>
                                            </div>
                                            <div className="card-content">
                                                <h4>Dr. M. I. Sahadulla</h4>
                                                <p>Group Chairman & Managing Director</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div className="col-md-3 col-6 mb-4">
                                    <div className="expert-card" data-aos="fade-right">
                                        <div className="card border-0 p-lg-4 p-0">
                                            <div className="card-top">
                                                <a href="#">
                                                    <img src="/img/leader1.jpg" className="img-fluid w-100" alt=""/>
                                                </a>
                                            </div>
                                            <div className="card-content">
                                                <h4>Dr. M. I. Sahadulla</h4>
                                                <p>Group Chairman & Managing Director</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div className="col-md-3 col-6 mb-4">
                                    <div className="expert-card" data-aos="fade-right">
                                        <div className="card border-0 p-lg-4 p-0">
                                            <div className="card-top">
                                                <a href="#">
                                                    <img src="/img/leader1.jpg" className="img-fluid w-100" alt=""/>
                                                </a>
                                            </div>
                                            <div className="card-content">
                                                <h4>Dr. M. I. Sahadulla</h4>
                                                <p>Group Chairman & Managing Director</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>


                                <div className="col-md-3 col-6 mb-4">
                                    <div className="expert-card" data-aos="fade-right">
                                        <div className="card border-0 p-lg-4 p-0">
                                            <div className="card-top">
                                                <a href="#">
                                                    <img src="/img/leader1.jpg" className="img-fluid w-100" alt=""/>
                                                </a>
                                            </div>
                                            <div className="card-content">
                                                <h4>Dr. M. I. Sahadulla</h4>
                                                <p>Group Chairman & Managing Director</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div className="col-md-3 col-6 mb-4">
                                    <div className="expert-card" data-aos="fade-right">
                                        <div className="card border-0 p-lg-4 p-0">
                                            <div className="card-top">
                                                <a href="#">
                                                    <img src="/img/leader1.jpg" className="img-fluid w-100" alt=""/>
                                                </a>
                                            </div>
                                            <div className="card-content">
                                                <h4>Dr. M. I. Sahadulla</h4>
                                                <p>Group Chairman & Managing Director</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div className="col-md-3 col-6 mb-4">
                                    <div className="expert-card" data-aos="fade-right">
                                        <div className="card border-0 p-lg-4 p-0">
                                            <div className="card-top">
                                                <a href="#">
                                                    <img src="/img/leader1.jpg" className="img-fluid w-100" alt=""/>
                                                </a>
                                            </div>
                                            <div className="card-content">
                                                <h4>Dr. M. I. Sahadulla</h4>
                                                <p>Group Chairman & Managing Director</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>


                                <div className="col-md-3 col-6 mb-4">
                                    <div className="expert-card" data-aos="fade-right">
                                        <div className="card border-0 p-lg-4 p-0">
                                            <div className="card-top">
                                                <a href="#">
                                                    <img src="/img/leader1.jpg" className="img-fluid w-100" alt=""/>
                                                </a>
                                            </div>
                                            <div className="card-content">
                                                <h4>Dr. M. I. Sahadulla</h4>
                                                <p>Group Chairman & Managing Director</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>


                                <div className="col-md-3 col-6 mb-4">
                                    <div className="expert-card" data-aos="fade-right">
                                        <div className="card border-0 p-lg-4 p-0">
                                            <div className="card-top">
                                                <a href="#">
                                                    <img src="/img/leader1.jpg" className="img-fluid w-100" alt=""/>
                                                </a>
                                            </div>
                                            <div className="card-content">
                                                <h4>Dr. M. I. Sahadulla</h4>
                                                <p>Group Chairman & Managing Director</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>


                                <div className="col-md-3 col-6 mb-4">
                                    <div className="expert-card" data-aos="fade-right">
                                        <div className="card border-0 p-lg-4 p-0">
                                            <div className="card-top">
                                                <a href="#">
                                                    <img src="/img/leader1.jpg" className="img-fluid w-100" alt=""/>
                                                </a>
                                            </div>
                                            <div className="card-content">
                                                <h4>Dr. M. I. Sahadulla</h4>
                                                <p>Group Chairman & Managing Director</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="col-md-3 col-6 mb-4">
                                    <div className="expert-card" data-aos="fade-right">
                                        <div className="card border-0 p-lg-4 p-0">
                                            <div className="card-top">
                                                <a href="#">
                                                    <img src="/img/leader1.jpg" className="img-fluid w-100" alt=""/>
                                                </a>
                                            </div>
                                            <div className="card-content">
                                                <h4>Dr. M. I. Sahadulla</h4>
                                                <p>Group Chairman & Managing Director</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>


                    <div className="line-divider"></div>
                    <section className="section">
                        <div className="container">
                            <div className="main-heading">
                                <h2>Awards & Achievements</h2>
                            </div>

                            <div className="row">
                                <div className="col-md-4 mb-3">
                                    <div className="awards-box">
                                        <p>Kerala state Pollution Control Board Award 2004,2006</p>
                                    </div>
                                </div>

                                <div className="col-md-4 mb-3">
                                    <div className="awards-box">
                                        <p>Health Tourism award (2005)</p>
                                    </div>
                                </div>

                                <div className="col-md-4 mb-3">
                                    <div className="awards-box">
                                        <p>Health Tourism award (2005)</p>
                                    </div>
                                </div>

                                <div className="col-md-4 mb-3">
                                    <div className="awards-box">
                                        <p>Trivandrum Management Association Corporate Social Responsibility Award 2012</p>
                                    </div>
                                </div>

                                <div className="col-md-4 mb-3">
                                    <div className="awards-box">
                                        <p>Health Tourism award (2005)</p>
                                    </div>
                                </div>

                                <div className="col-md-4 mb-3">
                                    <div className="awards-box">
                                        <p>Health Tourism award (2005)</p>
                                    </div>
                                </div>

                                <div className="col-md-4 mb-3">
                                    <div className="awards-box">
                                        <p>Health Tourism award (2005)</p>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <div className="awards-box">
                                        <p>Health Tourism award (2005)</p>
                                    </div>
                                </div>

                                <div className="col-md-4 mb-3">
                                    <div className="awards-box">
                                        <p>Health Tourism award (2005)</p>
                                    </div>
                                </div>

                                <div className="col-md-6 mb-3">
                                    <div className="awards-box">
                                        <p>AV Gandhi Memorial Awards for Excellence in Cardiology (2007 & 2008)</p>
                                    </div>
                                </div>

                                <div className="col-md-6 mb-3">
                                    <div className="awards-box">
                                        <p>Golden Peacock Award 2013 for Quality & in 2012 for Business Excellence</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default AboutUs