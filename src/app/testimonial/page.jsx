import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'
import testimonialData from '../lib/getTestimonial'
import { getBaseUrl } from '../lib/getBaseUrl'
import { getStaticPageContent } from '../lib/getStaticPageContent';



const Testimonial = async () => {
    const basePath = await getBaseUrl();
    const testimoData = await testimonialData.getAll();
    const data = await getStaticPageContent("testimonial");
    const pageContent = data?.data[0]?.pageContent;
    const pageMeta = data?.data[0]?.metaSection;


    return (
        <>
            <Header />
            <div role="main" className="main">
                <div className="doctor-talk-main-page">
                    <div className="page-header">
                        <div className="container">
                            <h2>{pageContent[0]?.title} </h2>
                        </div>
                    </div>
                    <section className="breadcrumb-wrapper py-2">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <ul className="breadcrumb mb-0">
                                        <li>
                                            <a href="/">Home</a>
                                        </li>
                                        <li className="active"> {pageContent[0]?.title} </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="section">
                        <div className="container">
                            <div className="row justify-content-between">
                                <div className="col-md-6 mb-3">
                                    <div className="main-heading">
                                        <h2 className="mb-0">Patient Testimonials </h2>
                                    </div>
                                </div>
                                <div className="col-md-4 details-key-row">
                                    <form action="">
                                        <div className="input-group p-0 position-relative justify-content-center">
                                            <select className="form-select diseases-page-search">
                                                <option value="">Search for Speciality </option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                            <button className="input-group-text border-0 search-btn-page"><i className="fa-solid fa-magnifying-glass"></i></button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="section section pt-0">
                        <div className="container">
                            <div className="row">
                                {
                                    testimoData.map((t, index) => {
                                        return <div className="col-xl-6 col-lg-6 col-md-6 col-12"
                                            data-aos={index % 2 == 0 ? "fade-right" : "fade-left"} key={index}>
                                            <div className="row testi-card">
                                                <div className="col-md-3">
                                                    <div className="overflow-hidden">
                                                        <a href={basePath + "/testimonial/" + t.slug}>
                                                            <img src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${t.thumbnailImage.url}`} alt="" className="img-fluid w-100" />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="col-md-9 my-auto">
                                                    <div className="testi-rightbox">
                                                        <h3>{t.title}</h3>
                                                        <p>{`${t.shortDetails.slice(0, 80)}...`}
                                                            <a href={basePath + "/testimonial/" + t.slug}> Watch Video</a>
                                                        </p>

                                                        <div className="d-flex align-items-center justify-content-between mt-3">
                                                            <div className="doctor-name">
                                                                <p><span><img src="/img/doctor.png" className="img-fluid" alt="" /></span> {t.doctor.name} </p>
                                                            </div>
                                                            <div className="doctor-catagory">
                                                                <p>{t.specialities[0].title}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Testimonial