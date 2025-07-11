import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'
import { getBaseUrl } from '@/app/lib/getBaseUrl';
import { getStaticPageContent } from '@/app/lib/getStaticPageContent';
import MediaEventListing from '@/components/MediaEventListing';

const MediaAndEvents = async () => {
    const basePath = await getBaseUrl(true, true);
    const data = await getStaticPageContent("media-and-events");
    const pageContent = data?.data[0]?.pageContent;
    const pageMeta = data?.data[0]?.metaSection;



    return (
        <>
            <Header />
            <div role="main" className="main">
                <div className="doctor-talk-main-page">
                    <div className="page-header">
                        <div className="container">
                            <h2>{pageContent[0].title} </h2>
                        </div>
                    </div>
                    <section className="breadcrumb-wrapper py-2">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <ul className="breadcrumb mb-0">
                                        <li>
                                            <a href={basePath + "/"}>Home</a>
                                        </li>
                                        <li className="active"> {pageContent[0].title} </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    <MediaEventListing basePath={basePath} />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default MediaAndEvents