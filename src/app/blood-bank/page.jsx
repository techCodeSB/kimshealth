import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React from 'react';
import { getStaticPageContent } from '../lib/getStaticPageContent';
import getStaticText from '../lib/getStaticTextServer';

const BloodBank = async () => {
    const data = await getStaticPageContent("blood-bank");
    const pageContent = data?.data[0]?.pageContent;
    const pageMeta = data?.data[0]?.metaSection;
    const staticText = await getStaticText();


    return (
        <>
            <Header />
            <div role="main" className="main">
                <div className="blood-bank-main-page">
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
                            <div className="main-heading main-list sub-heading">
                                <h2>{pageContent[1]?.title}</h2>
                                <div dangerouslySetInnerHTML={{ __html: pageContent[1]?.details || "" }}></div>
                            </div>
                        </div>
                    </section>
                    <div className="line-divider"></div>
                    <section className="section">
                        <div className="container">
                            <div className="main-heading main-list">
                                <h2>{pageContent[2]?.title}</h2>
                                <div dangerouslySetInnerHTML={{ __html: pageContent[2]?.details || "" }}></div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default BloodBank;