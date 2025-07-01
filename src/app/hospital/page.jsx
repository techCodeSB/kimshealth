import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react';


const Hospital = () => {
    return (
        <>
            <Header />
            <div role="main" className="main">
                <div className="hospital-details-main-page">
                    <div className="page-header">
                        <div className="container">
                            <h2>Locations</h2>
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
                                        <li className="active"> Locations </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="section pt-lg-4 pt-0">
                        <div className="container">
                            <div className="row justify-content-between">
                                <div className="col-md-8 col-12">
                                    <div className="main-heading">
                                        <h2>Our Hospitals and Medical Centres</h2>
                                    </div>
                                </div>
                                <div className="col-md-3 col-12 hospital-mainpage-form mb-lg-0 mb-4">
                                    {/* <!-- <div className="over-all-btn text-end">
                                        <a href="#">View All <span><img src="/img/slider-right-arrow.svg" className="img-fluid" alt=""></span></a>
                                    </div> --> */}
                                    <form action="">
                                        <div className="input-group p-0 position-relative justify-content-center">

                                            <select className="form-select speciality-page-search">
                                                <option >All Hospital</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                            <button className="input-group-text border-0 search-btn-page"><i className="fa-solid fa-angle-down"></i></button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 mb-4">

                                    <div className="custom-hospital-top-card">
                                        <div className="hospital-img">
                                            <a href="#"><img src="/img/hospital-left-col.jpg" alt="" className="img-fluid w-100" /></a>
                                        </div>
                                        <div className="hospital-content">

                                            <ul>
                                                <li className="hospital-icon-custom"> KIMSHEALTH Trivandrum </li>
                                                <li className="location-icon-custom"> 1, Vinod Nagar Rd, Anayara, Thiruvananthapuram, Kerala 695029</li>
                                                <li className="telephone-icon-custom"> 0471 471 1000</li>
                                            </ul>
                                            <div className="d-lg-flex d-block align-items-center justify-content-between py-2 " style={{borderBottom: "1px solid #fff"}}>
                                                <div className="hospital-content mb-lg-0 mb-3 p-0">
                                                    <ul>
                                                        <li className="mb-0 send-custom-icon"> Get Direction</li>
                                                    </ul>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    <img src="/img/google.png" alt="Google Logo" className="me-2" />
                                                        <div className="star-rating" data-rating="4.7">
                                                            <i className="fa fa-solid fa-star ms-1" style={{color: "#ffc107"}}></i>
                                                            <i className="fa fa-solid fa-star ms-1" style={{color: "#ffc107"}}></i>
                                                            <i className="fa fa-solid fa-star ms-1" style={{color: "#ffc107"}}></i>
                                                            <i className="fa fa-solid fa-star ms-1" style={{color: "#ffc107"}}></i>
                                                            <i className="fa fa-solid fa-star-half ms-1" style={{color: "#ffc107"}}></i>
                                                            4.5
                                                        </div>
                                                </div>
                                            </div>

                                            <div className="d-lg-flex d-block align-items-center justify-content-between pt-3">
                                                <a href="#" className="btn mb-lg-0 mb-2 hospital-primarybtn">View Details</a>
                                                <a href="#" className="btn mb-lg-0 mb-3 hospital-secondarybtn">Appointment</a>
                                            </div>
                                        </div>



                                    </div>
                                </div>
                                <div className="col-md-6 mb-4">

                                    <div className="custom-hospital-top-card">
                                        <div className="hospital-img">
                                            <a href="#"><img src="/img/hospital-right-col.jpg" alt="" className="img-fluid w-100" /></a>
                                        </div>
                                        <div className="hospital-content">

                                            <ul>
                                                <li className="hospital-icon-custom"> KIMSHEALTH Kollam </li>
                                                <li className="location-icon-custom"> Sithara Jn. Kottiyam P.O., Kollam, rala - 691 571</li>
                                                <li className="telephone-icon-custom"> 0471 471 1000</li>
                                            </ul>
                                            <div className="d-lg-flex d-block align-items-center justify-content-between py-2 " style={{borderBottom: "1px solid #fff"}}>
                                                <div className="hospital-content mb-lg-0 mb-3 p-0">
                                                    <ul>
                                                        <li className="mb-0 send-custom-icon"> Get Direction</li>
                                                    </ul>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    <img src="/img/google.png" alt="Google Logo" className="me-2" />
                                                        <div className="star-rating" data-rating="4.7">
                                                            <i className="fa fa-solid fa-star ms-1" style={{color: "#ffc107"}}></i>
                                                            <i className="fa fa-solid fa-star ms-1" style={{color: "#ffc107"}}></i>
                                                            <i className="fa fa-solid fa-star ms-1" style={{color: "#ffc107"}}></i>
                                                            <i className="fa fa-solid fa-star ms-1" style={{color: "#ffc107"}}></i>
                                                            <i className="fa fa-solid fa-star-half ms-1" style={{color: "#ffc107"}}></i>
                                                            4.5
                                                        </div>
                                                </div>
                                            </div>

                                            <div className="d-lg-flex d-block align-items-center justify-content-between pt-3">
                                                <a href="#" className="btn mb-lg-0 mb-2 hospital-primarybtn">View Details</a>
                                                <a href="#" className="btn mb-lg-0 mb-3 hospital-secondarybtn">Appointment</a>
                                            </div>
                                        </div>



                                    </div>
                                </div>



                                <div className="col-md-4 mb-4">
                                    <div className="custom-hospital-top-card">
                                        <div className="hospital-img">
                                            <a href="#"><img src="/img/hospital1.jpg" alt="" className="img-fluid w-100" /></a>
                                        </div>
                                        <div className="hospital-content">

                                            <ul>
                                                <li className="hospital-icon-custom"> KIMSHEALTH AL SHIFA </li>
                                                <li className="location-icon-custom"> Ootty, Road, Perintalmanna, Kerala 679322  </li>
                                                <li className="telephone-icon-custom"> 0471 471 1000</li>
                                            </ul>
                                            <div className="d-lg-flex d-block align-items-center justify-content-between py-2 " style={{borderBottom: "1px solid #fff"}}>
                                                <div className="hospital-content mb-lg-0 mb-3 p-0">
                                                    <ul>
                                                        <li className="mb-0 send-custom-icon"> Get Direction</li>
                                                    </ul>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    <img src="/img/google.png" alt="Google Logo" className="me-2" />
                                                        <div className="star-rating" data-rating="4.7">
                                                            <i className="fa fa-solid fa-star ms-1" style={{color: "#ffc107"}}></i>
                                                            <i className="fa fa-solid fa-star ms-1" style={{color: "#ffc107"}}></i>
                                                            <i className="fa fa-solid fa-star ms-1" style={{color: "#ffc107"}}></i>
                                                            <i className="fa fa-solid fa-star ms-1" style={{color: "#ffc107"}}></i>
                                                            <i className="fa fa-solid fa-star-half ms-1" style={{color: "#ffc107"}}></i>
                                                            4.5
                                                        </div>
                                                </div>
                                            </div>

                                            <div className="d-lg-flex d-block align-items-center justify-content-between pt-3">
                                                <a href="#" className="btn mb-lg-0 mb-2 hospital-primarybtn">View Details</a>
                                                <a href="#" className="btn mb-lg-0 mb-3 hospital-secondarybtn">Appointment</a>
                                            </div>
                                        </div>



                                    </div>
                                </div>

                                <div className="col-md-4 mb-4">
                                    <div className="custom-hospital-top-card">
                                        <div className="hospital-img">
                                            <a href="#"><img src="/img/hospital2.jpg" alt="" className="img-fluid w-100" /></a>
                                        </div>
                                        <div className="hospital-content">
                                            <ul>
                                                <li className="hospital-icon-custom"> KIMSHEALTH Hospital Nagercoil </li>
                                                <li className="location-icon-custom"> Behind Arulanandh Floorings , TVM Main Road, P.O, Vetturimadam, Tamil Nadu 629003</li>
                                                <li className="telephone-icon-custom"> 0471 471 1000</li>
                                            </ul>
                                            <div className="d-lg-flex d-block align-items-center justify-content-between py-2 " style={{borderBottom: "1px solid #fff"}}>
                                                <div className="hospital-content mb-lg-0 mb-3 p-0">
                                                    <ul>
                                                        <li className="mb-0 send-custom-icon"> Get Direction</li>
                                                    </ul>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    <img src="/img/google.png" alt="Google Logo" className="me-2" />
                                                        <div className="star-rating" data-rating="4.7">
                                                            <i className="fa fa-solid fa-star ms-1" style={{color: "#ffc107"}}></i>
                                                            <i className="fa fa-solid fa-star ms-1" style={{color: "#ffc107"}}></i>
                                                            <i className="fa fa-solid fa-star ms-1" style={{color: "#ffc107"}}></i>
                                                            <i className="fa fa-solid fa-star ms-1" style={{color: "#ffc107"}}></i>
                                                            <i className="fa fa-solid fa-star-half ms-1" style={{color: "#ffc107"}}></i>
                                                            4.5
                                                        </div>
                                                </div>
                                            </div>

                                            <div className="d-lg-flex d-block align-items-center justify-content-between pt-3">
                                                <a href="#" className="btn mb-lg-0 mb-2 hospital-primarybtn">View Details</a>
                                                <a href="#" className="btn mb-lg-0 mb-3 hospital-secondarybtn">Appointment</a>
                                            </div>
                                        </div>



                                    </div>
                                </div>

                                <div className="col-md-4 mb-4">
                                    <div className="custom-hospital-top-card">
                                        <div className="hospital-img">
                                            <a href="#"><img src="/img/hospital3.jpg" alt="" className="img-fluid w-100" /></a>
                                        </div>
                                        <div className="hospital-content">
                                            <ul>
                                                <li className="hospital-icon-custom"> KIMSHEALTH Kottayam </li>
                                                <li className="location-icon-custom"> Thoothutty Junction, Kudamaloor P.O, Kottayam – 686017, Kerala, India</li>
                                                <li className="telephone-icon-custom"> 0471 471 1000</li>
                                            </ul>
                                            <div className="d-lg-flex d-block align-items-center justify-content-between py-2 " style={{borderBottom: "1px solid #fff"}}>
                                                <div className="hospital-content mb-lg-0 mb-3 p-0">
                                                    <ul>
                                                        <li className="mb-0 send-custom-icon"> Get Direction</li>
                                                    </ul>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    <img src="/img/google.png" alt="Google Logo" className="me-2" />
                                                        <div className="star-rating" data-rating="4.7">
                                                            <i className="fa fa-solid fa-star ms-1" style={{color: "#ffc107"}}></i>
                                                            <i className="fa fa-solid fa-star ms-1" style={{color: "#ffc107"}}></i>
                                                            <i className="fa fa-solid fa-star ms-1" style={{color: "#ffc107"}}></i>
                                                            <i className="fa fa-solid fa-star ms-1" style={{color: "#ffc107"}}></i>
                                                            <i className="fa fa-solid fa-star-half ms-1" style={{color: "#ffc107"}}></i>
                                                            4.5
                                                        </div>
                                                </div>
                                            </div>

                                            <div className="d-lg-flex d-block align-items-center justify-content-between pt-3">
                                                <a href="#" className="btn mb-lg-0 mb-2 hospital-primarybtn">View Details</a>
                                                <a href="#" className="btn mb-lg-0 mb-3 hospital-secondarybtn">Appointment</a>
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
                            <div className="row justify-content-between">
                                <div className="col-md-8 col-8">
                                    <div className="main-heading">
                                        <h2>Medical Centres</h2>
                                    </div>
                                </div>

                            </div>
                            <div className="row">

                                <div className="col-md-4 mb-4">
                                    <div className="custom-hospital-top-card">
                                        <div className="hospital-img">
                                            <a href="#"><img src="/img/hospital4.jpg" alt="" className="img-fluid w-100" /></a>
                                        </div>
                                        <div className="hospital-content">
                                            <ul>
                                                <li className="hospital-icon-custom"> KIMSHEALTH Cancer Center </li>
                                                <li className="location-icon-custom"> KIMSHEALTH North, Anayara P.B 1 Trivandrum 695 029</li>
                                                <li className="telephone-icon-custom"> 0471 471 1000</li>
                                            </ul>
                                            <div className="d-lg-flex d-block align-items-center justify-content-between py-2 " style={{borderBottom: "1px solid #fff"}}>
                                                <div className="hospital-content mb-lg-0 mb-3 p-0">
                                                    <ul>
                                                        <li className="mb-0 send-custom-icon"> Get Direction</li>
                                                    </ul>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    <img src="/img/google.png" alt="Google Logo" className="me-2" />
                                                        <div className="star-rating" data-rating="4.7">
                                                            <i className="fa fa-solid fa-star ms-1" style={{color: "#ffc107"}}></i>
                                                            <i className="fa fa-solid fa-star ms-1" style={{color: "#ffc107"}}></i>
                                                            <i className="fa fa-solid fa-star ms-1" style={{color: "#ffc107"}}></i>
                                                            <i className="fa fa-solid fa-star ms-1" style={{color: "#ffc107"}}></i>
                                                            <i className="fa fa-solid fa-star-half ms-1" style={{color: "#ffc107"}}></i>
                                                            4.5
                                                        </div>
                                                </div>
                                            </div>

                                            <div className="d-lg-flex d-block align-items-center justify-content-between pt-3">
                                                <a href="#" className="btn mb-lg-0 mb-2 hospital-primarybtn">View Details</a>
                                                <a href="#" className="btn mb-lg-0 mb-3 hospital-secondarybtn">Appointment</a>
                                            </div>
                                        </div>



                                    </div>
                                </div>

                                <div className="col-md-4 mb-4">
                                    <div className="custom-hospital-top-card">
                                        <div className="hospital-img">
                                            <a href="#"><img src="/img/hospital4.jpg" alt="" className="img-fluid w-100" /></a>
                                        </div>
                                        <div className="hospital-content">
                                            <ul>
                                                <li className="hospital-icon-custom"> KIMSHEALTH Medical Centre, Kuravankonam </li>
                                                <li className="location-icon-custom"> P.B.No.1, Anayara P.O, Trivandrum – 695029, Kerala, India</li>
                                                <li className="telephone-icon-custom"> 0471 471 1000</li>
                                            </ul>
                                            <div className="d-lg-flex d-block align-items-center justify-content-between py-2 " style={{borderBottom: "1px solid #fff"}}>
                                                <div className="hospital-content mb-lg-0 mb-3 p-0">
                                                    <ul>
                                                        <li className="mb-0 send-custom-icon"> Get Direction</li>
                                                    </ul>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    <img src="/img/google.png" alt="Google Logo" className="me-2" />
                                                        <div className="star-rating" data-rating="4.7">
                                                            <i className="fa fa-solid fa-star ms-1" style={{color: "#ffc107"}}></i>
                                                            <i className="fa fa-solid fa-star ms-1" style={{color: "#ffc107"}}></i>
                                                            <i className="fa fa-solid fa-star ms-1" style={{color: "#ffc107"}}></i>
                                                            <i className="fa fa-solid fa-star ms-1" style={{color: "#ffc107"}}></i>
                                                            <i className="fa fa-solid fa-star-half ms-1" style={{color: "#ffc107"}}></i>
                                                            4.5
                                                        </div>
                                                </div>
                                            </div>

                                            <div className="d-lg-flex d-block align-items-center justify-content-between pt-3">
                                                <a href="#" className="btn mb-lg-0 mb-2 hospital-primarybtn">View Details</a>
                                                <a href="#" className="btn mb-lg-0 mb-3 hospital-secondarybtn">Appointment</a>
                                            </div>
                                        </div>



                                    </div>
                                </div>

                                <div className="col-md-4 mb-4">
                                    <div className="custom-hospital-top-card">
                                        <div className="hospital-img">
                                            <a href="#"><img src="/img/hospital4.jpg" alt="" className="img-fluid w-100" /></a>
                                        </div>
                                        <div className="hospital-content">
                                            <ul>
                                                <li className="hospital-icon-custom"> KIMSHEALTH Medical Centre Kamaleswaram </li>
                                                <li className="location-icon-custom"> SMH Complex, Opp Kamaleshwaram Govt. HSS, Manacaud P.O.,Trivandrum 695009, Kerala, India</li>
                                                <li className="telephone-icon-custom"> 0471 471 1000</li>
                                            </ul>
                                            <div className="d-lg-flex d-block align-items-center justify-content-between py-2 " style={{borderBottom: "1px solid #fff"}}>
                                                <div className="hospital-content mb-lg-0 mb-3 p-0">
                                                    <ul>
                                                        <li className="mb-0 send-custom-icon"> Get Direction</li>
                                                    </ul>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    <img src="/img/google.png" alt="Google Logo" className="me-2" />
                                                        <div className="star-rating" data-rating="4.7">
                                                            <i className="fa fa-solid fa-star ms-1" style={{color: "#ffc107"}}></i>
                                                            <i className="fa fa-solid fa-star ms-1" style={{color: "#ffc107"}}></i>
                                                            <i className="fa fa-solid fa-star ms-1" style={{color: "#ffc107"}}></i>
                                                            <i className="fa fa-solid fa-star ms-1" style={{color: "#ffc107"}}></i>
                                                            <i className="fa fa-solid fa-star-half ms-1" style={{color: "#ffc107"}}></i>
                                                            4.5
                                                        </div>
                                                </div>
                                            </div>

                                            <div className="d-lg-flex d-block align-items-center justify-content-between pt-3">
                                                <a href="#" className="btn mb-lg-0 mb-2 hospital-primarybtn">View Details</a>
                                                <a href="#" className="btn mb-lg-0 mb-3 hospital-secondarybtn">Appointment</a>
                                            </div>
                                        </div>



                                    </div>
                                </div>

                                <div className="col-md-4 mb-4">
                                    <div className="custom-hospital-top-card">
                                        <div className="hospital-img">
                                            <a href="#"><img src="/img/hospital4.jpg" alt="" className="img-fluid w-100" /></a>
                                        </div>
                                        <div className="hospital-content">
                                            <ul>
                                                <li className="hospital-icon-custom"> KIMSHEALTH Medical Centre, Pothencode</li>
                                                <li className="location-icon-custom"> Ground Floor, Sun Plaza, Santhigiri Ashram Road, Pothencode, Kerala 695584</li>
                                                <li className="telephone-icon-custom"> 0471 471 1000</li>
                                            </ul>
                                            <div className="d-lg-flex d-block align-items-center justify-content-between py-2 " style={{borderBottom: "1px solid #fff"}}>
                                                <div className="hospital-content mb-lg-0 mb-3 p-0">
                                                    <ul>
                                                        <li className="mb-0 send-custom-icon"> Get Direction</li>
                                                    </ul>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    <img src="/img/google.png" alt="Google Logo" className="me-2" />
                                                        <div className="star-rating" data-rating="4.7">
                                                            <i className="fa fa-solid fa-star ms-1" style={{color: "#ffc107"}}></i>
                                                            <i className="fa fa-solid fa-star ms-1" style={{color: "#ffc107"}}></i>
                                                            <i className="fa fa-solid fa-star ms-1" style={{color: "#ffc107"}}></i>
                                                            <i className="fa fa-solid fa-star ms-1" style={{color: "#ffc107"}}></i>
                                                            <i className="fa fa-solid fa-star-half ms-1" style={{color: "#ffc107"}}></i>
                                                            4.5
                                                        </div>
                                                </div>
                                            </div>

                                            <div className="d-lg-flex d-block align-items-center justify-content-between pt-3">
                                                <a href="#" className="btn mb-lg-0 mb-2 hospital-primarybtn">View Details</a>
                                                <a href="#" className="btn mb-lg-0 mb-3 hospital-secondarybtn">Appointment</a>
                                            </div>
                                        </div>



                                    </div>
                                </div>

                                <div className="col-md-4 mb-4">
                                    <div className="custom-hospital-top-card">
                                        <div className="hospital-img">
                                            <a href="#"><img src="/img/hospital4.jpg" alt="" className="img-fluid w-100" /></a>
                                        </div>
                                        <div className="hospital-content">
                                            <ul>
                                                <li className="hospital-icon-custom"> KIMSHEALTH Medical Centre, Attingal</li>
                                                <li className="location-icon-custom"> P.B.No.1, Anayara P.O, Trivandrum – 695029, Kerala, India</li>
                                                <li className="telephone-icon-custom"> 0471 471 1000</li>
                                            </ul>
                                            <div className="d-lg-flex d-block align-items-center justify-content-between py-2 " style={{borderBottom: "1px solid #fff"}}>
                                                <div className="hospital-content mb-lg-0 mb-3 p-0">
                                                    <ul>
                                                        <li className="mb-0 send-custom-icon"> Get Direction</li>
                                                    </ul>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    <img src="/img/google.png" alt="Google Logo" className="me-2" />
                                                        <div className="star-rating" data-rating="4.7">
                                                            <i className="fa fa-solid fa-star ms-1" style={{color: "#ffc107"}}></i>
                                                            <i className="fa fa-solid fa-star ms-1" style={{color: "#ffc107"}}></i>
                                                            <i className="fa fa-solid fa-star ms-1" style={{color: "#ffc107"}}></i>
                                                            <i className="fa fa-solid fa-star ms-1" style={{color: "#ffc107"}}></i>
                                                            <i className="fa fa-solid fa-star-half ms-1" style={{color: "#ffc107"}}></i>
                                                            4.5
                                                        </div>
                                                </div>
                                            </div>

                                            <div className="d-lg-flex d-block align-items-center justify-content-between pt-3">
                                                <a href="#" className="btn mb-lg-0 mb-2 hospital-primarybtn">View Details</a>
                                                <a href="#" className="btn mb-lg-0 mb-3 hospital-secondarybtn">Appointment</a>
                                            </div>
                                        </div>



                                    </div>
                                </div>

                                <div className="col-md-4 mb-4">
                                    <div className="custom-hospital-top-card">
                                        <div className="hospital-img">
                                            <a href="#"><img src="/img/hospital4.jpg" alt="" className="img-fluid w-100" /></a>
                                        </div>
                                        <div className="hospital-content">
                                            <ul>
                                                <li className="hospital-icon-custom"> KIMSHEALTH Medical Centre, Ayoor</li>
                                                <li className="location-icon-custom"> KIMSHEALTH Medical Centre, Ayoor Ayoor PO, Kollam, Kerala. Pin- 691533</li>
                                                <li className="telephone-icon-custom"> 0471 471 1000</li>
                                            </ul>
                                            <div className="d-lg-flex d-block align-items-center justify-content-between py-2 " style={{borderBottom: "1px solid #fff"}}>
                                                <div className="hospital-content mb-lg-0 mb-3 p-0">
                                                    <ul>
                                                        <li className="mb-0 send-custom-icon"> Get Direction</li>
                                                    </ul>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    <img src="/img/google.png" alt="Google Logo" className="me-2" />
                                                        <div className="star-rating" data-rating="4.7">
                                                            <i className="fa fa-solid fa-star ms-1" style={{color: "#ffc107"}}></i>
                                                            <i className="fa fa-solid fa-star ms-1" style={{color: "#ffc107"}}></i>
                                                            <i className="fa fa-solid fa-star ms-1" style={{color: "#ffc107"}}></i>
                                                            <i className="fa fa-solid fa-star ms-1" style={{color: "#ffc107"}}></i>
                                                            <i className="fa fa-solid fa-star-half ms-1" style={{color: "#ffc107"}}></i>
                                                            4.5
                                                        </div>
                                                </div>
                                            </div>

                                            <div className="d-lg-flex d-block align-items-center justify-content-between pt-3">
                                                <a href="#" className="btn mb-lg-0 mb-2 hospital-primarybtn">View Details</a>
                                                <a href="#" className="btn mb-lg-0 mb-3 hospital-secondarybtn">Appointment</a>
                                            </div>
                                        </div>



                                    </div>
                                </div>



                                <div className="col-md-6 mb-4">

                                    <div className="custom-hospital-top-card">
                                        <div className="hospital-img">
                                            <a href="#"><img src="/img/hospital5.jpg" alt="" className="img-fluid w-100" /></a>
                                        </div>
                                        <div className="hospital-content">
                                            <ul>
                                                <li className="hospital-icon-custom">
                                                    KIMSHEALTH Medical Centre, Vattiyoorkavu</li>
                                                <li className="location-icon-custom address-half-col"> Zahra Centre, Ground Floor, Near State Bank
                                                    of India, Vattiyoorkavu</li>
                                                <li className="telephone-icon-custom"> 0471 471 1000</li>
                                            </ul>
                                            <div className="d-lg-flex d-block align-items-center justify-content-between py-2 " style={{borderBottom: "1px solid #fff"}}>
                                                <div className="hospital-content mb-lg-0 mb-3 p-0">
                                                    <ul>
                                                        <li className="mb-0 send-custom-icon"> Get Direction</li>
                                                    </ul>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    <img src="/img/google.png" alt="Google Logo" className="me-2" />
                                                        <div className="star-rating" data-rating="4.7">
                                                            <i className="fa fa-solid fa-star ms-1" style={{color: "#ffc107"}}></i>
                                                            <i className="fa fa-solid fa-star ms-1" style={{color: "#ffc107"}}></i>
                                                            <i className="fa fa-solid fa-star ms-1" style={{color: "#ffc107"}}></i>
                                                            <i className="fa fa-solid fa-star ms-1" style={{color: "#ffc107"}}></i>
                                                            <i className="fa fa-solid fa-star-half ms-1" style={{color: "#ffc107"}}></i>
                                                            4.5
                                                        </div>
                                                </div>
                                            </div>

                                            <div className="d-lg-flex d-block align-items-center justify-content-between pt-3">
                                                <a href="#" className="btn mb-lg-0 mb-2 hospital-primarybtn">View Details</a>
                                                <a href="#" className="btn mb-lg-0 mb-3 hospital-secondarybtn">Appointment</a>
                                            </div>
                                        </div>



                                    </div>
                                </div>


                                <div className="col-md-6 mb-4">

                                    <div className="custom-hospital-top-card">
                                        <div className="hospital-img">
                                            <a href="#"><img src="/img/hospital5.jpg" alt="" className="img-fluid w-100" /></a>
                                        </div>
                                        <div className="hospital-content">
                                            <ul>
                                                <li className="hospital-icon-custom">
                                                    KIMSHEALTH Medical Centre, Varkala</li>
                                                <li className="location-icon-custom address-half-col"> Ground Floor Fadil, Near Meva Convention Centre Palachira, Kallambalam, Palachira, Kerala 965143</li>
                                                <li className="telephone-icon-custom"> 0471 471 1000</li>
                                            </ul>
                                            <div className="d-lg-flex d-block align-items-center justify-content-between py-2 " style={{borderBottom: "1px solid #fff"}}>
                                                <div className="hospital-content mb-lg-0 mb-3 p-0">
                                                    <ul>
                                                        <li className="mb-0 send-custom-icon"> Get Direction</li>
                                                    </ul>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    <img src="/img/google.png" alt="Google Logo" className="me-2" />
                                                        <div className="star-rating" data-rating="4.7">
                                                            <i className="fa fa-solid fa-star ms-1" style={{color: "#ffc107"}}></i>
                                                            <i className="fa fa-solid fa-star ms-1" style={{color: "#ffc107"}}></i>
                                                            <i className="fa fa-solid fa-star ms-1" style={{color: "#ffc107"}}></i>
                                                            <i className="fa fa-solid fa-star ms-1" style={{color: "#ffc107"}}></i>
                                                            <i className="fa fa-solid fa-star-half ms-1" style={{color: "#ffc107"}}></i>
                                                            4.5
                                                        </div>
                                                </div>
                                            </div>

                                            <div className="d-lg-flex d-block align-items-center justify-content-between pt-3">
                                                <a href="#" className="btn mb-lg-0 mb-2 hospital-primarybtn">View Details</a>
                                                <a href="#" className="btn mb-lg-0 mb-3 hospital-secondarybtn">Appointment</a>
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

export default Hospital