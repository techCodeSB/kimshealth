import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { getStaticPageContent } from '@/app/lib/getStaticPageContent';
import getStaticText from '@/app/lib/getStaticTextServer';
import Breadcrumb from '@/components/Breadcrumb';
import getCurrentLangLoc from '@/app/lib/getCurrentLangLoc';


const BmwReport = async () => {
    const getLangLoc = await getCurrentLangLoc()
    const data = await getStaticPageContent("bmw-report");
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
                                    <Breadcrumb
                                        activeTitle={pageContent[0]?.title}
                                        middleTitle={''}
                                        middleURL={''}
                                    />
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="section">
                        <div className="container">
                            <div className="main-heading">
                                <h3>{pageContent[1]?.title}</h3>
                            </div>

                            <div className="table-responsive services-table mt-4">
                                {
                                    pageContent[1]?.details ? (
                                        <div
                                            className="table-responsive services-table mt-4"
                                            dangerouslySetInnerHTML={{ __html: pageContent[1]?.details || "" }}
                                        />
                                    ) : null
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

export default BmwReport