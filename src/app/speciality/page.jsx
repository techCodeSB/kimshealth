import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'
import { getBaseUrl } from '../lib/getBaseUrl';
import { getStaticPageContent } from '../lib/getStaticPageContent';
import getSpecialityData from '../lib/getSpeciality';
import procedureData from '../lib/getProcedure';
import TreamentSidebar from '@/components/TreamentSidebar';
import getStaticText from '../lib/getStaticTextServer';


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
                            <TreamentSidebar
                                baseUrlOnlyLang={baseUrlOnlyLang}
                                title={pageContent[3]?.title} 
                                procedures={procedures}
                                allSpeciality={allSpeciality}
                            />

                        </div>
                    </div>
                </section>

            </div>
            <Footer />
        </>
    )
}

export default Speciality