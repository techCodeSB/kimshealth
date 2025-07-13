import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { getStaticPageContent } from '@/app/lib/getStaticPageContent';
import Breadcrumb from '@/components/Breadcrumb';
import getStaticText from '@/app/lib/getStaticTextServer';
import getCurrentLangLoc from '@/app/lib/getCurrentLangLoc';

const VisaMedical = async () => {
    const getLangLoc = await getCurrentLangLoc()
    const data = await getStaticPageContent("visa-medical");
    const pageContent = data?.data[0]?.pageContent;
    const pageMeta = data?.data[0]?.metaSection;
     const staticText = await getStaticText();

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
                                    <Breadcrumb activeTitle={pageContent[0]?.title} middleTitle={""} middleURL={""} />
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="section">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-3 mb-4">
                                    <div className="sticky-left">
                                        <div className="find-doctor-left-col">
                                            <div className="row">
                                                <div className="tab-group d-md-block d-none text-center mb-3">
                                                    {/* <button type="button" className="btn-tab treat-tab active" onClick="showBox(this,'omega')"> Australia</button> */}
                                                    <button type="button" className="btn-tab treat-tab active"> {pageContent[1]?.title}</button>

                                                    <button type="button" className="btn-tab treat-tab ">{pageContent[2]?.title}</button>

                                                    <button type="button" className="btn-tab treat-tab ">{pageContent[3]?.title}</button>
                                                    <button type="button" className="btn-tab treat-tab ">{pageContent[4]?.title}</button>
                                                </div>
                                                <div className="visa-select d-md-none d-block">
                                                    <select className="form-select" aria-label="Default select example">
                                                        <option value={""}>Australia</option>
                                                        <option value="1">New Zeeland</option>
                                                        <option value="2">Canada</option>
                                                        <option value="3">United Kingdom</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="find-doc-box d-md-block d-none">
                                                <h3>{pageContent[5]?.title}</h3>
                                                <div className="rounded-field-form mb-3">
                                                    <div className="row">
                                                        <div className="col-12 mb-3">
                                                            <label className="form-label">Name <span>*</span></label>
                                                            <input type="text" className="form-control" placeholder="Enter your name" name="name" />
                                                        </div>

                                                        <div className="col-12 mb-3">
                                                            <label className="form-label">Mobile Number <span>*</span></label>
                                                            <input type="text" className="form-control" placeholder="Enter Mobile No." name="name" />
                                                        </div>

                                                        <div className="col-12 mb-3">
                                                            <button className="form-btn">Submit</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-9 expert-section">
                                    <div className="treat-box" id="omega" style={{ display: "block" }}>
                                        <div
                                            dangerouslySetInnerHTML={{ __html: pageContent[1]?.details }}
                                            className="main-heading sub-heading main-list">
                                        </div>
                                    </div>

                                    <div className="treat-box" id="omega1" style={{ display: "none" }}>
                                        <div
                                            dangerouslySetInnerHTML={{ __html: pageContent[2]?.details }}
                                            className="main-heading sub-heading main-list">
                                        </div>
                                    </div>

                                    <div className="treat-box" id="omega2" style={{ display: "none" }}>
                                        <div
                                            dangerouslySetInnerHTML={{ __html: pageContent[3]?.details }}
                                            className="main-heading sub-heading main-list">
                                        </div>
                                    </div>

                                    <div className="treat-box" id="omega3" style={{ display: "none" }}>
                                        <div
                                            dangerouslySetInnerHTML={{ __html: pageContent[4]?.details }}
                                            className="main-heading sub-heading main-list">
                                        </div>
                                    </div>
                                </div>

                                <div className="find-doctor-left-col d-md-none d-block">
                                    <div className="find-doc-box">
                                        <h3>{pageContent[5]?.title}</h3>
                                        <div className="rounded-field-form mb-3">
                                            <div className="row">
                                                <div className="col-12 mb-3">
                                                    <label className="form-label">Name <span>*</span></label>
                                                    <input type="text" className="form-control" placeholder="Enter your name" name="name" />
                                                </div>

                                                <div className="col-12 mb-3">
                                                    <label className="form-label">Mobile Number <span>*</span></label>
                                                    <input type="text" className="form-control" placeholder="Enter Mobile No." name="name" />
                                                </div>

                                                <div className="col-12 mb-3">
                                                    <button className="form-btn">Submit</button>
                                                </div>
                                            </div>
                                        </div>
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

export default VisaMedical;
