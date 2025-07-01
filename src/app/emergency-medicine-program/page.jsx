import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'

const EmergencyMedicine = () => {
    return (
        <>
            <Header />
            <div role="main" className="main">
                <div className="emergency-medicine-main-page">
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
                                                                <a href="hospital-master.php">Academics</a>
                                                            </li>
                                                            <li className="active"> KIMSHEALTH Masters in Emergency Medicine Program
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="details-banner">
                                                <div className="details-heading">
                                                    <h3>KIMSHEALTH Masters in Emergency Medicine Program</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-6 details-proceduce-banner-right-col">
                                        <img src="img/emergency-medicine-banner.jpg" className="img-fluid details-banner-image" alt="" />
                                    </div>

                                    {/* <!-- <div className="col-md-6">
                                        <img src="img/details-banner.png" alt="" className="img-fluid w-100">
                                    </div> --> */}
                                </div>
                            </div>
                        </div>

                    </section>

                    <section className="section doctor-line-divider">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-8 ps-lg-0 ">
                                    <section className="section pt-0">
                                        <div className="container">
                                            <div className="main-heading sub-heading">
                                                <h2>In Partnership with Upstate Medical University, Syracuse, NY, USA</h2>
                                                <p>KIMSHEALTH Kollam hosts a three year emergency medicine residency programme, with
                                                    support from Upstate Medical University, Syracuse, NY, a U.S. Level 1 trauma
                                                    centre.</p>
                                            </div>
                                        </div>
                                    </section>
                                    <div className="line-divider"></div>
                                    <section className="section">
                                        <div className="container">
                                            <div className="main-heading sub-heading">
                                                <h2>Eligibility Criteria</h2>
                                                <p>All applicants must possess MBBS degree from an accredited university and the
                                                    medical license must be registered with the Medical Council of India at the time
                                                    of enrolment to the program.</p>
                                            </div>
                                        </div>
                                    </section>
                                    <div className="line-divider"></div>
                                    <section className="section">
                                        <div className="container">
                                            <div className="main-heading sub-heading main-list">
                                                <h2>Application Process</h2>
                                                <ul>
                                                    <li>Candidates will be selected based on merit following an online screening
                                                        exam and an interview in person.</li>
                                                    <li>Last date for submission of applications will be May 15th, 2019</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </section>
                                    <div className="line-divider"></div>
                                    <section className="section">
                                        <div className="container">
                                            <div className="main-heading sub-heading main-list">
                                                <h2>Highlights</h2>
                                                <ul>
                                                    <li>Rotation among Emergency Departments in KIMSHEALTH hospitals including the
                                                        flagship hospital, KIMSHEALTH Trivandrum, the only NABH accredited ED in
                                                        south Kerala</li>
                                                    <li>Training in BLS, ACLS & PALS as KIMSHEALTH is an accredited ITC by American
                                                        Heart Association</li>
                                                    <li>ED with all modern resuscitative equipment including cardiac monitors,
                                                        defibrillators, ultrasound machine etc</li>
                                                    <li>Academic sessions by international and national faculty trained in Emergency
                                                        Medicine</li>
                                                    <li>Structured training for MRCEM and guaranteed placement in NHS, UK following
                                                        the successful completion of the exam</li>
                                                    <li>Opportunities in simulation training and disaster management</li>
                                                    <li>Access to national & international journals in emergency medicine</li>
                                                    <li>1 month observership at the Emergency Department, Upstate, New York</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </section>

                                    <div className="line-divider"></div>
                                    <section className="section">
                                        <div className="container">
                                            <div className="main-heading sub-heading main-list">
                                                <h2>Course Fees</h2>
                                                <ul>
                                                    <li>Indian citizens : Rs.5 Lakhs per year</li>
                                                    <li>Non-Indian citizens : US $14,000 per year.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </section>
                                    <div className="line-divider"></div>
                                    <section className="section">
                                        <div className="container">
                                            <div className="main-heading sub-heading main-list">
                                                <h2>Stipend</h2>
                                                <ul>
                                                    <li>1st Year – Rs.43,000/ month</li>
                                                    <li>2nd Year – Rs. 44,000/ month</li>
                                                    <li>3rd Year – Rs.45,000/ month</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </section>

                                </div>

                                <div className="col-md-4">

                                    <div className="association-left-col">
                                        <div className="association-form-card mb-5">
                                            <h3>Request a Call Back</h3>
                                            <form action="">
                                                <div className="row">
                                                    <div className="col-md-12 mb-3">
                                                        <input type="text" className="form-control" placeholder="Name" name="name" />
                                                    </div>
                                                    <div className="col-md-12 mb-3">
                                                        <input type="text" className="form-control"
                                                            placeholder="Enter 10 Digit Mobile Number" name="name" />
                                                    </div>
                                                    <div className="col-md-12 mb-3">
                                                        <textarea className="form-control" placeholder="Message"
                                                            id="floatingTextarea"></textarea>
                                                    </div>
                                                    <div className="col-md-12 mb-3 text-center">
                                                        <button
                                                            className="btn mb-lg-0 mb-2 hospital-primarybtn px-5 py-2">Submit</button>
                                                    </div>
                                                </div>
                                            </form>


                                        </div>
                                        <div className="em-sticky-ele">
                                            <h4>For More Information Contact Us</h4>
                                            <p><strong>Dr. Manoj M.T</strong></p>
                                            <p> SOCOMER</p>
                                            <p> Academics, KIMSHEALTH Trivandrum</p>
                                            <a href="#"><i className="fa-solid fa-phone"></i> +91 471 308 1034 / 1030 +91 989 524
                                                8337</a>
                                            <a href="mailto:socomer@kimsip.com"><i className="fa-solid fa-envelope"></i>
                                                socomer@kimsip.com</a>
                                            <div className="mt-3">
                                                <p> <strong>Executive – Academic Affairs</strong> </p>
                                                <p> Academics, KIMSHEALTH Trivandrum</p>
                                                <a href="tel:+914713041849"><i className="fa-solid fa-phone"></i> +91 471 304 1849</a>
                                                <a href="mailto:academics.tvm@ kimsip.com"><i className="fa-solid fa-envelope"></i>
                                                    academics.tvm@ kimsip.com</a>
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

export default EmergencyMedicine