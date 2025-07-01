"use client"

const FromDoctor = () => {
    return (
        <>
            <section className="section">
                <div className="container">
                    <div className="row justify-content-between" data-aos="fade-up">
                        <div className="col-md-4 col-8">
                            <div className="main-heading">
                                <h2>Hear From The Doctor </h2>
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
                        <div className="col-xl-8 col-lg-8 col-md-8 col-12 hear-doctor-img mb-lg-0 mb-3">
                            <div className="position-relative overflow-hidden" data-aos="fade-up">
                                <img src="/img/hear-doc1.jpg" className="img-fluid d-lg-block d-none doc-image-hover w-100" alt="" />
                                <img src="/img/hear-mb1.png" className="img-fluid w-100 d-lg-none d-block doc-image-hover" alt="" />
                                <div className="hear-doctor-content">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div>
                                            <p>A Deep Dive into Epilepsy Diagnosis and Effective Treatments</p>
                                        </div>
                                        <div className="main-btn d-lg-block d-none">
                                            <span><img src="/img/play-button.png" className="img-fluid" alt="" /> </span>
                                            <a href="#">Watch Video <span><i className="fa-solid fa-arrow-right"></i></span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-4 col-md-4 col-12 blog-right-col">
                            <div className="row g-2">
                                <div className="col-md-12 col-6 mb-3">
                                    <div className="position-relative overflow-hidden" data-aos="fade-up">
                                        <img src="/img/hear-doc2.jpg"
                                            className="img-fluid w-100 hear-doc-image d-lg-block d-none" alt="" />
                                        <img src="/img/hear-doc-mb2.png" className="img-fluid w-100 d-lg-none d-block" alt="" />
                                        <div className="hear-doctor-content">
                                            <div className="d-block align-items-center justify-content-between">
                                                <div>
                                                    <h5 className="d-lg-block d-none">12<sup>th</sup> May 2024</h5>
                                                    <p>A talk on Liver Transplant by Dr. Shabeer Ali T U</p>
                                                </div>
                                                <div className="main-btn d-lg-block d-none">
                                                    <span><img src="/img/play-button.png" className="img-fluid" alt="" /> </span>
                                                    <a href="#">Watch Video <span><i
                                                        className="fa-solid fa-arrow-right"></i></span></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12 col-6">
                                    <div className="position-relative overflow-hidden" data-aos="fade-up">
                                        <img src="/img/hear-doc3.jpg"
                                            className="img-fluid w-100 hear-doc-image d-lg-block d-none" alt="" />
                                        <img src="/img/hear-doc-mb3.png" className="img-fluid w-100 d-lg-none d-block" alt="" />
                                        <div className="hear-doctor-content">
                                            <div className="d-block align-items-center justify-content-between">
                                                <div>
                                                    <h5 className="d-lg-block d-none">20<sup>th</sup> May 2024</h5>
                                                    <p>Understanding Hernias & Hydroceles in Children</p>
                                                </div>
                                                <div className="main-btn d-lg-block d-none">
                                                    <span><img src="/img/play-button.png" className="img-fluid" alt="" /></span>
                                                    <a href="#">Watch Video <span><i
                                                        className="fa-solid fa-arrow-right"></i></span></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default FromDoctor;
