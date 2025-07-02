import BlogCarousel from '@/components/BlogCarousel'
import Footer from '@/components/Footer'
import FromDoctor from '@/components/FromDoctor'
import Header from '@/components/Header'
import TestimonialSection from '@/components/TestimonialSection'
import { getStaticPageContent } from '../lib/getStaticPageContent'

const InternationalPage = async () => {


    return (
        <>
            <Header />
            <div role="main" className="main">
                <div className="internation-patients-main-page">
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
                                                            <li className="active"> International Patients </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="details-banner">
                                                <div className="details-heading">
                                                    <h3>International Patients</h3>
                                                    <p>Healing Beyond Borders with Care.</p>
                                                    <div className="rounded-field-form mb-3">
                                                        <form action="">
                                                            <div className="row">
                                                                <div className="col-md-6 col-12 mb-3">
                                                                    <div className="input-group">
                                                                        <input type="text" className="form-control"
                                                                            placeholder="Enter Your Name" name="search" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6 col-12 mb-3">
                                                                    <div className="input-group">
                                                                        <input type="text" id="phone" defaultValue="+91"
                                                                            className="form-control" placeholder="Enter Mobile Number"
                                                                            name="search" />
                                                                    </div>
                                                                </div>

                                                                <div className="col-md-6 col-12 mb-3">
                                                                    <button className="form-btn w-auto px-5">Submit</button>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-6 details-proceduce-banner-right-col">
                                        <img src="/img/international-patients-bg.jpg" className="img-fluid details-banner-image" alt="" />
                                    </div>

                                    {/* <!-- <div className="col-md-6">
                            <img src="/img/details-banner.png" alt="" className="img-fluid w-100" />
                        </div> --> */}
                                </div>
                            </div>
                        </div>

                    </section>

                    <section className="section">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-5 my-auto order-lg-1 order-2">
                                    <div className="details-right-col text-center">
                                        <img src="/img/international-left-col.jpg" alt="" className="img-fluid w-100" />
                                        <h5> Ellea Jane Collister - Delivering her firstborn child at KIMSHEALTH</h5>
                                        <p>Ellea Jane Collister shares her experience of the most . . . . </p>
                                        <div className="main-btn">
                                            <a href="#">Watch Video <span><i className="fa-solid fa-arrow-right"></i></span></a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-7 sub-heading order-lg-2 order-1 mb-lg-0 mb-3">
                                    <div className="main-heading">
                                        <h2 className="mb-lg-1 mb-1">About KIMSHEALTH</h2>
                                        <h3 className="mb-lg-3 mb-3">World-class medical care for patients everywhere.</h3>
                                    </div>

                                    <p>KIMSHEALTH is one of the best healthcare destinations for international patients, offering
                                        world-class medical care combined with compassionate service. Located in India and the
                                        Middle East, KIMSHEALTH is renowned for its state-of-the-art facilities, highly qualified
                                        doctors, and
                                        advanced diagnostic services. The hospital provides a seamless experience for international
                                        patients, with dedicated support for visa assistance, airport transfers, language
                                        interpreters, and personalized care coordinators. Treatment packages are affordable and
                                        transparent, making it a preferred choice for medical tourism. Whether for complex
                                        surgeries, specialized treatments, or wellness programs, KIMSHEALTH ensures quality care in
                                        a comfortable and patient-friendly
                                        environment. </p>

                                    <div className="row justify-content-center internation-right-logo">
                                        <div className="col-md-2 col-4 mb-2">
                                            <div className="internation-logo-box">
                                                <img src="/img/inter-right-logo1.png" alt="" className="img-fluid" />
                                            </div>

                                        </div>

                                        <div className="col-md-2 col-4 mb-2">
                                            <div className="internation-logo-box">
                                                <img src="/img/inter-right-logo2.png" alt="" className="img-fluid" />
                                            </div>

                                        </div>

                                        <div className="col-md-2 col-4 mb-2">
                                            <div className="internation-logo-box"><img src="/img/inter-right-logo3.png" alt=""
                                                className="img-fluid" /></div>

                                        </div>

                                        <div className="col-md-2 col-4 mb-2">
                                            <div className="internation-logo-box"><img src="/img/inter-right-logo4.png" alt=""
                                                className="img-fluid" /></div>

                                        </div>

                                        <div className="col-md-2 col-4 mb-2">
                                            <div className="internation-logo-box"><img src="/img/inter-right-logo5.png" alt=""
                                                className="img-fluid" /></div>

                                        </div>
                                    </div>

                                    {/* <!-- <div className="details-counter-section">
                            <div className="row">
                                <div className="col-md-3 col-6 mb-lg-0 mb-3">
                                    <div className="details-counter-box">
                                        <h2><span className="counter">100</span> <span>+</span></h2>
                                        <p>Beds Facility</p>
                                    </div>
                                </div>
                                <div className="col-md-3 col-6 mb-lg-0 mb-3">
                                    <div className="details-counter-box">
                                        <h2><span className="counter">100</span> <span>+</span></h2>
                                        <p>Doctors</p>
                                    </div>
                                </div>
                                <div className="col-md-3 col-6 mb-lg-0 mb-3">
                                    <div className="details-counter-box">
                                        <h2><span className="counter">100</span> <span>+</span></h2>
                                        <p>Specialities </p>
                                    </div>
                                </div>
                                <div className="col-md-3 col-6 mb-lg-0 mb-3">
                                    <div className="details-counter-box">
                                        <h2><span className="counter">100</span> <span>+</span></h2>
                                        <p>Trained Staff</p>
                                    </div>
                                </div>
                            </div>
                        </div> --> */}
                                </div>
                            </div>
                        </div>
                    </section>


                    <section className="section international-counter-section">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-3 col-6 mb-3">
                                    <div className="international-counter-box text-lg-start text-center">
                                        <h2><span className="counter">30</span> <span>+</span></h2>
                                        <div className="international-counter-bottom-content">
                                            <div>
                                                <img src="/img/inter-badge.png" alt="" className="img-fluid" />
                                            </div>
                                            <div>
                                                <h3>Specialities</h3>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-6 mb-3">
                                    <div className="international-counter-box text-lg-start text-center">
                                        <h2><span className="counter">100</span> <span>+</span></h2>
                                        <div className="international-counter-bottom-content">
                                            <div>
                                                <img src="/img/inter-doctor.png" alt="" className="img-fluid" />
                                            </div>
                                            <div>
                                                <h3>Experienced <br /> Doctors</h3>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-6 mb-3">
                                    <div className="international-counter-box text-lg-start text-center">
                                        <h2><span className="counter">350</span> <span>+</span></h2>
                                        <div className="international-counter-bottom-content">
                                            <div>
                                                <img src="/img/inter-nurse.png" alt="" className="img-fluid" />
                                            </div>
                                            <div>
                                                <h3>Trained <br /> Staffs</h3>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-6 mb-3">
                                    <div className="international-counter-box text-lg-start text-center">
                                        <h2><span className="counter">210</span> <span>+</span></h2>
                                        <div className="international-counter-bottom-content">
                                            <div>
                                                <img src="/img/inter-hospital-bed.png" alt="" className="img-fluid" />
                                            </div>
                                            <div>
                                                <h3>Bed <br /> Facility</h3>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>


                    <section className="section exellence-section" data-aos="fade-up">
                        <div className="container">
                            <div className="row justify-content-between">
                                <div className="col-md-4 col-8">
                                    <div className="main-heading">
                                        <h2>Centers of Excellence</h2>
                                    </div>
                                </div>
                                <div className="col-md-2 col-4">
                                    <div className="over-all-btn text-end">
                                        <a href="#">View All <span><img src="/img/slider-right-arrow.svg" className="img-fluid"
                                            alt="" /></span></a>
                                    </div>
                                </div>
                            </div>

                            <div className="owl-carousel owl-theme exellence">
                                <div className="item">
                                    <div className="card border-0">
                                        <div className="card-top">
                                            <img src="/img/exellence1.jpg" className="img-fluid w-100" alt="" />
                                        </div>
                                        <div className="card-content">
                                            <h4>Cardiology</h4>
                                            <p>The KIMSHEALTH Heart Institute brings together a distinguished KIMSHEALTH</p>
                                            <div className="main-btn">
                                                <a href="#">Read More <span><i className="fa-solid fa-arrow-right"></i></span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="card border-0">
                                        <div className="card-top">
                                            <img src="/img/exellence2.jpg" className="img-fluid w-100" alt="" />
                                        </div>
                                        <div className="card-content">
                                            <h4>Orthopedics & Trauma</h4>
                                            <p>KIMSHEALTH is a specialized center with state-of-the-art facility specialized
                                                facility</p>
                                            <div className="main-btn">
                                                <a href="#">Read More <span><i className="fa-solid fa-arrow-right"></i></span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="item">
                                    <div className="card border-0">
                                        <div className="card-top">
                                            <img src="/img/exellence3.jpg" className="img-fluid w-100" alt="" />
                                        </div>
                                        <div className="card-content">
                                            <h4>Neurology</h4>
                                            <p>The KIMSHEALTH Department of Neurology is one of the best Department</p>
                                            <div className="main-btn">
                                                <a href="#">Read More <span><i className="fa-solid fa-arrow-right"></i></span></a>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="item">
                                    <div className="card border-0">
                                        <div className="card-top">
                                            <img src="/img/exellence4.jpg" className="img-fluid w-100" alt="" />
                                        </div>
                                        <div className="card-content">
                                            <h4>Respiratory Medicine</h4>
                                            <p>The KIMSHEALTH Department of Respiratory Medicine is regarded Respiratory</p>
                                            <div className="main-btn">
                                                <a href="#">Read More <span><i className="fa-solid fa-arrow-right"></i></span></a>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div className="item">
                                    <div className="card border-0">
                                        <div className="card-top">
                                            <img src="/img/exellence4.jpg" className="img-fluid w-100" alt="" />
                                        </div>
                                        <div className="card-content">
                                            <h4>Respiratory Medicine</h4>
                                            <p>The KIMSHEALTH Department of Respiratory Medicine is regarded Respiratory</p>
                                            <div className="main-btn">
                                                <a href="#">Read More <span><i className="fa-solid fa-arrow-right"></i></span></a>
                                            </div>
                                        </div>
                                    </div>

                                </div>


                            </div>
                        </div>
                    </section>

                    <div className="line-divider"></div>
                    <section className="section d-lg-block d-none">
                        <div className="container">
                            <div className="main-heading">
                                <h2>Diseases and Key Procedures</h2>
                            </div>
                            <div className="row justify-content-between">
                                <div className="col-md-6">
                                    <div className="faq-card p-4">
                                        <div className="accordion" id="accordionExample">
                                            <div className="accordion-item">
                                                <h2 className="accordion-header">
                                                    <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                                        data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
                                                        <span>Coronary Artery Disease (CAD)</span>
                                                    </button>
                                                </h2>
                                                <div id="collapse1" className="accordion-collapse collapse show"
                                                    data-bs-parent="#accordionExample">
                                                    <div className="accordion-body">
                                                        <p>Coronary Artery Disease (CAD) occurs when plaque builds up in the
                                                            coronary arteries, narrowing them and reducing blood flow to the heart.
                                                            This can cause chest pain (angina), shortness of breath, or lead to a
                                                            heart attack. Risk factors include high cholesterol, smoking, diabetes,
                                                            and high blood pressure. Lifestyle changes and
                                                            medications help manage CAD.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header">
                                                    <button className="accordion-button collapsed" type="button"
                                                        data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false"
                                                        aria-controls="collapse2">
                                                        <span>Myocardial Infarction (Heart Attack)</span>
                                                    </button>
                                                </h2>
                                                <div id="collapse2" className="accordion-collapse collapse"
                                                    data-bs-parent="#accordionExample">
                                                    <div className="accordion-body">
                                                        <p>Coronary Artery Disease (CAD) occurs when plaque builds up in the
                                                            coronary arteries, narrowing them and reducing blood flow to the heart.
                                                            This can cause chest pain (angina), shortness of breath, or lead to a
                                                            heart attack. Risk factors include high cholesterol, smoking, diabetes,
                                                            and high blood pressure. Lifestyle changes and
                                                            medications help manage CAD.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header">
                                                    <button className="accordion-button collapsed" type="button"
                                                        data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false"
                                                        aria-controls="collapse3">
                                                        <span>Heart Failure</span>
                                                    </button>
                                                </h2>
                                                <div id="collapse3" className="accordion-collapse collapse"
                                                    data-bs-parent="#accordionExample">
                                                    <div className="accordion-body">
                                                        <p>Coronary Artery Disease (CAD) occurs when plaque builds up in the
                                                            coronary arteries, narrowing them and reducing blood flow to the heart.
                                                            This can cause chest pain (angina), shortness of breath, or lead to a
                                                            heart attack. Risk factors include high cholesterol, smoking, diabetes,
                                                            and high blood pressure. Lifestyle changes and
                                                            medications help manage CAD.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header">
                                                    <button className="accordion-button collapsed" type="button"
                                                        data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false"
                                                        aria-controls="collapse4">
                                                        <span>Hypertension (High Blood Pressure)</span>
                                                    </button>
                                                </h2>
                                                <div id="collapse4" className="accordion-collapse collapse"
                                                    data-bs-parent="#accordionExample">
                                                    <div className="accordion-body">
                                                        <p>Coronary Artery Disease (CAD) occurs when plaque builds up in the
                                                            coronary arteries, narrowing them and reducing blood flow to the heart.
                                                            This can cause chest pain (angina), shortness of breath, or lead to a
                                                            heart attack. Risk factors include high cholesterol, smoking, diabetes,
                                                            and high blood pressure. Lifestyle changes and
                                                            medications help manage CAD.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header">
                                                    <button className="accordion-button collapsed" type="button"
                                                        data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expanded="false"
                                                        aria-controls="collapse5">
                                                        <span>Valvular Heart Disease</span>
                                                    </button>
                                                </h2>
                                                <div id="collapse5" className="accordion-collapse collapse"
                                                    data-bs-parent="#accordionExample">
                                                    <div className="accordion-body">
                                                        <p>Coronary Artery Disease (CAD) occurs when plaque builds up in the
                                                            coronary arteries, narrowing them and reducing blood flow to the heart.
                                                            This can cause chest pain (angina), shortness of breath, or lead to a
                                                            heart attack. Risk factors include high cholesterol, smoking, diabetes,
                                                            and high blood pressure. Lifestyle changes and
                                                            medications help manage CAD.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="col-md-6 mt-lg-0 mt-4">
                                    <div className="faq-card p-4">
                                        <div className="accordion" id="accordionExample2">
                                            <div className="accordion-item">
                                                <h2 className="accordion-header">
                                                    <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                                        data-bs-target="#collapse6" aria-expanded="true" aria-controls="collapse6">
                                                        <span>Coronary Artery Bypass Grafting (CABG)</span>
                                                    </button>
                                                </h2>
                                                <div id="collapse6" className="accordion-collapse collapse show"
                                                    data-bs-parent="#accordionExample2">
                                                    <div className="accordion-body">
                                                        <p> Coronary Artery Bypass Grafting (CABG) is a surgical procedure used to
                                                            treat coronary artery disease (CAD). It involves bypassing blocked or
                                                            narrowed coronary arteries using a healthy blood vessel from another
                                                            part of the body, usually the leg, arm, or chest. This
                                                            restores normal blood flow to the heart, reducing symptoms like chest
                                                            pain and lowering heart attack risk.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header">
                                                    <button className="accordion-button collapsed" type="button"
                                                        data-bs-toggle="collapse" data-bs-target="#collapse7" aria-expanded="false"
                                                        aria-controls="collapse7">
                                                        <span>Angioplasty (Percutaneous Coronary Intervention - PCI)</span>
                                                    </button>
                                                </h2>
                                                <div id="collapse7" className="accordion-collapse collapse"
                                                    data-bs-parent="#accordionExample2">
                                                    <div className="accordion-body">
                                                        <p> Coronary Artery Bypass Grafting (CABG) is a surgical procedure used to
                                                            treat coronary artery disease (CAD). It involves bypassing blocked or
                                                            narrowed coronary arteries using a healthy blood vessel from another
                                                            part of the body, usually the leg, arm, or chest. This
                                                            restores normal blood flow to the heart, reducing symptoms like chest
                                                            pain and lowering heart attack risk.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header">
                                                    <button className="accordion-button collapsed" type="button"
                                                        data-bs-toggle="collapse" data-bs-target="#collapse8" aria-expanded="false"
                                                        aria-controls="collapse8">
                                                        <span>Pacemaker Implantation</span>
                                                    </button>
                                                </h2>
                                                <div id="collapse8" className="accordion-collapse collapse"
                                                    data-bs-parent="#accordionExample2">
                                                    <div className="accordion-body">
                                                        <p> Coronary Artery Bypass Grafting (CABG) is a surgical procedure used to
                                                            treat coronary artery disease (CAD). It involves bypassing blocked or
                                                            narrowed coronary arteries using a healthy blood vessel from another
                                                            part of the body, usually the leg, arm, or chest. This
                                                            restores normal blood flow to the heart, reducing symptoms like chest
                                                            pain and lowering heart attack risk.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header">
                                                    <button className="accordion-button collapsed" type="button"
                                                        data-bs-toggle="collapse" data-bs-target="#collapse9" aria-expanded="false"
                                                        aria-controls="collapse9">
                                                        <span>Heart Transplant</span>
                                                    </button>
                                                </h2>
                                                <div id="collapse9" className="accordion-collapse collapse"
                                                    data-bs-parent="#accordionExample2">
                                                    <div className="accordion-body">
                                                        <p> Coronary Artery Bypass Grafting (CABG) is a surgical procedure used to
                                                            treat coronary artery disease (CAD). It involves bypassing blocked or
                                                            narrowed coronary arteries using a healthy blood vessel from another
                                                            part of the body, usually the leg, arm, or chest. This
                                                            restores normal blood flow to the heart, reducing symptoms like chest
                                                            pain and lowering heart attack risk.</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="accordion-item">
                                                <h2 className="accordion-header">
                                                    <button className="accordion-button collapsed" type="button"
                                                        data-bs-toggle="collapse" data-bs-target="#collapse91" aria-expanded="false"
                                                        aria-controls="collapse91">
                                                        <span>Heart Transplant</span>
                                                    </button>
                                                </h2>
                                                <div id="collapse91" className="accordion-collapse collapse"
                                                    data-bs-parent="#accordionExample2">
                                                    <div className="accordion-body">
                                                        <p> Coronary Artery Bypass Grafting (CABG) is a surgical procedure used to
                                                            treat coronary artery disease (CAD). It involves bypassing blocked or
                                                            narrowed coronary arteries using a healthy blood vessel from another
                                                            part of the body, usually the leg, arm, or chest. This
                                                            restores normal blood flow to the heart, reducing symptoms like chest
                                                            pain and lowering heart attack risk.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="section d-lg-none d-block">
                        <div className="container">
                            <div className="main-heading">
                                <h2>Diseases and Key Procedures</h2>
                            </div>
                            <div className="row justify-content-between">
                                <div className="col-md-6">
                                    <div className="faq-card p-4">
                                        <div className="accordion" id="accordionExample">
                                            <div className="accordion-item">
                                                <h2 className="accordion-header">
                                                    <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                                        data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
                                                        <span>Coronary Artery Disease (CAD)</span>
                                                    </button>
                                                </h2>
                                                <div id="collapse1" className="accordion-collapse collapse show"
                                                    data-bs-parent="#accordionExample">
                                                    <div className="accordion-body">
                                                        <p>Coronary Artery Disease (CAD) occurs when plaque builds up in the
                                                            coronary arteries, narrowing them and reducing blood flow to the heart.
                                                            This can cause chest pain (angina), shortness of breath, or lead to a
                                                            heart attack. Risk factors include high cholesterol, smoking, diabetes,
                                                            and high blood pressure. Lifestyle changes and
                                                            medications help manage CAD.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header">
                                                    <button className="accordion-button collapsed" type="button"
                                                        data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false"
                                                        aria-controls="collapse2">
                                                        <span>Myocardial Infarction (Heart Attack)</span>
                                                    </button>
                                                </h2>
                                                <div id="collapse2" className="accordion-collapse collapse"
                                                    data-bs-parent="#accordionExample">
                                                    <div className="accordion-body">
                                                        <p>Coronary Artery Disease (CAD) occurs when plaque builds up in the
                                                            coronary arteries, narrowing them and reducing blood flow to the heart.
                                                            This can cause chest pain (angina), shortness of breath, or lead to a
                                                            heart attack. Risk factors include high cholesterol, smoking, diabetes,
                                                            and high blood pressure. Lifestyle changes and
                                                            medications help manage CAD.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header">
                                                    <button className="accordion-button collapsed" type="button"
                                                        data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false"
                                                        aria-controls="collapse3">
                                                        <span>Heart Failure</span>
                                                    </button>
                                                </h2>
                                                <div id="collapse3" className="accordion-collapse collapse"
                                                    data-bs-parent="#accordionExample">
                                                    <div className="accordion-body">
                                                        <p>Coronary Artery Disease (CAD) occurs when plaque builds up in the
                                                            coronary arteries, narrowing them and reducing blood flow to the heart.
                                                            This can cause chest pain (angina), shortness of breath, or lead to a
                                                            heart attack. Risk factors include high cholesterol, smoking, diabetes,
                                                            and high blood pressure. Lifestyle changes and
                                                            medications help manage CAD.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header">
                                                    <button className="accordion-button collapsed" type="button"
                                                        data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false"
                                                        aria-controls="collapse4">
                                                        <span>Hypertension (High Blood Pressure)</span>
                                                    </button>
                                                </h2>
                                                <div id="collapse4" className="accordion-collapse collapse"
                                                    data-bs-parent="#accordionExample">
                                                    <div className="accordion-body">
                                                        <p>Coronary Artery Disease (CAD) occurs when plaque builds up in the
                                                            coronary arteries, narrowing them and reducing blood flow to the heart.
                                                            This can cause chest pain (angina), shortness of breath, or lead to a
                                                            heart attack. Risk factors include high cholesterol, smoking, diabetes,
                                                            and high blood pressure. Lifestyle changes and
                                                            medications help manage CAD.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header">
                                                    <button className="accordion-button collapsed" type="button"
                                                        data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expanded="false"
                                                        aria-controls="collapse5">
                                                        <span>Valvular Heart Disease</span>
                                                    </button>
                                                </h2>
                                                <div id="collapse5" className="accordion-collapse collapse"
                                                    data-bs-parent="#accordionExample">
                                                    <div className="accordion-body">
                                                        <p>Coronary Artery Disease (CAD) occurs when plaque builds up in the
                                                            coronary arteries, narrowing them and reducing blood flow to the heart.
                                                            This can cause chest pain (angina), shortness of breath, or lead to a
                                                            heart attack. Risk factors include high cholesterol, smoking, diabetes,
                                                            and high blood pressure. Lifestyle changes and
                                                            medications help manage CAD.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="col-md-6 mt-lg-0 mt-4">
                                    <div className="faq-card p-4">
                                        <div className="accordion" id="accordionExample2">
                                            <div className="accordion-item">
                                                <h2 className="accordion-header">
                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                        data-bs-target="#collapse6" aria-expanded="true" aria-controls="collapse6">
                                                        <span>Coronary Artery Bypass Grafting (CABG)</span>
                                                    </button>
                                                </h2>
                                                <div id="collapse6" className="accordion-collapse collapse "
                                                    data-bs-parent="#accordionExample2">
                                                    <div className="accordion-body">
                                                        <p> Coronary Artery Bypass Grafting (CABG) is a surgical procedure used to
                                                            treat coronary artery disease (CAD). It involves bypassing blocked or
                                                            narrowed coronary arteries using a healthy blood vessel from another
                                                            part of the body, usually the leg, arm, or chest. This
                                                            restores normal blood flow to the heart, reducing symptoms like chest
                                                            pain and lowering heart attack risk.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header">
                                                    <button className="accordion-button collapsed" type="button"
                                                        data-bs-toggle="collapse" data-bs-target="#collapse7" aria-expanded="false"
                                                        aria-controls="collapse7">
                                                        <span>Angioplasty (Percutaneous Coronary Intervention - PCI)</span>
                                                    </button>
                                                </h2>
                                                <div id="collapse7" className="accordion-collapse collapse"
                                                    data-bs-parent="#accordionExample2">
                                                    <div className="accordion-body">
                                                        <p> Coronary Artery Bypass Grafting (CABG) is a surgical procedure used to
                                                            treat coronary artery disease (CAD). It involves bypassing blocked or
                                                            narrowed coronary arteries using a healthy blood vessel from another
                                                            part of the body, usually the leg, arm, or chest. This
                                                            restores normal blood flow to the heart, reducing symptoms like chest
                                                            pain and lowering heart attack risk.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header">
                                                    <button className="accordion-button collapsed" type="button"
                                                        data-bs-toggle="collapse" data-bs-target="#collapse8" aria-expanded="false"
                                                        aria-controls="collapse8">
                                                        <span>Pacemaker Implantation</span>
                                                    </button>
                                                </h2>
                                                <div id="collapse8" className="accordion-collapse collapse"
                                                    data-bs-parent="#accordionExample2">
                                                    <div className="accordion-body">
                                                        <p> Coronary Artery Bypass Grafting (CABG) is a surgical procedure used to
                                                            treat coronary artery disease (CAD). It involves bypassing blocked or
                                                            narrowed coronary arteries using a healthy blood vessel from another
                                                            part of the body, usually the leg, arm, or chest. This
                                                            restores normal blood flow to the heart, reducing symptoms like chest
                                                            pain and lowering heart attack risk.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header">
                                                    <button className="accordion-button collapsed" type="button"
                                                        data-bs-toggle="collapse" data-bs-target="#collapse9" aria-expanded="false"
                                                        aria-controls="collapse9">
                                                        <span>Heart Transplant</span>
                                                    </button>
                                                </h2>
                                                <div id="collapse9" className="accordion-collapse collapse"
                                                    data-bs-parent="#accordionExample2">
                                                    <div className="accordion-body">
                                                        <p> Coronary Artery Bypass Grafting (CABG) is a surgical procedure used to
                                                            treat coronary artery disease (CAD). It involves bypassing blocked or
                                                            narrowed coronary arteries using a healthy blood vessel from another
                                                            part of the body, usually the leg, arm, or chest. This
                                                            restores normal blood flow to the heart, reducing symptoms like chest
                                                            pain and lowering heart attack risk.</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="accordion-item">
                                                <h2 className="accordion-header">
                                                    <button className="accordion-button collapsed" type="button"
                                                        data-bs-toggle="collapse" data-bs-target="#collapse91" aria-expanded="false"
                                                        aria-controls="collapse91">
                                                        <span>Heart Transplant</span>
                                                    </button>
                                                </h2>
                                                <div id="collapse91" className="accordion-collapse collapse"
                                                    data-bs-parent="#accordionExample2">
                                                    <div className="accordion-body">
                                                        <p> Coronary Artery Bypass Grafting (CABG) is a surgical procedure used to
                                                            treat coronary artery disease (CAD). It involves bypassing blocked or
                                                            narrowed coronary arteries using a healthy blood vessel from another
                                                            part of the body, usually the leg, arm, or chest. This
                                                            restores normal blood flow to the heart, reducing symptoms like chest
                                                            pain and lowering heart attack risk.</p>
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
                    <section className="section logo-slider-section">
                        <div className="container-fluid">
                            <div className="heading-container">
                                <div className="main-heading">
                                    <h2>International Insurance</h2>
                                </div>
                            </div>
                            <div id="exampleSlider">
                                <div className="MS-content">
                                    <div className="item slider-item text-center py-0">
                                        <div className="slider-box">
                                            <img src="/img/logo1.png" width="90" alt="" />
                                        </div>
                                    </div>

                                    <div className="item slider-item text-center py-0">
                                        <div className="slider-box">
                                            <img src="/img/logo2.png" width="90" alt="" />
                                        </div>
                                    </div>

                                    <div className="item slider-item text-center py-0">
                                        <div className="slider-box">
                                            <img src="/img/logo3.png" width="90" alt="" />
                                        </div>
                                    </div>

                                    <div className="item slider-item text-center py-0">
                                        <div className="slider-box">
                                            <img src="/img/logo4.png" width="90" alt="" />
                                        </div>
                                    </div>

                                    <div className="item slider-item text-center py-0">
                                        <div className="slider-box">
                                            <img src="/img/logo5.png" width="90" alt="" />
                                        </div>
                                    </div>

                                    <div className="item slider-item text-center py-0">
                                        <div className="slider-box">
                                            <img src="/img/logo6.png" width="90" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row justify-content-center">
                                <div className="col-md-8">
                                    <div className="rounded-field-form mt-4">
                                        <form action="">
                                            <div className="row justify-content-center">
                                                <div className="col-md-4 col-12 mb-3">
                                                    <div className="input-group">
                                                        <input type="text" className="form-control" placeholder="Enter Your Name"
                                                            name="search" />
                                                    </div>
                                                </div>
                                                <div className="col-md-4 col-12 mb-3">
                                                    <div className="input-group">
                                                        <input type="text" id="tel" defaultValue="+91" className="form-control"
                                                            placeholder="Enter Mobile Number" name="search" />
                                                    </div>
                                                </div>

                                                <div className="col-lg-2 col-xl-3 col-md-3 col-12 mb-3 ">
                                                    <button className="form-btn w-100 px-5">Enquire Now</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>



                        </div>
                    </section>

                    <div className="line-divider"></div>
                    <section className="section">
                        <div className="container">
                            <div className="main-heading">
                                <h2>Our Services</h2>
                            </div>
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="home-service-card">
                                        <div className="home-service-card-image text-center">
                                            <img src="/img/international-conversation.png" alt="" className="img-fluid d-block" />
                                        </div>
                                        <div className="home-service-content text-start">
                                            <h3>Initial Inquiry</h3>
                                            <p>Contact our International Patient Services team via email, phone, or our online
                                                inquiry form. Provide details about your medical condition and any existing reports.
                                            </p>

                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <div className="home-service-card">
                                        <div className="home-service-card-image text-start">
                                            <img src="/img/international-article.png" alt="" className="img-fluid d-block" />
                                        </div>
                                        <div className="home-service-content text-start">
                                            <h3>Medical Review</h3>
                                            <p>Our specialists will review your medical records and provide a preliminary opinion
                                                and recommended treatment plan.</p>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="home-service-card">
                                        <div className="home-service-card-image text-center">
                                            <img src="/img/inter-schedule.png" alt="" className="img-fluid d-block" />
                                        </div>
                                        <div className="home-service-content text-start">
                                            <h3>Appointment Scheduling</h3>
                                            <p>Once you approve the treatment plan, we will help schedule consultations, diagnostic
                                                tests, and procedures as needed. </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <div className="home-service-card">
                                        <div className="home-service-card-image text-center">
                                            <img src="/img/international-conversation.png" alt="" className="img-fluid d-block" />
                                        </div>
                                        <div className="home-service-content text-start">
                                            <h3>Initial Inquiry</h3>
                                            <p>Contact our International Patient Services team via email, phone, or our online
                                                inquiry form. Provide details about your medical condition and any existing reports.
                                            </p>

                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <div className="home-service-card">
                                        <div className="home-service-card-image text-start">
                                            <img src="/img/international-article.png" alt="" className="img-fluid d-block" />
                                        </div>
                                        <div className="home-service-content text-start">
                                            <h3>Medical Review</h3>
                                            <p>Our specialists will review your medical records and provide a preliminary opinion
                                                and recommended treatment plan.</p>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="home-service-card">
                                        <div className="home-service-card-image text-center">
                                            <img src="/img/inter-schedule.png" alt="" className="img-fluid d-block" />
                                        </div>
                                        <div className="home-service-content text-start">
                                            <h3>Appointment Scheduling</h3>
                                            <p>Once you approve the treatment plan, we will help schedule consultations, diagnostic
                                                tests, and procedures as needed. </p>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </section>

                    <div className="line-divider"></div>
                    <TestimonialSection />

                    <div className="line-divider"></div>
                    <FromDoctor />

                    <div className="line-divider"></div>
                    <BlogCarousel />
                </div>
            </div>

            <Footer />
        </>
    )
}

export default InternationalPage