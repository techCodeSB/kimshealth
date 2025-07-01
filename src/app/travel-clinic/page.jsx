import ExpertCarousel from '@/components/ExpertCarousel'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'

const TravelClinic = () => {
    return (
        <>
            <Header />
            <div role="main" className="main">
                <div className="patients-and-visitors-main-page">
                    <div className="page-header">
                        <div className="container">
                            <h2>Travel Clinic</h2>
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
                                        <li className="active"> Travel Clinic</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="section">
                        <div className="container">
                            <div className="main-heading main-list sub-heading">
                                <h2>Travel Clinic</h2>
                                <p>“How do I remain healthy while travelling?” is a common query that we receive at the Infectious
                                    Diseases Department of KIMSHEALTH. While travelling to new and distant places is almost always a
                                    pleasant experience, one shouldbe aware of the dangers associated with travel.</p>
                                <p>The Travel Clinic at KIMSHEALTH answers all your questions and apprehensions regarding health
                                    issues related to travel. Your questions will be answered by our consultants in Infectious
                                    Diseases, who are experienced in Travel Medicine.</p>

                            </div>
                        </div>
                    </section>
                    <div className="line-divider"></div>
                    <section className="section">
                        <div className="container">
                            <div className="main-heading main-list sub-heading">
                                <h2>Who is the Travel Clinic for?</h2>
                                <p>Travel Clinic extends its service for anyone who is planning a trip abroad, who needs guidance on
                                    what precautions they should be taking while or before travelling. Travel Clinic also advises
                                    what vaccines are to be taken before travelling to different countries or on return to India.
                                </p>

                            </div>
                        </div>
                    </section>

                    <div className="line-divider"></div>
                    <section className="section">
                        <div className="container">
                            <div className="main-heading main-list sub-heading">
                                <h2>Services offered</h2>
                                <p>Online travel advice: Send us your queries regarding travel-related health issues. This can be
                                    about precautions needed to be taken to prevent infections, high altitude diseases, medicines
                                    required to be carried, vaccinations to be taken prior to travel, food and water hygiene,
                                    COVID-19 related travel issues or any other health issue related to travel.
                                </p>
                                <p>Telemedicine/Outpatient consultation: If required, you can avail our telemedicine services or outpatient travel clinic where you can consult our Infectious Diseases Consultant. Medicines or vaccines if required can be prescribed through telemedicine or outpatient consultation.</p>

                            </div>
                        </div>
                    </section>
                    <div className="line-divider"> </div>

                    <ExpertCarousel />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default TravelClinic