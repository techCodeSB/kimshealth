import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'
import { getStaticPageContent } from '@/app/lib/getStaticPageContent';
import { getBaseUrl } from '@/app/lib/getBaseUrl';
import investorDAta from '@/app/lib/getInvestor';
import Breadcrumb from '@/components/Breadcrumb';
import getStaticText from '@/app/lib/getStaticTextServer';
import getCurrentLangLoc from '@/app/lib/getCurrentLangLoc';

const Investor = async () => {
    const getLangLoc = await getCurrentLangLoc()
    const basePath = await getBaseUrl(true, true);
    const data = await getStaticPageContent("investor");
    const pageContent = data?.data[0]?.pageContent;
    const pageMeta = data?.data[0]?.metaSection;
    const staticText = await getStaticText();

    const getAllInvestorDirector = await investorDAta.getAll('Directors & Advisory Board')
    const getAllInvestorPatrons = await investorDAta.getAll('Patrons')

    return (
        <>
            <Header />
            <div role="main" className="main">
                <div className="find-doctor-main-page">
                    <div className="page-header">
                        <div className="container">
                            <h2>{pageContent[0].title}</h2>
                        </div>
                    </div>
                    <section className="breadcrumb-wrapper py-2">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <Breadcrumb
                                        activeTitle={pageContent[0]?.title}
                                        middleTitle={''}
                                        middleURL={""}
                                    />
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="section expert-section">
                        <div className="container">
                            <div className="main-heading">
                                <h2>{pageContent[1].title}</h2>
                            </div>

                            <div className="row">
                                {
                                    getAllInvestorDirector.slice(0, 8).map((l, i) => {
                                        return <div className="col-md-3 col-6 mb-4" key={i}>
                                            <div className="expert-card" data-aos="fade-right">
                                                <div className="card border-0 p-lg-4 p-0">
                                                    <div className="card-top">
                                                        <a href={basePath + "/investor/" + l.slug}>
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

                    <section className="section expert-section">
                        <div className="container">
                            <div className="main-heading">
                                <h2>{pageContent[2].title}</h2>
                            </div>

                            <div className="row">
                                {
                                    getAllInvestorPatrons.slice(0, 8).map((l, i) => {
                                        return <div className="col-md-3 col-6 mb-4" key={i}>
                                            <div className="expert-card" data-aos="fade-right">
                                                <div className="card border-0 p-lg-4 p-0">
                                                    <div className="card-top">
                                                        <a href={basePath + "/investor/" + l.slug}>
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

                </div>

            </div>
            <Footer />
        </>
    )
}

export default Investor