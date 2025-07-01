import Footer from '@/components/Footer';
import Header from '@/components/Header';
import JournalCarousel from '@/components/JournalCarousel';
import React from 'react'

const InternalMedicine = () => {
    return (
        <>
            <Header />
            <div role="main" className="main">
                <div className="internal-medicine-main-page">
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
                                                            <li className="active"> Internal Medicine Training (IMT) </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="details-banner">
                                                <div className="details-heading">
                                                    <h3 className="mb-2">Internal Medicine Training (IMT)</h3>
                                                    <p>UK Equivalent Internal Medicine Training at your Doorstep</p>
                                                    <h5>KIMSHEALTH Gold Guide (IMT)</h5>
                                                    <a href="#" className="mb-3 mt-2 d-block"><i className="custom-download"></i>Download</a>
                                                    <a href="#" className="hospital-primarybtn"> Apply Now</a>

                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-6 details-proceduce-banner-right-col">
                                        <img src="img/inernal-medicine-banner.png" className="img-fluid details-banner-image" alt="" />
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
                                <div className="col-md-8">
                                    <section className="section pt-0">
                                        <div className="main-heading sub-heading">
                                            <h2>IMT Program at KIMSHEALTH Trivandrum</h2>
                                            <p>KIMSHEALTH, a known brand for quality healthcare delivery in India and in the GCC, has its flagship hospital in
                                                Trivandrum, Kerala. It is an 850-bed multi-specialty quaternary care facility, which has emerged as one of the leading
                                                Research and Academic Centres in South India, with a global outreach. KIMSHEALTH has covetable national and i
                                                nternational accreditations like NABH & ACHSI.</p>
                                            <p>KIMSHEALTH has joined hands with the Federation of Royal College of Physicians (RCP) which comprises the RCPs of
                                                Edinburgh, Glasgow, and London to conduct the unique Internal Medicine Training program (IMT) earlier termed as Core Medical Training (CMT) a three-year residency program for training and educating aspiring MRCP candidates to ensure success and matching the high standards as in the UK.</p>
                                            <p>The MRCP conducted by the RCP is getting more and more popular in India and many medical graduates from India fail the MRCP examination purely because of lack of training. Therefore, KIMSHEALTH aims to extend a structured teaching program which promises to provide the much-needed training for candidates by faculties who have extensive teaching experience and knowledge in MRCP. KIMSHEALTH also wants to cultivate the clinical approach of IMT training to improve patient care.</p>
                                            <p>IMT curriculum will provide physicians with the required skills. The Trainees have to complete the full IMT program including workplace-based assessments and their MRCP (UK) examinations during this period. The MRCP (UK) Part 3 Clinical
                                                Examination (Practical Assessment of Clinical Examination Skills) – PACES examination is held in Kochi, Trivandrum and other sites in India. The MRCP (UK) PACES exam is designed to test the clinical knowledge and skills of Trainee Doctors who hope to enter higher specialty training in UK. Trainees must have passed the Part 1 written examination within the last 7 years before taking PACES. The exam sets rigorous standards to ensure that Trainees are competent across a range of skills and ready to provide a high standard of care to patients. In PACES, candidates are assessed on their ability to carry out essential clinical skills. Candidates undergoing IMT in KIMSHEALTH are considered equivalent to those completing the program in the UK and have an equal chance to proceed for higher specialty training in the UK (PLAB exempted). The first IMT program at KIMSHEALTH commenced in November 2018.</p>
                                        </div>
                                    </section>
                                    <div className="line-divider"></div>
                                    <section className="section">
                                        <div className="container">
                                            <div className="main-heading sub-heading main-list">
                                                <h2>Notification</h2>
                                                <p>KIMSHEALTH in association with the Joint Royal Collages of Physicians Training Board (JRCPTB), UK invites applications for the Three year Internal Medicine Training.</p>
                                                <ul>
                                                    <li>
                                                        <strong>Application Opens on</strong>
                                                        Lorem ipsum dolor sit amet
                                                    </li>
                                                    <li>
                                                        <strong>Application Closes on</strong>
                                                        30th June, 2025
                                                    </li>

                                                    <li>
                                                        <strong>Interview</strong>
                                                        15th July, 2025
                                                    </li>

                                                    <li>
                                                        <strong>Final Selection Declaration</strong>
                                                        15th July, 2025
                                                    </li>

                                                    <li>
                                                        <strong>Acceptance of Seat by Candidates & Counseling</strong>
                                                        20th July, 2025
                                                    </li>

                                                    <li>
                                                        <strong>Payment of Fees</strong>
                                                        1st August, 2025
                                                    </li>
                                                </ul>
                                                <p>Application is received online (Further details of the program are available on the website, www.kimshealth.org/Trivandrum Internal Medicine Training). For any queries, please contact 91 471 294 1399 / 294 1306. There is a fee of Rs. 2000/- for applying, the details of which are shown in the website.</p>
                                            </div>
                                        </div>
                                    </section>

                                    <div className="line-divider"></div>
                                    <section className="section">
                                        <div className="container">
                                            <div className="main-heading sub-heading main-list">
                                                <h2>Eligibility for the IMT program</h2>

                                                <ul>
                                                    <li>
                                                        Candidates must hold an MBBS degree from one of the recognized National or International Medical Institutions which are listed by the Indian Medical Council Act, 1956.
                                                    </li>
                                                    <li>
                                                        Candidates must have completed the mandatory internship and received the permanent registration from Medical
                                                        Council of India (MCI) or State Medical Council (SMC).
                                                    </li>


                                                </ul>
                                                <p>For further information on IMT programme by UK Please visit:</p>
                                                <p>https://www.jrcptb.org.uk/about-us/international-programme-accreditation</p>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                                <div className="col-md-4">
                                    <div className="association-form-card">
                                        <h3>Application Fee : ₹ 2,000 /-</h3>
                                        <div className="main-list">
                                            <ul>
                                                <li><strong>Name of Beneficiary</strong>KIMS Healthcare Management Ltd</li>
                                                <li><strong>Beneficiary Contact no</strong>0471- 304 1396, 304 1393</li>
                                                <li><strong>Beneficiary Email ID</strong>rajakumar.m@kimshealth.org / vishnu.ms@kimshealth.org</li>
                                                <li><strong>Name & Address of Bank</strong>State Bank of India Commercial Branch ,
                                                    Sree Ganesh Kripa, Jas Hotel Road ,
                                                    Thycaud, Trivandrum – 695014 Kerala,
                                                    India Phone : 0471-2339891</li>
                                                <li><strong>MICR Code</strong>695002021</li>
                                                <li><strong>Account Type</strong>Cash Credit Account</li>
                                                <li><strong>Account Number</strong>30123158726</li>
                                                <li><strong>IFSC Code</strong>SBIN0004350</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="line-divider"> </div>

                    <JournalCarousel />

                </div>
            </div>
            <Footer />
        </>
    )
}

export default InternalMedicine;
