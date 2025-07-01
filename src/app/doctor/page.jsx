import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'

const Doctor = () => {
    return (
        <>
            <Header />
            <div role="main" className="main">
                <div className="find-doctor-main-page">
                    <div className="page-header">
                        <div className="container">
                            <h2>Find a Doctor</h2>
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
                                        <li className="active"> Find a Doctor </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="section">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 col-6">
                                    <div className="main-heading">
                                        <h2>1,000 Doctors Found</h2>
                                    </div>
                                </div>
                                <div className="col-6 d-lg-none d-block">
                                    <button type="button" className="btn-tab form-btn mx-2 filter-box-mobile">Filters <i
                                        className="fa-solid fa-filter"></i></button>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3 mb-4">
                                    <div className="find-doctor-left-col filter-form mt-3">
                                        <h4>Select Filters</h4>
                                        <div className="find-doc-box">
                                            <h3>By City</h3>
                                            <div className="rounded-field-form mb-3">
                                                <form action="">
                                                    <div className="row">
                                                        <div className="col-12">
                                                            <div className="input-group">
                                                                <input type="text" className="form-control" placeholder="Search ....."
                                                                    name="search" />
                                                                <span className="input-group-text"><i
                                                                    className="fa-solid fa-magnifying-glass"></i></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>

                                                <div className="option-find-doc">
                                                    <ul>
                                                        <li>Trivandrum </li>
                                                        <li>Trivandrum </li>
                                                        <li>Trivandrum </li>
                                                        <li>Trivandrum </li>
                                                        <li>Trivandrum </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="find-doc-box">
                                            <h3>By Departments</h3>
                                            <div className="rounded-field-form mb-3">
                                                <form action="">
                                                    <div className="row">
                                                        <div className="col-12">
                                                            <div className="input-group">
                                                                <input type="text" className="form-control" placeholder="Search ....."
                                                                    name="search" />
                                                                <span className="input-group-text"><i
                                                                    className="fa-solid fa-magnifying-glass"></i></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>

                                                <div className="option-find-doc">
                                                    <ul>
                                                        <li>Oncology </li>
                                                        <li>Oncology </li>
                                                        <li>Oncology </li>
                                                        <li>Oncology </li>
                                                        <li>Oncology </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="find-doc-box">
                                            <h3>By Gender</h3>
                                            <div className="rounded-field-form mb-3">
                                                <form action="">
                                                    <div className="row">
                                                        <div className="col-12">
                                                            <div className="input-group">
                                                                <select className="form-select" aria-label="Default select example">
                                                                    <option value={""}>Gender</option>
                                                                    <option value="1">One</option>
                                                                    <option value="2">Two</option>
                                                                    <option value="3">Three</option>
                                                                </select>
                                                                <span className="input-group-text"><i
                                                                    className="fa-solid fa-chevron-down"></i></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>

                                                <div className="option-find-doc">
                                                    <ul>
                                                        <li> Dr. Aaradhya Arya </li>
                                                        <li>Dr. Aaradhya Arya </li>
                                                        <li>Dr. Aaradhya Arya </li>
                                                        <li>Dr. Aaradhya Arya </li>
                                                        <li>Dr. Aaradhya Arya </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="find-doc-box">
                                            <h3>Need Help Making an Appointment?</h3>
                                            <div className="rounded-field-form mb-3">
                                                <form action="">
                                                    <div className="row">
                                                        <div className="col-12 mb-3">
                                                            <label className="form-label">Name <span>*</span></label>
                                                            <input type="text" className="form-control" placeholder="Enter your name"
                                                                name="name" />
                                                        </div>

                                                        <div className="col-12 mb-3">
                                                            <label className="form-label">Mobile Number <span>*</span></label>
                                                            <input type="text" className="form-control" placeholder="000 000 0000"
                                                                name="name" />
                                                        </div>

                                                        <div className="col-12 mb-3">
                                                            <button className="form-btn">Submit</button>
                                                        </div>
                                                    </div>
                                                </form>


                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-9 expert-section">
                                    <div className="row">
                                        <div className="col-md-4 col-6 mb-3">
                                            <div className="expert-card">
                                                <div className="card border-0 p-lg-4 p-0">
                                                    <div className="card-top">
                                                        <a href="#">
                                                            <img src="/img/expert1.png" className="img-fluid w-100" alt="" />
                                                        </a>
                                                    </div>
                                                    <div className="card-content">
                                                        <h4>Dr. Ajith R</h4>
                                                        <p>Sr Consultant and Coordinator</p>
                                                        <h5>Neurosurgery</h5>
                                                        <div className="from-btn">
                                                            <a href="#" className="btn">Appointment</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="main-btn  text-lg-center text-start ms-lg-0 ms-2 mt-2">
                                                    <a href="#">View Profile</a>
                                                </div>
                                            </div>

                                        </div>

                                        <div className="col-md-4 col-6 mb-3">
                                            <div className="expert-card">
                                                <div className=" card border-0 p-lg-4 p-0">
                                                    <div className="card-top">
                                                        <a href="#">
                                                            <img src="/img/expert3.png" className="img-fluid w-100" alt="" />
                                                        </a>
                                                    </div>
                                                    <div className="card-content">
                                                        <h4>Dr. Shabeerali T U</h4>
                                                        <p>Chief Coordinator & Senior . . . </p>
                                                        <h5>Hepatobiliary, Pancreatic & . . . </h5>
                                                        <div className="from-btn">
                                                            <a href="#" className="btn">Appointment</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="main-btn text-lg-center text-start ms-lg-0 ms-2 mt-2">
                                                    <a href="#">View Profile</a>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="col-md-4 col-6 mb-3">
                                            <div className="expert-card">
                                                <div className=" card border-0 p-lg-4 p-0">
                                                    <div className="card-top">
                                                        <a href="">
                                                            <img src="/img/expert4.png" className="img-fluid w-100" alt="" />
                                                        </a>
                                                    </div>
                                                    <div className="card-content">
                                                        <h4>Dr. Muhammed Nazeer </h4>
                                                        <p>Senior Consultant & Group . . . </p>
                                                        <h5>Orthopedics & Trauma </h5>
                                                        <div className="from-btn">
                                                            <a href="#" className="btn">Appointment</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="main-btn text-lg-center text-start ms-lg-0 ms-2 mt-2">
                                                    <a href="#">View Profile</a>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-4 col-6 mb-3">
                                            <div className="expert-card">
                                                <div className="card border-0  p-lg-4 p-0">
                                                    <div className="card-top">
                                                        <a href="#">
                                                            <img src="/img/expert2.png" className="img-fluid w-100" alt="" />
                                                        </a>
                                                    </div>
                                                    <div className="card-content">
                                                        <h4>Dr. Deepa Das</h4>
                                                        <p>Senior Consultant</p>
                                                        <h5>Critical Care</h5>
                                                        <div className="from-btn">
                                                            <a href="#" className="btn">Appointment</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="main-btn text-lg-center text-start ms-lg-0 ms-2 mt-2">
                                                    <a href="#">View Profile</a>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="col-md-4 col-6 mb-3">
                                            <div className="expert-card">
                                                <div className="card border-0 p-lg-4 p-0">
                                                    <div className="card-top">
                                                        <a href="#">
                                                            <img src="/img/expert1.png" className="img-fluid w-100" alt="" />
                                                        </a>
                                                    </div>
                                                    <div className="card-content">
                                                        <h4>Dr. Ajith R</h4>
                                                        <p>Sr Consultant and Coordinator</p>
                                                        <h5>Neurosurgery</h5>
                                                        <div className="from-btn">
                                                            <a href="#" className="btn">Appointment</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="main-btn  text-lg-center text-start ms-lg-0 ms-2 mt-2">
                                                    <a href="#">View Profile</a>
                                                </div>
                                            </div>

                                        </div>

                                        <div className="col-md-4 col-6 mb-3">
                                            <div className="expert-card">
                                                <div className=" card border-0 p-lg-4 p-0">
                                                    <div className="card-top">
                                                        <a href="#">
                                                            <img src="/img/expert3.png" className="img-fluid w-100" alt="" />
                                                        </a>
                                                    </div>
                                                    <div className="card-content">
                                                        <h4>Dr. Shabeerali T U</h4>
                                                        <p>Chief Coordinator & Senior . . . </p>
                                                        <h5>Hepatobiliary, Pancreatic & . . . </h5>
                                                        <div className="from-btn">
                                                            <a href="#" className="btn">Appointment</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="main-btn text-lg-center text-start ms-lg-0 ms-2 mt-2">
                                                    <a href="#">View Profile</a>
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

export default Doctor