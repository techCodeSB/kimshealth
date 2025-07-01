import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'

const AmbulanceServices = () => {
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
                                                            <li className="active"> Ambulance Services </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="details-banner">
                                                <div className="details-heading">
                                                    <h3>Ambulance Services</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-6 details-proceduce-banner-right-col">
                                        <img src="img/ambulace-banner.png" className="img-fluid details-banner-image" alt="" />
                                    </div>

                                    {/* <!-- <div className="col-md-6">
                                        <img src="img/details-banner.png" alt="" className="img-fluid w-100">
                                    </div> --> */}
                                </div>
                            </div>
                        </div>

                    </section>

                    <section className="section">
                        <div className="container">
                            <div className="main-heading sub-heading">
                                <p>KIMSHEALTH Ambulance Services offer prompt, reliable, and fully equipped emergency
                                    transportation, available 24/7 to ensure immediate medical care when every second counts.
                                    Staffed by trained paramedics and supported by advanced life-saving equipment, our ambulances
                                    are designed to handle critical situations efficiently. Whether it’s emergency response,
                                    inter-hospital transfers, or home-to-hospital transport, we prioritize patient safety and
                                    comfort. Our well-coordinated dispatch system ensures rapid response and seamless communication
                                    with hospital emergency teams. </p>
                                <p>At KIMSHEALTH, we are committed to delivering timely, compassionate, and expert care during
                                    transit—because we understand that the journey to treatment is as crucial as the treatment
                                    itself.</p>
                                <p>
                                    For more information please contact</p>
                                <div className="ambulace-number">
                                    <a href="tel:+914712941400"><i className="fa-solid fa-phone"></i> +91 471 294 1400</a>
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

export default AmbulanceServices