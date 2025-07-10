import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'
import { getBaseUrl } from '@/app/lib/getBaseUrl'
import getStaticText from '@/app/lib/getStaticTextServer'
import { getStaticPageContent } from '@/app/lib/getStaticPageContent'

const Socomer = async () => {
    const basePath = await getBaseUrl(true, true)
    const staticText = await getStaticText();
    const field = "populate[0]=pageContent&populate[1]=pageContent.bannerItem&populate[2]=pageContent.bannerItem.bannerImageDesktop&populate[3]=pageContent.bannerItem.bannerImageMobile&populate[4]=metaSection&populate[5]=pageContent.journal&populate[6]=pageContent.journal.thumbnailImage&populate[7]=pageContent.journal.file&populate[8]=pageContent.file&populate[9]=pageContent.courseCategory&populate[10]=pageContent.socomer&populate[11]=pageContent.socomer.socomerItem";
    const data = await getStaticPageContent("socomer", field);
    const pageContent = data?.data[0]?.pageContent;
    const pageMeta = data?.data[0]?.metaSection;


    console.log(pageContent)
    return (
        <>
            <Header />
            <div role="main" className="main">
                <div className="socomer-main-page">
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
                                                                <a href="#">Academics</a>
                                                            </li>
                                                            <li className="active">{pageContent[0].title} </li>
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
                                        <img src={pageContent[1].bannerItem[0]?.bannerImageDesktop?.url ? process.env.NEXT_PUBLIC_IMAGE_URL + pageContent[1].bannerItem[0].bannerImageDesktop?.url : "/img/no-image.jpg"} className="img-fluid details-banner-image" alt="" />
                                    </div>

                                </div>
                            </div>
                        </div>

                    </section>
                    <section className="section">
                        <div className="container">
                            <div className="main-heading sub-heading main-list" dangerouslySetInnerHTML={{__html: pageContent[2].details}}>
                            </div>
                        </div>
                    </section>


                    <div className="line-divider"> </div>
                    <section className="section">
                        <div className="container">
                            <div className="main-heading">
                                <h2>{pageContent[3].title}</h2>
                            </div>
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="socomer-tab">
                                        <div className="procedure-acc-card mb-3">
                                            <div className="accordion" id="accordionExample">
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header">
                                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse33" aria-expanded="true" aria-controls="collapse33">
                                                            <span>SOCOMER Annual Report </span>
                                                        </button>
                                                    </h2>
                                                    <div id="collapse33" className="accordion-collapse show ">
                                                        <div className="accordion-body px-0 pt-0">

                                                            <ul>
                                                                <li> - SOCOMER Annual Report 2022
                                                                    <a href="#"><i className="custom-download"></i>Download</a>
                                                                </li>
                                                                <li>
                                                                    - SOCOMER Annual Report 2022
                                                                    <a href="#"><i className="custom-download"></i>Download</a>
                                                                </li>


                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>

                    <div className="line-divider"> </div>
                    <section className="section">
                        <div className="container">
                            <div className="main-heading">
                                <h2>RESEARCH</h2>
                            </div>
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="socomer-tab">
                                        <div className="procedure-acc-card mb-3">
                                            <div className="accordion" id="accordionExample">
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header">
                                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse36" aria-expanded="true" aria-controls="collapse36">
                                                            <span>Institutional Human Ethics Committee </span>
                                                        </button>
                                                    </h2>
                                                    <div id="collapse36" className="accordion-collapse show ">
                                                        <div className="accordion-body px-0 pt-0">

                                                            <ul>
                                                                <li> - SOCOMER Annual Report 2022
                                                                    <a href="#"><i className="custom-download"></i>Download</a>
                                                                </li>
                                                                <li>
                                                                    - SOCOMER Annual Report 2022
                                                                    <a href="#"><i className="custom-download"></i>Download</a>
                                                                </li>


                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-4">


                                    <div className="socomer-tab">
                                        <div className="procedure-acc-card mb-3">
                                            <div className="accordion" id="accordionExample1">
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header">
                                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse37" aria-expanded="true" aria-controls="collapse37">
                                                            <span>Clinical Trials and Biomedical & Health Research</span>
                                                        </button>
                                                    </h2>
                                                    <div id="collapse37" className="accordion-collapse collapse">
                                                        <div className="accordion-body px-0 pt-0">

                                                            <ul>
                                                                <li> - SOCOMER Annual Report 2022
                                                                    <a href="#"><i className="custom-download"></i>Download</a>
                                                                </li>
                                                                <li>
                                                                    - SOCOMER Annual Report 2022
                                                                    <a href="#"><i className="custom-download"></i>Download</a>
                                                                </li>

                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="socomer-tab">
                                        <div className="procedure-acc-card mb-3">
                                            <div className="accordion" id="accordionExample2">
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header">
                                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse38" aria-expanded="true" aria-controls="collapse38">
                                                            <span>Scientific Publication</span>
                                                        </button>
                                                    </h2>
                                                    <div id="collapse38" className="accordion-collapse collapse ">
                                                        <div className="accordion-body px-0 pt-0">

                                                            <ul>
                                                                <li> - SOCOMER Annual Report 2022
                                                                    <a href="#"><i className="custom-download"></i>Download</a>
                                                                </li>
                                                                <li>
                                                                    - SOCOMER Annual Report 2022
                                                                    <a href="#"><i className="custom-download"></i>Download</a>
                                                                </li>


                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="line-divider"> </div>

                    <section className="section">
                        <div className="container">
                            <div className="main-heading">
                                <h2>Publication</h2>
                            </div>
                            <div className="row">
                                <div className="col-md-8">
                                    <div className="table-responsive hear-associations-table">
                                        <table className="table align-middle">
                                            <thead>
                                                <tr>
                                                    <th>Sr. No</th>
                                                    <th>Types of Publication</th>
                                                    <th>2019</th>
                                                    <th>2020</th>
                                                    <th>2021</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td>International Journals (Indexed)</td>
                                                    <td>18</td>
                                                    <td>25</td>
                                                    <td>26</td>
                                                </tr>
                                                <tr>
                                                    <td>2</td>
                                                    <td>National Journals (Indexed)</td>
                                                    <td>25</td>
                                                    <td>44</td>
                                                    <td>40</td>
                                                </tr>


                                                <tr>
                                                    <td>4</td>
                                                    <td>Chapters in Books</td>
                                                    <td>4</td>
                                                    <td>4</td>
                                                    <td>11</td>
                                                </tr>

                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>


                </div>
            </div>
            <Footer />
        </>
    )
}

export default Socomer