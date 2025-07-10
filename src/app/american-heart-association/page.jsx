import Footer from '@/components/Footer'
import Form1 from '@/components/Forms/Form1'
import Header from '@/components/Header'
import JournalCarousel from '@/components/JournalCarousel'
import React from 'react'
import getStaticText from '@/app/lib/getStaticTextServer'
import { getBaseUrl } from '../lib/getBaseUrl'
import { getStaticPageContent } from '../lib/getStaticPageContent'

const AmericanHeartAssoc = async () => {
    const basePath = await getBaseUrl(true, true);
    const field = "populate[0]=pageContent&populate[1]=pageContent.bannerItem&populate[2]=pageContent.bannerItem.bannerImageDesktop&populate[3]=pageContent.bannerItem.bannerImageMobile&populate[4]=metaSection";
    const data = await getStaticPageContent("american-heart-association", field);
    const pageContent = data?.data[0]?.pageContent;
    const pageMeta = data?.data[0]?.metaSection;
    let staticText = await getStaticText();


    console.log(pageContent)


    return (
        <>
            <Header />
            <div role="main" className="main">
                <div className="heart-associations-main-page">
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
                                                                <a href={basePath + "/"}>{staticText['Home']}</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">{staticText['Academics']}</a>
                                                            </li>
                                                            <li className="active"> {pageContent[0].title} </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="details-banner">
                                                <div className="details-heading">
                                                    <h3>{pageContent[0].title}</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-6 details-proceduce-banner-right-col">
                                        <img src={pageContent[1].bannerItem.length > 0 ? process.env.NEXT_PUBLIC_IMAGE_URL + pageContent[1].bannerItem[0].bannerImageDesktop.url : "/img/no-image.jpg"} className="img-fluid details-banner-image" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </section>
                    <section className="section association-section">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-8">
                                    <div className="main-heading sub-heading">
                                        <h2>{pageContent[2].title}</h2>
                                        <div dangerouslySetInnerHTML={{ __html: pageContent[2].details }}></div>
                                    </div>

                                </div>
                                <div className="col-md-4 ">
                                    <div className="association-left-col">
                                        <div className="association-form-card mb-5">
                                            <Form1 title={"Request a Call Back"} />
                                        </div>

                                        <h4>{pageContent[2].sectionTitle}</h4>
                                        <p><strong>{pageContent[2].contactPerson}</strong></p>
                                        <p>{pageContent[2].designation}</p>

                                        {pageContent[2].phone && <a href="tel:+914712941472"><i className="fa-solid fa-phone"></i> {pageContent[2].phone}</a>}

                                        <a href="mailto:socomer@kimshealth.org"><i className="fa-solid fa-envelope"></i>
                                            socomer@kimshealth.org</a>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="line-divider"> </div>

                    {/* <JournalCarousel/> */}
                </div>
            </div>
            <Footer />
        </>
    )
}

export default AmericanHeartAssoc