"use client"

const ExpertCarousel = () => {
    return (
        <>
            <section className="section expert-section">
                <div className="container">
                    <div className="row justify-content-between" data-aos="fade-right">
                        <div className="col-md-3 col-8">
                            <div className="main-heading">
                                <h2>Meet the Experts</h2>
                            </div>
                        </div>
                        <div className="col-md-2  col-4">
                            <div className="over-all-btn text-end">
                                <a href="#">View All <span><img src="/img/slider-right-arrow.svg" className="img-fluid"
                                    alt="" /></span></a>
                            </div>
                        </div>
                    </div>

                    <div className="owl-carousel owl-theme expert">

                        <div className="expert-card" data-aos="fade-right">
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

                        <div className="expert-card" data-aos="fade-right">
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

                        <div className="expert-card" data-aos="fade-left">
                            <div className="card border-0  p-lg-4 p-0">
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

                        <div className="expert-card" data-aos="fade-left">
                            <div className="card border-0  p-lg-4 p-0">
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
                        <div className="expert-card">
                            <div className="card border-0  p-lg-4 p-0">
                                <div className="card-top">
                                    <a href="#">
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
                        <div className="expert-card">
                            <div className="card border-0  p-lg-4 p-0">
                                <div className="card-top">
                                    <a href="#">
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
                </div>
            </section>
        </>
    )
}

export default ExpertCarousel