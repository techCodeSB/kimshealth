import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'

const MediaAndEventsDetails = () => {
    return (
        <>
            <Header />
            <div role="main" className="main">
                <div className="media-details-main-page">
                    <section className="section details-page-before py-0">
                        <div className="procedures-details-page-header inner-pages-header">
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
                                                                <a href="#">Media & Events</a>
                                                            </li>
                                                            <li className="active"> CME session </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="details-banner">
                                                <div className="details-heading">
                                                    <h3 className="mb-2">CME Session</h3>
                                                    <ul>
                                                        <li className="hospital-doctor"> By: Dr. Shijukumar, Consultant & Chief Intensivist, Pediatric Critical Care </li>
                                                        <li className="chat-ic">Topic: Fluid Management in Children</li>
                                                        <li className="hospital-icon-custom"> KIMSHEALTH Trivandrum </li>
                                                    </ul>
                                                    <ul className="mt-3">

                                                        <li className="hospital-doctor"> By: Anu K Vasu, Associate Consultant – Pediatric Gastroenterology, Hepatology & Liver Transplantation</li>
                                                        <li className="chat-ic">Topic: Acute Liver Failure in Children</li>
                                                        <li className="hospital-icon-custom"> KIMSHEALTH Trivandrum </li>
                                                    </ul>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-6 details-proceduce-banner-right-col">
                                        <img src="/img/media-details-rigt-bg.png" className="img-fluid details-banner-image" alt="" />
                                    </div>

                                    {/* <!-- <div className="col-md-6">
                                        <img src="/img/details-banner.png" alt="" className="img-fluid w-100">
                                    </div> --> */}
                                </div>
                            </div>
                        </div>
                    </section>


                    <section className="section">
                        <div className="container">
                            <div className="date-heading main-heading sub-heading">
                                <ul>
                                    <li className="calender-doc mb-2">28th April 2025</li>
                                </ul>
                                <h3 className="mb-4">KIMSHEALTH CME Session</h3>

                                <p>KIMSHEALTH, Trivandrum, in association with IAP Kollam, successfully conducted a CME session featuring insightful discussions on critical pediatric topics.</p>
                                <p>Dr. Shijukumar, Consultant & Chief Intensivist, Pediatric Critical Care, led a session on "Fluid Management in Children," while Dr. Anu K Vasu, Associate Consultant – Pediatric
                                    Gastroenterology, Hepatology & Liver Transplantation, presented a case-based discussion on "Acute Liver Failure in Children."</p>
                                <p>The event saw active participation from 37 doctors, making it a valuable knowledge-sharing platform.</p>
                            </div>
                        </div>
                    </section>

                    <div className="line-divider"> </div>

                    <section className="section d-lg-block d-none">
                        <div className="container">
                            <div className="row justify-content-between" data-aos="fade-right">
                                <div className="col-md-6 col-8">
                                    <div className="main-heading">
                                        <h2>Recent Media & Events </h2>
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
                                <div className="col-xl-3 col-lg-3 col-md-3 col-12">
                                    <div className="media-card" data-aos="fade-right" data-aos-duration="2200" data-aos-delay="100">
                                        <div className="media-img">
                                            <a href="#">
                                                <img src="/img/media1.jpg" className="img-fluid w-100" alt="" />
                                            </a>
                                        </div>
                                        <div className="media-content">
                                            <p>At KIMSHEALTH, we believe in the power of prevention.Join us in recognizing National</p>
                                            <div className="media-border-bottom">
                                                <div className="d-flex align-items-center justify-content-between mt-3">
                                                    <div className="media-name">
                                                        <div>
                                                            <img src="/img/kims-small-logo.png" className="img-fluid" alt="" />
                                                        </div>
                                                        <p>KIMSHEALTH <br/> 10th June 2024</p>
                                                    </div>
                                                    <div className="media-social">
                                                        <img src="/img/facebook.svg" className="img-fluid" alt="" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="d-flex align-items-center justify-content-between mt-2">
                                                <div className="media-heart">
                                                    <div>
                                                        <p><span> <img src="/img/heart.png" className="img-fluid" alt="" /></span>8</p>
                                                    </div>
                                                    <img src="/img/chat.png" className="img-fluid" alt="" />
                                                </div>
                                                <div className="media-share">
                                                    <p><span> <img src="/img/share.png" className="img-fluid" alt="" /></span> Share</p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-3 col-lg-3 col-md-3 col-12">
                                    <div className="media-card" data-aos="fade-right" data-aos-duration="1800" data-aos-delay="100">
                                        <div className="media-img">
                                            <a href="#">
                                                <img src="/img/media2.jpg" className="img-fluid w-100" alt="" />
                                            </a>
                                        </div>
                                        <div className="media-content">
                                            <p>At KIMSHEALTH, our Cardiology Department specializes in electrophysiology, accurately </p>
                                            <div className="media-border-bottom">
                                                <div className="d-flex align-items-center justify-content-between mt-3">
                                                    <div className="media-name">
                                                        <div>
                                                            <img src="/img/kims-small-logo.png" className="img-fluid" alt="" />
                                                        </div>
                                                        <p>KIMSHEALTH <br/> 10th June 2024</p>
                                                    </div>
                                                    <div className="media-social">
                                                        <img src="/img/facebook.svg" className="img-fluid" alt="" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="d-flex align-items-center justify-content-between mt-2">
                                                <div className="media-heart">
                                                    <div>
                                                        <p><span> <img src="/img/heart.png" className="img-fluid" alt="" /></span>8</p>
                                                    </div>
                                                    <img src="/img/chat.png" className="img-fluid" alt="" />
                                                </div>
                                                <div className="media-share">
                                                    <p><span> <img src="/img/share.png" className="img-fluid" alt="" /></span> Share</p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-3 col-lg-3 col-md-3 col-12">
                                    <div className="media-card" data-aos="fade-right" data-aos-duration="1400" data-aos-delay="100">
                                        <div className="media-img">
                                            <a href="#">
                                                <img src="/img/media3.jpg" className="img-fluid w-100" alt="" />
                                            </a>
                                        </div>
                                        <div className="media-content">
                                            <p>Happy #DoctorsDay to all the amazing doctors who keep us healthy! Your dedication is a gift to our</p>
                                            <div className="media-border-bottom">
                                                <div className="d-flex align-items-center justify-content-between mt-3">
                                                    <div className="media-name">
                                                        <div>
                                                            <img src="/img/kims-small-logo.png" className="img-fluid" alt="" />
                                                        </div>
                                                        <p>KIMSHEALTH <br/> 10th June 2024</p>
                                                    </div>
                                                    <div className="media-social">
                                                        <img src="/img/facebook.svg" className="img-fluid" alt="" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="d-flex align-items-center justify-content-between mt-2">
                                                <div className="media-heart">
                                                    <div>
                                                        <p><span> <img src="/img/heart.png" className="img-fluid" alt="" /></span>8</p>
                                                    </div>
                                                    <img src="/img/chat.png" className="img-fluid" alt="" />
                                                </div>
                                                <div className="media-share">
                                                    <p><span> <img src="/img/share.png" className="img-fluid" alt="" /></span> Share</p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-3 col-lg-3 col-md-3 col-12">
                                    <div className="media-card" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="100">
                                        <div className="media-img">
                                            <a href="#">
                                                <img src="/img/media4.jpg" className="img-fluid w-100" alt="" />
                                            </a>
                                        </div>
                                        <div className="media-content">
                                            <p>Don't let scoliosis go unnoticed. Look out for signs like uneven shoulders, a visible spine curve, or</p>
                                            <div className="media-border-bottom">
                                                <div className="d-flex align-items-center justify-content-between mt-3">
                                                    <div className="media-name">
                                                        <div>
                                                            <img src="/img/kims-small-logo.png" className="img-fluid" alt="" />
                                                        </div>
                                                        <p>KIMSHEALTH <br/> 10th June 2024</p>
                                                    </div>
                                                    <div className="media-social">
                                                        <img src="/img/facebook.svg" className="img-fluid" alt="" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="d-flex align-items-center justify-content-between mt-2">
                                                <div className="media-heart">
                                                    <div>
                                                        <p><span> <img src="/img/heart.png" className="img-fluid" alt="" /></span>8</p>
                                                    </div>
                                                    <img src="/img/chat.png" className="img-fluid" alt="" />
                                                </div>
                                                <div className="media-share">
                                                    <p><span> <img src="/img/share.png" className="img-fluid" alt="" /></span> Share</p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </section>

                    <section className="section d-lg-none d-block" data-aos="fade-up">
                        <div className="container">
                            <div className="row justify-content-between">
                                <div className="col-md-4 col-8">
                                    <div className="main-heading">
                                        <h2>Recent Media & Events</h2>
                                    </div>
                                </div>
                                <div className="col-md-2 col-4">
                                    <div className="over-all-btn text-end">
                                        <a href="#">View All <span><img src="/img/slider-right-arrow.svg" className="img-fluid"
                                            alt="" /></span></a>
                                    </div>
                                </div>
                            </div>

                            <div className="row g-2">
                                <div className="col-xl-3 col-lg-3 col-md-3 col-6">
                                    <div className="media-card">
                                        <div className="media-img">
                                            <a href="#">
                                                <img src="/img/media1.jpg" className="img-fluid w-100" alt="" />
                                            </a>
                                        </div>
                                        <div className="media-content">
                                            <p>At KIMSHEALTH, we believe in the power of prevention.Join us in recognizing National</p>
                                            <div className="media-border-bottom">
                                                <div className="d-flex align-items-center justify-content-between mt-3">
                                                    <div className="media-name">
                                                        <div>
                                                            <img src="/img/kims-small-logo.png" className="img-fluid" alt="" />
                                                        </div>
                                                        <p>KIMSHEALTH <br/> 10th June 2024</p>
                                                    </div>
                                                    <div className="media-social">
                                                        <img src="/img/facebook.svg" className="img-fluid" alt="" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="d-flex align-items-center justify-content-between mt-2">
                                                <div className="media-heart">
                                                    <div>
                                                        <p><span> <img src="/img/heart.png" className="img-fluid" alt="" /></span>8</p>
                                                    </div>
                                                    <img src="/img/chat.png" className="img-fluid" alt="" />
                                                </div>
                                                <div className="media-share">
                                                    <p><span> <img src="/img/share.png" className="img-fluid" alt="" /></span> Share</p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-3 col-lg-3 col-md-3 col-6">
                                    <div className="media-card">
                                        <div className="media-img">
                                            <a href="#">
                                                <img src="/img/media2.jpg" className="img-fluid w-100" alt="" />
                                            </a>
                                        </div>
                                        <div className="media-content">
                                            <p>At KIMSHEALTH, our Cardiology Department specializes in electrophysiology, accurately</p>
                                            <div className="media-border-bottom">
                                                <div className="d-flex align-items-center justify-content-between mt-3">
                                                    <div className="media-name">
                                                        <div>
                                                            <img src="/img/kims-small-logo.png" className="img-fluid" alt="" />
                                                        </div>
                                                        <p>KIMSHEALTH <br/> 10th June 2024</p>
                                                    </div>
                                                    <div className="media-social">
                                                        <img src="/img/facebook.svg" className="img-fluid" alt="" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="d-flex align-items-center justify-content-between mt-2">
                                                <div className="media-heart">
                                                    <div>
                                                        <p><span> <img src="/img/heart.png" className="img-fluid" alt="" /></span>8</p>
                                                    </div>
                                                    <img src="/img/chat.png" className="img-fluid" alt="" />
                                                </div>
                                                <div className="media-share">
                                                    <p><span> <img src="/img/share.png" className="img-fluid" alt="" /></span> Share</p>
                                                </div>
                                            </div>

                                        </div>
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

export default MediaAndEventsDetails