import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { getStaticPageContent } from '../lib/getStaticPageContent';



const StentsPriceList = async () => {
    const data = await getStaticPageContent("stents-price-list");
    const pageContent = data?.data[0]?.pageContent;
    const pageMeta = data?.data[0]?.metaSection;


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
                                            <a href="/">Home</a>
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

export default StentsPriceList;
