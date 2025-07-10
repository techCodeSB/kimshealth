import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'
import { getBaseUrl } from '@/app/lib/getBaseUrl';
import { getStaticPageContent } from '@/app/lib/getStaticPageContent';
import { marked } from 'marked';
import leaderData from '@/app/lib/getLeader';
import awardData from '@/app/lib/getAward';
import getStaticText from '@/app/lib/getStaticTextServer';



const AboutUs = async () => {
    const basePath = await getBaseUrl(true, true);
    const field = "populate[0]=pageContent&populate[1]=pageContent.bannerItem&populate[2]=pageContent.bannerItem.bannerImageDesktop&populate[3]=pageContent.bannerItem.bannerImageMobile&populate[4]=metaSection&populate[5]=pageContent.highlightButtonItem&populate[6]=pageContent.highlightButtonItem.iconImage&populate[7]=pageContent.image";
    const data = await getStaticPageContent("about-us", field);
    const pageContent = data?.data[0]?.pageContent;
    const pageMeta = data?.data[0]?.metaSection;
    const staticText = await getStaticText();

    let allLeader = await leaderData.getAll('Promoters');
    let awards = await awardData.getAll()


    return (
        <>
            <Header />
            <div role="main" className="main">
                <div className="about-us-main-page">
                    <section className="section details-page-before py-0">
                        <div className="procedures-details-page-header">
                            <div className="container-fluid px-0">
                                <div className="row">
                                    <div className="col-md-6 details-proceduce-banner-left-col">

                                        <div className="hospital-banner-container">
                                            <div className="breadcrumb-wrapper py-2 ps-2 ms-1">
                                                <div className="row">
                                                    <div className="col-12 px-0">
                                                        <ul className="breadcrumb mb-0">
                                                            <li>
                                                                <a href={basePath+"/"}>{staticText['Home']}</a>
                                                            </li>
                                                            <li className="active"> {staticText['About Us']} </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="details-banner">
                                                <div className="details-heading">
                                                    <div className="hospital-content">
                                                        <div className="row">
                                                            <div className="col-md-6 col-6 mb-3">
                                                                <div className="d-flex align-items-center">
                                                                    <div>
                                                                        <img src="/img/about-hospital-ic.png" alt=""
                                                                            className="img-fluid" />
                                                                    </div>
                                                                    <div>
                                                                        <h3>5</h3>
                                                                        <p>Hospitals</p>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="col-md-6 col-6 mb-3">
                                                                <div className="d-flex align-items-center">
                                                                    <div>
                                                                        <img src="/img/about-hospital-ic.png" alt=""
                                                                            className="img-fluid" />
                                                                    </div>
                                                                    <div>
                                                                        <h3>7</h3>
                                                                        <p>Medical Centres</p>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="col-md-6 col-6 mb-3">
                                                                <div className="d-flex align-items-center">
                                                                    <div>
                                                                        <img src="/img/about-doctor-ic.png" alt="" className="img-fluid" />
                                                                    </div>
                                                                    <div>
                                                                        <h3>500 +</h3>
                                                                        <p>Doctors</p>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="col-md-6 col-6 mb-3">
                                                                <div className="d-flex align-items-center">
                                                                    <div>
                                                                        <img src="/img/about-patient-ic.png" alt=""
                                                                            className="img-fluid" />
                                                                    </div>
                                                                    <div>
                                                                        <h3>10 Millions+</h3>
                                                                        <p>Happy Patients</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-6 details-proceduce-banner-right-col">
                                        <div className="owl-carousel owl-theme hospital-details-slider">

                                            {
                                                pageContent[1]?.bannerItem?.map((b, i) => {
                                                    return <div className="item">
                                                        <img src={process.env.NEXT_PUBLIC_IMAGE_URL + b.bannerImageDesktop.url}
                                                            alt="" className="img-fluid w-100" />
                                                    </div>
                                                })
                                            }
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </section>

                    <section className="section">
                        <div className="container">
                            <div className="row">

                                <div className="col-md-12 sub-heading order-lg-2 order-1 mb-lg-0 mb-3">
                                    <div className="main-heading">
                                        <h2 className="mb-lg-1">{pageContent[2]?.title}</h2>
                                        <h3 className="mb-lg-3">{pageContent[2]?.subTitle}</h3>
                                    </div>
                                    <div dangerouslySetInnerHTML={{ __html: marked(pageContent[2]?.details || "") || "" }}></div>


                                    <div className="row">
                                        <div className="col-md-4 mb-3 main-heading sub-heading mission-box ">
                                            <div className="d-flex align-items-center mb-2">
                                                <img src="/img/mission.png" alt="" className="img-fluid me-2" />
                                                <h3 className="mb-0">{pageContent[3].title}</h3>
                                            </div>
                                            <div dangerouslySetInnerHTML={{ __html: marked(pageContent[3]?.details || "") || "" }}></div>
                                        </div>

                                        <div className="col-md-4 mb-3 main-heading sub-heading mission-box ">
                                            <div className="d-flex align-items-center mb-2">
                                                <img src="/img/vision.png" alt="" className="img-fluid me-2" />
                                                <h3 className="mb-0">{pageContent[4].title}</h3>
                                            </div>
                                            <div dangerouslySetInnerHTML={{ __html: marked(pageContent[4]?.details || "") || "" }}></div>
                                        </div>

                                        <div className="col-md-4 mb-3 main-heading sub-heading mission-box ">
                                            <div className="d-flex align-items-center mb-2">
                                                <img src="/img/values.png" alt="" className="img-fluid me-2" />
                                                <h3 className="mb-0">{pageContent[5].title}</h3>
                                            </div>
                                            <div dangerouslySetInnerHTML={{ __html: marked(pageContent[5]?.details || "") || "" }}></div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>




                    <div className="line-divider"> </div>

                    <section className="section chairman-section pb-0">
                        <div className="container">
                            <div className="main-heading">
                                <h2>{pageContent[6].title}</h2>
                            </div>

                            <div className="row">
                                <div className="col-md-5 mt-lg-auto mb-0">
                                    <img src={pageContent[6].image ? process.env.NEXT_PUBLIC_IMAGE_URL + pageContent[6].image.url : "/img/no-image.jpg"} alt="" className="img-fluid" />
                                </div>
                                <div className="col-md-7 mb-3 pb-lg-5 mt-3 mt-lg-0">
                                    <div className="sub-heading main-heading" dangerouslySetInnerHTML={{ __html: marked(pageContent[6].details || "") || "" }}>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </section>


                    {/* ==== Leadership ==== */}
                    <div className="line-divider"></div>
                    <section className="section expert-section">
                        <div className="container">
                            <div className="main-heading">
                                <h2>{pageContent[8].title}</h2>
                            </div>

                            <div className="row">
                                {
                                    allLeader.slice(0, 8).map((l, i) => {
                                        return <div className="col-md-3 col-6 mb-4" key={i}>
                                            <div className="expert-card" data-aos="fade-right">
                                                <div className="card border-0 p-lg-4 p-0">
                                                    <div className="card-top">
                                                        <a href={basePath+"/about-us/"+l.slug}>
                                                            <img src={l.image ? process.env.NEXT_PUBLIC_IMAGE_URL + l.image.url : "/img/no-image.jpg"}
                                                                className="img-fluid w-100" alt={l.name} />
                                                        </a>
                                                    </div>
                                                    <div className="card-content">
                                                        <h4>{l.name}</h4>
                                                        <p>{l.designation}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    })
                                }
                            </div>
                        </div>
                    </section>


                    <div className="line-divider"></div>
                    <section className="section">
                        <div className="container">
                            <div className="main-heading">
                                <h2>{pageContent[9].title}</h2>
                            </div>

                            <div className="row">

                                {
                                    awards.map((a, i) => {
                                        return <div className="col-md-4 mb-3" key={i}>
                                            <div className="awards-box">
                                                <p>{a.title}</p>
                                            </div>
                                        </div>
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

export default AboutUs