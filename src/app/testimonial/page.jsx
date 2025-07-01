import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'

const Testimonial = () => {
    return (
        <>
            <Header />
            <div role="main" className="main">
                <div className="doctor-talk-main-page">
                    <div className="page-header">
                        <div className="container">
                            <h2>Testimonial </h2>
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
                                        <li className="active"> Testimonial </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="section">
                        <div className="container">
                            <div className="row justify-content-between">
                                <div className="col-md-6 mb-3">
                                    <div className="main-heading">
                                        <h2 className="mb-0">Patient Testimonials </h2>
                                    </div>
                                </div>
                                <div className="col-md-4 details-key-row">
                                    <form action="">
                                        <div className="input-group p-0 position-relative justify-content-center">
                                            <select className="form-select diseases-page-search">
                                                <option value="">Search for Speciality </option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                            <button className="input-group-text border-0 search-btn-page"><i className="fa-solid fa-magnifying-glass"></i></button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="section section pt-0">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-6 col-lg-6 col-md-6 col-12" data-aos="fade-right">
                                    <div className="row testi-card">
                                        <div className="col-md-3 mb-3 col-4">
                                            <div className="overflow-hidden">
                                                <a href="#">
                                                    <img src="/img/testi-img1.jpg" alt="" className="img-fluid w-100" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-md-9 my-auto col-8">
                                            <div className="testi-rightbox">
                                                <h3>24-Week Preterm Miracle: Uma's Heartfelt
                                                    Testimonial </h3>
                                                <p>Uma, a Scientist at ISRO, Trivandrum, pours her
                                                    heartfelt gratitude towards . . . .<a href="#"> Watch Video</a></p>

                                                <div className="d-flex align-items-center justify-content-between mt-3">
                                                    <div className="doctor-name">
                                                        <p><span><img src="/img/doctor.png" className="img-fluid" alt="" /></span> Dr.
                                                            Naveen Jain </p>
                                                    </div>
                                                    <div className="doctor-catagory">
                                                        <p>Obstetrics & Gynecology </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-6 col-lg-6 col-md-6 col-12" data-aos="fade-left">
                                    <div className="row testi-card">
                                        <div className="col-md-3 mb-3 col-4">
                                            <div className="overflow-hidden">
                                                <a href="#">
                                                    <img src="/img/testi-img2.jpg" alt="" className="img-fluid w-100" />
                                                </a>
                                            </div>

                                        </div>
                                        <div className="col-md-9 my-auto col-8">
                                            <div className="testi-rightbox">
                                                <h3>Mr Menon's Remarkable Recovery with Intrasaccular
                                                    Flow Diverter</h3>
                                                <p>This is a testimonial by Mr Menon on his journey to recovery
                                                    from aneurysm! With cutting-edge . . . .<a href="#"> Watch Video</a></p>

                                                <div className="d-flex align-items-center justify-content-between mt-3">
                                                    <div className="doctor-name">
                                                        <p><span><img src="/img/doctor.png" className="img-fluid" alt="" /></span>Dr.
                                                            Santhosh Joseph </p>
                                                    </div>
                                                    <div className="doctor-catagory">
                                                        <p>Neuro Interventional Radiology </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-6 col-lg-6 col-md-6 col-12" data-aos="fade-right">
                                    <div className="row testi-card">
                                        <div className="col-md-3 mb-3 col-4">
                                            <div className="overflow-hidden">
                                                <a href="#">
                                                    <img src="/img/testi-img3.jpg" alt="" className="img-fluid w-100" />
                                                </a>
                                            </div>

                                        </div>
                                        <div className="col-md-9 my-auto col-8">
                                            <div className="testi-rightbox">
                                                <h3>A successful Shoulder Replacement surgery is
                                                    done for Mrs Norah Mohammed Alsuqufi.</h3>
                                                <p>A successful Shoulder Replacement surgery is done for
                                                    Mrs Norah Mohammed Alsuqufi from Saudi . . . .<a href="#"> Watch Video</a></p>

                                                <div className="d-flex align-items-center justify-content-between mt-3">
                                                    <div className="doctor-name">
                                                        <p><span><img src="/img/doctor.png" className="img-fluid" alt="" /></span> Dr.
                                                            Muhammed Nazeer </p>
                                                    </div>
                                                    <div className="doctor-catagory">
                                                        <p>Orthopedics & Trauma </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-6 col-lg-6 col-md-6 col-12" data-aos="fade-left">
                                    <div className="row testi-card">
                                        <div className="col-md-3 mb-3 col-4">
                                            <div className="overflow-hidden">
                                                <a href="#">
                                                    <img src="/img/testi-img4.jpg" alt="" className="img-fluid w-100" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-md-9 my-auto col-8">
                                            <div className="testi-rightbox">
                                                <h3>Experience Excellence in Medical Care:
                                                    Maryan Germain's Testimonial at KIMSHEALTH </h3>
                                                <p>At KIMSHEALTH Hospital, we prioritize patient satisfaction and
                                                    aim to provide the best care possible . . . .<a href="#"> Watch Video</a>
                                                </p>

                                                <div className="d-flex align-items-center justify-content-between mt-3">
                                                    <div className="doctor-name">
                                                        <p><span><img src="/img/doctor.png" className="img-fluid" alt="" /></span> Dr.
                                                            Renjith Unnikrishnan </p>
                                                    </div>
                                                    <div className="doctor-catagory">
                                                        <p>Orthopaedics </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-6 col-lg-6 col-md-6 col-12" data-aos="fade-right">
                                    <div className="row testi-card">
                                        <div className="col-md-3 mb-3 col-4">
                                            <div className="overflow-hidden">
                                                <a href="#">
                                                    <img src="/img/testi-img1.jpg" alt="" className="img-fluid w-100" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-md-9 my-auto col-8">
                                            <div className="testi-rightbox">
                                                <h3>24-Week Preterm Miracle: Uma's Heartfelt
                                                    Testimonial </h3>
                                                <p>Uma, a Scientist at ISRO, Trivandrum, pours her
                                                    heartfelt gratitude towards . . . .<a href="#"> Watch Video</a></p>

                                                <div className="d-flex align-items-center justify-content-between mt-3">
                                                    <div className="doctor-name">
                                                        <p><span><img src="/img/doctor.png" className="img-fluid" alt="" /></span> Dr.
                                                            Naveen Jain </p>
                                                    </div>
                                                    <div className="doctor-catagory">
                                                        <p>Obstetrics & Gynecology </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-6 col-lg-6 col-md-6 col-12" data-aos="fade-left">
                                    <div className="row testi-card">
                                        <div className="col-md-3 mb-3 col-4">
                                            <div className="overflow-hidden">
                                                <a href="#">
                                                    <img src="/img/testi-img2.jpg" alt="" className="img-fluid w-100" />
                                                </a>
                                            </div>

                                        </div>
                                        <div className="col-md-9 my-auto col-8">
                                            <div className="testi-rightbox">
                                                <h3>Mr Menon's Remarkable Recovery with Intrasaccular
                                                    Flow Diverter</h3>
                                                <p>This is a testimonial by Mr Menon on his journey to recovery
                                                    from aneurysm! With cutting-edge . . . .<a href="#"> Watch Video</a></p>

                                                <div className="d-flex align-items-center justify-content-between mt-3">
                                                    <div className="doctor-name">
                                                        <p><span><img src="/img/doctor.png" className="img-fluid" alt="" /></span>Dr.
                                                            Santhosh Joseph </p>
                                                    </div>
                                                    <div className="doctor-catagory">
                                                        <p>Neuro Interventional Radiology </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-6 col-lg-6 col-md-6 col-12" data-aos="fade-right">
                                    <div className="row testi-card">
                                        <div className="col-md-3 mb-3 col-4">
                                            <div className="overflow-hidden">
                                                <a href="#">
                                                    <img src="/img/testi-img3.jpg" alt="" className="img-fluid w-100" />
                                                </a>
                                            </div>

                                        </div>
                                        <div className="col-md-9 my-auto col-8">
                                            <div className="testi-rightbox">
                                                <h3>A successful Shoulder Replacement surgery is
                                                    done for Mrs Norah Mohammed Alsuqufi.</h3>
                                                <p>A successful Shoulder Replacement surgery is done for
                                                    Mrs Norah Mohammed Alsuqufi from Saudi . . . .<a href="#"> Watch Video</a></p>

                                                <div className="d-flex align-items-center justify-content-between mt-3">
                                                    <div className="doctor-name">
                                                        <p><span><img src="/img/doctor.png" className="img-fluid" alt="" /></span> Dr.
                                                            Muhammed Nazeer </p>
                                                    </div>
                                                    <div className="doctor-catagory">
                                                        <p>Orthopedics & Trauma </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-6 col-lg-6 col-md-6 col-12" data-aos="fade-left">
                                    <div className="row testi-card">
                                        <div className="col-md-3 mb-3 col-4">
                                            <div className="overflow-hidden">
                                                <a href="#">
                                                    <img src="/img/testi-img4.jpg" alt="" className="img-fluid w-100" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-md-9 my-auto col-8">
                                            <div className="testi-rightbox">
                                                <h3>Experience Excellence in Medical Care:
                                                    Maryan Germain's Testimonial at KIMSHEALTH </h3>
                                                <p>At KIMSHEALTH Hospital, we prioritize patient satisfaction and
                                                    aim to provide the best care possible . . . .<a href="#"> Watch Video</a>
                                                </p>

                                                <div className="d-flex align-items-center justify-content-between mt-3">
                                                    <div className="doctor-name">
                                                        <p><span><img src="/img/doctor.png" className="img-fluid" alt="" /></span> Dr.
                                                            Renjith Unnikrishnan </p>
                                                    </div>
                                                    <div className="doctor-catagory">
                                                        <p>Orthopaedics </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="col-xl-6 col-lg-6 col-md-6 col-12" data-aos="fade-right">
                                    <div className="row testi-card">
                                        <div className="col-md-3 mb-3 col-4">
                                            <div className="overflow-hidden">
                                                <a href="#">
                                                    <img src="/img/testi-img1.jpg" alt="" className="img-fluid w-100" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-md-9 my-auto col-8">
                                            <div className="testi-rightbox">
                                                <h3>24-Week Preterm Miracle: Uma's Heartfelt
                                                    Testimonial </h3>
                                                <p>Uma, a Scientist at ISRO, Trivandrum, pours her
                                                    heartfelt gratitude towards . . . .<a href="#"> Watch Video</a></p>

                                                <div className="d-flex align-items-center justify-content-between mt-3">
                                                    <div className="doctor-name">
                                                        <p><span><img src="/img/doctor.png" className="img-fluid" alt="" /></span> Dr.
                                                            Naveen Jain </p>
                                                    </div>
                                                    <div className="doctor-catagory">
                                                        <p>Obstetrics & Gynecology </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-6 col-lg-6 col-md-6 col-12" data-aos="fade-left">
                                    <div className="row testi-card">
                                        <div className="col-md-3 mb-3 col-4">
                                            <div className="overflow-hidden">
                                                <a href="#">
                                                    <img src="/img/testi-img2.jpg" alt="" className="img-fluid w-100" />
                                                </a>
                                            </div>

                                        </div>
                                        <div className="col-md-9 my-auto col-8">
                                            <div className="testi-rightbox">
                                                <h3>Mr Menon's Remarkable Recovery with Intrasaccular
                                                    Flow Diverter</h3>
                                                <p>This is a testimonial by Mr Menon on his journey to recovery
                                                    from aneurysm! With cutting-edge . . . .<a href="#"> Watch Video</a></p>

                                                <div className="d-flex align-items-center justify-content-between mt-3">
                                                    <div className="doctor-name">
                                                        <p><span><img src="/img/doctor.png" className="img-fluid" alt="" /></span>Dr.
                                                            Santhosh Joseph </p>
                                                    </div>
                                                    <div className="doctor-catagory">
                                                        <p>Neuro Interventional Radiology </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-6 col-lg-6 col-md-6 col-12" data-aos="fade-right">
                                    <div className="row testi-card">
                                        <div className="col-md-3 mb-3 col-4">
                                            <div className="overflow-hidden">
                                                <a href="#">
                                                    <img src="/img/testi-img3.jpg" alt="" className="img-fluid w-100" />
                                                </a>
                                            </div>

                                        </div>
                                        <div className="col-md-9 my-auto col-8">
                                            <div className="testi-rightbox">
                                                <h3>A successful Shoulder Replacement surgery is
                                                    done for Mrs Norah Mohammed Alsuqufi.</h3>
                                                <p>A successful Shoulder Replacement surgery is done for
                                                    Mrs Norah Mohammed Alsuqufi from Saudi . . . .<a href="#"> Watch Video</a></p>

                                                <div className="d-flex align-items-center justify-content-between mt-3">
                                                    <div className="doctor-name">
                                                        <p><span><img src="/img/doctor.png" className="img-fluid" alt="" /></span> Dr.
                                                            Muhammed Nazeer </p>
                                                    </div>
                                                    <div className="doctor-catagory">
                                                        <p>Orthopedics & Trauma </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-6 col-lg-6 col-md-6 col-12" data-aos="fade-left">
                                    <div className="row testi-card">
                                        <div className="col-md-3 mb-3 col-4">
                                            <div className="overflow-hidden">
                                                <a href="#">
                                                    <img src="/img/testi-img4.jpg" alt="" className="img-fluid w-100" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-md-9 my-auto col-8">
                                            <div className="testi-rightbox">
                                                <h3>Experience Excellence in Medical Care:
                                                    Maryan Germain's Testimonial at KIMSHEALTH </h3>
                                                <p>At KIMSHEALTH Hospital, we prioritize patient satisfaction and
                                                    aim to provide the best care possible . . . .<a href="#"> Watch Video</a>
                                                </p>

                                                <div className="d-flex align-items-center justify-content-between mt-3">
                                                    <div className="doctor-name">
                                                        <p><span><img src="/img/doctor.png" className="img-fluid" alt="" /></span> Dr.
                                                            Renjith Unnikrishnan </p>
                                                    </div>
                                                    <div className="doctor-catagory">
                                                        <p>Orthopaedics </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="col-xl-6 col-lg-6 col-md-6 col-12" data-aos="fade-right">
                                    <div className="row testi-card">
                                        <div className="col-md-3 mb-3 col-4">
                                            <div className="overflow-hidden">
                                                <a href="#">
                                                    <img src="/img/testi-img1.jpg" alt="" className="img-fluid w-100" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-md-9 my-auto col-8">
                                            <div className="testi-rightbox">
                                                <h3>24-Week Preterm Miracle: Uma's Heartfelt
                                                    Testimonial </h3>
                                                <p>Uma, a Scientist at ISRO, Trivandrum, pours her
                                                    heartfelt gratitude towards . . . .<a href="#"> Watch Video</a></p>

                                                <div className="d-flex align-items-center justify-content-between mt-3">
                                                    <div className="doctor-name">
                                                        <p><span><img src="/img/doctor.png" className="img-fluid" alt="" /></span> Dr.
                                                            Naveen Jain </p>
                                                    </div>
                                                    <div className="doctor-catagory">
                                                        <p>Obstetrics & Gynecology </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-6 col-lg-6 col-md-6 col-12" data-aos="fade-left">
                                    <div className="row testi-card">
                                        <div className="col-md-3 mb-3 col-4">
                                            <div className="overflow-hidden">
                                                <a href="#">
                                                    <img src="/img/testi-img2.jpg" alt="" className="img-fluid w-100" />
                                                </a>
                                            </div>

                                        </div>
                                        <div className="col-md-9 my-auto col-8">
                                            <div className="testi-rightbox">
                                                <h3>Mr Menon's Remarkable Recovery with Intrasaccular
                                                    Flow Diverter</h3>
                                                <p>This is a testimonial by Mr Menon on his journey to recovery
                                                    from aneurysm! With cutting-edge . . . .<a href="#"> Watch Video</a></p>

                                                <div className="d-flex align-items-center justify-content-between mt-3">
                                                    <div className="doctor-name">
                                                        <p><span><img src="/img/doctor.png" className="img-fluid" alt="" /></span>Dr.
                                                            Santhosh Joseph </p>
                                                    </div>
                                                    <div className="doctor-catagory">
                                                        <p>Neuro Interventional Radiology </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-6 col-lg-6 col-md-6 col-12" data-aos="fade-right">
                                    <div className="row testi-card">
                                        <div className="col-md-3 mb-3 col-4">
                                            <div className="overflow-hidden">
                                                <a href="#">
                                                    <img src="/img/testi-img3.jpg" alt="" className="img-fluid w-100" />
                                                </a>
                                            </div>

                                        </div>
                                        <div className="col-md-9 my-auto col-8">
                                            <div className="testi-rightbox">
                                                <h3>A successful Shoulder Replacement surgery is
                                                    done for Mrs Norah Mohammed Alsuqufi.</h3>
                                                <p>A successful Shoulder Replacement surgery is done for
                                                    Mrs Norah Mohammed Alsuqufi from Saudi . . . .<a href="#"> Watch Video</a></p>

                                                <div className="d-flex align-items-center justify-content-between mt-3">
                                                    <div className="doctor-name">
                                                        <p><span><img src="/img/doctor.png" className="img-fluid" alt="" /></span> Dr.
                                                            Muhammed Nazeer </p>
                                                    </div>
                                                    <div className="doctor-catagory">
                                                        <p>Orthopedics & Trauma </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-6 col-lg-6 col-md-6 col-12" data-aos="fade-left">
                                    <div className="row testi-card">
                                        <div className="col-md-3 mb-3 col-4">
                                            <div className="overflow-hidden">
                                                <a href="#">
                                                    <img src="/img/testi-img4.jpg" alt="" className="img-fluid w-100" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-md-9 my-auto col-8">
                                            <div className="testi-rightbox">
                                                <h3>Experience Excellence in Medical Care:
                                                    Maryan Germain's Testimonial at KIMSHEALTH </h3>
                                                <p>At KIMSHEALTH Hospital, we prioritize patient satisfaction and
                                                    aim to provide the best care possible . . . .<a href="#"> Watch Video</a>
                                                </p>

                                                <div className="d-flex align-items-center justify-content-between mt-3">
                                                    <div className="doctor-name">
                                                        <p><span><img src="/img/doctor.png" className="img-fluid" alt="" /></span> Dr.
                                                            Renjith Unnikrishnan </p>
                                                    </div>
                                                    <div className="doctor-catagory">
                                                        <p>Orthopaedics </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="col-xl-6 col-lg-6 col-md-6 col-12" data-aos="fade-right">
                                    <div className="row testi-card">
                                        <div className="col-md-3 mb-3 col-4">
                                            <div className="overflow-hidden">
                                                <a href="#">
                                                    <img src="/img/testi-img1.jpg" alt="" className="img-fluid w-100" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-md-9 my-auto col-8">
                                            <div className="testi-rightbox">
                                                <h3>24-Week Preterm Miracle: Uma's Heartfelt
                                                    Testimonial </h3>
                                                <p>Uma, a Scientist at ISRO, Trivandrum, pours her
                                                    heartfelt gratitude towards . . . .<a href="#"> Watch Video</a></p>

                                                <div className="d-flex align-items-center justify-content-between mt-3">
                                                    <div className="doctor-name">
                                                        <p><span><img src="/img/doctor.png" className="img-fluid" alt="" /></span> Dr.
                                                            Naveen Jain </p>
                                                    </div>
                                                    <div className="doctor-catagory">
                                                        <p>Obstetrics & Gynecology </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-6 col-lg-6 col-md-6 col-12" data-aos="fade-left">
                                    <div className="row testi-card">
                                        <div className="col-md-3 mb-3 col-4">
                                            <div className="overflow-hidden">
                                                <a href="#">
                                                    <img src="/img/testi-img2.jpg" alt="" className="img-fluid w-100" />
                                                </a>
                                            </div>

                                        </div>
                                        <div className="col-md-9 my-auto col-8">
                                            <div className="testi-rightbox">
                                                <h3>Mr Menon's Remarkable Recovery with Intrasaccular
                                                    Flow Diverter</h3>
                                                <p>This is a testimonial by Mr Menon on his journey to recovery
                                                    from aneurysm! With cutting-edge . . . .<a href="#"> Watch Video</a></p>

                                                <div className="d-flex align-items-center justify-content-between mt-3">
                                                    <div className="doctor-name">
                                                        <p><span><img src="/img/doctor.png" className="img-fluid" alt="" /></span>Dr.
                                                            Santhosh Joseph </p>
                                                    </div>
                                                    <div className="doctor-catagory">
                                                        <p>Neuro Interventional Radiology </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-6 col-lg-6 col-md-6 col-12" data-aos="fade-right">
                                    <div className="row testi-card">
                                        <div className="col-md-3 mb-3 col-4">
                                            <div className="overflow-hidden">
                                                <a href="#">
                                                    <img src="/img/testi-img3.jpg" alt="" className="img-fluid w-100" />
                                                </a>
                                            </div>

                                        </div>
                                        <div className="col-md-9 my-auto col-8">
                                            <div className="testi-rightbox">
                                                <h3>A successful Shoulder Replacement surgery is
                                                    done for Mrs Norah Mohammed Alsuqufi.</h3>
                                                <p>A successful Shoulder Replacement surgery is done for
                                                    Mrs Norah Mohammed Alsuqufi from Saudi . . . .<a href="#"> Watch Video</a></p>

                                                <div className="d-flex align-items-center justify-content-between mt-3">
                                                    <div className="doctor-name">
                                                        <p><span><img src="/img/doctor.png" className="img-fluid" alt="" /></span> Dr.
                                                            Muhammed Nazeer </p>
                                                    </div>
                                                    <div className="doctor-catagory">
                                                        <p>Orthopedics & Trauma </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-6 col-lg-6 col-md-6 col-12" data-aos="fade-left">
                                    <div className="row testi-card">
                                        <div className="col-md-3 mb-3 col-4">
                                            <div className="overflow-hidden">
                                                <a href="#">
                                                    <img src="/img/testi-img4.jpg" alt="" className="img-fluid w-100" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-md-9 my-auto col-8">
                                            <div className="testi-rightbox">
                                                <h3>Experience Excellence in Medical Care:
                                                    Maryan Germain's Testimonial at KIMSHEALTH </h3>
                                                <p>At KIMSHEALTH Hospital, we prioritize patient satisfaction and
                                                    aim to provide the best care possible . . . .<a href="#"> Watch Video</a>
                                                </p>

                                                <div className="d-flex align-items-center justify-content-between mt-3">
                                                    <div className="doctor-name">
                                                        <p><span><img src="/img/doctor.png" className="img-fluid" alt="" /></span> Dr.
                                                            Renjith Unnikrishnan </p>
                                                    </div>
                                                    <div className="doctor-catagory">
                                                        <p>Orthopaedics </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="col-xl-6 col-lg-6 col-md-6 col-12" data-aos="fade-right">
                                    <div className="row testi-card">
                                        <div className="col-md-3 mb-3 col-4">
                                            <div className="overflow-hidden">
                                                <a href="#">
                                                    <img src="/img/testi-img1.jpg" alt="" className="img-fluid w-100" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-md-9 my-auto col-8">
                                            <div className="testi-rightbox">
                                                <h3>24-Week Preterm Miracle: Uma's Heartfelt
                                                    Testimonial </h3>
                                                <p>Uma, a Scientist at ISRO, Trivandrum, pours her
                                                    heartfelt gratitude towards . . . .<a href="#"> Watch Video</a></p>

                                                <div className="d-flex align-items-center justify-content-between mt-3">
                                                    <div className="doctor-name">
                                                        <p><span><img src="/img/doctor.png" className="img-fluid" alt="" /></span> Dr.
                                                            Naveen Jain </p>
                                                    </div>
                                                    <div className="doctor-catagory">
                                                        <p>Obstetrics & Gynecology </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-6 col-lg-6 col-md-6 col-12" data-aos="fade-left">
                                    <div className="row testi-card">
                                        <div className="col-md-3 mb-3 col-4">
                                            <div className="overflow-hidden">
                                                <a href="#">
                                                    <img src="/img/testi-img2.jpg" alt="" className="img-fluid w-100" />
                                                </a>
                                            </div>

                                        </div>
                                        <div className="col-md-9 my-auto col-8">
                                            <div className="testi-rightbox">
                                                <h3>Mr Menon's Remarkable Recovery with Intrasaccular
                                                    Flow Diverter</h3>
                                                <p>This is a testimonial by Mr Menon on his journey to recovery
                                                    from aneurysm! With cutting-edge . . . .<a href="#"> Watch Video</a></p>

                                                <div className="d-flex align-items-center justify-content-between mt-3">
                                                    <div className="doctor-name">
                                                        <p><span><img src="/img/doctor.png" className="img-fluid" alt="" /></span>Dr.
                                                            Santhosh Joseph </p>
                                                    </div>
                                                    <div className="doctor-catagory">
                                                        <p>Neuro Interventional Radiology </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-6 col-lg-6 col-md-6 col-12" data-aos="fade-right">
                                    <div className="row testi-card">
                                        <div className="col-md-3 mb-3 col-4">
                                            <div className="overflow-hidden">
                                                <a href="#">
                                                    <img src="/img/testi-img3.jpg" alt="" className="img-fluid w-100" />
                                                </a>
                                            </div>

                                        </div>
                                        <div className="col-md-9 my-auto col-8">
                                            <div className="testi-rightbox">
                                                <h3>A successful Shoulder Replacement surgery is
                                                    done for Mrs Norah Mohammed Alsuqufi.</h3>
                                                <p>A successful Shoulder Replacement surgery is done for
                                                    Mrs Norah Mohammed Alsuqufi from Saudi . . . .<a href="#"> Watch Video</a></p>

                                                <div className="d-flex align-items-center justify-content-between mt-3">
                                                    <div className="doctor-name">
                                                        <p><span><img src="/img/doctor.png" className="img-fluid" alt="" /></span> Dr.
                                                            Muhammed Nazeer </p>
                                                    </div>
                                                    <div className="doctor-catagory">
                                                        <p>Orthopedics & Trauma </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-6 col-lg-6 col-md-6 col-12" data-aos="fade-left">
                                    <div className="row testi-card">
                                        <div className="col-md-3 mb-3 col-4">
                                            <div className="overflow-hidden">
                                                <a href="#">
                                                    <img src="/img/testi-img4.jpg" alt="" className="img-fluid w-100" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-md-9 my-auto col-8">
                                            <div className="testi-rightbox">
                                                <h3>Experience Excellence in Medical Care:
                                                    Maryan Germain's Testimonial at KIMSHEALTH </h3>
                                                <p>At KIMSHEALTH Hospital, we prioritize patient satisfaction and
                                                    aim to provide the best care possible . . . .<a href="#"> Watch Video</a>
                                                </p>

                                                <div className="d-flex align-items-center justify-content-between mt-3">
                                                    <div className="doctor-name">
                                                        <p><span><img src="/img/doctor.png" className="img-fluid" alt="" /></span> Dr.
                                                            Renjith Unnikrishnan </p>
                                                    </div>
                                                    <div className="doctor-catagory">
                                                        <p>Orthopaedics </p>
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
            <Footer />
        </>
    )
}

export default Testimonial