"use client"

const ExpertCarousel = ({ dataSet }) => {
    return (
        <>
            <section className="section expert-section">
                <div className="container">
                    <div className="row justify-content-between" data-aos="fade-right">
                        <div className="col-md-3 col-8">
                            <div className="main-heading">
                                <h2>{dataSet.sectionTitle}</h2>
                            </div>
                        </div>
                        <div className="col-md-2  col-4">
                            <div className="over-all-btn text-end">
                                <a href={dataSet.buttonURL}>{dataSet.buttonText}
                                    <span>
                                        <img src="/img/slider-right-arrow.svg" className="img-fluid" alt="" />
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="owl-carousel owl-theme expert">
                        {
                            dataSet.data.map((d, index) => {
                                return <div className="expert-card" data-aos="fade-right" key={index}>
                                    <div className="card border-0 p-lg-4 p-0">
                                        <div className="card-top">
                                            <a href={dataSet.baseUrl + "/doctor/" + d.slug}>
                                                <img
                                                    src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${d.doctorImage.url}`}
                                                    className="img-fluid w-100" alt={d.name}
                                                />
                                            </a>
                                        </div>
                                        <div className="card-content">
                                            <h4>{d.name}</h4>
                                            <p>{d.doctorDesignation}</p>
                                            <h5>{d.specialities[0].title}</h5>
                                            <div className="from-btn">
                                                <a href="#" className="btn">Appointment</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="main-btn  text-lg-center text-start ms-lg-0 ms-2 mt-2">
                                        <a href={dataSet.baseUrl + "/doctor/" + d.slug}>View Profile</a>
                                    </div>
                                </div>
                            })
                        }


                    </div>
                </div>
            </section>
        </>
    )
}

export default ExpertCarousel