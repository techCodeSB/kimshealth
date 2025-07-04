import Footer from '@/components/Footer'
import Header from '@/components/Header'
import JournalCarousel from '@/components/JournalCarousel'
import React from 'react'

const AmericanHeartAssoc = () => {
    return (
        <>
            <Header />
            <div role="main" className="main">
                <div className="heart-associations-main-page">
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
                                                            <li className="active"> American Heart Associations </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="details-banner">
                                                <div className="details-heading">
                                                    <h3>American Heart Association Basic Life Support and Advanced Life Support
                                                        Course and Paediatric Advanced Life Support</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-6 details-proceduce-banner-right-col">
                                        <img src="/img/heart-assotion-banner.jpg" className="img-fluid details-banner-image" alt=""/>
                                    </div>

                                    {/* <!-- <div className="col-md-6">
                                        <img src="/img/details-banner.png" alt="" className="img-fluid w-100">
                                    </div> --> */}
                                </div>
                            </div>
                        </div>

                    </section>
                    <section className="section association-section">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-8">
                                    <div className="main-heading sub-heading">
                                        <h2>American Heart Association</h2>
                                        <p>KIMSHEALTH is pleased to offer American Heart Association Basic Life Support and Advanced
                                            Cardiovascular Life
                                            Support (BLS/ACLS) and Paediatric Advanced Life Support (PALS) Classes. KIMSHEALTH is a
                                            recognized AHA
                                            International Training Centre and can certify all students with an AHA card upon
                                            successful completion of the class.</p>
                                        <p>This class is recommended for all doctors, nurses, respiratory therapists and other
                                            clinical professionals. People
                                            working in critical care, emergency departments, dialysis and chemotherapy are
                                            especially encouraged to learn this valuable, life-saving skill.</p>
                                        <p>The course will be taught by AHA certified instructors. The class takes place over three
                                            days for BLS & ACLS and two days for PALS and you must attend all of the classes to
                                            become eligible as an AHA BLS/ACLS/PALS Provider.</p>
                                        <p>KIMSHEALTH will also host a pre-class to teach ECG interpretation the week prior to all
                                            scheduled BLS/ACLS/PALS classes. This class is especially helpful to students who have
                                            not had much experience with reading ECGs.</p>
                                        <p> The fee for the BLS &ACLS courses is Rs. 10000 and for BLS & PALS is Rs. 10500.</p>
                                        <h3>Course Schedule</h3>

                                        <div className="table-responsive hear-associations-table">
                                            <table className="table align-middle">
                                                <thead>
                                                    <tr>
                                                        <th>Sr. No</th>
                                                        <th>Dates</th>
                                                        <th>Course Name</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>1</td>
                                                        <td>16th to 18th September 2021</td>
                                                        <td>BLS & PALS</td>
                                                    </tr>
                                                    <tr>
                                                        <td>2</td>
                                                        <td>7th to 9th October 20211</td>
                                                        <td>BLS & ACLS</td>
                                                    </tr>
                                                    <tr>
                                                        <td>3</td>
                                                        <td>4th to 6th November 2021</td>
                                                        <td>BLS & ACLS</td>
                                                    </tr>

                                                    <tr>
                                                        <td>4</td>
                                                        <td>2nd to 4th December 2021</td>
                                                        <td>BLS & ACLS</td>
                                                    </tr>
                                                    <tr>
                                                        <td>5</td>
                                                        <td>16th to 18th December 2021</td>
                                                        <td>BLS & PALS</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <p>The American Heart Association strongly promotes knowledge and proficiency in all AHA
                                            courses and has developed instructional materials for this purpose. Use of these
                                            materials in an educational course does not represent course sponsorship by the AHA. Any
                                            fees charged for such a course, except for a portion of fees needed for AHA course
                                            materials, do not represent income to the AHA.</p>
                                    </div>

                                </div>
                                <div className="col-md-4 ">
                                    <div className="association-left-col">
                                        <div className="association-form-card mb-5">
                                            <h3>Request a Call Back</h3>
                                            <form action="">
                                                <div className="row">
                                                    <div className="col-md-12 mb-3">
                                                        <input type="text" className="form-control" placeholder="Name" name="name"/>
                                                    </div>
                                                    <div className="col-md-12 mb-3">
                                                        <input type="text" className="form-control"
                                                            placeholder="Enter 10 Digit Mobile Number" name="name"/>
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
                                        <h4>For More Information Contact Us</h4>
                                        <p><strong>Dr. Manoj M.T</strong></p>
                                        <p> Senior Manager</p>
                                        <a href="tel:+914712941472"><i className="fa-solid fa-phone"></i> +91 471 294 1472</a>
                                        <a href="mailto:socomer@kimshealth.org"><i className="fa-solid fa-envelope"></i>
                                            socomer@kimshealth.org</a>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="line-divider"> </div>

                    {/* <JournalCarousel/> */}
                </div>
            </div>
            <Footer />
        </>
    )
}

export default AmericanHeartAssoc