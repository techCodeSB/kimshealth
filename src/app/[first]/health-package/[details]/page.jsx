import getStaticText from '@/app/lib/getStaticTextServer';
import Breadcrumb from '@/components/Breadcrumb';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

const HealthPackageDetails = async () => {
    const staticText = await getStaticText();
    return (
        <>
            <Header />
            <div role="main" className="main">
                <div className="health-pack-details-main-page">
                    <section className="section details-page-before py-0">
                        <div className="procedures-details-page-header inner-pages-header">
                            <div className="container-fluid px-0">
                                <div className="row">
                                    <div className="col-md-6 details-proceduce-banner-left-col">
                                        <div className="hospital-banner-container">
                                            <div className="breadcrumb-wrapper py-2 ps-2 ms-1">
                                                <div className="row">
                                                    <div className="col-12">
                                                        <Breadcrumb
                                                            activeTitle={'Diabetic Health Check Up'}
                                                            middleTitle={'Health Packages'}
                                                            middleURL={"/health-package"}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="details-banner">
                                                <div className="details-heading">
                                                    <h3 className="mb-2">Diabetic Health Check Up</h3>
                                                    <ul>

                                                        <li className="test-tube">No. of Tests: 13</li>
                                                        <li className="hospital-doctor"> No. of Consultations: 5 </li>
                                                        <li className="hospital-icon-custom"> KIMSHEALTH Trivandrum </li>
                                                        <li> <i className="fa-solid fa-indian-rupee-sign"></i> INR 6,500/- </li>
                                                    </ul>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-6 details-proceduce-banner-right-col">
                                        <img src="/img/health-pack-banner.png" className="img-fluid details-banner-image" alt="" />
                                    </div>

                                    {/* <!-- <div className="col-md-6">
                                        <img src="/img/details-banner.png" alt="" className="img-fluid w-100"/>
                                    </div> --> */}
                                </div>
                            </div>
                        </div>
                    </section>


                    <section className="section">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-8">
                                    <div className="main-heading sub-heading main-list paragraph-line">
                                        <h3 className="mb-3">KIMSHEALTH Diabetic Health Check Up</h3>
                                        <p>We have a health checkup package especially for diabetic patients. This package includes
                                            an extensive blood test, ECG, ultrasound scan – abdomen, PSA (for men)/PAP smear (for
                                            women), podiatry examination, ophthalmology examination, dental X-Ray and dental
                                            consultation, body fat analysis and diet counseling, and an overall physical
                                            examination.</p>
                                        <p>Note :- A one time patient registration fees of INR 100 is applicable and is to be paid
                                            at the time of the visit to the hospital before availing the health checkup package.
                                            This charge is exclusive of the health checkup package price.</p>
                                        <h2>Test Inclusions</h2>
                                        <span>Blood Investigations</span>
                                        <ul>
                                            <li>CBC, FBS, PPBS, TSH</li>
                                            <li>Lipid Profile - Cholesterol, Triglycerides, HDL, LDL</li>
                                            <li>Liver Function Test - Alkaline Phosphatase, AST, ALT, Bilirubin Total & Direct,
                                                Total Protein, Albumin, Globulin, A/G Ration</li>
                                            <li>Kidney Profile - Creatinine, Blood Urea Nitrogen</li>
                                            <li>Uric Acid, Calcium</li>
                                            <li>Electrolytes - Sodium, Potassium</li>
                                            <li>HbA1c</li>
                                            <li>Urine Microalbuminuria</li>
                                            <li>Urine Routine Examination</li>
                                        </ul>
                                        <span>Chest X-ray (Optional)</span>
                                        <span>ECG</span>
                                        <span>Ultrasound Scan - Abdomen</span>
                                        <span>PSA (For Men) / PAP Smear (For Women)</span>
                                        <span>Podiatry Examination</span>
                                        <span>Ophthalmology Examination</span>
                                        <span>Dental X-Ray + Dental Consultation</span>
                                        <span>Body Fat Analysis & Diet Counseling</span>
                                        <span>Physical Examination & Consultation With The Physician</span>
                                        <span>Breakfast & Lunch</span>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="association-form-card mb-5">
                                        <h3>GET A CALLBACK FROM OUR HEALTH ADVISOR</h3>
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

                    <section className="section">
                        <div className="container">
                            <div className="main-heading sub-heading main-list">
                                <h2>Patients Preparation Notes</h2>


                                <ul>
                                    <li>Please take prior appointments or appointments call: 0471 /2941400.</li>
                                    <li>Report the hospital reception at the appointment time on empty stomach.</li>
                                    <li>Fasting required for 10 – 12 hours. Avoid tight clothing and formal attire.</li>
                                    <li>Bring all previous medical records & prescriptions, if available along with regular
                                        medicines.</li>
                                    <li>Any women in the reproductive age group must inform if she is pregnant or thinks she may be
                                        pregnant, as she should not undergo fluoroscopy, X-ray and CT unless medically necessary.
                                    </li>
                                    <li>Breakfast & Lunch will be provided by KIMS.</li>
                                    <li>Opinion and advice will be given by the consultant on the basis of the test reports in the
                                        package.</li>
                                    <li>Any further tests or consultation will not be a part of this package and hence will be
                                        charged extra.</li>
                                    <li>The availability of reports in such instances will depend on the nature of the tests.</li>

                                </ul>
                            </div>
                        </div>
                    </section>

                    <div className="line-divider"></div>
                    <section className="section">
                        <div className="container">
                            <div className="row justify-content-between" data-aos="fade-up">
                                <div className="col-md-6 col-8">
                                    <div className="main-heading">
                                        <h2>Other Health Package </h2>
                                    </div>
                                </div>
                                <div className="col-md-2 col-4">
                                    <div className="over-all-btn text-end">
                                        <a href="#">View All <span><img src="/img/slider-right-arrow.svg" className="img-fluid"
                                            alt="" /></span></a>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-3 mb-3">
                                    <div className="custom-hospital-top-card">
                                        <div className="hospital-img">
                                            <a href="#"><img src="/img/health-package1.jpg" alt="" className="img-fluid w-100" /></a>
                                        </div>
                                        <div className="hospital-content">
                                            <h3>Routine Health Check Up</h3>
                                            <p>08 tests included</p>
                                            <div className="main-list">
                                                <ul>
                                                    <li>CBC</li>
                                                    <li>FBC</li>
                                                    <li>Liver Function Test</li>
                                                </ul>
                                            </div>
                                            <p><u>+5 More</u></p>
                                            <div className="d-flex align-items-center justify-content-between py-2 ">
                                                <div className="hospital-content p-0">
                                                    <ul>
                                                        <li className="location-icon-custom">KIMSHEALTH Trivandrum</li>
                                                    </ul>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    <ul>
                                                        <li>5,000/-</li>
                                                    </ul>
                                                </div>
                                            </div>

                                            <div className="d-lg-flex d-block align-items-center justify-content-between pt-3">
                                                <a href="#" className="btn mb-lg-0 mb-2 hospital-primarybtn">View Details</a>
                                                <a href="#" className="btn mb-lg-0 mb-3 hospital-secondarybtn">Book Now</a>
                                            </div>
                                        </div>



                                    </div>
                                </div>

                                <div className="col-md-3 mb-3">
                                    <div className="custom-hospital-top-card">
                                        <div className="hospital-img">
                                            <a href="#"><img src="/img/health-package1.jpg" alt="" className="img-fluid w-100" /></a>
                                        </div>
                                        <div className="hospital-content">
                                            <h3>Routine Health Check Up</h3>
                                            <p>08 tests included</p>
                                            <div className="main-list">
                                                <ul>
                                                    <li>CBC</li>
                                                    <li>FBC</li>
                                                    <li>Liver Function Test</li>
                                                </ul>
                                            </div>
                                            <p><u>+5 More</u></p>
                                            <div className="d-flex align-items-center justify-content-between py-2 ">
                                                <div className="hospital-content p-0">
                                                    <ul>
                                                        <li className="location-icon-custom">KIMSHEALTH Trivandrum</li>
                                                    </ul>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    <ul>
                                                        <li>5,000/-</li>
                                                    </ul>
                                                </div>
                                            </div>

                                            <div className="d-lg-flex d-block align-items-center justify-content-between pt-3">
                                                <a href="#" className="btn mb-lg-0 mb-2 hospital-primarybtn">View Details</a>
                                                <a href="#" className="btn mb-lg-0 mb-3 hospital-secondarybtn">Book Now</a>
                                            </div>
                                        </div>



                                    </div>
                                </div>

                                <div className="col-md-3 mb-3">
                                    <div className="custom-hospital-top-card">
                                        <div className="hospital-img">
                                            <a href="#"><img src="/img/health-package1.jpg" alt="" className="img-fluid w-100" /></a>
                                        </div>
                                        <div className="hospital-content">
                                            <h3>Routine Health Check Up</h3>
                                            <p>08 tests included</p>
                                            <div className="main-list">
                                                <ul>
                                                    <li>CBC</li>
                                                    <li>FBC</li>
                                                    <li>Liver Function Test</li>
                                                </ul>
                                            </div>
                                            <p><u>+5 More</u></p>
                                            <div className="d-flex align-items-center justify-content-between py-2 ">
                                                <div className="hospital-content p-0">
                                                    <ul>
                                                        <li className="location-icon-custom">KIMSHEALTH Trivandrum</li>
                                                    </ul>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    <ul>
                                                        <li>5,000/-</li>
                                                    </ul>
                                                </div>
                                            </div>

                                            <div className="d-lg-flex d-block align-items-center justify-content-between pt-3">
                                                <a href="#" className="btn mb-lg-0 mb-2 hospital-primarybtn">View Details</a>
                                                <a href="#" className="btn mb-lg-0 mb-3 hospital-secondarybtn">Book Now</a>
                                            </div>
                                        </div>



                                    </div>
                                </div>

                                <div className="col-md-3 mb-3">
                                    <div className="custom-hospital-top-card">
                                        <div className="hospital-img">
                                            <a href="#"><img src="/img/health-package1.jpg" alt="" className="img-fluid w-100" /></a>
                                        </div>
                                        <div className="hospital-content">
                                            <h3>Routine Health Check Up</h3>
                                            <p>08 tests included</p>
                                            <div className="main-list">
                                                <ul>
                                                    <li>CBC</li>
                                                    <li>FBC</li>
                                                    <li>Liver Function Test</li>
                                                </ul>
                                            </div>
                                            <p><u>+5 More</u></p>
                                            <div className="d-flex align-items-center justify-content-between py-2 ">
                                                <div className="hospital-content p-0">
                                                    <ul>
                                                        <li className="location-icon-custom">KIMSHEALTH Trivandrum</li>
                                                    </ul>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    <ul>
                                                        <li>5,000/-</li>
                                                    </ul>
                                                </div>
                                            </div>

                                            <div className="d-lg-flex d-block align-items-center justify-content-between pt-3">
                                                <a href="#" className="btn mb-lg-0 mb-2 hospital-primarybtn">View Details</a>
                                                <a href="#" className="btn mb-lg-0 mb-3 hospital-secondarybtn">Book Now</a>
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

export default HealthPackageDetails