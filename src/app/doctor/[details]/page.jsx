import BlogCarousel from '@/components/BlogCarousel';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React from 'react'

const DoctorDetails = () => {
    return (
        <>
            <Header />

            <div role="main" className="main">
                <div className="doctor-details-main-page">
                    <div className="page-header">
                        <div className="container">
                            <h2>Dr. Shabeerali T U</h2>
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
                                        <li>
                                            <a href="index.php">Find a Doctor</a>
                                        </li>
                                        <li className="active"> Dr. Shabeerali T U</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-3 mb-4">
                                    <div className="left-col-img">
                                        <img src="/img/doctor-details.jpg" alt="" className="img-fluid" />
                                        <div className="main-heading sub-heading mt-3">
                                            <h3>Dr. Shabeerali T U</h3>
                                        </div>
                                        <div className="left-details-list mt-3">
                                            <ul>
                                                <li className="details-doc-ic">Chief Coordinator & Senior Consultant</li>
                                                <li className="details-liver-ic"><strong>Hepatobiliary, Pancreatic & Liver Transplant
                                                    Surgery</strong></li>
                                                <li className="details-hospital-ic">KIMSHEALTH, Trivandrum</li>
                                            </ul>
                                            <a href="#" className="form-btn mt-3 d-block text-center text-light">Book an Appointment</a>
                                        </div>

                                        <div className="calendar mt-5">
                                            <div className="calendar-header">
                                                <button className="btn  previous-month-btn">
                                                    Prev</button>
                                                <p className="calendar-title"></p>
                                                <button className="btn  next-month-btn">Next  </button>
                                            </div>
                                            <div className="calendar-body">
                                                <div className="calendar-row">
                                                    <div className="calendar-day">S</div>
                                                    <div className="calendar-day">M</div>
                                                    <div className="calendar-day">T</div>
                                                    <div className="calendar-day">W</div>
                                                    <div className="calendar-day">T</div>
                                                    <div className="calendar-day">F</div>
                                                    <div className="calendar-day">S</div>
                                                </div>
                                            </div>

                                            <button className="form-btn my-3">Go to Doctor's Slot</button>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-9">
                                    <div className="right-col-details">
                                        <div className="main-heading main-list">
                                            <div className="d-flex align-items-center gap-2 mb-2">
                                                <img src="/img/briefcase.png" alt="" className="img-fluid" />
                                                <h3>Work Experience</h3>
                                            </div>

                                            <ul>
                                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                                    incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                                                    gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </li>
                                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                                    incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                                                    gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </li>
                                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                                    incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                                                    gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </li>
                                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                                    incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                                                    gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </li>
                                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                                    incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                                                    gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </li>

                                            </ul>


                                            <div className="d-flex align-items-center gap-2 mb-2">
                                                <img src="/img/badge.png" alt="" className="img-fluid" />
                                                <h3>Area of Expertise</h3>
                                            </div>

                                            <ul>
                                                <li>Gastrointestinal Surgery</li>
                                                <li>Hepatobiliary Surgery</li>
                                                <li>Pancreatic Surgery - For benign and cancer </li>
                                                <li>Surgical conditions of Liver, Biliary Tract, Pancreas Spleen and Retroperitoneum
                                                </li>
                                                <li>Open and laparoscopic surgical procedures </li>
                                                <li>Liver transplant </li>
                                                <li>Colorectal Surgery </li>
                                                <li>GI & Hepato pancreatico biliary oncosurgery </li>

                                            </ul>


                                            <div className="d-flex align-items-center gap-2 mb-2">
                                                <img src="/img/mortarboard.png" alt="" className="img-fluid" />
                                                <h3>Education & Tranning</h3>
                                            </div>

                                            <ul>
                                                <li>Fellowship in Hepatobiliary Surgery and Liver Transplantation at the Center for
                                                    Liver and Biliary Sciences Indraprastha Apollo, Delhi DNB in Surgical
                                                    Gastroenterology</li>
                                                <li>MCh in Surgical Gastroenterology</li>
                                                <li>DNB in General Surgery </li>
                                                <li>MS in General Surgery </li>
                                                <li>MCh in Surgical Gastroenterology</li>

                                            </ul>

                                            <div className="d-flex align-items-center gap-2 mb-2">
                                                <img src="/img/recommendation.png" alt="" className="img-fluid" />
                                                <h3>Membership</h3>
                                            </div>

                                            <ul>
                                                <li>Member of Indian Medical Association</li>
                                                <li>Association of Surgeons of India</li>
                                                <li>Liver Transplant Society of India</li>

                                            </ul>

                                            <div className="d-flex align-items-center gap-2 mb-2">
                                                <img src="/img/award.png" alt="" className="img-fluid" />
                                                <h3>Awards</h3>
                                            </div>

                                            <ul>
                                                <li>T.U. Shabeer Ali. Hemorrhagic ascites: are we missing endometriosis? Indian
                                                    Journal of Gastroenterology 2012, 31, 195-197 case series Co-Author </li>
                                                <li>T.U. Shabeer Ali. Hemorrhagic ascites: are we missing endometriosis? Indian
                                                    Journal of Gastroenterology 2012, 31, 195-197 case series Co-Author </li>
                                                <li>T.U. Shabeer Ali. Hemorrhagic ascites: are we missing endometriosis? Indian
                                                    Journal of Gastroenterology 2012, 31, 195-197 case series Co-Author </li>
                                                <li>T.U. Shabeer Ali. Hemorrhagic ascites: are we missing endometriosis? Indian
                                                    Journal of Gastroenterology 2012, 31, 195-197 case series Co-Author </li>
                                                <li>T.U. Shabeer Ali. Hemorrhagic ascites: are we missing endometriosis? Indian
                                                    Journal of Gastroenterology 2012, 31, 195-197 case series Co-Author </li>
                                                <li>T.U. Shabeer Ali. Hemorrhagic ascites: are we missing endometriosis? Indian
                                                    Journal of Gastroenterology 2012, 31, 195-197 case series Co-Author </li>
                                                <li>T.U. Shabeer Ali. Hemorrhagic ascites: are we missing endometriosis? Indian
                                                    Journal of Gastroenterology 2012, 31, 195-197 case series Co-Author </li>

                                            </ul>

                                            <div className="d-flex align-items-center gap-2 mb-2">
                                                <img src="/img/internet.png" alt="" className="img-fluid" />
                                                <h3>Languages Known</h3>
                                            </div>

                                            <ul>
                                                <li>English </li>
                                                <li>Malayalam </li>

                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>


                    <div className="line-divider"></div>
                    <section className="section">
                        <div className="container">
                            <div className="row justify-content-between" data-aos="fade-up">
                                <div className="col-md-4 col-8">
                                    <div className="main-heading">
                                        <h2>Doctor Talk</h2>
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
                                <div className="col-xl-8 col-lg-8 col-md-8 col-12 hear-doctor-img mb-lg-0 mb-3">
                                    <div className="position-relative overflow-hidden" data-aos="fade-up">
                                        <img src="/img/hear-doc1.jpg" className="img-fluid d-lg-block d-none doc-image-hover w-100"
                                            alt="" />
                                        <img src="/img/hear-mb1.png" className="img-fluid w-100 d-lg-none d-block doc-image-hover"
                                            alt="" />
                                        <div className="hear-doctor-content">
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div>
                                                    <p>A Deep Dive into Epilepsy Diagnosis and Effective Treatments</p>
                                                </div>
                                                <div className="main-btn d-lg-block d-none">
                                                    <span><img src="/img/play-button.png" className="img-fluid" alt="" /> </span>
                                                    <a href="#">Watch Video <span><i className="fa-solid fa-arrow-right"></i></span></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-4 col-lg-4 col-md-4 col-12 blog-right-col">
                                    <div className="row g-2">
                                        <div className="col-md-12 col-6 mb-3">
                                            <div className="position-relative overflow-hidden" data-aos="fade-up">
                                                <img src="/img/hear-doc2.jpg"
                                                    className="img-fluid w-100 hear-doc-image d-lg-block d-none" alt="" />
                                                <img src="/img/hear-doc-mb2.png" className="img-fluid w-100 d-lg-none d-block" alt="" />
                                                <div className="hear-doctor-content">
                                                    <div className="d-block align-items-center justify-content-between">
                                                        <div>
                                                            <h5 className="d-lg-block d-none">12<sup>th</sup> May 2024</h5>
                                                            <p>A talk on Liver Transplant by Dr. Shabeer Ali T U</p>
                                                        </div>
                                                        <div className="main-btn d-lg-block d-none">
                                                            <span><img src="/img/play-button.png" className="img-fluid" alt="" /> </span>
                                                            <a href="#">Watch Video <span><i
                                                                className="fa-solid fa-arrow-right"></i></span></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12 col-6">
                                            <div className="position-relative overflow-hidden" data-aos="fade-up">
                                                <img src="/img/hear-doc3.jpg"
                                                    className="img-fluid w-100 hear-doc-image d-lg-block d-none" alt="" />
                                                <img src="/img/hear-doc-mb3.png" className="img-fluid w-100 d-lg-none d-block" alt="" />
                                                <div className="hear-doctor-content">
                                                    <div className="d-block align-items-center justify-content-between">
                                                        <div>
                                                            <h5 className="d-lg-block d-none">20<sup>th</sup> May 2024</h5>
                                                            <p>Understanding Hernias & Hydroceles in Children</p>
                                                        </div>
                                                        <div className="main-btn d-lg-block d-none">
                                                            <span><img src="/img/play-button.png" className="img-fluid" alt="" /></span>
                                                            <a href="#">Watch Video <span><i
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

                    <div className="line-divider"></div>
                    <BlogCarousel />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default DoctorDetails;