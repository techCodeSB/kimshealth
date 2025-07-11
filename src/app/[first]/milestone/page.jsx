import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'
import getCurrentLangLoc from '@/app/lib/getCurrentLangLoc'
import { getStaticPageContent } from '@/app/lib/getStaticPageContent'
import getStaticText from '@/app/lib/getStaticTextServer'
import Breadcrumb from '@/components/Breadcrumb'

const MileStone = async () => {
    const getLangLoc = await getCurrentLangLoc()
    const data = await getStaticPageContent("milestone");
    const pageContent = data?.data[0]?.pageContent;
    const pageMeta = data?.data[0]?.metaSection;
    const staticText = await getStaticText();



    return (
        <>
            <Header />
            <div role="main" className="main">
                <div className="milestone-main-page">
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

                    <section className="section">
                        <div className="container">
                            <div className="inner-container">
                                <ul className="timeline">
                                    <li className="timeline-item active" data-date="2002">
                                        <div className="main-list-black">
                                            <ul>
                                                <li>The first bus route was established from Trivandrum City to KIMSHEALTH</li>
                                                <li>First ACLS course started in association with University of Kentucky, USA and
                                                    Osmania Medical Association of America</li>
                                                <li>National Live workshop on Hoarseness and Stridor Kimsy, the first baby at
                                                    KIMSHEALTH was born</li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="timeline-item" data-date="2003">
                                        <div className="main-list-black">
                                            <ul>
                                                <li>KIMSHEALTH received the ISO 9001 : 2000 award for Quality</li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="timeline-item active" data-date="2002">
                                        <div className="main-list-black">
                                            <ul>
                                                <li>The first bus route was established from Trivandrum City to KIMSHEALTH</li>
                                                <li>First ACLS course started in association with University of Kentucky, USA and
                                                    Osmania Medical Association of America</li>
                                                <li>National Live workshop on Hoarseness and Stridor Kimsy, the first baby at
                                                    KIMSHEALTH was born</li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="timeline-item" data-date="2003">
                                        <div className="main-list-black">
                                            <ul>
                                                <li>KIMSHEALTH received the ISO 9001 : 2000 award for Quality</li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="timeline-item active" data-date="2002">
                                        <div className="main-list-black">
                                            <ul>
                                                <li>The first bus route was established from Trivandrum City to KIMSHEALTH</li>
                                                <li>First ACLS course started in association with University of Kentucky, USA and
                                                    Osmania Medical Association of America</li>
                                                <li>National Live workshop on Hoarseness and Stridor Kimsy, the first baby at
                                                    KIMSHEALTH was born</li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="timeline-item" data-date="2003">
                                        <div className="main-list-black">
                                            <ul>
                                                <li>KIMSHEALTH received the ISO 9001 : 2000 award for Quality</li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="timeline-item active" data-date="2002">
                                        <div className="main-list-black">
                                            <ul>
                                                <li>The first bus route was established from Trivandrum City to KIMSHEALTH</li>
                                                <li>First ACLS course started in association with University of Kentucky, USA and
                                                    Osmania Medical Association of America</li>
                                                <li>National Live workshop on Hoarseness and Stridor Kimsy, the first baby at
                                                    KIMSHEALTH was born</li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="timeline-item" data-date="2003">
                                        <div className="main-list-black">
                                            <ul>
                                                <li>KIMSHEALTH received the ISO 9001 : 2000 award for Quality</li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="timeline-item active" data-date="2002">
                                        <div className="main-list-black">
                                            <ul>
                                                <li>The first bus route was established from Trivandrum City to KIMSHEALTH</li>
                                                <li>First ACLS course started in association with University of Kentucky, USA and
                                                    Osmania Medical Association of America</li>
                                                <li>National Live workshop on Hoarseness and Stridor Kimsy, the first baby at
                                                    KIMSHEALTH was born</li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="timeline-item" data-date="2003">
                                        <div className="main-list-black">
                                            <ul>
                                                <li>KIMSHEALTH received the ISO 9001 : 2000 award for Quality</li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="timeline-item active" data-date="2002">
                                        <div className="main-list-black">
                                            <ul>
                                                <li>The first bus route was established from Trivandrum City to KIMSHEALTH</li>
                                                <li>First ACLS course started in association with University of Kentucky, USA and
                                                    Osmania Medical Association of America</li>
                                                <li>National Live workshop on Hoarseness and Stridor Kimsy, the first baby at
                                                    KIMSHEALTH was born</li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="timeline-item" data-date="2003">
                                        <div className="main-list-black">
                                            <ul>
                                                <li>KIMSHEALTH received the ISO 9001 : 2000 award for Quality</li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="timeline-item active" data-date="2002">
                                        <div className="main-list-black">
                                            <ul>
                                                <li>The first bus route was established from Trivandrum City to KIMSHEALTH</li>
                                                <li>First ACLS course started in association with University of Kentucky, USA and
                                                    Osmania Medical Association of America</li>
                                                <li>National Live workshop on Hoarseness and Stridor Kimsy, the first baby at
                                                    KIMSHEALTH was born</li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </section>

                </div>

            </div>

            <Footer />
        </>
    )
}

export default MileStone