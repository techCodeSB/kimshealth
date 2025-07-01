import Footer from '@/components/Footer'
import Header from '@/components/Header'
import TestimonialSection from '@/components/TestimonialSection'
import React from 'react'

const TestimonialDetails = () => {
    return (
        <>
            <Header />
            <div role="main" className="main">
                <div className="testimonial-details-main-page">
                    <div className="page-header">
                        <div className="container">
                            <h2>24-Week Preterm Miracle: Uma's Heartfelt Testimonial | KIMSHEALTH </h2>
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
                                            <a href="index.php">Testimonial</a>
                                        </li>
                                        <li className="active"> 24-Week Preterm Miracle: Uma's Heartfelt Testimonial | KIMSHEALTH </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="section">
                        <div className="container">

                            <div className="testimonial-details-card">
                                <div className="row">
                                    <div className="col-md-7 mb-lg-0 mb-3">
                                        <img src="/img/testimonial-details-col.jpg" alt="" className="img-fluid" />
                                    </div>
                                    <div className="col-md-5 testi-rightbox my-auto">
                                        <div className="main-heading">
                                            <h3>1,046 views, Jul 24, 2023 </h3>
                                            <h3> #PrematureBaby #InfantHealth #NewbornCare</h3>
                                            <p>Uma, a Scientist at ISRO, Trivandrum, pours her heartfelt gratitude
                                                towards KIMSHEALTH for turning her dreams into reality. Amidst the
                                                challenges of delivering an extreme pre-term baby at just 24 weeks,
                                                she found solace in the care of Dr. Naveen Jain, Dr. Jyothi Prabhakar,
                                                Dr. Femitha Pournami, and Dr. Anand, who became her unwavering
                                                guardian angels, assuring her of a healthy baby. Their dedication and
                                                expertise left Uma in awe, beyond words. KIMSHEALTH's patient-centric
                                                approach creates a new dimension of hope for Uma and every parent
                                                who seeks care here.</p>
                                        </div>
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
                    </section>

                    <div className="line-divider"></div>

                    <TestimonialSection/>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default TestimonialDetails;
