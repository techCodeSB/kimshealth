import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { getStaticPageContent } from '../lib/getStaticPageContent';
import getStaticText from '../lib/getStaticTextServer';
import { getBaseUrl } from '../lib/getBaseUrl';



const DonorInfo = async () => {
    const basePath = await getBaseUrl(true, true)
    const data = await getStaticPageContent("donor-information");
    const pageContent = data?.data[0]?.pageContent;
    const pageMeta = data?.data[0]?.metaSection;
    const staticText = await getStaticText();


    return (
        <>
            <Header />
            <div role="main" className="main">
                <div className="ethics-committee-main-page">
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
                                            <a href={basePath+"/"}>{staticText['Home']}</a>
                                        </li>
                                        <li className="active"> {pageContent[0]?.title}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="section">
                        <div className="container">
                            <div className="main-heading main-list sub-heading">
                                <h2>{pageContent[1]?.title}</h2>
                            </div>

                            <div
                                dangerouslySetInnerHTML={{ __html: pageContent[1]?.details || "" }}
                                className="table-responsive services-table mt-4">
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default DonorInfo;

