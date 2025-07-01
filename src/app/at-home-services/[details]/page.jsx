import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'

const HomeServiceDetails = () => {
    return (
        <>
            <Header />
            <div role="main" className="main">
                <div className="home-details-main-page">
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
                                                                <a href="hospital-master.php">At Home Services</a>
                                                            </li>
                                                            <li className="active"> Trusted Nursing Care at Home </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="details-banner">
                                                <div className="details-heading">
                                                    <h3 className="mb-2">Trusted Nursing Care at Home</h3>
                                                    <ul>
                                                        <li><a href="tel:9995010649"><i className="fa-solid fa-phone"></i>
                                                            9995010649</a></li>
                                                        <li><a href="mailto:homecare.tvm@kimsglobal.com"><i
                                                            className="fa-solid fa-envelope"></i>
                                                            homecare.tvm@kimsglobal.com</a></li>
                                                    </ul>
                                                    <a href="#" className="hospital-primarybtn"> RS. X,XXX /- </a>
                                                    <a href="#" className="hospital-primarybtn"> Book Now</a>

                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-6 details-proceduce-banner-right-col">
                                        <img src="/img/home-details-banner.png" className="img-fluid details-banner-image" alt=""/>
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
                                <div className="col-md-8">
                                    <div className="main-heading sub-heading">
                                        <h2 className="mb-1">KIMSHEALTH Home Nursing Services</h2>
                                        <h3 className="mb-4">Trusted Care, Right Where You Are – Experience Healing and Comfort at Home
                                        </h3>
                                        <p>KIMSHEALTH Hospital, Trivandrum brings hospital-quality nursing care to the comfort and
                                            safety of your home through its trusted At Home service. Whether you're recovering from
                                            surgery, managing a chronic
                                            condition, or need elderly care, our professional and compassionate nurses provide
                                            personalized support
                                            tailored to your needs.</p>
                                        <p>Our home nursing services include wound care, injections, IV therapy, catheter and
                                            tracheostomy care, post-operative support, palliative care, and more. Backed by
                                            KIMSHEALTH’s world-class medical expertise, each visit ensures high-quality, reliable
                                            care under the supervision of qualified healthcare professionals.</p>
                                        <p>We understand that healing happens faster in familiar surroundings. That’s why our At
                                            Home focuses on
                                            restoring health, independence, and dignity while reducing hospital visits and the risk
                                            of infections. Our team is trained to offer not just clinical support, but also
                                            emotional reassurance to patients and families alike.</p>
                                        <p>KIMSHEALTH is committed to delivering excellence in home healthcare with empathy,
                                            professionalism, and integrity. With At Home, you can trust that you or your loved one
                                            is in safe and caring hands—right at home.
                                            Experience the difference of expert care, when and where it matters most.</p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="association-form-card mb-0">
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
                            <div className="row">
                                <div className="col-md-5 mb-lg-0 mb-3">
                                    <div className="details-right-col text-center">
                                        <img src="/img/home-details-right-col.png" alt="" className="img-fluid w-100" />
                                    </div>
                                </div>
                                <div className="col-md-7">
                                    <div className="main-heading sub-heading main-list">
                                        <h2 className="mb-1">Why Choose KIMSHEALTH At-Home Services</h2>
                                        <h3 className="mb-lg-4 mb-2">Trusted Medical Care, Wherever You Are</h3>
                                        <p>Choose KIMSHEALTH at Home for trusted, hospital-quality care in the comfort of your home.
                                            Our expert medical team offers personalized services including doctor visits, nursing
                                            care, lab tests, physiotherapy, vaccinations, and wellness therapies. We prioritize
                                            safety, convenience, and
                                            compassion, ensuring seamless healthcare for all ages. With state-of-the-art protocols
                                            and timely support, KIMSHEALTH at Home brings the same excellence you expect from our
                                            hospitals—right to your doorstep. Experience healthcare that’s professional, accessible,
                                            and designed around your needs.</p>

                                        <ul>
                                            <li>Expert Care at Your Doorstep</li>
                                            <li>Comprehensive Services</li>
                                            <li>Safe & Reliable</li>
                                            <li>Convenient & Time-Saving</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="line-divider"></div>
                    <section className="section d-lg-block d-none testimonial-section overflow-hidden">
                        <div className="container">
                            <div className="row justify-content-between" data-aos="fade-right">
                                <div className="col-md-4 col-8">
                                    <div className="main-heading">
                                        <h2>Patient Testimonials</h2>
                                    </div>
                                </div>
                                <div className="col-md-2 col-4">
                                    <div className="over-all-btn text-end">
                                        <a href="#">View All <span><img src="/img/slider-right-arrow.svg" className="img-fluid"
                                            alt=""/></span></a>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-xl-6 col-lg-6 col-md-6 col-12" data-aos="fade-right">
                                    <div className="row testi-card">
                                        <div className="col-md-3">
                                            <div className="overflow-hidden">
                                                <a href="#">
                                                    <img src="/img/testi-img1.jpg" alt="" className="img-fluid w-100" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-md-9 my-auto">
                                            <div className="testi-rightbox">
                                                <h3>24-Week Preterm Miracle: Uma's Heartfelt
                                                    Testimonial </h3>
                                                <p>Uma, a Scientist at ISRO, Trivandrum, pours her
                                                    heartfelt gratitude towards . . . .<a href="#"> Watch Video</a></p>

                                                <div className="d-flex align-items-center justify-content-between mt-3">
                                                    <div className="doctor-name">
                                                        <p><span><img src="/img/doctor.png" className="img-fluid" alt=""/></span> Dr.
                                                            Naveen Jain </p>
                                                    </div>
                                                    <div className="doctor-catagory">
                                                        <p>Obstetrics & Gynecology </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-6 col-lg-6 col-md-6 col-12" data-aos="fade-left">
                                    <div className="row testi-card">
                                        <div className="col-md-3">
                                            <div className="overflow-hidden">
                                                <a href="#">
                                                    <img src="/img/testi-img2.jpg" alt="" className="img-fluid w-100" />
                                                </a>
                                            </div>

                                        </div>
                                        <div className="col-md-9 my-auto">
                                            <div className="testi-rightbox">
                                                <h3>Mr Menon's Remarkable Recovery with Intrasaccular
                                                    Flow Diverter</h3>
                                                <p>This is a testimonial by Mr Menon on his journey to recovery
                                                    from aneurysm! With cutting-edge . . . .<a href="#"> Watch Video</a></p>

                                                <div className="d-flex align-items-center justify-content-between mt-3">
                                                    <div className="doctor-name">
                                                        <p><span><img src="/img/doctor.png" className="img-fluid" alt=""/></span>Dr.
                                                            Santhosh Joseph </p>
                                                    </div>
                                                    <div className="doctor-catagory">
                                                        <p>Neuro Interventional Radiology </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-6 col-lg-6 col-md-6 col-12" data-aos="fade-right">
                                    <div className="row testi-card">
                                        <div className="col-md-3">
                                            <div className="overflow-hidden">
                                                <a href="#">
                                                    <img src="/img/testi-img3.jpg" alt="" className="img-fluid w-100" />
                                                </a>
                                            </div>

                                        </div>
                                        <div className="col-md-9 my-auto">
                                            <div className="testi-rightbox">
                                                <h3>A successful Shoulder Replacement surgery is
                                                    done for Mrs Norah Mohammed Alsuqufi.</h3>
                                                <p>A successful Shoulder Replacement surgery is done for
                                                    Mrs Norah Mohammed Alsuqufi from Saudi . . . .<a href="#"> Watch Video</a></p>

                                                <div className="d-flex align-items-center justify-content-between mt-3">
                                                    <div className="doctor-name">
                                                        <p><span><img src="/img/doctor.png" className="img-fluid" alt=""/></span> Dr.
                                                            Muhammed Nazeer </p>
                                                    </div>
                                                    <div className="doctor-catagory">
                                                        <p>Orthopedics & Trauma </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-6 col-lg-6 col-md-6 col-12" data-aos="fade-left">
                                    <div className="row testi-card">
                                        <div className="col-md-3">
                                            <div className="overflow-hidden">
                                                <a href="#">
                                                    <img src="/img/testi-img4.jpg" alt="" className="img-fluid w-100" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-md-9 my-auto">
                                            <div className="testi-rightbox">
                                                <h3>Experience Excellence in Medical Care:
                                                    Maryan Germain's Testimonial at KIMSHEALTH </h3>
                                                <p>At KIMSHEALTH Hospital, we prioritize patient satisfaction and
                                                    aim to provide the best care possible . . . .<a href="#"> Watch Video</a>
                                                </p>

                                                <div className="d-flex align-items-center justify-content-between mt-3">
                                                    <div className="doctor-name">
                                                        <p><span><img src="/img/doctor.png" className="img-fluid" alt=""/></span> Dr.
                                                            Renjith Unnikrishnan </p>
                                                    </div>
                                                    <div className="doctor-catagory">
                                                        <p>Orthopaedics </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </section>

                    <section className="section d-lg-none d-block testimonial-section" data-aos="fade-up">
                        <div className="container">
                            <div className="row justify-content-between">
                                <div className="col-md-3 col-8">
                                    <div className="main-heading">
                                        <h2>Patient Testimonials</h2>
                                    </div>
                                </div>
                                <div className="col-md-2 col-4">
                                    <div className="over-all-btn text-end">
                                        <a href="#">View All <span><img src="/img/slider-right-arrow.svg" className="img-fluid"
                                            alt=""/></span></a>
                                    </div>
                                </div>
                            </div>

                            <div className="owl-carousel owl-theme testimonial">

                                <div className="card border-0">
                                    <div className="card-top">
                                        <a href="#">
                                            <img src="/img/testi-mb2.jpg" alt="" className="img-fluid w-100" />
                                        </a>
                                        <div className="play-icon"> <img src="/img/play-icon-small.png" alt=""/> </div>
                                    </div>
                                    <div className="testi-rightbox card-content">
                                        <h3>From Aneursym to Happiness.</h3>
                                        <p>Mr Menon's Remarkable Recovery with Intrasaccular Flow Diverter</p>

                                        <div className="d-block mt-lg-3 mt-2">
                                            <div className="doctor-name mb-1">
                                                <p>Dr. Santhosh Joseph </p>
                                            </div>
                                            <div className="doctor-catagory">
                                                <p>Cardiology </p>
                                            </div>


                                        </div>
                                    </div>
                                </div>

                                <div className="card border-0">
                                    <div className="card-top">
                                        <a href="#">
                                            <img src="/img/testi-mb1.jpg" alt="" className="img-fluid w-100" />
                                        </a>
                                        <div className="play-icon"> <img src="/img/play-icon-small.png" alt=""/> </div>
                                    </div>
                                    <div className="testi-rightbox card-content">
                                        <h3>24-Week Preterm Miracle: Uma's Heartfelt
                                            Testimonial </h3>
                                        <p>Uma, a Scientist at ISRO, Trivandrum, pours her
                                            heartfelt gratitude towards . . . .</p>

                                        <div className="d-block mt-lg-3 mt-2">
                                            <div className="doctor-name mb-1">
                                                <p>Dr. Naveen Jain </p>
                                            </div>
                                            <div className="doctor-catagory">
                                                <p>Obstetrics & Gynecology </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>



                                <div className="card border-0">
                                    <div className="card-top">
                                        <a href="#">
                                            <img src="/img/testi-mb3.jpg" alt="" className="img-fluid w-100" />
                                        </a>
                                        <div className="play-icon"> <img src="/img/play-icon-small.png" alt=""/> </div>
                                    </div>
                                    <div className="testi-rightbox card-content">
                                        <h3>A successful Shoulder Replacement surgery is
                                            done for Mrs Norah Mohammed Alsuqufi.</h3>
                                        <p>A successful Shoulder Replacement surgery is done for
                                            Mrs Norah Mohammed Alsuqufi from Saudi . . . .</p>

                                        <div className="d-block mt-lg-3 mt-2">
                                            <div className="doctor-name mb-1">
                                                <p>Dr. Muhammed Nazeer </p>
                                            </div>
                                            <div className="doctor-catagory">
                                                <p>Orthopedics & Trauma </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="line-divider"></div>

                    <section className="section exellence-section" data-aos="fade-up">
                        <div className="container">
                            <div className="row justify-content-between">
                                <div className="col-md-4 col-8">
                                    <div className="main-heading">
                                        <h2>Others At Home Services</h2>
                                    </div>
                                </div>
                                <div className="col-md-2 col-4">
                                    <div className="over-all-btn text-end">
                                        <a href="#">View All <span><img src="/img/slider-right-arrow.svg" className="img-fluid"
                                            alt=""/></span></a>
                                    </div>
                                </div>
                            </div>

                            <div className="owl-carousel owl-theme exellence">
                                <div className="item">
                                    <div className="card border-0">
                                        <div className="card-top">
                                            <img src="/img/home1.jpg" className="img-fluid w-100" alt=""/>
                                        </div>
                                        <div className="card-content">
                                            <h4>Lab Test</h4>
                                            <p>We offer home collection of blood and
                                                urine samples, including fasting . . . . </p>
                                            <div className="main-btn">
                                                <a href="#">Read More <span><i className="fa-solid fa-arrow-right"></i></span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="card border-0">
                                        <div className="card-top">
                                            <img src="/img/home2.jpg" className="img-fluid w-100" alt=""/>
                                        </div>
                                        <div className="card-content">
                                            <h4>Doctor Consultation</h4>
                                            <p>We value every guest and believe in
                                                offering personalized care. We . . . . </p>
                                            <div className="main-btn">
                                                <a href="#">Read More <span><i className="fa-solid fa-arrow-right"></i></span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="item">
                                    <div className="card border-0">
                                        <div className="card-top">
                                            <img src="/img/home3.jpg" className="img-fluid w-100" alt=""/>
                                        </div>
                                        <div className="card-content">
                                            <h4>Physiotherapy</h4>
                                            <p>Personalized physiotherapy care for
                                                your loved ones in the comfort . . . .</p>
                                            <div className="main-btn">
                                                <a href="#">Read More <span><i className="fa-solid fa-arrow-right"></i></span></a>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="item">
                                    <div className="card border-0">
                                        <div className="card-top">
                                            <img src="/img/home4.jpg" className="img-fluid w-100" alt=""/>
                                        </div>
                                        <div className="card-content">
                                            <h4>Equipment Rentals</h4>
                                            <p>We provide high-quality medical equipment on a rental basis . . . . </p>
                                            <div className="main-btn">
                                                <a href="#">Read More <span><i className="fa-solid fa-arrow-right"></i></span></a>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div className="item">
                                    <div className="card border-0">
                                        <div className="card-top">
                                            <img src="/img/home3.jpg" className="img-fluid w-100" alt=""/>
                                        </div>
                                        <div className="card-content">
                                            <h4>Physiotherapy</h4>
                                            <p>Personalized physiotherapy care for
                                                your loved ones in the comfort . . . .</p>
                                            <div className="main-btn">
                                                <a href="#">Read More <span><i className="fa-solid fa-arrow-right"></i></span></a>
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

export default HomeServiceDetails