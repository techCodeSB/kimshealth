import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React from 'react'
import getCurrentLangLoc from '@/app/lib/getCurrentLangLoc';
import { getStaticPageContent } from '@/app/lib/getStaticPageContent';
import getStaticText from '@/app/lib/getStaticTextServer';
import Breadcrumb from '@/components/Breadcrumb';
import jobData from '@/app/lib/getJob';
import formatDate from '@/app/lib/formatDate';
import { marked } from 'marked';
import { getBaseUrl } from '@/app/lib/getBaseUrl';

const Carrer = async () => {
    const getLangLoc = await getCurrentLangLoc()
    const field = "populate[0]=pageContent&populate[1]=pageContent.bannerItem&populate[2]=pageContent.bannerItem.bannerImageDesktop&populate[3]=pageContent.bannerItem.bannerImageMobile&populate[4]=metaSection";
    const data = await getStaticPageContent("career", field);
    const pageContent = data?.data[0]?.pageContent;
    const pageMeta = data?.data[0]?.metaSection;
    const statictText = await getStaticText();
    const basePath = await getBaseUrl(true, true);
    const allJobs = await jobData.getAll({ langLoc: getLangLoc })


    return (
        <>
            <Header />
            <div role="main" className="main">
                <div className="career-main-page">
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
                                        middleURL={''}
                                    />
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="section">
                        <div className="container">
                            {/* <div className="row">
                                <div className="col-md-4">
                                    <div className="rounded-field-form mb-3">
                                        <form action="">
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="input-group">
                                                        <span className="input-group-text"><i
                                                            className="fa-solid fa-chevron-down"></i></span>
                                                        <select className="form-select" aria-label="Default select example">
                                                            <option value={''}>Select Hospital</option>
                                                            <option value="1">One</option>
                                                            <option value="2">Two</option>
                                                            <option value="3">Three</option>
                                                        </select>

                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>


                                <div className="col-md-4">
                                    <div className="rounded-field-form mb-3">
                                        <form action="">
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="input-group">
                                                        <span className="input-group-text"><i
                                                            className="fa-solid fa-chevron-down"></i></span>
                                                        <select className="form-select" aria-label="Default select example">
                                                            <option value={""}>Select Departments</option>
                                                            <option value="1">One</option>
                                                            <option value="2">Two</option>
                                                            <option value="3">Three</option>
                                                        </select>

                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div> */}

                            <div className="row">
                                {
                                    allJobs?.map((job, i) => {
                                        return <div className="col-md-6 mb-3" key={i}>
                                            <div className="career-card">
                                                <div className="career-card-heading">
                                                    <h3>{job?.title}, {job.hospitals[0]?.title}</h3>
                                                    <p>{statictText['Post Date']}: {formatDate(job.date)}</p>
                                                </div>

                                                <div className="main-heading sub-heading main-list-black">
                                                    <h3>{statictText['Experience']}: </h3>
                                                    <ul>
                                                        <li>{job.experience}</li>
                                                    </ul>

                                                    <h3>{statictText['Qualification']}: </h3>
                                                    <ul>
                                                        <li>{job.qualification}</li>
                                                    </ul>

                                                    <h3>{statictText['Description']}: </h3>
                                                    <p><strong>{statictText['Key Responsibilities']}:</strong></p>
                                                    <div
                                                        dangerouslySetInnerHTML={{ __html: marked(job.keyResponsibilities || "") || "" }}>
                                                    </div>
                                                </div>

                                                <div className="career-card-heading">
                                                    <h3>{job.hospitals[0]?.title}</h3>
                                                    <div className="from-btn">
                                                        <a href={basePath+"/career/"+job.slug} className="btn w-auto">
                                                            {statictText['Know More']}
                                                        </a>
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

export default Carrer;