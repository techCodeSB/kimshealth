import Footer from '@/components/Footer'
import Header from '@/components/Header';
import React from 'react'
import getStaticText from '@/app/lib/getStaticTextServer';
import { getBaseUrl } from '@/app/lib/getBaseUrl';
import { getStaticPageContent } from '@/app/lib/getStaticPageContent';
import diseaseData from '@/app/lib/getDisease';

const Disease = async () => {
    const staticText = await getStaticText();
    const baseURL = await getBaseUrl(true, true);
    const baseUrlOnlyLang = await getBaseUrl(true, false);
    const fields = "populate[0]="
    const data = await getStaticPageContent("disease");
    const pageContent = data?.data[0]?.pageContent;
    const pageMeta = data?.data[0]?.metaSection;

    const getAllDisease = await diseaseData.getDisease();
    console.log(getAllDisease);


    return (
        <>
            <Header />

            <div role="main" className="main">
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
                                    <li className="active"> {pageContent[0]?.title} </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section pt-lg-4 pt-0">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-9 mb-3">
                                <div className="speciality-masterpage-card key-procedures-master-page">
                                    <div className="details-key-row">
                                        <div className="row justify-content-between">
                                            <div className="col-md-6 mb-2">
                                                <form action="">
                                                    <div className="input-group p-0 my-lg-4 my-1 position-relative justify-content-center">
                                                        <select className="form-select diseases-page-search">
                                                            <option>Search for Conditions/Diseases</option>
                                                            <option value="1">One</option>
                                                            <option value="2">Two</option>
                                                            <option value="3">Three</option>
                                                        </select>
                                                        <button className="input-group-text border-0 search-btn-page"><i className="fa-solid fa-magnifying-glass"></i></button>
                                                    </div>
                                                </form>
                                            </div>
                                            <div className="col-md-6 mb-2">
                                                <form action="">
                                                    <div className="input-group p-0 my-lg-4 my-1 position-relative justify-content-center">

                                                        <select className="form-select speciality-page-search">
                                                            <option >Select by Speciality</option>
                                                            <option value="1">One</option>
                                                            <option value="2">Two</option>
                                                            <option value="3">Three</option>
                                                        </select>
                                                        <button className="input-group-text border-0 search-btn-page"><i className="fa-solid fa-angle-down"></i></button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="row">
                                        <div className="col-md-6">
                                            {
                                                getAllDisease.slice(0, getAllDisease.length / 2).map((d, index) => {
                                                    return <div className="speciality-masterpage-card-content" key={index}>
                                                        <a href={baseUrlOnlyLang +"/disease/"+ d.diseases[0]?.slug}>
                                                            <div className="key-master-row">
                                                                <div className="key-master-image">
                                                                    <img src="img/key-proce1.png" alt="" className="img-fluid" />
                                                                </div>
                                                                <div className="key-master-content">
                                                                    <h5>{d.title}</h5>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                })
                                            }

                                        </div>

                                        <div className="col-md-6">
                                            {
                                               getAllDisease.slice(0, getAllDisease.length / 2).map((d, index) => {
                                                    return <div className="speciality-masterpage-card-content" key={index}>
                                                        <a href={baseUrlOnlyLang +"/disease/"+ d.diseases[0]?.slug}>
                                                            <div className="key-master-row">
                                                                <div className="key-master-image">
                                                                    <img src="img/key-proce1.png" alt="" className="img-fluid" />
                                                                </div>
                                                                <div className="key-master-content">
                                                                    <h5>{d.title}</h5>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                })
                                            }

                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="col-md-3">
                                <a href={baseUrlOnlyLang + "/" + pageContent[1].card1Hyperlink}>
                                    <div className="key-master-book-appointment-btn mb-1">
                                        <div className="key-master-book-appointment-content">
                                            <img src={pageContent[1]?.card1Icon?.url ? process.env.NEXT_PUBLIC_IMAGE_URL + pageContent[1].card1Icon.url : "/img/doctor.svg"} alt="" className="img-fluid" />
                                            <h5> {pageContent[1].card1Title}</h5>
                                        </div>

                                    </div>
                                </a>

                                <a href={baseUrlOnlyLang + "/" + pageContent[1].card2Hyperlink}>
                                    <div className="key-master-book-appointment-btn mb-1">
                                        <div className="key-master-book-appointment-content">
                                            <img src={pageContent[1]?.card2Icon?.url ? process.env.NEXT_PUBLIC_IMAGE_URL + pageContent[1].card2Icon.url : "/img/calender.svg"} alt="" className="img-fluid" />
                                            <h5>{pageContent[1].card2Title}</h5>
                                        </div>
                                    </div>
                                </a>

                                <a href={baseUrlOnlyLang + "/" + pageContent[1].card3Hyperlink}>
                                    <div className="key-master-help-btn">
                                        <div className="key-master-book-appointment-content">
                                            <h5>{pageContent[1].card3Title}</h5>
                                        </div>

                                    </div>
                                </a>
                                <a href={`tel:${pageContent[1].card4Title}`}>
                                    <div className="key-master-call-btn">
                                        <div className="key-master-book-appointment-content text-center">
                                            <h5>{pageContent[1].card4Title}</h5>
                                            <h4><i className="fa-solid fa-phone"></i> {pageContent[1].card4Contact}</h4>
                                        </div>

                                    </div>
                                </a>
                            </div>

                        </div>
                    </div>
                </section>
            </div>

            <Footer />
        </>
    )
}

export default Disease;