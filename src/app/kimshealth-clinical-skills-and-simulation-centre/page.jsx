import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React from 'react';

const ClinicalSkills = () => {
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
                                                            <li className="active"> KIMSHEALTH Clinical Skills and Simulation Centre </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="details-banner">
                                                <div className="details-heading">
                                                    <h3>KIMSHEALTH Clinical Skills and Simulation Centre</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-6 details-proceduce-banner-right-col">
                                        <img src="img/clinical-skill-banner.jpg" className="img-fluid details-banner-image" alt="" />
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

                                                <h3>“Enhancing quality and patient safety in healthcare”</h3>
                                                <p>Clinical skills are a mix of discrete and measurable knowledge, skills and attitudes essential for patient safety and quality health care. Clinical skills acquisition is an important aspect of medical education and a bridge between gaining procedural knowledge and clinical competence. Learning clinical skills on ‘real patients’ not only jeopardizes patient safety but also raises many ethical concerns.</p>
                                                <p> KIMSHEALTH clinical skills and simulation center represents the leading edge in clinical education by offering an authentic, immersive environment for healthcare professionals to develop safe, innovative and compassionate approaches to patient care. We offer a “mistake forgiving” where participants can safely learn and test their knowledge, skills and abilities in a simulated clinical setting. Our training improves skills not only in novices but also in experts.</p>

                                                <h2>Clinical Skills Lab</h2>
                                                <p>Our skill lab houses state of the art equipments, anatomical models and electronic simulators to provide hands on
                                                    learning experiences for medical, dental and nursing graduates, doctors and nursing staff for the practice of clinical
                                                    skills which are deemed essential for the effective and safe management of patients.</p>
                                            </div>
                                        </div>
                                    </section>
                                    <div className="line-divider"></div>
                                    <section className="section">
                                        <div className="container">
                                            <div className="main-heading sub-heading main-list">
                                                <h2>Facilities</h2>
                                                <p>Basic and advanced skills development packages in accordance with standard protocols in:</p>
                                                <ul>
                                                    <li>Intra venous access</li>
                                                    <li>Central line placement</li>
                                                    <li>Lumbar puncture</li>
                                                    <li>ICD insertion</li>
                                                    <li>Needle thoracotomy</li>
                                                    <li>Abdominal paracentesis</li>
                                                    <li>Intubation</li>
                                                    <li>Intraosseous insertion</li>
                                                    <li>Nasogastric tube insertion</li>
                                                    <li>Urinary catheterization</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </section>
                                    <div className="line-divider"></div>
                                    <section className="section">
                                        <div className="container">
                                            <div className="main-heading sub-heading main-list">
                                                <h2>Simulation Centre (SC)</h2>
                                                <p>Our simulation center provides realistic, accurate, real-time medical simulation. We allow participants to develop skill sets in a safe, controlled environment away from the clinical setting by providing computer-generated scenarios,
                                                    simulating real life acute medical conditions. We currently have high-fidelity adult, pediatric, and neonatal
                                                    mannequins to Empirical knowledge and help develop the practical knowledge.</p>
                                            </div>
                                        </div>
                                    </section>
                                    <div className="line-divider"></div>
                                    <section className="section">
                                        <div className="container">
                                            <div className="main-heading sub-heading main-list">
                                                <h2>Procedures in Our Simulation Lab</h2>
                                                <p>Customized standard protocol based scenarios with due stress on complete participation and hands on practice for
                                                    continuous skills training and improvement of participants in the following areas before moving to actual procedures. We
                                                    also focus on clinical and behavioral aspects of performance, focusing on crisis management and error prevention.</p>
                                                <ul>
                                                    <li>Patient assessment</li>
                                                    <li>Simulated clinical situations – Respiratory and cardiac arrest</li>
                                                    <li>Acute airway emergencies</li>
                                                    <li>Sepsis management</li>
                                                    <li>Central line placement</li>
                                                    <li>Enhancing teamwork, effective communication and resource management</li>
                                                    <li>Punctuated with debriefings supported by videotaped scenarios.</li>
                                                </ul>
                                                <h3 className="mt-3">Need Help Finding Information?</h3>
                                                <p className="mb-0"><a href="tel:+914713041472">Contact us: +91 471 304 1472/1424</a></p>
                                                <p className="mb-0"><a href="mailto:socomer@kimshealth.org">E mail us: socomer@kimshealth.org</a></p>
                                            </div>
                                        </div>
                                    </section>


                                </div>

                                <div className="col-md-4 association-left-col">
                                    <div className="association-form-card mb-5">
                                        <h3>Request a Call Back</h3>
                                        <form action="">
                                            <div className="row">
                                                <div className="col-md-12 mb-3">
                                                    <input type="text" className="form-control" placeholder="Name" name="name" />
                                                </div>
                                                <div className="col-md-12 mb-3">
                                                    <input type="text" className="form-control" placeholder="Enter 10 Digit Mobile Number" name="name" />
                                                </div>
                                                <div className="col-md-12 mb-3">
                                                    <textarea className="form-control" placeholder="Message" id="floatingTextarea"></textarea>
                                                </div>
                                                <div className="col-md-12 mb-3 text-center">
                                                    <button className="btn mb-lg-0 mb-2 hospital-primarybtn px-5 py-2">Submit</button>
                                                </div>
                                            </div>
                                        </form>


                                    </div>
                                    <h4>For More Information Contact Us</h4>
                                    <p><strong>Dr. Manoj M.T</strong></p>
                                    <p> Senior Manager</p>
                                    <a href="tel:+914712941472"><i className="fa-solid fa-phone"></i> +91 471 294 1472</a>
                                    <a href="mailto:socomer@kimshealth.org"><i className="fa-solid fa-envelope"></i> socomer@kimshealth.org</a>

                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="line-divider"></div>
                    <section className="section journal-section">
                        <div className="container">
                            <div className="main-heading">
                                <h2>Journals</h2>
                            </div>
                            <div className="owl-carousel owl-theme journal-slider">
                                <div className="expert-card" data-aos="fade-right">
                                    <a href="#">
                                        <div className="card border-0">
                                            <div className="card-top">
                                                <img src="img/journal1.jpg" className="img-fluid w-100" alt="" />
                                            </div>
                                            <div className="card-content">
                                                <h5>KIMSHEALTH Expressions - Issue 31</h5>
                                            </div>
                                        </div>
                                    </a>

                                </div>

                                <div className="expert-card" data-aos="fade-right">
                                    <div className="card border-0 p-0">
                                        <div className="card-top">
                                            <img src="img/journal2.jpg" className="img-fluid w-100" alt="" />
                                        </div>
                                        <div className="card-content">
                                            <h5>KIMSHEALTH Expressions - Issue 30</h5>
                                        </div>
                                    </div>

                                </div>

                                <div className="expert-card" data-aos="fade-left">
                                    <a href="#">
                                        <div className="card border-0 p-0">
                                            <div className="card-top">
                                                <img src="img/journal3.jpg" className="img-fluid w-100" alt="" />
                                            </div>
                                            <div className="card-content">
                                                <h5>KIMSHEALTH Expressions - Issue 29</h5>
                                            </div>
                                        </div>
                                    </a>

                                </div>

                                <div className="expert-card" data-aos="fade-left">
                                    <a href="#">
                                        <div className="card border-0 p-0">
                                            <div className="card-top">
                                                <img src="img/journal4.jpg" className="img-fluid w-100" alt="" />
                                            </div>
                                            <div className="card-content">
                                                <h5>KIMSHEALTH Scientific Proceedings 12</h5>
                                            </div>
                                        </div>
                                    </a>

                                </div>

                                <div className="expert-card" data-aos="fade-left">
                                    <a href="#">
                                        <div className="card border-0 p-0">
                                            <div className="card-top">
                                                <img src="img/journal5.jpg" className="img-fluid w-100" alt="" />
                                            </div>
                                            <div className="card-content">
                                                <h5>KIMSHEALTH Scientific Proceedings 12</h5>
                                            </div>
                                        </div>
                                    </a>
                                </div>

                                <div className="expert-card" data-aos="fade-left">
                                    <a href="#">
                                        <div className="card border-0 p-0">
                                            <div className="card-top">
                                                <img src="img/journal5.jpg" className="img-fluid w-100" alt="" />
                                            </div>
                                            <div className="card-content">
                                                <h5>KIMSHEALTH Scientific Proceedings 12</h5>
                                            </div>
                                        </div>
                                    </a>
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

export default ClinicalSkills