import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'

const MediaAndEvents = () => {
    return (
        <>
            <Header />
            <div role="main" className="main">
                <div className="doctor-talk-main-page">
                    <div className="page-header">
                        <div className="container">
                            <h2>Media & Events </h2>
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
                                        <li className="active"> Media & Events </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="section">
                        <div className="container">
                            <div className="row justify-content-between">

                                <div className="col-md-4 details-key-row mb-3">
                                    <form action="">
                                        <div className="input-group p-0 position-relative justify-content-center">
                                            <select className="form-select diseases-page-search">
                                                <option value={""}>Search Media/Event </option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                            <button className="input-group-text border-0 search-btn-page"><i className="fa-solid fa-magnifying-glass"></i></button>
                                        </div>
                                    </form>
                                </div>

                                <div className="col-md-4 details-key-row mb-3">
                                    <form action="">
                                        <div className="input-group p-0 position-relative justify-content-center">
                                            <select className="form-select diseases-page-search">
                                                <option selected>Select by Hospital </option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                            <button className="input-group-text border-0 search-btn-page"><i className="fa-solid fa-chevron-down"></i></button>
                                        </div>
                                    </form>
                                </div>

                                <div className="col-md-4 details-key-row mb-3">
                                    <form action="">
                                        <div className="input-group p-0 position-relative justify-content-center">
                                            <select className="form-select diseases-page-search">
                                                <option selected>Search for Speciality </option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                            <button className="input-group-text border-0 search-btn-page"><i className="fa-solid fa-chevron-down"></i></button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>


                    <section className="section d-lg-block d-none pt-0">
                        <div className="container">


                            <div className="row">
                                <div className="col-xl-3 col-lg-3 col-md-3 col-12 mb-4">
                                    <div className="media-card" data-aos="fade-right" data-aos-duration="2200" data-aos-delay="100">
                                        <div className="media-img">
                                            <a href="#">
                                                <img src="/imgmedia1.jpg" className="img-fluid w-100" alt="" />
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

                                <div className="col-xl-3 col-lg-3 col-md-3 col-12 mb-4">
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

                                <div className="col-xl-3 col-lg-3 col-md-3 col-12 mb-4">
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

                                <div className="col-xl-3 col-lg-3 col-md-3 col-12 mb-4">
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

                                <div className="col-xl-3 col-lg-3 col-md-3 col-12 mb-4">
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

                                <div className="col-xl-3 col-lg-3 col-md-3 col-12 mb-4">
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

                                <div className="col-xl-3 col-lg-3 col-md-3 col-12 mb-4">
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

                                <div className="col-xl-3 col-lg-3 col-md-3 col-12 mb-4">
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


                                <div className="col-xl-3 col-lg-3 col-md-3 col-12 mb-4">
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

                                <div className="col-xl-3 col-lg-3 col-md-3 col-12 mb-4">
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

                                <div className="col-xl-3 col-lg-3 col-md-3 col-12 mb-4">
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

                                <div className="col-xl-3 col-lg-3 col-md-3 col-12 mb-4">
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


                                <div className="col-xl-3 col-lg-3 col-md-3 col-12 mb-4">
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

                                <div className="col-xl-3 col-lg-3 col-md-3 col-12 mb-4">
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

                                <div className="col-xl-3 col-lg-3 col-md-3 col-12 mb-4">
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

                                <div className="col-xl-3 col-lg-3 col-md-3 col-12 mb-4">
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


                                <div className="col-xl-3 col-lg-3 col-md-3 col-12 mb-4">
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

                                <div className="col-xl-3 col-lg-3 col-md-3 col-12 mb-4">
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

                                <div className="col-xl-3 col-lg-3 col-md-3 col-12 mb-4">
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

                                <div className="col-xl-3 col-lg-3 col-md-3 col-12 mb-4">
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


                                <div className="col-xl-3 col-lg-3 col-md-3 col-12 mb-4">
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

                                <div className="col-xl-3 col-lg-3 col-md-3 col-12 mb-4">
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

                                <div className="col-xl-3 col-lg-3 col-md-3 col-12 mb-4">
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

                                <div className="col-xl-3 col-lg-3 col-md-3 col-12 mb-4">
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


                                <div className="col-xl-3 col-lg-3 col-md-3 col-12 mb-4">
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

                                <div className="col-xl-3 col-lg-3 col-md-3 col-12 mb-4">
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

                                <div className="col-xl-3 col-lg-3 col-md-3 col-12 mb-4">
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

                                <div className="col-xl-3 col-lg-3 col-md-3 col-12 mb-4">
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

                                <div className="col-xl-3 col-lg-3 col-md-3 col-12 mb-4">
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

                                <div className="col-xl-3 col-lg-3 col-md-3 col-12 mb-4">
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

                                <div className="col-xl-3 col-lg-3 col-md-3 col-12 mb-4">
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

                                <div className="col-xl-3 col-lg-3 col-md-3 col-12 mb-4">
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

                    <section className="section d-lg-none d-block pt-0" data-aos="fade-up">
                        <div className="container">
                            <div className="row g-2">
                                <div className="col-xl-3 col-lg-3 col-md-3 col-6 mb-2">
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

                                <div className="col-xl-3 col-lg-3 col-md-3 col-6 mb-2">
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

                                <div className="col-xl-3 col-lg-3 col-md-3 col-6 mb-2">
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

                                <div className="col-xl-3 col-lg-3 col-md-3 col-6 mb-2">
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


                                <div className="col-xl-3 col-lg-3 col-md-3 col-6 mb-2">
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

                                <div className="col-xl-3 col-lg-3 col-md-3 col-6 mb-2">
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


                                <div className="col-xl-3 col-lg-3 col-md-3 col-6 mb-2">
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

                                <div className="col-xl-3 col-lg-3 col-md-3 col-6 mb-2">
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


                                <div className="col-xl-3 col-lg-3 col-md-3 col-6 mb-2">
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

                                <div className="col-xl-3 col-lg-3 col-md-3 col-6 mb-2">
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

                                <div className="col-xl-3 col-lg-3 col-md-3 col-6 mb-2">
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

                                <div className="col-xl-3 col-lg-3 col-md-3 col-6 mb-2">
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


                                <div className="col-xl-3 col-lg-3 col-md-3 col-6 mb-2">
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

                                <div className="col-xl-3 col-lg-3 col-md-3 col-6 mb-2">
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

export default MediaAndEvents