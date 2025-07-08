import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'
import { getBaseUrl } from '../lib/getBaseUrl';
import { getStaticPageContent } from '../lib/getStaticPageContent';
import doctorTalkData from '../lib/getDoctorTalk';
import formatDate from '../lib/formatDate';
import getStaticText from '../lib/getStaticTextServer';



const DoctorTalk = async () => {
    const baseURL = await getBaseUrl(true, true);
    const data = await getStaticPageContent("doctor-talk");
    const pageContent = data?.data[0]?.pageContent;
    const pageMeta = data?.data[0]?.metaSection;
    const docTalkData = await doctorTalkData.allData();
    const staticText = await getStaticText();



    return (
        <>
            <Header />
            <div role="main" className="main">
                <div className="doctor-talk-main-page">
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
                                            <a href="/">{staticText['Home']}</a>
                                        </li>
                                        <li className="active"> {pageContent[0]?.title}</li>
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
                                        <h2 className="mb-0">{staticText["Hear From The Doctor"]}</h2>
                                    </div>
                                </div>
                                <div className="col-md-4 details-key-row">
                                    <form action="">
                                        <div className="input-group p-0 position-relative justify-content-center">
                                            <select className="form-select diseases-page-search">
                                                <option>Search for Speciality </option>
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


                    <div className="section section">
                        <div className="container">
                            <div className="row">
                                {
                                    docTalkData.map((dt, index) => {
                                        return <div className="col-md-4 blog-right-col overflow-hidden mb-3" key={index}>
                                            <div className="position-relative overflow-hidden" data-aos={index % 2 == 0 ? "fade-right" : "fade-left"}>
                                                <img src={process.env.NEXT_PUBLIC_IMAGE_URL + dt.thumbnailImage.url} className="img-fluid w-100 hear-doc-image" alt="" />
                                                <div className="hear-doctor-content">
                                                    <div className="d-block align-items-center justify-content-between">
                                                        <div>
                                                            <h5 className="">{formatDate(dt.date)}</h5>
                                                            <p>{dt.title}</p>
                                                        </div>
                                                        <div className="main-btn ">
                                                            <span><img src="/img/play-button.png" className="img-fluid" alt="" /> </span>
                                                            <a href={baseURL + "/doctor-talk/" + dt.slug}>{staticText['Watch Video']} <span><i
                                                                className="fa-solid fa-arrow-right"></i></span></a>
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

export default DoctorTalk