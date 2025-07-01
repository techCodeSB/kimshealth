import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'

const VisaMedical = () => {
    return (
        <>
            <Header />
            <div role="main" className="main">
                <div className="find-doctor-main-page">
                    <div className="page-header">
                        <div className="container">
                            <h2>Visa Medical</h2>
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
                                        <li className="active"> Visa Medical </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="section">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-3 mb-4">
                                    <div className="sticky-left">
                                        <div className="find-doctor-left-col">
                                            <div className="row">
                                                <div className="tab-group text-center mb-3">
                                                    {/* <button type="button" className="btn-tab treat-tab active" onClick="showBox(this,'omega')"> Australia</button> */}
                                                    <button type="button" className="btn-tab treat-tab active"> Australia</button>

                                                    <button type="button" className="btn-tab treat-tab "> New Zeeland</button>

                                                    <button type="button" className="btn-tab treat-tab ">Canada</button>
                                                    <button type="button" className="btn-tab treat-tab ">United Kingdom </button>
                                                </div>
                                            </div>

                                            <div className="find-doc-box">
                                                <h3>Need Help Making an Appointment?</h3>
                                                <div className="rounded-field-form mb-3">
                                                    <form action="">
                                                        <div className="row">
                                                            <div className="col-12 mb-3">
                                                                <label className="form-label">Name <span>*</span></label>
                                                                <input type="text" className="form-control" placeholder="Enter your name" name="name" />
                                                            </div>

                                                            <div className="col-12 mb-3">
                                                                <label className="form-label">Mobile Number <span>*</span></label>
                                                                <input type="text" className="form-control" placeholder="000 000 0000" name="name" />
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
                                </div>

                                <div className="col-md-9 expert-section">
                                    <div className="treat-box" id="omega" style={{display: "block"}}>

                                        <div className="main-heading sub-heading main-list">
                                            <h2>Australia</h2>
                                            <ul>
                                                <li>Original Passport (mandatory) - Exceptional cases, If HAP ID photograph is stamped by Immigration, or if passport copy is attested by VFS</li>
                                                <li>Copy of Passport - First (personal details) and last (address) pages</li>
                                                <li>One passport-size photograph</li>
                                                <li>Copy of Medical Referral letter with HAP ID</li>
                                                <li>Vaccination records for children below 5 years</li>
                                                <li>Covid-19 vaccination final certificate</li>
                                            </ul>
                                            <p><strong>Fee for Australia IMEs</strong></p>
                                            <h3 className="mb-2">For Temporary Visa applicants</h3>
                                            <ul>
                                                <li>0 - 10 yrs : INR 3600 (General medical only) </li>
                                                <li>11-14 yrs : INR 5600 (General medical and Chest X ray) </li>
                                                <li>15 – 74 yrs : INR 6080 (General medical with blood investigations and Chest X ray) </li>
                                                <li>75 yrs and above : INR 4080 (General medical with blood investigations only) / INR 6080 (General medical with blood investigations and Chest X ray)</li>
                                            </ul>
                                            <h3 className="mb-2">For Temporary Visa applicants</h3>
                                            <ul>
                                                <li>0 - 10 yrs : INR 3600 (General medical only) </li>
                                                <li>11-14 yrs : INR 5600 (General medical and Chest X ray) </li>
                                                <li>15 – 74 yrs : INR 6080 (General medical with blood investigations and Chest X ray) </li>
                                                <li>75 yrs and above : INR 4080 (General medical with blood investigations only) / INR 6080 (General medical with blood investigations and Chest X ray)</li>
                                            </ul>
                                            <h3 className="mb-2">For Health care Visa applicants</h3>
                                            <ul>
                                                <li>15 yrs and above : INR 12130 (General medical with blood investigations, Chest X ray)</li>
                                            </ul>
                                            <p><strong>N.B. After the panel physician's submission of health case, if you would like to have the Health case
                                                report you can make the payment of Rs. 1000/- at the time of your visit in our panel clinic.</strong></p>


                                            <h2>General Information</h2>
                                            <p>The tests included in the medical examination are as prescribed by the Immigration authorities of Australia/New Zealand/Canada/UK. If required, additional tests are to be done as per their protocol.</p>
                                            <h3>The tests depend on:</h3>
                                            <ul>
                                                <li>Type of visa</li>
                                                <li>Length of stay</li>
                                                <li>Age of applicant</li>
                                                <li>Any medical issues in medical examination</li>
                                            </ul>
                                            <p>We are now online; you can book your visa medical appointments through our platform: <a href="#">visamedical.kimshealth.org</a> </p>
                                            <p>Your online appointment confirmation is contingent upon the payment of a non-refundable amount of ₹100.</p>
                                            <p>For enquiries and cancelations contact: <a href="#"> 0471 294 1938 | 1950 | 1312 </a> between 8.00 am and 5.30 pm, Monday to
                                                Saturday.
                                                Email us at <a href="#"> medicals.tvm@kimsglobal.com </a></p>

                                            <h2>Other Instructions</h2>
                                            <ul>
                                                <li>Fasting is not required</li>
                                                <li>If you use spectacles, please bring them</li>
                                                <li>If you have any medical history, please bring medical reports</li>
                                                <li>Females in their menstrual cycle are advised to postpone their appointments</li>
                                                <li>Kindly avoid carrying valuable items with you while visiting hospital for medical examination</li>
                                            </ul>
                                        </div>

                                    </div>

                                    <div className="treat-box" id="omega1" style={{display: "none"}}>
                                        <div className="main-heading sub-heading main-list">
                                            <h2>Australia</h2>
                                            <ul>
                                                <li>Original Passport (mandatory) - Exceptional cases, If HAP ID photograph is stamped by Immigration, or if passport copy is attested by VFS</li>
                                                <li>Copy of Passport - First (personal details) and last (address) pages</li>
                                                <li>One passport-size photograph</li>
                                                <li>Copy of Medical Referral letter with HAP ID</li>
                                                <li>Vaccination records for children below 5 years</li>
                                                <li>Covid-19 vaccination final certificate</li>
                                            </ul>
                                            <p><strong>Fee for Australia IMEs</strong></p>
                                            <h3 className="mb-2">For Temporary Visa applicants</h3>
                                            <ul>
                                                <li>0 - 10 yrs : INR 3600 (General medical only) </li>
                                                <li>11-14 yrs : INR 5600 (General medical and Chest X ray) </li>
                                                <li>15 – 74 yrs : INR 6080 (General medical with blood investigations and Chest X ray) </li>
                                                <li>75 yrs and above : INR 4080 (General medical with blood investigations only) / INR 6080 (General medical with blood investigations and Chest X ray)</li>
                                            </ul>
                                            <h3 className="mb-2">For Temporary Visa applicants</h3>
                                            <ul>
                                                <li>0 - 10 yrs : INR 3600 (General medical only) </li>
                                                <li>11-14 yrs : INR 5600 (General medical and Chest X ray) </li>
                                                <li>15 – 74 yrs : INR 6080 (General medical with blood investigations and Chest X ray) </li>
                                                <li>75 yrs and above : INR 4080 (General medical with blood investigations only) / INR 6080 (General medical with blood investigations and Chest X ray)</li>
                                            </ul>
                                            <h3 className="mb-2">For Health care Visa applicants</h3>
                                            <ul>
                                                <li>15 yrs and above : INR 12130 (General medical with blood investigations, Chest X ray)</li>
                                            </ul>
                                            <p><strong>N.B. After the panel physician's submission of health case, if you would like to have the Health case
                                                report you can make the payment of Rs. 1000/- at the time of your visit in our panel clinic.</strong></p>


                                        </div>
                                    </div>

                                    <div className="treat-box" id="omega2" style={{display: "none"}}>
                                        <div className="main-heading sub-heading main-list">
                                            <h2>General Information</h2>
                                            <p>The tests included in the medical examination are as prescribed by the Immigration authorities of Australia/New Zealand/Canada/UK. If required, additional tests are to be done as per their protocol.</p>
                                            <h3>The tests depend on:</h3>
                                            <ul>
                                                <li>Type of visa</li>
                                                <li>Length of stay</li>
                                                <li>Age of applicant</li>
                                                <li>Any medical issues in medical examination</li>
                                            </ul>
                                            <p>We are now online; you can book your visa medical appointments through our platform: <a href="#">visamedical.kimshealth.org</a> </p>
                                            <p>Your online appointment confirmation is contingent upon the payment of a non-refundable amount of ₹100.</p>
                                            <p>For enquiries and cancelations contact: <a href="#"> 0471 294 1938 | 1950 | 1312 </a> between 8.00 am and 5.30 pm, Monday to
                                                Saturday.
                                                Email us at <a href="#"> medicals.tvm@kimsglobal.com </a></p>

                                            <h2>Other Instructions</h2>
                                            <ul>
                                                <li>Fasting is not required</li>
                                                <li>If you use spectacles, please bring them</li>
                                                <li>If you have any medical history, please bring medical reports</li>
                                                <li>Females in their menstrual cycle are advised to postpone their appointments</li>
                                                <li>Kindly avoid carrying valuable items with you while visiting hospital for medical examination</li>
                                            </ul>
                                            <h2>Australia</h2>
                                            <ul>
                                                <li>Original Passport (mandatory) - Exceptional cases, If HAP ID photograph is stamped by Immigration, or if passport copy is attested by VFS</li>
                                                <li>Copy of Passport - First (personal details) and last (address) pages</li>
                                                <li>One passport-size photograph</li>
                                                <li>Copy of Medical Referral letter with HAP ID</li>
                                                <li>Vaccination records for children below 5 years</li>
                                                <li>Covid-19 vaccination final certificate</li>
                                            </ul>
                                            <p><strong>Fee for Australia IMEs</strong></p>
                                            <h3 className="mb-2">For Temporary Visa applicants</h3>
                                            <ul>
                                                <li>0 - 10 yrs : INR 3600 (General medical only) </li>
                                                <li>11-14 yrs : INR 5600 (General medical and Chest X ray) </li>
                                                <li>15 – 74 yrs : INR 6080 (General medical with blood investigations and Chest X ray) </li>
                                                <li>75 yrs and above : INR 4080 (General medical with blood investigations only) / INR 6080 (General medical with blood investigations and Chest X ray)</li>
                                            </ul>
                                            <h3 className="mb-2">For Temporary Visa applicants</h3>
                                            <ul>
                                                <li>0 - 10 yrs : INR 3600 (General medical only) </li>
                                                <li>11-14 yrs : INR 5600 (General medical and Chest X ray) </li>
                                                <li>15 – 74 yrs : INR 6080 (General medical with blood investigations and Chest X ray) </li>
                                                <li>75 yrs and above : INR 4080 (General medical with blood investigations only) / INR 6080 (General medical with blood investigations and Chest X ray)</li>
                                            </ul>
                                            <h3 className="mb-2">For Health care Visa applicants</h3>
                                            <ul>
                                                <li>15 yrs and above : INR 12130 (General medical with blood investigations, Chest X ray)</li>
                                            </ul>
                                            <p><strong>N.B. After the panel physician's submission of health case, if you would like to have the Health case
                                                report you can make the payment of Rs. 1000/- at the time of your visit in our panel clinic.</strong></p>



                                        </div>
                                    </div>

                                    <div className="treat-box" id="omega3" style={{display: "none"}}>
                                        <div className="main-heading sub-heading main-list">
                                            <h2>General Information</h2>
                                            <p>The tests included in the medical examination are as prescribed by the Immigration authorities of Australia/New Zealand/Canada/UK. If required, additional tests are to be done as per their protocol.</p>
                                            <h3>The tests depend on:</h3>
                                            <ul>
                                                <li>Type of visa</li>
                                                <li>Length of stay</li>
                                                <li>Age of applicant</li>
                                                <li>Any medical issues in medical examination</li>
                                            </ul>
                                            <p>We are now online; you can book your visa medical appointments through our platform: <a href="#">visamedical.kimshealth.org</a> </p>
                                            <p>Your online appointment confirmation is contingent upon the payment of a non-refundable amount of ₹100.</p>
                                            <p>For enquiries and cancelations contact: <a href="#"> 0471 294 1938 | 1950 | 1312 </a> between 8.00 am and 5.30 pm, Monday to
                                                Saturday.
                                                Email us at <a href="#"> medicals.tvm@kimsglobal.com </a></p>

                                            <h2>Other Instructions</h2>
                                            <ul>
                                                <li>Fasting is not required</li>
                                                <li>If you use spectacles, please bring them</li>
                                                <li>If you have any medical history, please bring medical reports</li>
                                                <li>Females in their menstrual cycle are advised to postpone their appointments</li>
                                                <li>Kindly avoid carrying valuable items with you while visiting hospital for medical examination</li>
                                            </ul>
                                            <h2>Australia</h2>
                                            <ul>
                                                <li>Original Passport (mandatory) - Exceptional cases, If HAP ID photograph is stamped by Immigration, or if passport copy is attested by VFS</li>
                                                <li>Copy of Passport - First (personal details) and last (address) pages</li>
                                                <li>One passport-size photograph</li>
                                                <li>Copy of Medical Referral letter with HAP ID</li>
                                                <li>Vaccination records for children below 5 years</li>
                                                <li>Covid-19 vaccination final certificate</li>
                                            </ul>
                                            <p><strong>Fee for Australia IMEs</strong></p>
                                            <h3 className="mb-2">For Temporary Visa applicants</h3>
                                            <ul>
                                                <li>0 - 10 yrs : INR 3600 (General medical only) </li>
                                                <li>11-14 yrs : INR 5600 (General medical and Chest X ray) </li>
                                                <li>15 – 74 yrs : INR 6080 (General medical with blood investigations and Chest X ray) </li>
                                                <li>75 yrs and above : INR 4080 (General medical with blood investigations only) / INR 6080 (General medical with blood investigations and Chest X ray)</li>
                                            </ul>
                                            <h3 className="mb-2">For Temporary Visa applicants</h3>
                                            <ul>
                                                <li>0 - 10 yrs : INR 3600 (General medical only) </li>
                                                <li>11-14 yrs : INR 5600 (General medical and Chest X ray) </li>
                                                <li>15 – 74 yrs : INR 6080 (General medical with blood investigations and Chest X ray) </li>
                                                <li>75 yrs and above : INR 4080 (General medical with blood investigations only) / INR 6080 (General medical with blood investigations and Chest X ray)</li>
                                            </ul>
                                            <h3 className="mb-2">For Health care Visa applicants</h3>
                                            <ul>
                                                <li>15 yrs and above : INR 12130 (General medical with blood investigations, Chest X ray)</li>
                                            </ul>
                                            <p><strong>N.B. After the panel physician's submission of health case, if you would like to have the Health case
                                                report you can make the payment of Rs. 1000/- at the time of your visit in our panel clinic.</strong></p>

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

export default VisaMedical;
