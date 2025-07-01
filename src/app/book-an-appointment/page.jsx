import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'

const BookAnAppoinment = () => {
    return (
        <>
            <Header />
            <div role="main" className="main">
                <div className="book-appointment-main-page">
                    <div className="page-header">
                        <div className="container">
                            <h2>Book an Appointment</h2>
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
                                        <li className="active"> Book an Appointment </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="section ">
                        <div className="container">
                            <form action="">
                                <div className="row justify-content-between">
                                    <div className="col-md-5 mb-3">
                                        <div className="main-heading">
                                            <h2>Personal Information</h2>
                                        </div>
                                        <div className="custom-from bg-field mx-0">
                                            <div className="row justify-content-between">
                                                <div className="col-xl-12 col-lg-12 col-md-12 col-12 mb-3">
                                                    <label htmlFor=''>Patient / Visitor Name*</label>
                                                    <input type="text" placeholder="Enter Your Name" name=""
                                                        className="form-control pe-0"/>

                                                </div>
                                                <div className="col-xl-12 col-lg-12 col-md-12 col-12 mb-3">
                                                    <label htmlFor=''>Contact Number*</label>
                                                    <input type="text" placeholder="Enter Your Phone Number" name=""
                                                        className="form-control pe-0"/>

                                                </div>

                                                <div className="col-xl-12 col-lg-12 col-md-12 col-12 mb-3">
                                                    <label htmlFor=''>Email Address*</label>
                                                    <input type="text" placeholder="Enter Your Email Address" name=""
                                                        className="form-control pe-0"/>

                                                </div>
                                                <div className="col-xl-12 col-lg-12 col-md-12 col-12 mb-3">
                                                    <label htmlFor=''>Location*</label>
                                                    <select className="form-select from-location">
                                                        <option >Select Location</option>
                                                        <option value="1">One</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                    </select>
                                                </div>




                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-5 mb-3">
                                        <div className="main-heading">
                                            <h2>Appointment Schedule</h2>
                                        </div>
                                        <div className="custom-from bg-field mx-0">
                                            <div className="row justify-content-between">
                                                <div className="col-xl-12 col-lg-12 col-md-12 col-12 mb-3">
                                                    <label htmlFor=''>Select Department*</label>
                                                    <select className="form-select from-location">
                                                        <option >Select a Department</option>
                                                        <option value="1">One</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                    </select>
                                                </div>

                                                <div className="col-xl-12 col-lg-12 col-md-12 col-12 mb-3">
                                                    <label htmlFor=''>Select Doctors*</label>
                                                    <select className="form-select from-location">
                                                        <option >Select a Doctor</option>
                                                        <option value="1">One</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                    </select>
                                                </div>

                                                <div className="col-xl-12 col-lg-12 col-md-12 col-12 mb-3">
                                                    <label htmlFor=''>Appointment Date*</label>
                                                    <div className="input-group">
                                                        <input type="text" placeholder="Select Your Date" name=""
                                                            className="form-control pe-0 datepicker" autoComplete="off"/>
                                                            <span className="input-group-text" id="from-icon"><i
                                                                className="icon-calendar"></i></span>
                                                    </div>


                                                </div>

                                                <div className="col-xl-12 col-lg-12 col-md-12 col-12 mb-3">
                                                    <label htmlFor=''>Appointment Time*</label>
                                                    <div className="input-group">
                                                        <input type="text" placeholder="Select Your Time" name=""
                                                            className="form-control pe-0 timePicker" autoComplete="off"/>
                                                            <span className="input-group-text" id="from-icon"><i
                                                                className="icon-clock"></i></span>
                                                    </div>


                                                </div>

                                                <div className="col-xl-6 col-lg-6 col-md-6 col-12 mb-3">

                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="from-btn">
                                    <button type="button" className="btn d-inline-block w-auto">Submit</button>
                                </div>
                            </form>
                        </div>
                    </section>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default BookAnAppoinment;
