import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { getStaticPageContent } from '@/app/lib/getStaticPageContent';
import Breadcrumb from '@/components/Breadcrumb';
import getStaticText from '@/app/lib/getStaticTextServer';
import getCurrentLangLoc from '@/app/lib/getCurrentLangLoc';

const ClinicalSkills = async () => {
    const getLangLoc = await getCurrentLangLoc()
    const staticText = await getStaticText();
    const field = "populate[0]=pageContent&populate[1]=pageContent.bannerItem&populate[2]=pageContent.bannerItem.bannerImageDesktop&populate[3]=pageContent.bannerItem.bannerImageMobile&populate[4]=metaSection&populate[5]=pageContent.journal&populate[6]=pageContent.journal.thumbnailImage&populate[7]=pageContent.journal.file";
    const data = await getStaticPageContent("kimshealth-clinical-skills-and-simulation-centre", field);
    const pageContent = data?.data[0]?.pageContent;
    const pageMeta = data?.data[0]?.metaSection;


    return (
        <>
            <Header />
            <div role="main" className="main">
                <div className="emergency-medicine-main-page">
                    {/* Desktop section */}
                    <section className="section details-page-before py-0 d-lg-block d-none">
                        <div className="procedures-details-page-header inner-pages-header">
                            <div className="container-fluid px-0">
                                <div className="row">
                                    <div className="col-md-6 details-proceduce-banner-left-col">
                                        <div className="hospital-banner-container">
                                            <div className="breadcrumb-wrapper py-2 ps-2 ms-1">
                                                <div className="row">
                                                    <div className="col-12 px-0">
                                                        <Breadcrumb
                                                            activeTitle={pageContent[0]?.title}
                                                            middleTitle={''}
                                                            middleURL={""}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="details-banner">
                                                <div className="details-heading">
                                                    <h3>{pageContent[0]?.title}</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-6 details-proceduce-banner-right-col mt-lg-0 mt-4">
                                        <img src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${pageContent[1]?.bannerItem[0].bannerImageDesktop.url}`} className="img-fluid details-banner-image" alt={pageContent[1]?.bannerItem[0].title} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* mobile section */}
                    <section className="section details-page-before py-0 d-lg-none d-block">
                        <div className="procedures-details-page-header inner-pages-header">
                            <div className="container-fluid px-0">
                                <div className="row">
                                    <div className="col-md-6 details-proceduce-banner-left-col mt-lg-auto">
                                        <div className="hospital-banner-container">
                                            <div className="breadcrumb-wrapper py-2 ps-2 ms-1">
                                                <div className="row">
                                                    <div className="col-12">
                                                        <ul className="breadcrumb mb-0">
                                                            <li>
                                                                <a href="/">Home</a>
                                                            </li>
                                                            <li className="active"> {pageContent[0]?.title} </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="details-proceduce-banner-right-col mt-lg-0 mt-4">
                                                <img src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${pageContent[1]?.bannerItem[0].bannerImageDesktop.url}`}
                                                    className="img-fluid details-banner-image" alt={pageContent[1]?.bannerItem[0].title} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 mt-lg-0 mt-4">
                                    <div className="details-banner">
                                        <div className="details-heading">
                                            <h3>{pageContent[0]?.title}</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="section doctor-line-divider">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-8 ps-lg-0 ">
                                    <section className="section pt-0">
                                        <div className="container">
                                            <div
                                                dangerouslySetInnerHTML={{ __html: pageContent[2]?.details }}
                                                className="main-heading sub-heading">
                                            </div>
                                        </div>
                                    </section>
                                    <div className="line-divider"></div>
                                    <section className="section">
                                        <div className="container">
                                            <div className="main-heading sub-heading main-list">
                                                <h2>{pageContent[4]?.title}</h2>
                                                <div dangerouslySetInnerHTML={{ __html: pageContent[4]?.details }}>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                    <div className="line-divider"></div>
                                    <section className="section">
                                        <div className="container">
                                            <div className="main-heading sub-heading main-list">
                                                <h2>{pageContent[5]?.title}</h2>
                                                <div dangerouslySetInnerHTML={{ __html: pageContent[5]?.details }}>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                    <div className="line-divider"></div>
                                    <section className="section">
                                        <div className="container">
                                            <div className="main-heading sub-heading main-list">
                                                <h2>{pageContent[6]?.title}</h2>
                                                <div dangerouslySetInnerHTML={{ __html: pageContent[6]?.details }}>
                                                </div>
                                            </div>
                                        </div>
                                    </section>


                                </div>

                                <div className="col-md-4 association-left-col">
                                    <div className="association-form-card mb-5">
                                        <h3>Request a Call Back</h3>
                                        <form action="">
                                            <div className="row">
                                                <div className="col-md-12 mb-3">
                                                    <input type="text" className="form-control" placeholder="Name" name="name" />
                                                </div>
                                                <div className="col-md-12 mb-3">
                                                    <input type="text" className="form-control" placeholder="Enter 10 Digit Mobile Number" name="name" />
                                                </div>
                                                <div className="col-md-12 mb-3">
                                                    <textarea className="form-control" placeholder="Message" id="floatingTextarea"></textarea>
                                                </div>
                                                <div className="col-md-12 mb-3 text-center">
                                                    <button className="btn mb-lg-0 mb-2 hospital-primarybtn px-5 py-2">Submit</button>
                                                </div>
                                            </div>
                                        </form>


                                    </div>
                                    <h4>{pageContent[3]?.sectionTitle}</h4>
                                    <p><strong>{pageContent[3]?.contactPerson}</strong></p>
                                    <p> {pageContent[3]?.designation}</p>
                                    <a href={pageContent[3]?.phone}><i className="fa-solid fa-phone"></i>
                                        {pageContent[3]?.phone}</a>
                                    {
                                        pageContent[3]?.email ?
                                            <a href={`mailto:${pageContent[3]?.email}`}><i className="fa-solid fa-envelope"></i> {pageContent[3]?.email}</a> : null
                                    }
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="line-divider"></div>
                    <section className="section journal-section">
                        <div className="container">
                            <div className="main-heading">
                                <h2>{pageContent[7]?.title}</h2>
                            </div>
                            <div className="owl-carousel owl-theme journal-slider">
                                {
                                    pageContent[7]?.journal.map((j, index) => {
                                        return <div className="expert-card" data-aos="fade-right" key={index}>
                                            <a download href={`${process.env.NEXT_PUBLIC_IMAGE_URL}${j.file.url}`} >
                                                <div className="card border-0">
                                                    <div className="card-top">
                                                        <img src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${j.thumbnailImage.url}`} className="img-fluid w-100" alt={j.title} />
                                                    </div>
                                                    <div className="card-content">
                                                        <h5>{j.title}</h5>
                                                    </div>
                                                </div>
                                            </a>
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

export default ClinicalSkills