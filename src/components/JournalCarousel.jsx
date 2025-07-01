"use client"

const JournalCarousel = () => {
    return (
        <section className="section journal-section">
            <div className="container">
                <div className="main-heading">
                    <h2>Journals</h2>
                </div>
                <div className="owl-carousel owl-theme journal-slider">
                    <div className="expert-card" data-aos="fade-right">
                        <a href="#">
                            <div className="card border-0">
                                <div className="card-top">
                                    <img src="/img/journal1.jpg" className="img-fluid w-100" alt="" />
                                </div>
                                <div className="card-content">
                                    <h5>KIMSHEALTH Expressions - Issue 31</h5>
                                </div>
                            </div>
                        </a>

                    </div>

                    <div className="expert-card" data-aos="fade-right">
                        <div className="card border-0 p-0">
                            <div className="card-top">
                                <img src="/img/journal2.jpg" className="img-fluid w-100" alt="" />
                            </div>
                            <div className="card-content">
                                <h5>KIMSHEALTH Expressions - Issue 30</h5>
                            </div>
                        </div>

                    </div>

                    <div className="expert-card" data-aos="fade-left">
                        <a href="#">
                            <div className="card border-0 p-0">
                                <div className="card-top">
                                    <img src="/img/journal3.jpg" className="img-fluid w-100" alt="" />
                                </div>
                                <div className="card-content">
                                    <h5>KIMSHEALTH Expressions - Issue 29</h5>
                                </div>
                            </div>
                        </a>

                    </div>

                    <div className="expert-card" data-aos="fade-left">
                        <a href="#">
                            <div className="card border-0 p-0">
                                <div className="card-top">
                                    <img src="/img/journal4.jpg" className="img-fluid w-100" alt="" />
                                </div>
                                <div className="card-content">
                                    <h5>KIMSHEALTH Scientific Proceedings 12</h5>
                                </div>
                            </div>
                        </a>

                    </div>

                    <div className="expert-card" data-aos="fade-left">
                        <a href="#">
                            <div className="card border-0 p-0">
                                <div className="card-top">
                                    <img src="/img/journal5.jpg" className="img-fluid w-100" alt="" />
                                </div>
                                <div className="card-content">
                                    <h5>KIMSHEALTH Scientific Proceedings 12</h5>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className="expert-card" data-aos="fade-left">
                        <a href="#">
                            <div className="card border-0 p-0">
                                <div className="card-top">
                                    <img src="/img/journal5.jpg" className="img-fluid w-100" alt="" />
                                </div>
                                <div className="card-content">
                                    <h5>KIMSHEALTH Scientific Proceedings 12</h5>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default JournalCarousel