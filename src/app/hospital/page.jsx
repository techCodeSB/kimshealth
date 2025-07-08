import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react';
import { getBaseUrl } from '@/app/lib/getBaseUrl';
import { getStaticPageContent } from '@/app/lib/getStaticPageContent';
import hospitalData from '@/app/lib/getHospital';
import getStaticText from '@/app/lib/getStaticTextServer';


const Hospital = async () => {
    const staticText = await getStaticText();
    const baseURL = await getBaseUrl(true, true);
    const data = await getStaticPageContent("hospital");
    const pageContent = data?.data[0]?.pageContent;
    const pageMeta = data?.data[0]?.metaSection;
    const hospitals = await hospitalData.getAll();

  


    return (
        <>
            <Header />
            <div role="main" className="main">
                <div className="hospital-details-main-page">
                    <div className="page-header">
                        <div className="container">
                            <h2>{pageContent[0]?.title}</h2>
                        </div>
                    </div>
                    <section className="breadcrumb-wrapper py-2">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <ul className="breadcrumb mb-0">
                                        <li>
                                            <a href={baseURL+"/"}>{staticText['Home']}</a>
                                        </li>
                                        <li className="active"> {pageContent[0]?.title} </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="section pt-lg-4 pt-0">
                        <div className="container">
                            <div className="row justify-content-between">
                                <div className="col-md-8 col-12">
                                    <div className="main-heading">
                                        <h2>{pageContent[1]?.title}</h2>
                                    </div>
                                </div>
                                <div className="col-md-3 col-12 hospital-mainpage-form mb-lg-0 mb-4">
                                    {/* <!-- <div className="over-all-btn text-end">
                                        <a href="#">View All <span><img src="/img/slider-right-arrow.svg" className="img-fluid" alt=""></span></a>
                                    </div> --> */}
                                    <form action="">
                                        <div className="input-group p-0 position-relative justify-content-center">

                                            <select className="form-select speciality-page-search">
                                                <option >All Hospital</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                            <button className="input-group-text border-0 search-btn-page"><i className="fa-solid fa-angle-down"></i></button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="row">

                                {
                                    hospitals.map((h, index) => {
                                        return index <= 1 ?
                                            <div className="col-md-6 mb-4" key={index}>
                                                <div className="custom-hospital-top-card">
                                                    <div className="hospital-img">
                                                        <a href={baseURL + "/hospital/" + h.slug}>
                                                            <img src={process.env.NEXT_PUBLIC_IMAGE_URL + h.featuredImage.url} alt="" className="img-fluid w-100" />
                                                        </a>
                                                    </div>
                                                    <div className="hospital-content">

                                                        <ul>
                                                            <li className="hospital-icon-custom">{h.title}</li>
                                                            <li className="location-icon-custom">{h.address}</li>
                                                            <li className="telephone-icon-custom">{h.contactNo}</li>
                                                        </ul>
                                                        <div className="d-lg-flex d-block align-items-center justify-content-between py-2 " style={{ borderBottom: "1px solid #fff" }}>
                                                            <div className="hospital-content mb-lg-0 mb-3 p-0">
                                                                <ul>
                                                                    <li className="mb-0 send-custom-icon">
                                                                        <a href={h.mapURL} target='_blank'>{staticText['Get Direction']}</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="d-flex align-items-center">
                                                                <img src="/img/google.png" alt="Google Logo" className="me-2" />
                                                                <div className="star-rating" data-rating="4.7">
                               
                                                                    {
                                                                        Array.from({ length: h.rating }).map((r, index) => {
                                                                            return index + 1 < h.rating - 1 ?
                                                                                <i className="fa fa-solid fa-star ms-1" style={{ color: "#ffc107" }} key={index}></i>
                                                                                : <i key={index} className={`fa fa-solid ms-1 ${Number.isInteger(h.rating) ? 'fa-star' : 'fa-star-half'}`} style={{ color: "#ffc107" }}></i>
                                                                        })
                                                                    }
                                                                    {h.rating}
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="d-lg-flex d-block align-items-center justify-content-between pt-3">
                                                            <a href={baseURL + "/hospital/" + h.slug} className="btn mb-lg-0 mb-2 hospital-primarybtn">{staticText['View Details']}</a>
                                                            <a href={baseURL + "/book-an-appointment"} className="btn mb-lg-0 mb-3 hospital-secondarybtn">{staticText['Appointment']}</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            : null
                                    })
                                }


                                {
                                    hospitals.map((h, index) => {
                                        return index >= 2 && index <= 4 ?
                                            <div className="col-md-4 mb-4" key={index}>
                                                <div className="custom-hospital-top-card">
                                                    <div className="hospital-img">
                                                        <a href={baseURL + "/hospital/" + h.slug}>
                                                            <img src={process.env.NEXT_PUBLIC_IMAGE_URL + h.featuredImage.url} alt="" className="img-fluid w-100" />
                                                        </a>
                                                    </div>
                                                    <div className="hospital-content">

                                                        <ul>
                                                            <li className="hospital-icon-custom">{h.title}</li>
                                                            <li className="location-icon-custom">{h.address}</li>
                                                            <li className="telephone-icon-custom">{h.contactNo}</li>
                                                        </ul>
                                                        <div className="d-lg-flex d-block align-items-center justify-content-between py-2 " style={{ borderBottom: "1px solid #fff" }}>
                                                            <div className="hospital-content mb-lg-0 mb-3 p-0">
                                                                <ul>
                                                                    <li className="mb-0 send-custom-icon">
                                                                        <a href={h.mapURL} target='_blank'>{staticText['Get Direction']}</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="d-flex align-items-center">
                                                                <img src="/img/google.png" alt="Google Logo" className="me-2" />
                                                                <div className="star-rating" data-rating="4.7">
                                                                    {
                                                                        Array.from({ length: h.rating }).map((r, index) => {
                                                                            return index + 1 < h.rating - 1 ?
                                                                                <i className="fa fa-solid fa-star ms-1" style={{ color: "#ffc107" }} key={index}></i>
                                                                                : <i key={index} className={`fa fa-solid ms-1 ${Number.isInteger(h.rating) ? 'fa-star' : 'fa-star-half'}`} style={{ color: "#ffc107" }}></i>
                                                                        })
                                                                    }
                                                                    {h.rating}
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="d-lg-flex d-block align-items-center justify-content-between pt-3">
                                                            <a href={baseURL + "/hospital/" + h.slug} className="btn mb-lg-0 mb-2 hospital-primarybtn">{staticText['View Details']}</a>
                                                            <a href={baseURL + "/book-an-appointment"} className="btn mb-lg-0 mb-3 hospital-secondarybtn">{staticText['Appointment']}</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            : null
                                    })
                                }

                            </div>
                        </div>
                    </section>

                    <div className="line-divider"></div>

                    <section className="section">
                        <div className="container">
                            <div className="row justify-content-between">
                                <div className="col-md-8 col-8">
                                    <div className="main-heading">
                                        <h2>{pageContent[2]?.title}</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                {
                                    hospitals.map((h, index) => {
                                        return index >= 5 && index <= 10 ?
                                            <div className="col-md-4 mb-4" key={index}>
                                                <div className="custom-hospital-top-card">
                                                    <div className="hospital-img">
                                                        <a href={baseURL + "/hospital/" + h.slug}>
                                                            <img src={process.env.NEXT_PUBLIC_IMAGE_URL + h.featuredImage.url} alt="" className="img-fluid w-100" />
                                                        </a>
                                                    </div>
                                                    <div className="hospital-content">

                                                        <ul>
                                                            <li className="hospital-icon-custom">{h.title}</li>
                                                            <li className="location-icon-custom">{h.address}</li>
                                                            <li className="telephone-icon-custom">{h.contactNo}</li>
                                                        </ul>
                                                        <div className="d-lg-flex d-block align-items-center justify-content-between py-2 " style={{ borderBottom: "1px solid #fff" }}>
                                                            <div className="hospital-content mb-lg-0 mb-3 p-0">
                                                                <ul>
                                                                    <li className="mb-0 send-custom-icon">
                                                                        <a href={h.mapURL} target='_blank'>{staticText['Get Direction']}</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="d-flex align-items-center">
                                                                <img src="/img/google.png" alt="Google Logo" className="me-2" />
                                                                <div className="star-rating" data-rating="4.7">
                                                                    {
                                                                        Array.from({ length: h.rating }).map((r, index) => {
                                                                            return index + 1 < h.rating - 1 ?
                                                                                <i className="fa fa-solid fa-star ms-1" style={{ color: "#ffc107" }} key={index}></i>
                                                                                : <i key={index} className={`fa fa-solid ms-1 ${Number.isInteger(h.rating) ? 'fa-star' : 'fa-star-half'}`} style={{ color: "#ffc107" }}></i>
                                                                        })
                                                                    }
                                                                    {h.rating}
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="d-lg-flex d-block align-items-center justify-content-between pt-3">
                                                            <a href={baseURL + "/hospital/" + h.slug} className="btn mb-lg-0 mb-2 hospital-primarybtn">{staticText['View Details']}</a>
                                                            <a href={baseURL + "/book-an-appointment"} className="btn mb-lg-0 mb-3 hospital-secondarybtn">{staticText['Appointment']}</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            : null
                                    })
                                }

                                {
                                    hospitals.map((h, index) => {
                                        return index >= 11 && index <= 12 ?
                                            <div className="col-md-6 mb-4" key={index}>
                                                <div className="custom-hospital-top-card">
                                                    <div className="hospital-img">
                                                        <a href={baseURL + "/hospital/" + h.slug}>
                                                            <img src={process.env.NEXT_PUBLIC_IMAGE_URL + h.featuredImage.url} alt="" className="img-fluid w-100" />
                                                        </a>
                                                    </div>
                                                    <div className="hospital-content">

                                                        <ul>
                                                            <li className="hospital-icon-custom">{h.title}</li>
                                                            <li className="location-icon-custom">{h.address}</li>
                                                            <li className="telephone-icon-custom">{h.contactNo}</li>
                                                        </ul>
                                                        <div className="d-lg-flex d-block align-items-center justify-content-between py-2 " style={{ borderBottom: "1px solid #fff" }}>
                                                            <div className="hospital-content mb-lg-0 mb-3 p-0">
                                                                <ul>
                                                                    <li className="mb-0 send-custom-icon">
                                                                        <a href={h.mapURL} target='_blank'>{staticText['Get Direction']}</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="d-flex align-items-center">
                                                                <img src="/img/google.png" alt="Google Logo" className="me-2" />
                                                                <div className="star-rating" data-rating="4.7">
                                    
                                                                    {
                                                                        Array.from({ length: h.rating }).map((r, index) => {
                                                                            return index + 1 < h.rating - 1 ?
                                                                                <i className="fa fa-solid fa-star ms-1" style={{ color: "#ffc107" }} key={index}></i>
                                                                                : <i key={index} className={`fa fa-solid ms-1 ${Number.isInteger(h.rating) ? 'fa-star' : 'fa-star-half'}`} style={{ color: "#ffc107" }}></i>
                                                                        })
                                                                    }
                                                                    {h.rating}
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="d-lg-flex d-block align-items-center justify-content-between pt-3">
                                                            <a href={baseURL + "/hospital/" + h.slug} className="btn mb-lg-0 mb-2 hospital-primarybtn">{staticText['View Details']}</a>
                                                            <a href={baseURL + "/book-an-appointment"} className="btn mb-lg-0 mb-3 hospital-secondarybtn">{staticText['Appointment']}</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            : null
                                    })
                                }

                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Hospital