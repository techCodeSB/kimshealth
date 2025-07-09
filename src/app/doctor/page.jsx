import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'
import doctorData from '@/app/lib/getDoctor'
import { getStaticPageContent } from '@/app/lib/getStaticPageContent'
import { getBaseUrl } from '@/app/lib/getBaseUrl'
import getStaticText from '@/app/lib/getStaticTextServer';
import DoctorListing from '@/components/DoctorListing'
import langLoc from '@/helper/getLangLoc'
import getSpecialityData from '@/app/lib/getSpeciality'



const Doctor = async () => {
    const baseURL = await getBaseUrl(true, true);
    const data = await getStaticPageContent("doctor");
    const pageContent = data?.data[0]?.pageContent;
    const pageMeta = data?.data[0]?.metaSection;
    const docData = await doctorData.getDoctorAll();
    const staticText = await getStaticText();

    const allLocation = await langLoc.getLocations()
    const allSpeciality = await getSpecialityData.getAllSpeciality()
    const allDoctor = await doctorData.getAllDoctor()

    console.log(allLocation)



    return (
        <>
            <Header />
            <div role="main" className="main">
                <div className="find-doctor-main-page">
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

                    <DoctorListing
                        allDoctor={allDoctor}
                        allLocation={allLocation}
                        allSpeciality={allSpeciality}
                        baseURL={baseURL}
                    />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Doctor