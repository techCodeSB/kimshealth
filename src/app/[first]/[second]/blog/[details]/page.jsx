import { getBaseUrl } from '@/app/lib/getBaseUrl';
import blogData from '@/app/lib/getBlog';
import doctorData from '@/app/lib/getDoctor';
import getStaticText from '@/app/lib/getStaticTextServer';
import Footer from '@/components/Footer';
import Form1 from '@/components/Forms/Form1';
import Header from '@/components/Header';
import { marked } from 'marked';


const BlogDetails = async ({ params }) => {
    const basePath = await getBaseUrl();
    const data = await blogData.getSingleBlog(params.details);
    const docData = await doctorData.getSingleDoctor(data.doctor[0].slug);
    const staticText = await getStaticText();


    return (
        <>
            <Header />
            <div role="main" className="main">
                <div className="blog-details-main-page">
                    <section className="section details-page-before py-0 d-lg-block d-none">
                        <div className="procedures-details-page-header inner-pages-header">
                            <div className="container-fluid px-0">
                                <div className="row">
                                    <div className="col-md-6 details-proceduce-banner-left-col mt-lg-auto">
                                        <div className="hospital-banner-container">
                                            <div className="breadcrumb-wrapper py-2 ps-2 ms-1">
                                                <div className="row">
                                                    <div className="col-12 px-0">
                                                        <ul className="breadcrumb mb-0">
                                                            <li>
                                                                <a href="/">{staticText['Home']}</a>
                                                            </li>
                                                            <li>
                                                                <a href="hospital-master.php">{staticText['Blogs']}</a>
                                                            </li>
                                                            <li className="active">{data.title}</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="details-banner">
                                                <div className="details-heading">
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <img src="/img/Dr Ajith R.png" alt="" className="img-fluid" />
                                                        </div>
                                                        <div className="col-md-6 my-auto">
                                                            <h3>{docData.name}</h3>
                                                            <p>
                                                                {docData.hospitals.map((data, _) => {
                                                                    return data.title + (docData.hospitals.length - 1 !== _ ? "," : "");
                                                                })}
                                                            </p>
                                                            <h4>
                                                                {docData.specialities.map((data, _) => {
                                                                    return data.title + (docData.specialities.length - 1 !== _ ? "," : "");
                                                                })}
                                                            </h4>
                                                            <div className="mt-4">
                                                                <a href={basePath + "/book-an-appointment"} className="hospital-primarybtn ">Book An Appointment</a>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-6 details-proceduce-banner-right-col mt-lg-0 mt-4">
                                        <img src={process.env.NEXT_PUBLIC_IMAGE_URL + data.featuredImage.url} className="img-fluid details-banner-image" alt="" />
                                    </div>

                                    {/* <!-- <div className="col-md-6">
                                        <img src="/img/details-banner.png" alt="" className="img-fluid w-100">
                                    </div> --> */}
                                </div>
                            </div>
                        </div>
                    </section>
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
                                                                <a href="/">{staticText['Home']}</a>
                                                            </li>
                                                            <li>
                                                                <a href="hospital-master.php">{staticText['Blogs']}</a>
                                                            </li>
                                                            <li className="active">{data.title}</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="details-proceduce-banner-right-col mt-lg-0 mt-4">
                                                <img src={process.env.NEXT_PUBLIC_IMAGE_URL + data.featuredImage.url} className="img-fluid details-banner-image"
                                                    alt={data.title} />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6 mt-lg-0 mt-4">
                                    <div className="details-banner">
                                        <div className="details-heading">
                                            <div className="row">
                                                <div className="col-5">
                                                    <img src={process.env.NEXT_PUBLIC_IMAGE_URL + data.featuredImage.url} alt="" className="img-fluid" />
                                                </div>
                                                <div className="col-6 my-auto pe-3">
                                                    <h3>{data.title}</h3>
                                                    <p>{docData?.hospitals.map((data, _) => {
                                                        return data.title + (docData.hospitals.length - 1 !== _ ? "," : "");
                                                    })}</p>
                                                    <h4>
                                                        {docData?.specialities.map((data, _) => {
                                                            return data.title + (docData.specialities.length - 1 !== _ ? "," : "");
                                                        })}
                                                    </h4>
                                                    <div className="mt-4">
                                                        <a href={basePath + "/book-an-appointment"} className="hospital-primarybtn ">{staticText['Book An Appointment']}</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <!-- <div className="col-md-6">
                                        <img src="/img/details-banner.png" alt="" className="img-fluid w-100">
                                    </div> --> */}
                                </div>
                            </div>
                        </div>
                    </section>


                    <section className="section blog-details-section">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-8 mb-3">
                                    <div className="main-heading sub-heading">
                                        <h2 className="mb-1">{data.title}</h2>
                                        <div dangerouslySetInnerHTML={{__html: marked(data.details)}}>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <div className="association-form-card">
                                        <Form1 title={"GET A CALLBACK FROM OUR HEALTH ADVISOR"}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="line-divider"> </div>

                    <section className="section blog-section d-lg-block d-none">
                        <div className="container">
                            <div className="row justify-content-between" data-aos="fade-down">
                                <div className="col-md-3 col-8">
                                    <div className="main-heading">
                                        <h2>Related Blogs </h2>
                                    </div>
                                </div>
                                <div className="col-md-2 col-4">
                                    <div className="over-all-btn text-end">
                                        <a href="#">{staticText['View All']} <span><img src="/img/slider-right-arrow.svg" className="img-fluid"
                                            alt="" /></span></a>
                                    </div>
                                </div>
                            </div>

                            <div className="owl-carousel owl-theme blog">
                                <div className="card border-0" data-aos="slide-down" data-aos-duration="1000">
                                    <div className="card-top">
                                        <a href="#">
                                            <img src="/img/blog1.jpg" className="img-fluid w-100" alt="" />
                                        </a>
                                    </div>
                                    <div className="card-content">
                                        <a href="#">
                                            <h4>Stapled Hemorrhoidectomy </h4>
                                        </a>
                                        <p>Many individuals, at some point in thier lives, confront the Many individuals,</p>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div>
                                                <strong> By: KIMSHEALTH</strong>
                                            </div>
                                            <div className="main-btn">
                                                <a href="#">{staticText['Read More']} <span><i className="fa-solid fa-arrow-right"></i></span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card border-0" data-aos="slide-down" data-aos-duration="1400">
                                    <div className="card-top">
                                        <a href="#">
                                            <img src="/img/blog2.jpg" className="img-fluid w-100" alt="" />
                                        </a>
                                    </div>
                                    <div className="card-content">
                                        <a href="#">
                                            <h4>In-Vitro Fertilization (IVF)</h4>
                                        </a>
                                        <p>The journey towards parenthood isn't always straightforward towards parenthood </p>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div>
                                                <strong> By: KIMSHEALTH</strong>
                                            </div>
                                            <div className="main-btn">
                                                <a href="#">{staticText['Read More']} <span><i className="fa-solid fa-arrow-right"></i></span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card border-0" data-aos="slide-down" data-aos-duration="1800">
                                    <div className="card-top">
                                        <a href="#">
                                            <img src="/img/blog3.jpg" className="img-fluid w-100" alt="" />
                                        </a>
                                    </div>
                                    <div className="card-content">
                                        <a href="#">
                                            <h4>High Cholesterol</h4>
                                        </a>
                                        <p>Cholesterol is a type of fat, it is a
                                            double-edged sword Cholesterol is a type of fat</p>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div>
                                                <strong> By: KIMSHEALTH</strong>
                                            </div>
                                            <div className="main-btn">
                                                <a href="#">{staticText['Read More']} <span><i className="fa-solid fa-arrow-right"></i></span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card border-0" data-aos="slide-down" data-aos-duration="2200">
                                    <div className="card-top">
                                        <a href="#">
                                            <img src="/img/blog4.jpg" className="img-fluid w-100" alt="" />
                                        </a>
                                    </div>
                                    <div className="card-content">
                                        <a href="#">
                                            <h4>Skincare Routines</h4>
                                        </a>
                                        <p>Having oily skin can be detrimental since that makes you prone to can be detrimental</p>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div>
                                                <strong> By: KIMSHEALTH</strong>
                                            </div>
                                            <div className="main-btn">
                                                <a href="#">{staticText['Read More']} <span><i className="fa-solid fa-arrow-right"></i></span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card border-0" data-aos="slide-down" data-aos-duration="2400">
                                    <div className="card-top">
                                        <a href="#">
                                            <img src="/img/blog2.jpg" className="img-fluid w-100" alt="" />
                                        </a>
                                    </div>
                                    <div className="card-content">
                                        <a href="#">
                                            <h4>In-Vitro Fertilization (IVF)</h4>
                                        </a>
                                        <p>The journey towards parenthood isn't always straightforward towards parenthood </p>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div>
                                                <strong> By: KIMSHEALTH</strong>
                                            </div>
                                            <div className="main-btn">
                                                <a href="#">{staticText['Read More']} <span><i className="fa-solid fa-arrow-right"></i></span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card border-0" data-aos="slide-down" data-aos-duration="2600">
                                    <div className="card-top">
                                        <a href="#">
                                            <img src="/img/blog3.jpg" className="img-fluid w-100" alt="" />
                                        </a>
                                    </div>
                                    <div className="card-content">
                                        <a href="#">
                                            <h4>High Cholesterol</h4>
                                        </a>
                                        <p>Cholesterol is a type of fat, it is a
                                            double-edged sword Cholesterol is a type of fat</p>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div>
                                                <strong> By: KIMSHEALTH</strong>
                                            </div>
                                            <div className="main-btn">
                                                <a href="#">{staticText['Read More']} <span><i className="fa-solid fa-arrow-right"></i></span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="section blog-section d-lg-none d-block">
                        <div className="container">
                            <div className="row justify-content-between" data-aos="fade-up">
                                <div className="col-md-3 col-8">
                                    <div className="main-heading">
                                        <h2>Related Blogs </h2>
                                    </div>
                                </div>
                                <div className="col-md-2 col-4">
                                    <div className="over-all-btn text-end">
                                        <a href="#">{staticText['View All']} <span><img src="/img/slider-right-arrow.svg" className="img-fluid"
                                            alt="" /></span></a>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-12">
                                    <div className="blog-card" data-aos="fade-up">
                                        <div className="row">
                                            <div className="col-6 my-auto">
                                                <div className="testi-rightbox">
                                                    <a href="#">
                                                        <h3>In-Vitro Fertilization (IVF)</h3>
                                                    </a>
                                                    <p>Many individuals, at some point in thier lives, confront the Many
                                                        individuals,
                                                    </p>
                                                    <div className="d-block align-items-center justify-content-between">
                                                        <div>
                                                            <strong> By: Dr Aman Agarwal</strong>
                                                        </div>
                                                        <div className="main-btn mt-lg-0 mt-1">
                                                            <a href="#">{staticText['Read More']} <span><i
                                                                className="fa-solid fa-arrow-right"></i></span></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <a href="#">
                                                    <img src="/img/blog2.jpg" className="img-fluid w-100" alt="" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="blog-card" data-aos="fade-up">
                                        <div className="row">
                                            <div className="col-6 my-auto">
                                                <div className="testi-rightbox">
                                                    <a href="#">
                                                        <h3>High Cholesterol</h3>
                                                    </a>
                                                    <p>Cholesterol is a type of fat, it is a
                                                        double-edged sword Cholesterol is a type of fat </p>

                                                    <div className="d-block align-items-center justify-content-between">
                                                        <div>
                                                            <strong> By: Dr Aman Agarwal </strong>
                                                        </div>
                                                        <div className="main-btn mt-lg-0 mt-1">
                                                            <a href="#">{staticText['Read More']} <span><i
                                                                className="fa-solid fa-arrow-right"></i></span></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <a href="#">
                                                    <img src="/img/blog3.jpg" className="img-fluid w-100" alt="" />
                                                </a>
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

export default BlogDetails