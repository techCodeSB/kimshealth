import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'
import { getBaseUrl } from '../lib/getBaseUrl';
import { getStaticPageContent } from '../lib/getStaticPageContent';
import getSpecialityData from '../lib/getSpeciality';


const Speciality = async () => {
    const baseURL = await getBaseUrl(true, true);
    const data = await getStaticPageContent("speciality");
    const pageContent = data?.data[0]?.pageContent;
    const pageMeta = data?.data[0]?.metaSection;

    const otherSpecility = await getSpecialityData.getSpeciality('Other Specialties');
    const coeSpecility = await getSpecialityData.getSpeciality('Center of Excellence');



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
                                        <a href="index.php">Home</a>
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
                                                        <a href={baseURL + "/speciality/" + cs.speciality.slug}>
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
                                                        <a href={baseURL + "/speciality/" + os.speciality.slug}>
                                                            {os.title}
                                                        </a>
                                                    </div>
                                                </div>
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 speciality-page-search-section">
                                <div className="main-heading">
                                    <h2 className="mb-2">{pageContent[3]?.title}</h2>
                                </div>
                                <form action="">
                                    <div className="input-group p-0 my-lg-3 my-3 position-relative justify-content-center">
                                        <select className="form-select speciality-page-search">
                                            <option >Select by Speciality</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                        <button className="input-group-text border-0 search-btn-page"><i className="fa-solid fa-angle-down"></i></button>
                                    </div>
                                </form>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="speciality-masterpage-card-content">
                                            <a href="#">Antibiotic Therapy</a>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="speciality-masterpage-card-content">
                                            <a href="#">Pain Management</a>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="speciality-masterpage-card-content">
                                            <a href="#">Antiviral Treatment</a>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="speciality-masterpage-card-content">
                                            <a href="#">Antifungal Therapy</a>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="speciality-masterpage-card-content">
                                            <a href="#">Corticosteroid Therapy</a>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="speciality-masterpage-card-content">
                                            <a href="#">Insulin Therapy</a>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="speciality-masterpage-card-content">
                                            <a href="#">Appendectomy</a>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="speciality-masterpage-card-content">
                                            <a href="#">Cholecystectomy</a>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="speciality-masterpage-card-content">
                                            <a href="#">Mastectomy</a>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="speciality-masterpage-card-content">
                                            <a href="#">Hysterectomy</a>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="speciality-masterpage-card-content">
                                            <a href="#">Tonsillectomy</a>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="speciality-masterpage-card-content">
                                            <a href="#">Thyroidectomy</a>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="speciality-masterpage-card-content">
                                            <a href="#">Joint Replacement Surgery</a>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="speciality-masterpage-card-content">
                                            <a href="#">Organ Transplantation</a>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="speciality-masterpage-card-content">
                                            <a href="#">Pacemaker Implantation</a>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="speciality-masterpage-card-content">
                                            <a href="#">Defibrillator Implantation</a>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="speciality-masterpage-card-content">
                                            <a href="#">Cardiac Catheterization</a>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="speciality-masterpage-card-content">
                                            <a href="#">Statin Therapy</a>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="speciality-masterpage-card-content">
                                            <a href="#">Anticoagulation Therapy</a>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="speciality-masterpage-card-content">
                                            <a href="#">Deep Brain Stimulation (DBS)</a>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="speciality-masterpage-card-content">
                                            <a href="#">Antiepileptic Drug Therapy</a>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="speciality-masterpage-card-content">
                                            <a href="#">Stroke Rehabilitation</a>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="speciality-masterpage-card-content">
                                            <a href="#">Lumbar Puncture</a>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="speciality-masterpage-card-content">
                                            <a href="#">Chemotherapy</a>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="speciality-masterpage-card-content">
                                            <a href="#">Radiation Therapy</a>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="speciality-masterpage-card-content">
                                            <a href="#">Immunotherapy</a>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="speciality-masterpage-card-content">
                                            <a href="#">Targeted Therapy</a>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="speciality-masterpage-card-content">
                                            <a href="#">Bone Marrow Transplant</a>
                                        </div>
                                    </div>

                                    <div className="col-md-12">
                                        <div className="speciality-masterpage-card-content">
                                            <a href="#">Cryoablation</a>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="speciality-masterpage-card-content">
                                            <a href="#">Arthroscopy</a>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="speciality-masterpage-card-content">
                                            <a href="#">Endoscopy</a>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="speciality-masterpage-card-content">
                                            <a href="#">Colonoscopy</a>
                                        </div>
                                    </div>
                                    {/* <!-- <div className="col-md-12">
                                        <div className="speciality-masterpage-card-content">
                                            <a href="#">Hemorrhoidectomy</a>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="speciality-masterpage-card-content">
                                            <a href="#">Parathyroidectomy</a>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="speciality-masterpage-card-content">
                                            <a href="#">Vasectomy</a>
                                        </div>
                                    </div> --> */}
                                </div>
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