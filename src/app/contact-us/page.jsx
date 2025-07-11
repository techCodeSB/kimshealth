import Breadcrumb from '@/components/Breadcrumb'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'
import getStaticText from '../lib/getStaticTextServer'

const ContactUs = async () => {
    const staticText = await getStaticText();

    return (
        <>
            <Header />
            <div role="main" className="main">
                <div className="Contact-us-main-page">
                    <div className="page-header">
                        <div className="container">
                            <h2>Contact Us</h2>
                        </div>
                    </div>
                    <section className="breadcrumb-wrapper py-2">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <Breadcrumb
                                        activeTitle={"Contact Us"}
                                        middleTitle={''}
                                        middleURL={''}
                                    />
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="section doctor-line-divider">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 ps-lg-0  order-lg-1 order-2">
                                    <section className="section pt-0">
                                        <div className="container">
                                            <div className="main-heading sub-heading">
                                                <h2>KIMSHEALTH Trivandrum</h2>
                                            </div>
                                            <div className="contact-details">
                                                <div className="contact-icon location-icon"><i className="fa-solid fa-location-dot"></i>
                                                </div>
                                                <div className="contact-content">
                                                    <h3>Location</h3>
                                                    <p>P.B.No.1, Anayara P.O, Trivandrum – 695029, Kerala, India</p>
                                                </div>
                                            </div>


                                            <div className="contact-details">
                                                <div className="contact-icon"><i className="fa-solid fa-envelope-open"></i></div>
                                                <div className="contact-content">
                                                    <h3>Email:</h3>
                                                    <p>feedback.tvm@kimshealth.org</p>
                                                </div>
                                            </div>


                                            <div className="contact-details">
                                                <div className="contact-icon"><i className="fa-solid fa-phone"></i></div>
                                                <div className="contact-content">
                                                    <h3>Phone:</h3>
                                                    <p>+91 471 294 1101</p>
                                                </div>
                                            </div>
                                            <a href="#" className="btn-tab treat-tab form-btn w-auto active mt-2 d-inline-block"><i class="fa-solid fa-diamond-turn-right"></i> Get Direction</a>
                                        </div>
                                    </section>
                                    <div className="line-divider"></div>
                                    <section className="section">
                                        <div className="container">
                                            <div className="main-heading sub-heading">
                                                <h2>KIMSHEALTH Trivandrum</h2>
                                            </div>
                                            <div className="contact-details">
                                                <div className="contact-icon location-icon"><i className="fa-solid fa-location-dot"></i>
                                                </div>
                                                <div className="contact-content">
                                                    <h3>Location</h3>
                                                    <p>P.B.No.1, Anayara P.O, Trivandrum – 695029, Kerala, India</p>
                                                </div>
                                            </div>


                                            <div className="contact-details">
                                                <div className="contact-icon"><i className="fa-solid fa-envelope-open"></i></div>
                                                <div className="contact-content">
                                                    <h3>Email:</h3>
                                                    <p>feedback.tvm@kimshealth.org</p>
                                                </div>
                                            </div>


                                            <div className="contact-details">
                                                <div className="contact-icon"><i className="fa-solid fa-phone"></i></div>
                                                <div className="contact-content">
                                                    <h3>Phone:</h3>
                                                    <p>+91 471 294 1101</p>
                                                </div>
                                            </div>
                                            <a href="#" className="btn-tab treat-tab form-btn w-auto active mt-2 d-inline-block"><i class="fa-solid fa-diamond-turn-right"></i> Get Direction</a>
                                        </div>
                                    </section>


                                    <div className="line-divider"></div>
                                    <section className="section">
                                        <div className="container">
                                            <div className="main-heading sub-heading">
                                                <h2>KIMSHEALTH Trivandrum</h2>
                                            </div>
                                            <div className="contact-details">
                                                <div className="contact-icon location-icon"><i className="fa-solid fa-location-dot"></i>
                                                </div>
                                                <div className="contact-content">
                                                    <h3>Location</h3>
                                                    <p>P.B.No.1, Anayara P.O, Trivandrum – 695029, Kerala, India</p>
                                                </div>
                                            </div>


                                            <div className="contact-details">
                                                <div className="contact-icon"><i className="fa-solid fa-envelope-open"></i></div>
                                                <div className="contact-content">
                                                    <h3>Email:</h3>
                                                    <p>feedback.tvm@kimshealth.org</p>
                                                </div>
                                            </div>


                                            <div className="contact-details">
                                                <div className="contact-icon"><i className="fa-solid fa-phone"></i></div>
                                                <div className="contact-content">
                                                    <h3>Phone:</h3>
                                                    <p>+91 471 294 1101</p>
                                                </div>
                                            </div>
                                            <a href="#" className="btn-tab treat-tab form-btn w-auto active mt-2 d-inline-block"><i class="fa-solid fa-diamond-turn-right"></i> Get Direction</a>
                                        </div>
                                    </section>




                                    <div className="line-divider"></div>
                                    <section className="section">
                                        <div className="container">
                                            <div className="main-heading sub-heading">
                                                <h2>KIMSHEALTH Trivandrum</h2>
                                            </div>
                                            <div className="contact-details">
                                                <div className="contact-icon location-icon"><i className="fa-solid fa-location-dot"></i>
                                                </div>
                                                <div className="contact-content">
                                                    <h3>Location</h3>
                                                    <p>P.B.No.1, Anayara P.O, Trivandrum – 695029, Kerala, India</p>
                                                </div>
                                            </div>


                                            <div className="contact-details">
                                                <div className="contact-icon"><i className="fa-solid fa-envelope-open"></i></div>
                                                <div className="contact-content">
                                                    <h3>Email:</h3>
                                                    <p>feedback.tvm@kimshealth.org</p>
                                                </div>
                                            </div>


                                            <div className="contact-details">
                                                <div className="contact-icon"><i className="fa-solid fa-phone"></i></div>
                                                <div className="contact-content">
                                                    <h3>Phone:</h3>
                                                    <p>+91 471 294 1101</p>
                                                </div>
                                            </div>
                                            <a href="#" className="btn-tab treat-tab form-btn w-auto active mt-2 d-inline-block"><i class="fa-solid fa-diamond-turn-right"></i> Get Direction</a>
                                        </div>
                                    </section>




                                    <div className="line-divider"></div>
                                    <section className="section">
                                        <div className="container">
                                            <div className="main-heading sub-heading">
                                                <h2>KIMSHEALTH Trivandrum</h2>
                                            </div>
                                            <div className="contact-details">
                                                <div className="contact-icon location-icon"><i className="fa-solid fa-location-dot"></i>
                                                </div>
                                                <div className="contact-content">
                                                    <h3>Location</h3>
                                                    <p>P.B.No.1, Anayara P.O, Trivandrum – 695029, Kerala, India</p>
                                                </div>
                                            </div>


                                            <div className="contact-details">
                                                <div className="contact-icon"><i className="fa-solid fa-envelope-open"></i></div>
                                                <div className="contact-content">
                                                    <h3>Email:</h3>
                                                    <p>feedback.tvm@kimshealth.org</p>
                                                </div>
                                            </div>


                                            <div className="contact-details">
                                                <div className="contact-icon"><i className="fa-solid fa-phone"></i></div>
                                                <div className="contact-content">
                                                    <h3>Phone:</h3>
                                                    <p>+91 471 294 1101</p>
                                                </div>
                                            </div>
                                            <a href="#" className="btn-tab treat-tab form-btn w-auto active mt-2 d-inline-block"><i class="fa-solid fa-diamond-turn-right"></i> Get Direction</a>
                                        </div>
                                    </section>




                                    <div className="line-divider"></div>
                                    <section className="section">
                                        <div className="container">
                                            <div className="main-heading sub-heading">
                                                <h2>KIMSHEALTH Trivandrum</h2>
                                            </div>
                                            <div className="contact-details">
                                                <div className="contact-icon location-icon"><i className="fa-solid fa-location-dot"></i>
                                                </div>
                                                <div className="contact-content">
                                                    <h3>Location</h3>
                                                    <p>P.B.No.1, Anayara P.O, Trivandrum – 695029, Kerala, India</p>
                                                </div>
                                            </div>


                                            <div className="contact-details">
                                                <div className="contact-icon"><i className="fa-solid fa-envelope-open"></i></div>
                                                <div className="contact-content">
                                                    <h3>Email:</h3>
                                                    <p>feedback.tvm@kimshealth.org</p>
                                                </div>
                                            </div>


                                            <div className="contact-details">
                                                <div className="contact-icon"><i className="fa-solid fa-phone"></i></div>
                                                <div className="contact-content">
                                                    <h3>Phone:</h3>
                                                    <p>+91 471 294 1101</p>
                                                </div>
                                            </div>
                                            <a href="#" className="btn-tab treat-tab form-btn w-auto active mt-2 d-inline-block"><i class="fa-solid fa-diamond-turn-right"></i> Get Direction</a>
                                        </div>
                                    </section>




                                    <div className="line-divider"></div>
                                    <section className="section">
                                        <div className="container">
                                            <div className="main-heading sub-heading">
                                                <h2>KIMSHEALTH Trivandrum</h2>
                                            </div>
                                            <div className="contact-details">
                                                <div className="contact-icon location-icon"><i className="fa-solid fa-location-dot"></i>
                                                </div>
                                                <div className="contact-content">
                                                    <h3>Location</h3>
                                                    <p>P.B.No.1, Anayara P.O, Trivandrum – 695029, Kerala, India</p>
                                                </div>
                                            </div>


                                            <div className="contact-details">
                                                <div className="contact-icon"><i className="fa-solid fa-envelope-open"></i></div>
                                                <div className="contact-content">
                                                    <h3>Email:</h3>
                                                    <p>feedback.tvm@kimshealth.org</p>
                                                </div>
                                            </div>


                                            <div className="contact-details">
                                                <div className="contact-icon"><i className="fa-solid fa-phone"></i></div>
                                                <div className="contact-content">
                                                    <h3>Phone:</h3>
                                                    <p>+91 471 294 1101</p>
                                                </div>
                                            </div>
                                            <a href="#" className="btn-tab treat-tab form-btn w-auto active mt-2 d-inline-block"><i class="fa-solid fa-diamond-turn-right"></i> Get Direction</a>
                                        </div>
                                    </section>




                                </div>


                                <div className="col-md-6 contact-right-col order-lg-2 order-1">
                                    <div className="association-form-card mb-5 sticky-from">
                                        <div className="tab-group text-start mb-3">
                                            <button type="button" className="btn-tab treat-tab form-btn w-auto active mx-2">
                                                {/* onClick="showBox(this,'omega')"> */}
                                                Queries</button>


                                            <button type="button" className="btn-tab form-btn  w-auto treat-tab mx-2">
                                                {/* onClick="showBox(this,'omega1')"> */}
                                                Feedback/Complaints</button>
                                        </div>
                                        <div className="treat-box" id="omega" style={{ 'display': 'block' }}>
                                            <div className="custom-from bg-field mx-0">
                                                <form action="">
                                                    <div className="row justify-content-between">
                                                        <div className="col-xl-6 col-lg-6 col-md-6 col-12 mb-3">
                                                            <label htmlFor=''>First Name*</label>
                                                            <input type="text" className="form-control pe-0" />


                                                        </div>
                                                        <div className="col-xl-6 col-lg-6 col-md-6 col-12 mb-3">
                                                            <label htmlFor=''>Last Name*</label>
                                                            <input type="text" className="form-control pe-0" />


                                                        </div>


                                                        <div className="col-xl-6 col-lg-6 col-md-6 col-12 mb-3">
                                                            <label htmlFor=''>Mobile Number*</label>
                                                            <input type="text" id="phone" defaultValue="+91" className="form-control pe-0" />


                                                        </div>


                                                        <div className="col-xl-6 col-lg-6 col-md-6 col-12 mb-3">
                                                            <label htmlFor=''>Email*</label>
                                                            <input type="text" className="form-control pe-0" />


                                                        </div>
                                                        <div className="col-xl-12 col-lg-12 col-md-12 col-12 mb-3">
                                                            <label htmlFor=''>Hospitals*</label>
                                                            <select className="form-select from-location">
                                                                <option>Select Hospital</option>
                                                                <option value="1">One</option>
                                                                <option value="2">Two</option>
                                                                <option value="3">Three</option>
                                                            </select>
                                                        </div>


                                                        <div className="col-xl-12 col-lg-12 col-md-12 col-12 mb-3">
                                                            <label htmlFor=''>Query*</label>
                                                            <textarea className="form-control" placeholder="Leave a comment here"
                                                                id="floatingTextarea"></textarea>


                                                        </div>

                                                        <div className="col-xl-6 col-lg-6 col-md-6 col-12 mb-3">
                                                            <div className="from-btn">
                                                                <button type="button"
                                                                    className="btn d-inline-block w-auto">Submit</button>
                                                            </div>
                                                        </div>


                                                    </div>
                                                </form>
                                            </div>


                                        </div>


                                        <div className="treat-box" id="omega1" style={{ display: 'none' }}>
                                            <div className="custom-from bg-field mx-0">
                                                <form action="">
                                                    <div className="row justify-content-between">
                                                        <div className="col-xl-6 col-lg-6 col-md-6 col-12 mb-3">
                                                            <label htmlFor=''>First Name*</label>
                                                            <input type="text" className="form-control pe-0" />
                                                        </div>
                                                        <div className="col-xl-6 col-lg-6 col-md-6 col-12 mb-3">
                                                            <label htmlFor=''>Last Name*</label>
                                                            <input type="text" className="form-control pe-0" />
                                                        </div>
                                                        <div className="col-xl-6 col-lg-6 col-md-6 col-12 mb-3">
                                                            <label htmlFor=''>Mobile Number*</label>
                                                            <input type="text" id="tel" defaultValue="+91" className="form-control pe-0" />
                                                        </div>
                                                        <div className="col-xl-6 col-lg-6 col-md-6 col-12 mb-3">
                                                            <label htmlFor=''>Email*</label>
                                                            <input type="text" className="form-control pe-0" />
                                                        </div>
                                                        <div className="col-xl-12 col-lg-12 col-md-12 col-12 mb-3">
                                                            <label htmlFor=''>Hospitals*</label>
                                                            <select className="form-select from-location">
                                                                <option >Select Hospital</option>
                                                                <option value="1">One</option>
                                                                <option value="2">Two</option>
                                                                <option value="3">Three</option>
                                                            </select>
                                                        </div>
                                                        <div className="col-xl-12 col-lg-12 col-md-12 col-12 mb-3">
                                                            <label htmlFor=''>Query*</label>
                                                            <textarea className="form-control" placeholder="Leave a comment here"
                                                                id="floatingTextarea"></textarea>
                                                        </div>
                                                        <div className="col-xl-6 col-lg-6 col-md-6 col-12 mb-3">
                                                            <div className="from-btn">
                                                                <button type="button"
                                                                    className="btn d-inline-block w-auto">Submit</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>



                    <section className="section pt-0">
                        <div className="container-fluid px-0">
                            <div className="contact-us-map">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.852365339009!2d76.90677017505996!3d8.51371179152848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bc0578a58de1%3A0x1171d7b1d8b4145a!2sKIMSHEALTH%20Hospital%20Trivandrum!5e0!3m2!1sen!2sin!4v1750846766725!5m2!1sen!2sin"
                                    width="100%" height="450" style={{ "border": 0 }} allowFullScreen="" loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ContactUs