import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'
import { getStaticPageContent } from '../lib/getStaticPageContent';

const AllCompaniesPanel = async () => {
    const field = "populate[0]=pageContent&populate[1]=pageContent.logoSlider&populate[2]=pageContent.logoSlider.image&populate[3]=metaSection";
    const data = await getStaticPageContent("all-companies-on-panel", field);
    const pageContent = data?.data[0]?.pageContent;
    const pageMeta = data?.data[0]?.metaSection;


    console.log(pageContent);

    return (
        <>
            <Header />
            <div role="main" className="main">
                <div className="patients-and-visitors-main-page">
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
                                        <li className="active"> {pageContent[0]?.title}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="section">
                        <div className="container">
                            <div className="main-heading">
                                <h2>{pageContent[1]?.title}</h2>
                            </div>

                            <div className="row">
                                {
                                    pageContent[2]?.logoSlider.map((img, index) => {
                                        return <div className="col-md-3 col-6 mb-3" key={index}>
                                            <div className="insurance-card">
                                                <div className="insurance-img">
                                                    <img src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${img.image.url}`} alt={img.title}className="img-fluid" />
                                                </div>
                                                <p>{img.title}</p>
                                            </div>
                                        </div>
                                    })
                                }


                            </div>
                        </div>
                    </section>
                    <div className="line-divider"></div>

                    <section className="section">
                        <div className="container">
                            <div className="main-heading">
                                <h2>{pageContent[3]?.title}</h2>
                            </div>

                            <div className="row">
                                {
                                    pageContent[4]?.logoSlider.map((img, index) => {
                                        return <div className="col-md-3 col-6 mb-3" key={index}>
                                            <div className="insurance-card">
                                                <div className="insurance-img">
                                                    <img src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${img.image.url}`} alt={img.title}className="img-fluid" />
                                                </div>
                                                <p>{img.title}</p>
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

export default AllCompaniesPanel;
