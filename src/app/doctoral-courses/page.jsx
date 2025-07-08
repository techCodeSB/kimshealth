import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react';
import getStaticText from '@/app/lib/getStaticTextServer';
import { getBaseUrl } from '@/app/lib/getBaseUrl';

const DoctoralCourse = async () => {
    const basePath = await getBaseUrl(true, true)
    const staticText = await getStaticText();


    return (
        <>
            <Header />
            <div role="main" className="main">
                <div className="doctoral-courses-main-page">
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
                                                                <a href={basePath+"/"}>{staticText['Home']}</a>
                                                            </li>
                                                            <li>
                                                                <a href={basePath+"/doctoral-courses"}>{staticText['Academics']}</a>
                                                            </li>
                                                            <li className="active"> Doctoral Courses </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="details-banner">
                                                <div className="details-heading">
                                                    <h3>Doctoral Course</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-6 details-proceduce-banner-right-col">
                                        <img src="/img/doctoral-coures-banner.jpg" className="img-fluid details-banner-image" alt="" />
                                    </div>

                                    {/* <!-- <div className="col-md-6">
                                        <img src="/img/details-banner.png" alt="" className="img-fluid w-100">
                                    </div> --> */}
                                </div>
                            </div>
                        </div>

                    </section>

                    <section className="section doctor-line-divider">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-8">
                                    <section className="section pt-0">
                                        <div className="main-heading">
                                            <h2>Post Doctoral Courses (Super Speciality Courses)</h2>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-4 mb-3">
                                                <div className="procedure-acc-card mb-3">
                                                    <div className="accordion" id="accordionExample">
                                                        <div className="accordion-item">
                                                            <h2 className="accordion-header">
                                                                <button className="accordion-button" type="button"
                                                                    data-bs-toggle="collapse" data-bs-target="#collapse1"
                                                                    aria-expanded="true" aria-controls="collapse1">
                                                                    <span>DNB Cardiology</span>
                                                                </button>
                                                            </h2>
                                                            <div id="collapse1" className="accordion-collapse collapse show">
                                                                <div className="accordion-body px-0 pt-0">
                                                                    <p>Certified by: NBE, New Delhi</p>
                                                                    <ul>
                                                                        <li className="hourglass">Duration : 3 years</li>
                                                                        <li className="luxury">Eligibility : MD</li>
                                                                        <li className="calender-doc">Commencement : Jan</li>
                                                                    </ul>
                                                                    <a href="#" className="doctotal-btn">View More</a>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-md-4 mb-3">
                                                <div className="procedure-acc-card mb-3">
                                                    <div className="accordion" id="accordionExample">
                                                        <div className="accordion-item">
                                                            <h2 className="accordion-header">
                                                                <button className="accordion-button" type="button"
                                                                    data-bs-toggle="collapse" data-bs-target="#collapse2"
                                                                    aria-expanded="true" aria-controls="collapse2">
                                                                    <span>DNB Neonatology</span>
                                                                </button>
                                                            </h2>
                                                            <div id="collapse2" className="accordion-collapse collapse show">
                                                                <div className="accordion-body px-0 pt-0">
                                                                    <p>Certified by: NBE, New Delhi</p>
                                                                    <ul>
                                                                        <li className="hourglass">Duration : 3 years</li>
                                                                        <li className="luxury">Eligibility : MD</li>
                                                                        <li className="calender-doc">Commencement : Jan</li>
                                                                    </ul>
                                                                    <a href="#" className="doctotal-btn">View More</a>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-md-4 mb-3">
                                                <div className="procedure-acc-card mb-3">
                                                    <div className="accordion" id="accordionExample">
                                                        <div className="accordion-item">
                                                            <h2 className="accordion-header">
                                                                <button className="accordion-button" type="button"
                                                                    data-bs-toggle="collapse" data-bs-target="#collapse3"
                                                                    aria-expanded="true" aria-controls="collapse3">
                                                                    <span>DNB Neurology</span>
                                                                </button>
                                                            </h2>
                                                            <div id="collapse3" className="accordion-collapse collapse show">
                                                                <div className="accordion-body px-0 pt-0">
                                                                    <p>Certified by: NBE, New Delhi</p>
                                                                    <ul>
                                                                        <li className="hourglass">Duration : 3 years</li>
                                                                        <li className="luxury">Eligibility : MD</li>
                                                                        <li className="calender-doc">Commencement : Jan</li>
                                                                    </ul>
                                                                    <a href="#" className="doctotal-btn">View More</a>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-md-4 mb-3">
                                                <div className="procedure-acc-card mb-3">
                                                    <div className="accordion" id="accordionExample">
                                                        <div className="accordion-item">
                                                            <h2 className="accordion-header">
                                                                <button className="accordion-button" type="button"
                                                                    data-bs-toggle="collapse" data-bs-target="#collapse4"
                                                                    aria-expanded="true" aria-controls="collapse4">
                                                                    <span>DNB Nephrology</span>
                                                                </button>
                                                            </h2>
                                                            <div id="collapse4" className="accordion-collapse collapse">
                                                                <div className="accordion-body px-0 pt-0">
                                                                    <p>Certified by: NBE, New Delhi</p>
                                                                    <ul>
                                                                        <li className="hourglass">Duration : 3 years</li>
                                                                        <li className="luxury">Eligibility : MD</li>
                                                                        <li className="calender-doc">Commencement : Jan</li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-md-4 mb-3">
                                                <div className="procedure-acc-card mb-3">
                                                    <div className="accordion" id="accordionExample">
                                                        <div className="accordion-item">
                                                            <h2 className="accordion-header">
                                                                <button className="accordion-button" type="button"
                                                                    data-bs-toggle="collapse" data-bs-target="#collapse5"
                                                                    aria-expanded="true" aria-controls="collapse5">
                                                                    <span>DNB Gastroeneterology</span>
                                                                </button>
                                                            </h2>
                                                            <div id="collapse5" className="accordion-collapse collapse">
                                                                <div className="accordion-body px-0 pt-0">
                                                                    <p>Certified by: NBE, New Delhi</p>
                                                                    <ul>
                                                                        <li className="hourglass">Duration : 3 years</li>
                                                                        <li className="luxury">Eligibility : MD</li>
                                                                        <li className="calender-doc">Commencement : Jan</li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>


                                            <div className="col-md-4 mb-3">
                                                <div className="procedure-acc-card mb-3">
                                                    <div className="accordion" id="accordionExample">
                                                        <div className="accordion-item">
                                                            <h2 className="accordion-header">
                                                                <button className="accordion-button" type="button"
                                                                    data-bs-toggle="collapse" data-bs-target="#collapse6"
                                                                    aria-expanded="true" aria-controls="collapse6">
                                                                    <span>DNB Genito Urinary Surgery (Urology)</span>
                                                                </button>
                                                            </h2>
                                                            <div id="collapse6" className="accordion-collapse collapse">
                                                                <div className="accordion-body px-0 pt-0">
                                                                    <p>Certified by: NBE, New Delhi</p>
                                                                    <ul>
                                                                        <li className="hourglass">Duration : 3 years</li>
                                                                        <li className="luxury">Eligibility : MD</li>
                                                                        <li className="calender-doc">Commencement : Jan</li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-md-4 mb-3">
                                                <div className="procedure-acc-card mb-3">
                                                    <div className="accordion" id="accordionExample">
                                                        <div className="accordion-item">
                                                            <h2 className="accordion-header">
                                                                <button className="accordion-button" type="button"
                                                                    data-bs-toggle="collapse" data-bs-target="#collapse7"
                                                                    aria-expanded="true" aria-controls="collapse7">
                                                                    <span>DNB Surgical Gastroeneterology</span>
                                                                </button>
                                                            </h2>
                                                            <div id="collapse7" className="accordion-collapse collapse">
                                                                <div className="accordion-body px-0 pt-0">
                                                                    <p>Certified by: NBE, New Delhi</p>
                                                                    <ul>
                                                                        <li className="hourglass">Duration : 3 years</li>
                                                                        <li className="luxury">Eligibility : MD</li>
                                                                        <li className="calender-doc">Commencement : Jan</li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                    </section>
                                    <div className="line-divider"></div>


                                    <section className="section">
                                        <div className="main-heading">
                                            <h2>PhD in Cardiology</h2>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-4">
                                                <div className="procedure-acc-card mb-3">
                                                    <div className="accordion" id="accordionExample">
                                                        <div className="accordion-item">
                                                            <h2 className="accordion-header">
                                                                <button className="accordion-button" type="button"
                                                                    data-bs-toggle="collapse" data-bs-target="#collapse8"
                                                                    aria-expanded="true" aria-controls="collapse8">
                                                                    <span>PhD in Cardiology</span>
                                                                </button>
                                                            </h2>
                                                            <div id="collapse8" className="accordion-collapse collapse show">
                                                                <div className="accordion-body px-0 pt-0">
                                                                    <p>Certified by: Irkutsk State Medical University, Russia</p>
                                                                    <ul>
                                                                        <li className="hourglass">Duration : 3 years</li>
                                                                        <li className="luxury">Eligibility : MD</li>
                                                                        <li className="calender-doc">Commencement : Jan</li>
                                                                    </ul>

                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    <div className="line-divider"></div>

                                    <section className="section">
                                        <div className="main-heading">
                                            <h2>Post Diploma Courses</h2>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-4">
                                                <div className="procedure-acc-card mb-3">
                                                    <div className="accordion" id="accordionExample">
                                                        <div className="accordion-item">
                                                            <h2 className="accordion-header">
                                                                <button className="accordion-button" type="button"
                                                                    data-bs-toggle="collapse" data-bs-target="#collapse9"
                                                                    aria-expanded="true" aria-controls="collapse9">
                                                                    <span>DNB Respiratory Diseases</span>
                                                                </button>
                                                            </h2>
                                                            <div id="collapse9" className="accordion-collapse collapse show">
                                                                <div className="accordion-body px-0 pt-0">
                                                                    <p>Certified by: NBE, New Delhi</p>
                                                                    <ul>
                                                                        <li className="hourglass">Duration : 3 years</li>
                                                                        <li className="luxury">Eligibility : DTCD CET</li>
                                                                        <li className="calender-doc">Commencement : Jan</li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-md-4">
                                                <div className="procedure-acc-card mb-3">
                                                    <div className="accordion" id="accordionExample">
                                                        <div className="accordion-item">
                                                            <h2 className="accordion-header">
                                                                <button className="accordion-button" type="button"
                                                                    data-bs-toggle="collapse" data-bs-target="#collapse10"
                                                                    aria-expanded="true" aria-controls="collapse10">
                                                                    <span>DNB Pediatrics</span>
                                                                </button>
                                                            </h2>
                                                            <div id="collapse10" className="accordion-collapse collapse show">
                                                                <div className="accordion-body px-0 pt-0">
                                                                    <p>Certified by: NBE, New Delhi</p>
                                                                    <ul>
                                                                        <li className="hourglass">Duration : 3 years</li>
                                                                        <li className="luxury">Eligibility : DTCD CET</li>
                                                                        <li className="calender-doc">Commencement : Jan</li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>


                                            <div className="col-md-4">
                                                <div className="procedure-acc-card mb-3">
                                                    <div className="accordion" id="accordionExample">
                                                        <div className="accordion-item">
                                                            <h2 className="accordion-header">
                                                                <button className="accordion-button" type="button"
                                                                    data-bs-toggle="collapse" data-bs-target="#collapse11"
                                                                    aria-expanded="true" aria-controls="collapse11">
                                                                    <span>DNB Obstetrics & Gynaecology</span>
                                                                </button>
                                                            </h2>
                                                            <div id="collapse11" className="accordion-collapse collapse show">
                                                                <div className="accordion-body px-0 pt-0">
                                                                    <p>Certified by: NBE, New Delhi</p>
                                                                    <ul>
                                                                        <li className="hourglass">Duration : 3 years</li>
                                                                        <li className="luxury">Eligibility : DTCD CET</li>
                                                                        <li className="calender-doc">Commencement : Jan</li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-md-4">
                                                <div className="procedure-acc-card mb-3">
                                                    <div className="accordion" id="accordionExample">
                                                        <div className="accordion-item">
                                                            <h2 className="accordion-header">
                                                                <button className="accordion-button" type="button"
                                                                    data-bs-toggle="collapse" data-bs-target="#collapse12"
                                                                    aria-expanded="true" aria-controls="collapse12">
                                                                    <span>DNB ENT</span>
                                                                </button>
                                                            </h2>
                                                            <div id="collapse12" className="accordion-collapse collapse">
                                                                <div className="accordion-body px-0 pt-0">
                                                                    <p>Certified by: NBE, New Delhi</p>
                                                                    <ul>
                                                                        <li className="hourglass">Duration : 3 years</li>
                                                                        <li className="luxury">Eligibility : DTCD CET</li>
                                                                        <li className="calender-doc">Commencement : Jan</li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-md-4">
                                                <div className="procedure-acc-card mb-3">
                                                    <div className="accordion" id="accordionExample">
                                                        <div className="accordion-item">
                                                            <h2 className="accordion-header">
                                                                <button className="accordion-button" type="button"
                                                                    data-bs-toggle="collapse" data-bs-target="#collapse13"
                                                                    aria-expanded="true" aria-controls="collapse13">
                                                                    <span>DNB Orthopaedics</span>
                                                                </button>
                                                            </h2>
                                                            <div id="collapse13" className="accordion-collapse collapse">
                                                                <div className="accordion-body px-0 pt-0">
                                                                    <p>Certified by: NBE, New Delhi</p>
                                                                    <ul>
                                                                        <li className="hourglass">Duration : 3 years</li>
                                                                        <li className="luxury">Eligibility : DTCD CET</li>
                                                                        <li className="calender-doc">Commencement : Jan</li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-md-4">
                                                <div className="procedure-acc-card mb-3">
                                                    <div className="accordion" id="accordionExample">
                                                        <div className="accordion-item">
                                                            <h2 className="accordion-header">
                                                                <button className="accordion-button" type="button"
                                                                    data-bs-toggle="collapse" data-bs-target="#collapse14"
                                                                    aria-expanded="true" aria-controls="collapse14">
                                                                    <span>DNB Radio Diagnosis</span>
                                                                </button>
                                                            </h2>
                                                            <div id="collapse14" className="accordion-collapse collapse">
                                                                <div className="accordion-body px-0 pt-0">
                                                                    <p>Certified by: NBE, New Delhi</p>
                                                                    <ul>
                                                                        <li className="hourglass">Duration : 3 years</li>
                                                                        <li className="luxury">Eligibility : DTCD CET</li>
                                                                        <li className="calender-doc">Commencement : Jan</li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-md-4">
                                                <div className="procedure-acc-card mb-3">
                                                    <div className="accordion" id="accordionExample">
                                                        <div className="accordion-item">
                                                            <h2 className="accordion-header">
                                                                <button className="accordion-button" type="button"
                                                                    data-bs-toggle="collapse" data-bs-target="#collapse15"
                                                                    aria-expanded="true" aria-controls="collapse15">
                                                                    <span>DNB Anaeshthesia</span>
                                                                </button>
                                                            </h2>
                                                            <div id="collapse15" className="accordion-collapse collapse">
                                                                <div className="accordion-body px-0 pt-0">
                                                                    <p>Certified by: NBE, New Delhi</p>
                                                                    <ul>
                                                                        <li className="hourglass">Duration : 3 years</li>
                                                                        <li className="luxury">Eligibility : DTCD CET</li>
                                                                        <li className="calender-doc">Commencement : Jan</li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-md-4">
                                                <div className="procedure-acc-card mb-3">
                                                    <div className="accordion" id="accordionExample">
                                                        <div className="accordion-item">
                                                            <h2 className="accordion-header">
                                                                <button className="accordion-button" type="button"
                                                                    data-bs-toggle="collapse" data-bs-target="#collapse16"
                                                                    aria-expanded="true" aria-controls="collapse16">
                                                                    <span>DNB Respiratory Medicine</span>
                                                                </button>
                                                            </h2>
                                                            <div id="collapse16" className="accordion-collapse collapse">
                                                                <div className="accordion-body px-0 pt-0">
                                                                    <p>Certified by: NBE, New Delhi</p>
                                                                    <ul>
                                                                        <li className="hourglass">Duration : 3 years</li>
                                                                        <li className="luxury">Eligibility : DTCD CET</li>
                                                                        <li className="calender-doc">Commencement : Jan</li>
                                                                    </ul>
                                                                </div>
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
                                            <div className="main-heading">
                                                <h2>Broad Speciality Courses</h2>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-4">
                                                    <div className="procedure-acc-card mb-3">
                                                        <div className="accordion" id="accordionExample">
                                                            <div className="accordion-item">
                                                                <h2 className="accordion-header">
                                                                    <button className="accordion-button" type="button"
                                                                        data-bs-toggle="collapse" data-bs-target="#collapse17"
                                                                        aria-expanded="true" aria-controls="collapse17">
                                                                        <span>DNB General Medicine</span>
                                                                    </button>
                                                                </h2>
                                                                <div id="collapse17" className="accordion-collapse collapse show">
                                                                    <div className="accordion-body px-0 pt-0">
                                                                        <p>Certified by: NBE, New Delhi</p>
                                                                        <ul>
                                                                            <li className="hourglass">Duration : 3 years</li>
                                                                            <li className="luxury">Eligibility : MBBS CET</li>
                                                                            <li className="calender-doc">Commencement : Jan</li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-md-4">
                                                    <div className="procedure-acc-card mb-3">
                                                        <div className="accordion" id="accordionExample">
                                                            <div className="accordion-item">
                                                                <h2 className="accordion-header">
                                                                    <button className="accordion-button" type="button"
                                                                        data-bs-toggle="collapse" data-bs-target="#collapse18"
                                                                        aria-expanded="true" aria-controls="collapse18">
                                                                        <span>DNB Family Medicine</span>
                                                                    </button>
                                                                </h2>
                                                                <div id="collapse18" className="accordion-collapse collapse show">
                                                                    <div className="accordion-body px-0 pt-0">
                                                                        <p>Certified by: NBE, New Delhi</p>
                                                                        <ul>
                                                                            <li className="hourglass">Duration : 3 years</li>
                                                                            <li className="luxury">Eligibility : MBBS CET</li>
                                                                            <li className="calender-doc">Commencement : Jan</li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>


                                                <div className="col-md-4">
                                                    <div className="procedure-acc-card mb-3">
                                                        <div className="accordion" id="accordionExample">
                                                            <div className="accordion-item">
                                                                <h2 className="accordion-header">
                                                                    <button className="accordion-button" type="button"
                                                                        data-bs-toggle="collapse" data-bs-target="#collapse19"
                                                                        aria-expanded="true" aria-controls="collapse19">
                                                                        <span>DNB Pediatrics</span>
                                                                    </button>
                                                                </h2>
                                                                <div id="collapse19" className="accordion-collapse collapse show">
                                                                    <div className="accordion-body px-0 pt-0">
                                                                        <p>Certified by: NBE, New Delhi</p>
                                                                        <ul>
                                                                            <li className="hourglass">Duration : 3 years</li>
                                                                            <li className="luxury">Eligibility : MBBS CET</li>
                                                                            <li className="calender-doc">Commencement : Jan</li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-md-4">
                                                    <div className="procedure-acc-card mb-3">
                                                        <div className="accordion" id="accordionExample">
                                                            <div className="accordion-item">
                                                                <h2 className="accordion-header">
                                                                    <button className="accordion-button" type="button"
                                                                        data-bs-toggle="collapse" data-bs-target="#collapse20"
                                                                        aria-expanded="true" aria-controls="collapse20">
                                                                        <span>DNB General Surgery</span>
                                                                    </button>
                                                                </h2>
                                                                <div id="collapse20" className="accordion-collapse collapse ">
                                                                    <div className="accordion-body px-0 pt-0">
                                                                        <p>Certified by: NBE, New Delhi</p>
                                                                        <ul>
                                                                            <li className="hourglass">Duration : 3 years</li>
                                                                            <li className="luxury">Eligibility : MBBS CET</li>
                                                                            <li className="calender-doc">Commencement : Jan</li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-md-4">
                                                    <div className="procedure-acc-card mb-3">
                                                        <div className="accordion" id="accordionExample">
                                                            <div className="accordion-item">
                                                                <h2 className="accordion-header">
                                                                    <button className="accordion-button" type="button"
                                                                        data-bs-toggle="collapse" data-bs-target="#collapse21"
                                                                        aria-expanded="true" aria-controls="collapse21">
                                                                        <span>DNB Obstetrics and Gynaecology</span>
                                                                    </button>
                                                                </h2>
                                                                <div id="collapse21" className="accordion-collapse collapse ">
                                                                    <div className="accordion-body px-0 pt-0">
                                                                        <p>Certified by: NBE, New Delhi</p>
                                                                        <ul>
                                                                            <li className="hourglass">Duration : 3 years</li>
                                                                            <li className="luxury">Eligibility : MBBS CET</li>
                                                                            <li className="calender-doc">Commencement : Jan</li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-md-4">
                                                    <div className="procedure-acc-card mb-3">
                                                        <div className="accordion" id="accordionExample">
                                                            <div className="accordion-item">
                                                                <h2 className="accordion-header">
                                                                    <button className="accordion-button" type="button"
                                                                        data-bs-toggle="collapse" data-bs-target="#collapse22"
                                                                        aria-expanded="true" aria-controls="collapse22">
                                                                        <span>DNB ENT</span>
                                                                    </button>
                                                                </h2>
                                                                <div id="collapse22" className="accordion-collapse collapse ">
                                                                    <div className="accordion-body px-0 pt-0">
                                                                        <p>Certified by: NBE, New Delhi</p>
                                                                        <ul>
                                                                            <li className="hourglass">Duration : 3 years</li>
                                                                            <li className="luxury">Eligibility : MBBS CET</li>
                                                                            <li className="calender-doc">Commencement : Jan</li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-md-4">
                                                    <div className="procedure-acc-card mb-3">
                                                        <div className="accordion" id="accordionExample">
                                                            <div className="accordion-item">
                                                                <h2 className="accordion-header">
                                                                    <button className="accordion-button" type="button"
                                                                        data-bs-toggle="collapse" data-bs-target="#collapse23"
                                                                        aria-expanded="true" aria-controls="collapse23">
                                                                        <span>DNB Orthopaedics</span>
                                                                    </button>
                                                                </h2>
                                                                <div id="collapse23" className="accordion-collapse collapse ">
                                                                    <div className="accordion-body px-0 pt-0">
                                                                        <p>Certified by: NBE, New Delhi</p>
                                                                        <ul>
                                                                            <li className="hourglass">Duration : 3 years</li>
                                                                            <li className="luxury">Eligibility : MBBS CET</li>
                                                                            <li className="calender-doc">Commencement : Jan</li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-md-4">
                                                    <div className="procedure-acc-card mb-3">
                                                        <div className="accordion" id="accordionExample">
                                                            <div className="accordion-item">
                                                                <h2 className="accordion-header">
                                                                    <button className="accordion-button" type="button"
                                                                        data-bs-toggle="collapse" data-bs-target="#collapse24"
                                                                        aria-expanded="true" aria-controls="collapse24">
                                                                        <span>DNB Radio Diagnosis</span>
                                                                    </button>
                                                                </h2>
                                                                <div id="collapse24" className="accordion-collapse collapse ">
                                                                    <div className="accordion-body px-0 pt-0">
                                                                        <p>Certified by: NBE, New Delhi</p>
                                                                        <ul>
                                                                            <li className="hourglass">Duration : 3 years</li>
                                                                            <li className="luxury">Eligibility : MBBS CET</li>
                                                                            <li className="calender-doc">Commencement : Jan</li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>


                                                <div className="col-md-4">
                                                    <div className="procedure-acc-card mb-3">
                                                        <div className="accordion" id="accordionExample">
                                                            <div className="accordion-item">
                                                                <h2 className="accordion-header">
                                                                    <button className="accordion-button" type="button"
                                                                        data-bs-toggle="collapse" data-bs-target="#collapse25"
                                                                        aria-expanded="true" aria-controls="collapse25">
                                                                        <span>DNB Anaeshthesia</span>
                                                                    </button>
                                                                </h2>
                                                                <div id="collapse25" className="accordion-collapse collapse ">
                                                                    <div className="accordion-body px-0 pt-0">
                                                                        <p>Certified by: NBE, New Delhi</p>
                                                                        <ul>
                                                                            <li className="hourglass">Duration : 3 years</li>
                                                                            <li className="luxury">Eligibility : MBBS CET</li>
                                                                            <li className="calender-doc">Commencement : Jan</li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-md-4">
                                                    <div className="procedure-acc-card mb-3">
                                                        <div className="accordion" id="accordionExample">
                                                            <div className="accordion-item">
                                                                <h2 className="accordion-header">
                                                                    <button className="accordion-button" type="button"
                                                                        data-bs-toggle="collapse" data-bs-target="#collapse26"
                                                                        aria-expanded="true" aria-controls="collapse26">
                                                                        <span>DNB Emergency Medicine</span>
                                                                    </button>
                                                                </h2>
                                                                <div id="collapse26" className="accordion-collapse collapse ">
                                                                    <div className="accordion-body px-0 pt-0">
                                                                        <p>Certified by: NBE, New Delhi</p>
                                                                        <ul>
                                                                            <li className="hourglass">Duration : 3 years</li>
                                                                            <li className="luxury">Eligibility : MBBS CET</li>
                                                                            <li className="calender-doc">Commencement : Jan</li>
                                                                        </ul>
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
                                    <section className="section">
                                        <div className="container">
                                            <div className="main-heading">
                                                <h2>Fellowship Courses</h2>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-4">
                                                    <div className="procedure-acc-card mb-3">
                                                        <div className="accordion" id="accordionExample">
                                                            <div className="accordion-item">
                                                                <h2 className="accordion-header">
                                                                    <button className="accordion-button" type="button"
                                                                        data-bs-toggle="collapse" data-bs-target="#collapse27"
                                                                        aria-expanded="true" aria-controls="collapse27">
                                                                        <span>IAP Fellowship Courses in Neonatology</span>
                                                                    </button>
                                                                </h2>
                                                                <div id="collapse27" className="accordion-collapse collapse show ">
                                                                    <div className="accordion-body px-0 pt-0">
                                                                        <p>Certified by: Indian Academy of Pediatrics</p>
                                                                        <ul>
                                                                            <li className="hourglass">Duration : 1 years</li>
                                                                            <li className="luxury">Eligibility : MD, DNB</li>
                                                                            <li className="calender-doc">Commencement : Jan</li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-md-4">
                                                    <div className="procedure-acc-card mb-3">
                                                        <div className="accordion" id="accordionExample">
                                                            <div className="accordion-item">
                                                                <h2 className="accordion-header">
                                                                    <button className="accordion-button" type="button"
                                                                        data-bs-toggle="collapse" data-bs-target="#collapse28"
                                                                        aria-expanded="true" aria-controls="collapse28">
                                                                        <span>Post Graduate Diploma in Clinical Cardiology</span>
                                                                    </button>
                                                                </h2>
                                                                <div id="collapse28" className="accordion-collapse collapse show">
                                                                    <div className="accordion-body px-0 pt-0">
                                                                        <p>Certified by: NBE, New Delhi</p>
                                                                        <ul>
                                                                            <li className="hourglass">Duration : 2 years</li>
                                                                            <li className="luxury">Eligibility : MBBS</li>
                                                                            <li className="calender-doc">Commencement : Jan</li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-md-4">
                                                    <div className="procedure-acc-card mb-3">
                                                        <div className="accordion" id="accordionExample">
                                                            <div className="accordion-item">
                                                                <h2 className="accordion-header">
                                                                    <button className="accordion-button" type="button"
                                                                        data-bs-toggle="collapse" data-bs-target="#collapse29"
                                                                        aria-expanded="true" aria-controls="collapse29">
                                                                        <span>NNF Fellowship Training Programme</span>
                                                                    </button>
                                                                </h2>
                                                                <div id="collapse29" className="accordion-collapse collapse show">
                                                                    <div className="accordion-body px-0 pt-0">
                                                                        <p>Certified by: National Neonatology Forum</p>
                                                                        <ul>
                                                                            <li className="hourglass">Duration : 2 years</li>
                                                                            <li className="luxury">Eligibility : MD, DCH</li>
                                                                            <li className="calender-doc">Commencement : Jan</li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-md-4">
                                                    <div className="procedure-acc-card mb-3">
                                                        <div className="accordion" id="accordionExample">
                                                            <div className="accordion-item">
                                                                <h2 className="accordion-header">
                                                                    <button className="accordion-button" type="button"
                                                                        data-bs-toggle="collapse" data-bs-target="#collapse30"
                                                                        aria-expanded="true" aria-controls="collapse30">
                                                                        <span>IDCCM (Indian Diploma in Critical Care
                                                                            Medicine)</span>
                                                                    </button>
                                                                </h2>
                                                                <div id="collapse30" className="accordion-collapse collapse ">
                                                                    <div className="accordion-body px-0 pt-0">
                                                                        <p>Certified by: National Neonatology Forum</p>
                                                                        <ul>
                                                                            <li className="hourglass">Duration : 2 years</li>
                                                                            <li className="luxury">Eligibility : MD, DCH</li>
                                                                            <li className="calender-doc">Commencement : Jan</li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-md-4">
                                                    <div className="procedure-acc-card mb-3">
                                                        <div className="accordion" id="accordionExample">
                                                            <div className="accordion-item">
                                                                <h2 className="accordion-header">
                                                                    <button className="accordion-button" type="button"
                                                                        data-bs-toggle="collapse" data-bs-target="#collapse31"
                                                                        aria-expanded="true" aria-controls="collapse31">
                                                                        <span>PhD in Cardiology</span>
                                                                    </button>
                                                                </h2>
                                                                <div id="collapse31" className="accordion-collapse collapse ">
                                                                    <div className="accordion-body px-0 pt-0">
                                                                        <p>Certified by: National Neonatology Forum</p>
                                                                        <ul>
                                                                            <li className="hourglass">Duration : 2 years</li>
                                                                            <li className="luxury">Eligibility : MD, DCH</li>
                                                                            <li className="calender-doc">Commencement : Jan</li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                </div>

                                <div className="col-md-4">
                                    <div className="doctoral-page-right-card">
                                        <div className="doctoral-card-content">
                                            <h3>List of PG research projects completed in various departments from 2013 onwards</h3>
                                            <a href="#" className="doctotal-btn">View List</a>
                                        </div>

                                        <div className="procedure-acc-card my-3">
                                            <div className="accordion" id="accordionExample">
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header">
                                                        <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                                            data-bs-target="#collapse32" aria-expanded="true"
                                                            aria-controls="collapse32">
                                                            <span>Our Alumni</span>
                                                        </button>
                                                    </h2>
                                                    <div id="collapse32" className="accordion-collapse show ">
                                                        <div className="accordion-body px-0 pt-0">

                                                            <ol>
                                                                <li>Dr. Rachel Daniel MBBS, MD -Cardiology Passed 2004 – 2007</li>
                                                                <li>Dr. Meera R. MBBS, MD Cardiology Passed 2005 – 2008</li>
                                                                <li>Dr. Radhika S. MBBS, MD Neonatology Passed 2008 – 2011</li>
                                                                <li>Dr. Vishal Vishnu Tewari MBBS, MD Neonatology Passed 2009 – 2012
                                                                </li>
                                                                <li>Dr. Roshna Ramachandran MBBS General Medicine Passed 2005 – 2008
                                                                </li>
                                                                <li>Dr. Prakash Goodsoorkar MBBS General Medicine Passed 2006 – 2009
                                                                </li>
                                                                <li>Dr. Srikanth P. MBBS General Medicine Passed 2008 – 2011</li>
                                                                <li>Dr. Sha Ruknuddin MBBS General Medicine Passed 2008 – 2011</li>
                                                                <li>Dr. Anand M. S MBBS General Medicine Passed 2009 – 2012</li>
                                                                <li>Dr. Harshal Satish Joshi MBBS General Medicine Passed 2009 –
                                                                    2012</li>
                                                                <li>Dr. Anzad MBBS Paediatrics Passed 2006 – 2009</li>
                                                                <li>Dr. Amarjeet MBBS Paediatrics Passed 2007 – 2010</li>
                                                                <li>Dr. Resmy Richard MBBS, DCH Paediatrics Passed 2008 – 2010</li>
                                                                <li>Dr. Mary Megha MBBS, DCH Paediatrics Passed 2008 – 2010</li>
                                                                <li>Dr. Zubair Khan MBBS Paediatrics Passed 2008 – 2010</li>
                                                                <li>Dr. Abhishek Phadke MBBS Paediatrics Passed 2009 – 2012</li>
                                                                <li>Dr. Shalini Somnath MBBS OBG Passed 2005 – 2008</li>
                                                                <li>Dr. Samrudhi Dilip MBBS, DGO OBG Passed 2010 – 2012</li>
                                                                <li>Dr. Abed Gulab Nagure MBBS OBG Passed 2009 – 2011</li>
                                                                <li>Dr. Neeta Ravindranathan MBBS OBG Passed 2009 – 2012</li>
                                                                <li>Dr. Hitendra Patil MBBS General Surgery Passed 2006 – 2009</li>
                                                                <li>Dr. Sharan MBBS General Surgery Passed 2007 – 2010</li>
                                                                <li>Dr. Pankaj Eknath Bhirud MBBS General Surgery Passed 2008 – 2011
                                                                </li>
                                                                <li>Dr. Pushparajan MBBS-DMRD Radio Diagnosis Passed 2006 – 2008
                                                                </li>
                                                                <li>Dr. Parthasarthy MBBS-DMRD Radio Diagnosis Passed 2007 – 2009
                                                                </li>
                                                                <li>Dr. Chidanda MBBS-DMRD Radio Diagnosis Passed 2005 – 2008</li>
                                                                <li>Dr. Saneej K. MBBS-DMRD Radio Diagnosis Passed 2008 – 2010</li>

                                                            </ol>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                        <div className="procedure-acc-card my-3">
                                            <div className="accordion" id="accordionExample">
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header">
                                                        <button className="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapse33"
                                                            aria-expanded="true" aria-controls="collapse33">
                                                            <span>Neonatology Iap – Fellowship Students</span>
                                                        </button>
                                                    </h2>
                                                    <div id="collapse33" className="accordion-collapse collapse ">
                                                        <div className="accordion-body px-0 pt-0">

                                                            <ol>
                                                                <li>Dr. Rachel Daniel MBBS, MD -Cardiology Passed 2004 – 2007</li>
                                                                <li>Dr. Meera R. MBBS, MD Cardiology Passed 2005 – 2008</li>
                                                                <li>Dr. Radhika S. MBBS, MD Neonatology Passed 2008 – 2011</li>
                                                                <li>Dr. Vishal Vishnu Tewari MBBS, MD Neonatology Passed 2009 – 2012
                                                                </li>
                                                                <li>Dr. Roshna Ramachandran MBBS General Medicine Passed 2005 – 2008
                                                                </li>
                                                                <li>Dr. Prakash Goodsoorkar MBBS General Medicine Passed 2006 – 2009
                                                                </li>
                                                                <li>Dr. Srikanth P. MBBS General Medicine Passed 2008 – 2011</li>
                                                                <li>Dr. Sha Ruknuddin MBBS General Medicine Passed 2008 – 2011</li>
                                                                <li>Dr. Anand M. S MBBS General Medicine Passed 2009 – 2012</li>
                                                                <li>Dr. Harshal Satish Joshi MBBS General Medicine Passed 2009 –
                                                                    2012</li>
                                                                <li>Dr. Anzad MBBS Paediatrics Passed 2006 – 2009</li>
                                                                <li>Dr. Amarjeet MBBS Paediatrics Passed 2007 – 2010</li>
                                                                <li>Dr. Resmy Richard MBBS, DCH Paediatrics Passed 2008 – 2010</li>
                                                                <li>Dr. Mary Megha MBBS, DCH Paediatrics Passed 2008 – 2010</li>
                                                                <li>Dr. Zubair Khan MBBS Paediatrics Passed 2008 – 2010</li>
                                                                <li>Dr. Abhishek Phadke MBBS Paediatrics Passed 2009 – 2012</li>
                                                                <li>Dr. Shalini Somnath MBBS OBG Passed 2005 – 2008</li>
                                                                <li>Dr. Samrudhi Dilip MBBS, DGO OBG Passed 2010 – 2012</li>
                                                                <li>Dr. Abed Gulab Nagure MBBS OBG Passed 2009 – 2011</li>
                                                                <li>Dr. Neeta Ravindranathan MBBS OBG Passed 2009 – 2012</li>
                                                                <li>Dr. Hitendra Patil MBBS General Surgery Passed 2006 – 2009</li>
                                                                <li>Dr. Sharan MBBS General Surgery Passed 2007 – 2010</li>
                                                                <li>Dr. Pankaj Eknath Bhirud MBBS General Surgery Passed 2008 – 2011
                                                                </li>
                                                                <li>Dr. Pushparajan MBBS-DMRD Radio Diagnosis Passed 2006 – 2008
                                                                </li>
                                                                <li>Dr. Parthasarthy MBBS-DMRD Radio Diagnosis Passed 2007 – 2009
                                                                </li>
                                                                <li>Dr. Chidanda MBBS-DMRD Radio Diagnosis Passed 2005 – 2008</li>
                                                                <li>Dr. Saneej K. MBBS-DMRD Radio Diagnosis Passed 2008 – 2010</li>

                                                            </ol>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                        <div className="procedure-acc-card my-3">
                                            <div className="accordion" id="accordionExample">
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header">
                                                        <button className="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapse34"
                                                            aria-expanded="true" aria-controls="collapse34">
                                                            <span>Post Graduate Diploma In Clinical Cardiology (Pgdcc)</span>
                                                        </button>
                                                    </h2>
                                                    <div id="collapse34" className="accordion-collapse collapse  ">
                                                        <div className="accordion-body px-0 pt-0">

                                                            <ol>
                                                                <li>Dr. Rachel Daniel MBBS, MD -Cardiology Passed 2004 – 2007</li>
                                                                <li>Dr. Meera R. MBBS, MD Cardiology Passed 2005 – 2008</li>
                                                                <li>Dr. Radhika S. MBBS, MD Neonatology Passed 2008 – 2011</li>
                                                                <li>Dr. Vishal Vishnu Tewari MBBS, MD Neonatology Passed 2009 – 2012
                                                                </li>
                                                                <li>Dr. Roshna Ramachandran MBBS General Medicine Passed 2005 – 2008
                                                                </li>
                                                                <li>Dr. Prakash Goodsoorkar MBBS General Medicine Passed 2006 – 2009
                                                                </li>
                                                                <li>Dr. Srikanth P. MBBS General Medicine Passed 2008 – 2011</li>
                                                                <li>Dr. Sha Ruknuddin MBBS General Medicine Passed 2008 – 2011</li>
                                                                <li>Dr. Anand M. S MBBS General Medicine Passed 2009 – 2012</li>
                                                                <li>Dr. Harshal Satish Joshi MBBS General Medicine Passed 2009 –
                                                                    2012</li>
                                                                <li>Dr. Anzad MBBS Paediatrics Passed 2006 – 2009</li>
                                                                <li>Dr. Amarjeet MBBS Paediatrics Passed 2007 – 2010</li>
                                                                <li>Dr. Resmy Richard MBBS, DCH Paediatrics Passed 2008 – 2010</li>
                                                                <li>Dr. Mary Megha MBBS, DCH Paediatrics Passed 2008 – 2010</li>
                                                                <li>Dr. Zubair Khan MBBS Paediatrics Passed 2008 – 2010</li>
                                                                <li>Dr. Abhishek Phadke MBBS Paediatrics Passed 2009 – 2012</li>
                                                                <li>Dr. Shalini Somnath MBBS OBG Passed 2005 – 2008</li>
                                                                <li>Dr. Samrudhi Dilip MBBS, DGO OBG Passed 2010 – 2012</li>
                                                                <li>Dr. Abed Gulab Nagure MBBS OBG Passed 2009 – 2011</li>
                                                                <li>Dr. Neeta Ravindranathan MBBS OBG Passed 2009 – 2012</li>
                                                                <li>Dr. Hitendra Patil MBBS General Surgery Passed 2006 – 2009</li>
                                                                <li>Dr. Sharan MBBS General Surgery Passed 2007 – 2010</li>
                                                                <li>Dr. Pankaj Eknath Bhirud MBBS General Surgery Passed 2008 – 2011
                                                                </li>
                                                                <li>Dr. Pushparajan MBBS-DMRD Radio Diagnosis Passed 2006 – 2008
                                                                </li>
                                                                <li>Dr. Parthasarthy MBBS-DMRD Radio Diagnosis Passed 2007 – 2009
                                                                </li>
                                                                <li>Dr. Chidanda MBBS-DMRD Radio Diagnosis Passed 2005 – 2008</li>
                                                                <li>Dr. Saneej K. MBBS-DMRD Radio Diagnosis Passed 2008 – 2010</li>

                                                            </ol>
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

                </div>
            </div>
            <Footer />
        </>
    )
}

export default DoctoralCourse