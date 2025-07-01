"use client"

const SocialMedia = () => {
    return (
        <section className="section d-lg-none d-block" data-aos="fade-up">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-md-4 col-8">
                        <div className="main-heading">
                            <h2>Social Media Updates </h2>
                        </div>
                    </div>
                    <div className="col-md-2 col-4">
                        <div className="over-all-btn text-end">
                            <a href="#">View All <span><img src="/img/slider-right-arrow.svg" className="img-fluid"
                                alt="" /></span></a>
                        </div>
                    </div>
                </div>

                <div className="row g-2">
                    <div className="col-xl-3 col-lg-3 col-md-3 col-6">
                        <div className="media-card">
                            <div className="media-img">
                                <a href="#">
                                    <img src="/img/media1.jpg" className="img-fluid w-100" alt="" />
                                </a>
                            </div>
                            <div className="media-content">
                                <p>At KIMSHEALTH, we believe in the power of prevention.Join us in recognizing National</p>
                                <div className="media-border-bottom">
                                    <div className="d-flex align-items-center justify-content-between mt-3">
                                        <div className="media-name">
                                            <div>
                                                <img src="/img/kims-small-logo.png" className="img-fluid" alt="" />
                                            </div>
                                            <p>KIMSHEALTH <br /> 10th June 2024</p>
                                        </div>
                                        <div className="media-social">
                                            <img src="/img/facebook.svg" className="img-fluid" alt="" />
                                        </div>
                                    </div>
                                </div>

                                <div className="d-flex align-items-center justify-content-between mt-2">
                                    <div className="media-heart">
                                        <div>
                                            <p><span> <img src="/img/heart.png" className="img-fluid" alt="" /></span>8</p>
                                        </div>
                                        <img src="/img/chat.png" className="img-fluid" alt="" />
                                    </div>
                                    <div className="media-share">
                                        <p><span> <img src="/img/share.png" className="img-fluid" alt="" /></span> Share</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="col-xl-3 col-lg-3 col-md-3 col-6">
                        <div className="media-card">
                            <div className="media-img">
                                <a href="#">
                                    <img src="/img/media2.jpg" className="img-fluid w-100" alt="" />
                                </a>
                            </div>
                            <div className="media-content">
                                <p>At KIMSHEALTH, our Cardiology Department specializes in electrophysiology, accurately</p>
                                <div className="media-border-bottom">
                                    <div className="d-flex align-items-center justify-content-between mt-3">
                                        <div className="media-name">
                                            <div>
                                                <img src="/img/kims-small-logo.png" className="img-fluid" alt="" />
                                            </div>
                                            <p>KIMSHEALTH <br /> 10th June 2024</p>
                                        </div>
                                        <div className="media-social">
                                            <img src="/img/facebook.svg" className="img-fluid" alt="" />
                                        </div>
                                    </div>
                                </div>

                                <div className="d-flex align-items-center justify-content-between mt-2">
                                    <div className="media-heart">
                                        <div>
                                            <p><span> <img src="/img/heart.png" className="img-fluid" alt="" /></span>8</p>
                                        </div>
                                        <img src="/img/chat.png" className="img-fluid" alt="" />
                                    </div>
                                    <div className="media-share">
                                        <p><span> <img src="/img/share.png" className="img-fluid" alt="" /></span> Share</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default SocialMedia;
