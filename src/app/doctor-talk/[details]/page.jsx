import Footer from '@/components/Footer'
import FromDoctor from '@/components/FromDoctor'
import Header from '@/components/Header'
import React from 'react'

const DoctorTalkDetails = () => {
    return (
        <>
            <Header />
            <div role="main" className="main">
                <div className="testimonial-details-main-page">
                    <div className="page-header">
                        <div className="container">
                            <h2>IBD Explained: Beat Gut Issues with Dr. Arun P</h2>
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
                                            <a href="index.php">Doctor Talk</a>
                                        </li>
                                        <li className="active"> IBD Explained: Beat Gut Issues with Dr. Arun P </li>
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
                                        <img src="/img/doctor-talk-details-banner.jpg" alt="" className="img-fluid" />
                                    </div>
                                    <div className="col-md-5 testi-rightbox my-auto">
                                        <div className="main-heading">
                                            <h3>211 views May 31, 2024 </h3>
                                            <h3> #CrohnsDisease #UlcerativeColitis #InvisibleIllness</h3>
                                            <p>Join Dr. Arun P, Associate Consultant in Gastroenterology at
                                                KIMSHEALTH, as he explores the complexities of Inflammatory Bowel Disease, including Crohn’s Disease and Ulcerative Colitis. Gain a deeper understanding of these conditions, their causes, symptoms, and the latest treatment options available. Learn how to effectively manage your health, reduce flare-ups, and improve your quality of life. Whether you’re a patient, caregiver, or simply interested in digestive health, this session offers valuable insights to help you stay informed and proactive about your well-being. Don’t miss this opportunity to
                                                enhance your knowledge and take control of your health.</p>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between mt-3">
                                            <div className="doctor-name">
                                                <p><span><img src="/img/doctor.png" className="img-fluid" alt="" /></span> Dr.
                                                    Arun P </p>
                                            </div>
                                            <div className="doctor-catagory">
                                                <p>Gastroenterology </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="line-divider"></div>
                    <FromDoctor />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default DoctorTalkDetails