import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'
import doctorData from '../lib/getDoctor'
import { getStaticPageContent } from '../lib/getStaticPageContent'
import { getBaseUrl } from '../lib/getBaseUrl'

const Doctor = async () => {
    const baseURL = await getBaseUrl(true, true);
    const data = await getStaticPageContent("doctor");
    const pageContent = data?.data[0]?.pageContent;
    const pageMeta = data?.data[0]?.metaSection;
    const docData = await doctorData.getDoctorAll();


    return (
        <>
            <Header />
            <div role="main" className="main">
                <div className="find-doctor-main-page">
                    <div className="page-header">
                        <div className="container">
                            <h2>{pageContent[0]?.title}</h2>
                        </div>
                    </div>
                    <section className="breadcrumb-wrapper py-2">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <ul className="breadcrumb mb-0">
                                        <li>
                                            <a href="/">Home</a>
                                        </li>
                                        <li className="active"> {pageContent[0]?.title}</li>
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
                                        <h2>{docData.length} Doctors Found</h2>
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
                                        {
                                            docData.map((d, index) => {
                                                return <div className="col-md-4 col-6 mb-3" key={index}>
                                                    <div className="expert-card">
                                                        <div className="card border-0 p-lg-4 p-0">
                                                            <div className="card-top">
                                                                <a href="#">
                                                                    <img src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${d.doctorImage.url}`} className="img-fluid w-100" alt="" />
                                                                </a>
                                                            </div>
                                                            <div className="card-content">
                                                                <h4>{d.name}</h4>
                                                                <p>{d.doctorDesignation}</p>
                                                                <h5>{d.specialities[0].title}</h5>
                                                                <div className="from-btn">
                                                                    <a href="#" className="btn">Appointment</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="main-btn  text-lg-center text-start ms-lg-0 ms-2 mt-2">
                                                            <a href={baseURL + "/doctor/" + d.slug}>View Profile</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            })
                                        }


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