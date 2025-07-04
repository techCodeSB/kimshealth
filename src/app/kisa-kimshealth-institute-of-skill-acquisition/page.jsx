import Footer from '@/components/Footer'
import Header from '@/components/Header'
import JournalCarousel from '@/components/JournalCarousel'
import React from 'react'

const KisaHealth = () => {
    return (
        <>
            <Header />
            <div role="main" className="main">
                <div className="skills-acquisition-main-page">
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
                                                            <li className="active"> KIMSHEALTH Institute of Skill Acquisition (KISA)
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="details-banner">
                                                <div className="details-heading">
                                                    <h3 className="mb-2"> KIMSHEALTH Institute of Skill Acquisition (KISA)</h3>
                                                    <p>KISA Main Brochure 2023</p>
                                                    <a href="#" className="mb-3 mt-2 d-block"><i
                                                        className="custom-download"></i>Download</a>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-6 details-proceduce-banner-right-col">
                                        <img src="/img/skills-acquisitions-banner.jpg" className="img-fluid details-banner-image" alt="" />
                                    </div>

                                    {/* <!-- <div className="col-md-6">
                                        <img src="/img/details-banner.png" alt="" className="img-fluid w-100">
                                    </div> --> */}
                                </div>
                            </div>
                        </div>
                    </section>


                    <section className="section">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-8 mb-3">
                                    <div className="main-heading sub-heading">
                                        <h2>KIMSHEALTH Institute of Skill Acquisition – KISA</h2>
                                        <p>KIMSHEALTH is a 650 bedded multi-specialty quaternary care hospital where a competent
                                            team of specialists and
                                            sophisticated technology come together to deliver high-quality medical aid. At
                                            KIMSHEALTH, we have everything you need to make a safe decision regarding your health
                                            and healthcare requirements, conforming to global standards.</p>
                                        <p>KIMSHEALTH has a strong academic base, focuses on quality education since its inception.
                                            KIMSHEALTH Institute of Skill Acquisition (KISA) is an initiative of KIMSHEALTH
                                            academics as an additional skill acquisition strategy to address existing gap of skilled
                                            hands in health care Industry. It has been conceived as an idea for transforming
                                            KIMSHEALTH as a hub for skilled manpower by imparting skill training to eligible
                                            candidates.</p>
                                        <p>The eligibility and duration of the course depend on the curriculum offered. The courses
                                            under KISA offer an internship component with strong emphasis on practical orientation.
                                            The certification is approved by KIMSHEALTH along with BSS (Bharat Sevak Samaj),
                                            National Development Agency, Promoted by Government of India.</p>
                                        <h3>Our AIM</h3>
                                        <p>The aim is to provide health care cantered skill training to candidates to assume
                                            responsibility as competent skilled
                                            personnel at all the levels of work through scientifically designed specialized courses.
                                        </p>

                                        <div className="skill-form-section">
                                            <form action="">
                                                <div className="row justify-content-center">
                                                    <div className="col-md-6 mb-3">
                                                        <div
                                                            className="input-group p-0 my-lg-5 my-1 position-relative justify-content-center">
                                                            <select className="form-select diseases-page-search">
                                                                <option value={""}>Search for Course </option>
                                                                <option value="1">One</option>
                                                                <option value="2">Two</option>
                                                                <option value="3">Three</option>
                                                            </select>
                                                            <button className="input-group-text border-0 search-btn-page"><i className="fa-solid fa-chevron-down"></i></button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>

                                            <div className="row">
                                                <div className="col-md-4">
                                                    <div className="procedure-acc-card mb-3">
                                                        <div className="accordion" id="accordionExample">
                                                            <div className="accordion-item">
                                                                <h2 className="accordion-header">
                                                                    <button className="accordion-button" type="button"
                                                                        data-bs-toggle="collapse" data-bs-target="#collapse40"
                                                                        aria-expanded="true" aria-controls="collapse40">
                                                                        <span>Diploma in CSSD Technology Course</span>
                                                                    </button>
                                                                </h2>
                                                                <div id="collapse40" className="accordion-collapse collapse show">
                                                                    <div className="accordion-body main-list px-0 pt-0">
                                                                        <ul>
                                                                            <li>Affiliation: BSS</li>
                                                                            <li>Entry Level: Plus two with science</li>
                                                                            <li>Course Duration: 1 Year</li>
                                                                            <li>Fees: 15,000/-</li>
                                                                            <li>Course period (stipend): 5000/-</li>
                                                                            <li>Internship (stipend): 6500/-</li>
                                                                        </ul>
                                                                        <a href="#" className="doctotal-btn">View More</a>
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
                                                                        data-bs-toggle="collapse" data-bs-target="#collapse41"
                                                                        aria-expanded="true" aria-controls="collapse41">
                                                                        <span>Diploma in Endoscopy
                                                                            Technology</span>
                                                                    </button>
                                                                </h2>
                                                                <div id="collapse41" className="accordion-collapse collapse show">
                                                                    <div className="accordion-body main-list px-0 pt-0">
                                                                        <ul>
                                                                            <li>Affiliation: BSS</li>
                                                                            <li>Entry Level: Plus two with science</li>
                                                                            <li>Course Duration: 2 Year</li>
                                                                            <li>Fees: 25,000/-</li>
                                                                            <li>Course period (stipend): 3000/-</li>
                                                                            <li>Internship (stipend): 5000/-</li>
                                                                        </ul>
                                                                        <a href="#" className="doctotal-btn">View More</a>
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
                                                                        data-bs-toggle="collapse" data-bs-target="#collapse42"
                                                                        aria-expanded="true" aria-controls="collapse42">
                                                                        <span>Diploma in Dental
                                                                            Assistant</span>
                                                                    </button>
                                                                </h2>
                                                                <div id="collapse42" className="accordion-collapse collapse show">
                                                                    <div className="accordion-body main-list px-0 pt-0">
                                                                        <ul>
                                                                            <li>Affiliation: BSS</li>
                                                                            <li>Entry Level: Plus two</li>
                                                                            <li>Course Duration: 1 Year</li>
                                                                            <li>Fees: 5,000/-</li>
                                                                            <li>Course period (stipend): 2000/-</li>
                                                                            <li>Internship (stipend): 3000/-</li>
                                                                        </ul>
                                                                        <a href="#" className="doctotal-btn">View More</a>
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
                                                                    <button className="accordion-button collapsed" type="button"
                                                                        data-bs-toggle="collapse" data-bs-target="#collapse43"
                                                                        aria-expanded="true" aria-controls="collapse43">
                                                                        <span>Diploma in CSSD Technology Course</span>
                                                                    </button>
                                                                </h2>
                                                                <div id="collapse43" className="accordion-collapse collapse">
                                                                    <div className="accordion-body main-list px-0 pt-0">
                                                                        <ul>
                                                                            <li>Affiliation: BSS</li>
                                                                            <li>Entry Level: Plus two</li>
                                                                            <li>Course Duration: 1 Year</li>
                                                                            <li>Fees: 5,000/-</li>
                                                                            <li>Course period (stipend): 2000/-</li>
                                                                            <li>Internship (stipend): 3000/-</li>
                                                                        </ul>
                                                                        <a href="#" className="doctotal-btn">View More</a>
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
                                                                    <button className="accordion-button collapsed" type="button"
                                                                        data-bs-toggle="collapse" data-bs-target="#collapse44"
                                                                        aria-expanded="true" aria-controls="collapse44">
                                                                        <span>Diploma in Endoscopy
                                                                            Technology</span>
                                                                    </button>
                                                                </h2>
                                                                <div id="collapse44" className="accordion-collapse collapse">
                                                                    <div className="accordion-body main-list px-0 pt-0">
                                                                        <ul>
                                                                            <li>Affiliation: BSS</li>
                                                                            <li>Entry Level: Plus two with science</li>
                                                                            <li>Course Duration: 2 Year</li>
                                                                            <li>Fees: 25,000/-</li>
                                                                            <li>Course period (stipend): 3000/-</li>
                                                                            <li>Internship (stipend): 5000/-</li>
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
                                                                    <button className="accordion-button collapsed" type="button"
                                                                        data-bs-toggle="collapse" data-bs-target="#collapse45"
                                                                        aria-expanded="true" aria-controls="collapse45">
                                                                        <span>Diploma in Dental
                                                                            Assistant</span>
                                                                    </button>
                                                                </h2>
                                                                <div id="collapse45" className="accordion-collapse collapse ">
                                                                    <div className="accordion-body main-list px-0 pt-0">
                                                                        <ul>
                                                                            <li>Affiliation: BSS</li>
                                                                            <li>Entry Level: Plus two</li>
                                                                            <li>Course Duration: 1 Year</li>
                                                                            <li>Fees: 5,000/-</li>
                                                                            <li>Course period (stipend): 2000/-</li>
                                                                            <li>Internship (stipend): 3000/-</li>
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
                                                                    <button className="accordion-button collapsed" type="button"
                                                                        data-bs-toggle="collapse" data-bs-target="#collapse46"
                                                                        aria-expanded="true" aria-controls="collapse46">
                                                                        <span>Diploma in CSSD Technology Course</span>
                                                                    </button>
                                                                </h2>
                                                                <div id="collapse46" className="accordion-collapse collapse">
                                                                    <div className="accordion-body main-list px-0 pt-0">
                                                                        <ul>
                                                                            <li>Affiliation: BSS</li>
                                                                            <li>Entry Level: Plus two</li>
                                                                            <li>Course Duration: 1 Year</li>
                                                                            <li>Fees: 5,000/-</li>
                                                                            <li>Course period (stipend): 2000/-</li>
                                                                            <li>Internship (stipend): 3000/-</li>
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
                                                                    <button className="accordion-button collapsed" type="button"
                                                                        data-bs-toggle="collapse" data-bs-target="#collapse47"
                                                                        aria-expanded="true" aria-controls="collapse47">
                                                                        <span>Diploma in Endoscopy
                                                                            Technology</span>
                                                                    </button>
                                                                </h2>
                                                                <div id="collapse47" className="accordion-collapse collapse">
                                                                    <div className="accordion-body main-list px-0 pt-0">
                                                                        <ul>
                                                                            <li>Affiliation: BSS</li>
                                                                            <li>Entry Level: Plus two with science</li>
                                                                            <li>Course Duration: 2 Year</li>
                                                                            <li>Fees: 25,000/-</li>
                                                                            <li>Course period (stipend): 3000/-</li>
                                                                            <li>Internship (stipend): 5000/-</li>
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
                                                                    <button className="accordion-button collapsed" type="button"
                                                                        data-bs-toggle="collapse" data-bs-target="#collapse47"
                                                                        aria-expanded="true" aria-controls="collapse47">
                                                                        <span>Diploma in Dental
                                                                            Assistant</span>
                                                                    </button>
                                                                </h2>
                                                                <div id="collapse47" className="accordion-collapse collapse">
                                                                    <div className="accordion-body main-list px-0 pt-0">
                                                                        <ul>
                                                                            <li>Affiliation: BSS</li>
                                                                            <li>Entry Level: Plus two</li>
                                                                            <li>Course Duration: 1 Year</li>
                                                                            <li>Fees: 5,000/-</li>
                                                                            <li>Course period (stipend): 2000/-</li>
                                                                            <li>Internship (stipend): 3000/-</li>
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
                                                                    <button className="accordion-button collapsed" type="button"
                                                                        data-bs-toggle="collapse" data-bs-target="#collapse48"
                                                                        aria-expanded="true" aria-controls="collapse48">
                                                                        <span>Diploma in CSSD Technology Course</span>
                                                                    </button>
                                                                </h2>
                                                                <div id="collapse48" className="accordion-collapse collapse">
                                                                    <div className="accordion-body main-list px-0 pt-0">
                                                                        <ul>
                                                                            <li>Affiliation: BSS</li>
                                                                            <li>Entry Level: Plus two</li>
                                                                            <li>Course Duration: 1 Year</li>
                                                                            <li>Fees: 5,000/-</li>
                                                                            <li>Course period (stipend): 2000/-</li>
                                                                            <li>Internship (stipend): 3000/-</li>
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
                                                                    <button className="accordion-button collapsed" type="button"
                                                                        data-bs-toggle="collapse" data-bs-target="#collapse49"
                                                                        aria-expanded="true" aria-controls="collapse49">
                                                                        <span>Diploma in Endoscopy
                                                                            Technology</span>
                                                                    </button>
                                                                </h2>
                                                                <div id="collapse49" className="accordion-collapse collapse">
                                                                    <div className="accordion-body main-list px-0 pt-0">
                                                                        <ul>
                                                                            <li>Affiliation: BSS</li>
                                                                            <li>Entry Level: Plus two with science</li>
                                                                            <li>Course Duration: 2 Year</li>
                                                                            <li>Fees: 25,000/-</li>
                                                                            <li>Course period (stipend): 3000/-</li>
                                                                            <li>Internship (stipend): 5000/-</li>
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
                                                                    <button className="accordion-button collapsed" type="button"
                                                                        data-bs-toggle="collapse" data-bs-target="#collapse50"
                                                                        aria-expanded="true" aria-controls="collapse50">
                                                                        <span>Diploma in Dental
                                                                            Assistant</span>
                                                                    </button>
                                                                </h2>
                                                                <div id="collapse50" className="accordion-collapse collapse ">
                                                                    <div className="accordion-body main-list px-0 pt-0">
                                                                        <ul>
                                                                            <li>Affiliation: BSS</li>
                                                                            <li>Entry Level: Plus two</li>
                                                                            <li>Course Duration: 1 Year</li>
                                                                            <li>Fees: 5,000/-</li>
                                                                            <li>Course period (stipend): 2000/-</li>
                                                                            <li>Internship (stipend): 3000/-</li>
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
                                                                    <button className="accordion-button collapsed" type="button"
                                                                        data-bs-toggle="collapse" data-bs-target="#collapse51"
                                                                        aria-expanded="true" aria-controls="collapse51">
                                                                        <span>Diploma in CSSD Technology Course</span>
                                                                    </button>
                                                                </h2>
                                                                <div id="collapse51" className="accordion-collapse collapse">
                                                                    <div className="accordion-body main-list px-0 pt-0">
                                                                        <ul>
                                                                            <li>Affiliation: BSS</li>
                                                                            <li>Entry Level: Plus two</li>
                                                                            <li>Course Duration: 1 Year</li>
                                                                            <li>Fees: 5,000/-</li>
                                                                            <li>Course period (stipend): 2000/-</li>
                                                                            <li>Internship (stipend): 3000/-</li>
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
                                                                    <button className="accordion-button collapsed" type="button"
                                                                        data-bs-toggle="collapse" data-bs-target="#collapse52"
                                                                        aria-expanded="true" aria-controls="collapse52">
                                                                        <span>Diploma in Endoscopy
                                                                            Technology</span>
                                                                    </button>
                                                                </h2>
                                                                <div id="collapse52" className="accordion-collapse collapse">
                                                                    <div className="accordion-body main-list px-0 pt-0">
                                                                        <ul>
                                                                            <li>Affiliation: BSS</li>
                                                                            <li>Entry Level: Plus two with science</li>
                                                                            <li>Course Duration: 2 Year</li>
                                                                            <li>Fees: 25,000/-</li>
                                                                            <li>Course period (stipend): 3000/-</li>
                                                                            <li>Internship (stipend): 5000/-</li>
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
                                                                    <button className="accordion-button collapsed" type="button"
                                                                        data-bs-toggle="collapse" data-bs-target="#collapse53"
                                                                        aria-expanded="true" aria-controls="collapse53">
                                                                        <span>Diploma in Dental
                                                                            Assistant</span>
                                                                    </button>
                                                                </h2>
                                                                <div id="collapse53" className="accordion-collapse collapse ">
                                                                    <div className="accordion-body main-list px-0 pt-0">
                                                                        <ul>
                                                                            <li>Affiliation: BSS</li>
                                                                            <li>Entry Level: Plus two</li>
                                                                            <li>Course Duration: 1 Year</li>
                                                                            <li>Fees: 5,000/-</li>
                                                                            <li>Course period (stipend): 2000/-</li>
                                                                            <li>Internship (stipend): 3000/-</li>
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
                                                                    <button className="accordion-button collapsed" type="button"
                                                                        data-bs-toggle="collapse" data-bs-target="#collapse54"
                                                                        aria-expanded="true" aria-controls="collapse54">
                                                                        <span>Diploma in CSSD Technology Course</span>
                                                                    </button>
                                                                </h2>
                                                                <div id="collapse54" className="accordion-collapse collapse">
                                                                    <div className="accordion-body main-list px-0 pt-0">
                                                                        <ul>
                                                                            <li>Affiliation: BSS</li>
                                                                            <li>Entry Level: Plus two</li>
                                                                            <li>Course Duration: 1 Year</li>
                                                                            <li>Fees: 5,000/-</li>
                                                                            <li>Course period (stipend): 2000/-</li>
                                                                            <li>Internship (stipend): 3000/-</li>
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
                                                                    <button className="accordion-button collapsed" type="button"
                                                                        data-bs-toggle="collapse" data-bs-target="#collapse55"
                                                                        aria-expanded="true" aria-controls="collapse55">
                                                                        <span>Diploma in Endoscopy
                                                                            Technology</span>
                                                                    </button>
                                                                </h2>
                                                                <div id="collapse55" className="accordion-collapse collapse">
                                                                    <div className="accordion-body main-list px-0 pt-0">
                                                                        <ul>
                                                                            <li>Affiliation: BSS</li>
                                                                            <li>Entry Level: Plus two with science</li>
                                                                            <li>Course Duration: 2 Year</li>
                                                                            <li>Fees: 25,000/-</li>
                                                                            <li>Course period (stipend): 3000/-</li>
                                                                            <li>Internship (stipend): 5000/-</li>
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
                                                                    <button className="accordion-button collapsed" type="button"
                                                                        data-bs-toggle="collapse" data-bs-target="#collapse56"
                                                                        aria-expanded="true" aria-controls="collapse56">
                                                                        <span>Diploma in Dental
                                                                            Assistant</span>
                                                                    </button>
                                                                </h2>
                                                                <div id="collapse56" className="accordion-collapse collapse ">
                                                                    <div className="accordion-body main-list px-0 pt-0">
                                                                        <ul>
                                                                            <li>Affiliation: BSS</li>
                                                                            <li>Entry Level: Plus two</li>
                                                                            <li>Course Duration: 1 Year</li>
                                                                            <li>Fees: 5,000/-</li>
                                                                            <li>Course period (stipend): 2000/-</li>
                                                                            <li>Internship (stipend): 3000/-</li>
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
                                                                    <button className="accordion-button collapsed" type="button"
                                                                        data-bs-toggle="collapse" data-bs-target="#collapse57"
                                                                        aria-expanded="true" aria-controls="collapse57">
                                                                        <span>Diploma in CSSD Technology Course</span>
                                                                    </button>
                                                                </h2>
                                                                <div id="collapse57" className="accordion-collapse collapse">
                                                                    <div className="accordion-body main-list px-0 pt-0">
                                                                        <ul>
                                                                            <li>Affiliation: BSS</li>
                                                                            <li>Entry Level: Plus two</li>
                                                                            <li>Course Duration: 1 Year</li>
                                                                            <li>Fees: 5,000/-</li>
                                                                            <li>Course period (stipend): 2000/-</li>
                                                                            <li>Internship (stipend): 3000/-</li>
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
                                                                    <button className="accordion-button collapsed" type="button"
                                                                        data-bs-toggle="collapse" data-bs-target="#collapse58"
                                                                        aria-expanded="true" aria-controls="collapse58">
                                                                        <span>Diploma in Endoscopy
                                                                            Technology</span>
                                                                    </button>
                                                                </h2>
                                                                <div id="collapse58" className="accordion-collapse collapse">
                                                                    <div className="accordion-body main-list px-0 pt-0">
                                                                        <ul>
                                                                            <li>Affiliation: BSS</li>
                                                                            <li>Entry Level: Plus two with science</li>
                                                                            <li>Course Duration: 2 Year</li>
                                                                            <li>Fees: 25,000/-</li>
                                                                            <li>Course period (stipend): 3000/-</li>
                                                                            <li>Internship (stipend): 5000/-</li>
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
                                                                    <button className="accordion-button collapsed" type="button"
                                                                        data-bs-toggle="collapse" data-bs-target="#collapse58"
                                                                        aria-expanded="true" aria-controls="collapse58">
                                                                        <span>Diploma in Dental
                                                                            Assistant</span>
                                                                    </button>
                                                                </h2>
                                                                <div id="collapse58" className="accordion-collapse collapse">
                                                                    <div className="accordion-body main-list px-0 pt-0">
                                                                        <ul>
                                                                            <li>Affiliation: BSS</li>
                                                                            <li>Entry Level: Plus two</li>
                                                                            <li>Course Duration: 1 Year</li>
                                                                            <li>Fees: 5,000/-</li>
                                                                            <li>Course period (stipend): 2000/-</li>
                                                                            <li>Internship (stipend): 3000/-</li>
                                                                        </ul>
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
                                <div className="col-md-4">
                                    <div className="association-form-card mb-5">
                                        <h3>GET A CALLBACK</h3>
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
                                                    <button className="btn mb-lg-0 mb-2 hospital-primarybtn px-5 py-2">Submit</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="line-divider"> </div>

                    {/* <JournalCarousel /> */}

                </div>
            </div>
            <Footer />
        </>
    )
}

export default KisaHealth;
