import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'
import { getBaseUrl } from '@/app/lib/getBaseUrl';
import { getStaticPageContent } from '@/app/lib/getStaticPageContent';
import { marked } from 'marked';
import leaderData from '@/app/lib/getLeader';
import awardData from '@/app/lib/getAward';
import getStaticText from '@/app/lib/getStaticTextServer';
import Breadcrumb from '@/components/Breadcrumb';
import getCurrentLangLoc from '@/app/lib/getCurrentLangLoc';



const Leadership = async () => {
    const getLangLoc = await getCurrentLangLoc()
    const basePath = await getBaseUrl(true, true);
    const data = await getStaticPageContent("leadership");
    const pageContent = data?.data[0]?.pageContent;
    const pageMeta = data?.data[0]?.metaSection;
    const staticText = await getStaticText();
    let allLeader = await leaderData.getAll({ type: 'Promoters', langLoc: getLangLoc });


    return (
        <>
            <Header />
            <div role="main" className="main">
                <div className="about-us-main-page">
                    <div className="page-header">
                        <div className="container">
                            <h2>{pageContent[0]?.title}</h2>
                        </div>
                    </div>
                    <section className="breadcrumb-wrapper py-2">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <Breadcrumb activeTitle={pageContent[0]?.title} middleTitle={""} middleURL={""} />
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* ==== Leadership ==== */}
                    <section className="section expert-section">
                        <div className="container">
                            <div className="row">
                                {
                                    allLeader?.slice(0, 8).map((l, i) => {
                                        return <div className="col-md-3 col-6 mb-4" key={i}>
                                            <div className="expert-card" data-aos="fade-right">
                                                <div className="card border-0 p-lg-4 p-0">
                                                    <div className="card-top">
                                                        <a href={basePath + "/leadership/" + l.slug}>
                                                            <img src={l.image ? process.env.NEXT_PUBLIC_IMAGE_URL + l?.image?.url : "/img/no-image.jpg"}
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
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Leadership