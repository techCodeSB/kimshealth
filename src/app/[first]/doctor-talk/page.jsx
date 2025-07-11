import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'
import { getBaseUrl } from '@/app/lib/getBaseUrl';
import { getStaticPageContent } from '@/app/lib/getStaticPageContent';
import doctorTalkData from '@/app/lib/getDoctorTalk';
import formatDate from '@/app/lib/formatDate';
import getStaticText from '@/app/lib/getStaticTextServer';
import DoctorTalkListing from '@/components/DoctorTalkListing';
import Breadcrumb from '@/components/Breadcrumb';



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
                                    <Breadcrumb
                                        activeTitle={pageContent[0]?.title}
                                        middleTitle={''}
                                        middleURL={""}
                                    />
                                </div>
                            </div>
                        </div>
                    </section>

                    <DoctorTalkListing
                        baseURL={baseURL}
                    />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default DoctorTalk