import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { getBaseUrl } from '@/app/lib/getBaseUrl';
import { getStaticPageContent } from '@/app/lib/getStaticPageContent';
import blogData from '@/app/lib/getBlog';
import getSpecialityData from '@/app/lib/getSpeciality';
import formatDate from '@/app/lib/formatDate';
import getStaticText from '@/app/lib/getStaticTextServer';
import BlogListing from '@/components/BlogListing';

const Blog = async ({searchParams }) => {
    const basePath = await getBaseUrl()
    const data = await getStaticPageContent("blog");
    const pageContent = data?.data[0]?.pageContent;
    const pageMeta = data?.data[0]?.metaSection;
    const allBlog = await blogData.allBlog();
    const staticText = await getStaticText();
    const slug = await searchParams.spciality

    console.log(slug)


    return (
        <>
            <Header />
            <div role="main" className="main">
                <div className="blog-master-main-page">
                    <div className="page-header">
                        <div className="container">
                            <h2>{pageContent[0].title}</h2>
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
                                        <li className="active"> {pageContent[0].title} </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>


                    <BlogListing basePath={basePath} slug={slug}/>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Blog;
