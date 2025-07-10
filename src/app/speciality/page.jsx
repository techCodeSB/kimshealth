import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'
import { getBaseUrl } from '@/app/lib/getBaseUrl';
import { getStaticPageContent } from '@/app/lib/getStaticPageContent';
import getSpecialityData from '@/app/lib/getSpeciality';
import procedureData from '@/app/lib/getProcedure';
import TreamentSidebar from '@/components/TreamentSidebar';
import getStaticText from '@/app/lib/getStaticTextServer';


const Speciality = async () => {
    const baseURL = await getBaseUrl(true, true);
    const baseUrlOnlyLang = await getBaseUrl(true, false);
    const data = await getStaticPageContent("speciality");
    const pageContent = data?.data[0]?.pageContent;
    const pageMeta = data?.data[0]?.metaSection;
    const staticText = await getStaticText()

    const otherSpecility = await getSpecialityData.getSpeciality('Other Specialties');
    const coeSpecility = await getSpecialityData.getSpeciality('Center of Excellence');
    const procedures = await procedureData.getAll(25);
    const allSpeciality = await getSpecialityData.getSpecialityForSearch();


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
                                        <a href={baseURL + "/"}>{staticText['Home']}</a>
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
                            <div className="col-md-8 mb-3">
                                <div className="speciality-masterpage-card">
                                    <div className="main-heading">
                                        <h2> {pageContent[1]?.title}</h2>
                                    </div>
                                    <div className="row">
                                        {
                                            coeSpecility.map((cs, index) => {
                                                return <div className="col-md-6" key={index}>
                                                    <div className="speciality-masterpage-card-content">
                                                        <a href={baseURL + "/speciality/" + cs.speciality?.slug}>
                                                            {cs.title}
                                                        </a>
                                                    </div>
                                                </div>
                                            })
                                        }
                                    </div>
                                </div>
                                <div className="speciality-masterpage-card mt-3">
                                    <div className="main-heading">
                                        <h2>{pageContent[2]?.title}</h2>
                                    </div>
                                    <div className='row'>
                                        {
                                            otherSpecility.map((os, index) => {
                                                return <div className="col-md-6" key={index}>
                                                    <div className="speciality-masterpage-card-content">
                                                        <a href={baseURL + "/speciality/" + os.speciality?.slug}>
                                                            {os.title}
                                                        </a>
                                                    </div>
                                                </div>
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                            {/* <TreamentSidebar
                                baseUrlOnlyLang={baseUrlOnlyLang}
                                title={pageContent[3]?.title} 
                                procedures={procedures}
                                allSpeciality={allSpeciality}
                            /> */}
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

export default Speciality