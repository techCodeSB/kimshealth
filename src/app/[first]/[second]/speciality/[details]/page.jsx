import { getBaseUrl } from '@/app/lib/getBaseUrl'
import blogData from '@/app/lib/getBlog'
import diseaseData from '@/app/lib/getDisease'
import doctorData from '@/app/lib/getDoctor'
import doctorTalkData from '@/app/lib/getDoctorTalk'
import procedureData from '@/app/lib/getProcedure'
import getSpecialityData from '@/app/lib/getSpeciality'
import getStaticText from '@/app/lib/getStaticTextServer'
import testimonialData from '@/app/lib/getTestimonial'
import BlogCarousel from '@/components/BlogCarousel'
import ExpertCarousel from '@/components/ExpertCarousel'
import Footer from '@/components/Footer'
import Form2 from '@/components/Forms/Form2'
import FromDoctor from '@/components/FromDoctor'
import Header from '@/components/Header'
import TestimonialSection from '@/components/TestimonialSection'
import WatchVideoButton from '@/components/WatchVideoButton'
import { marked } from 'marked'
import React from 'react'

const SpecialityDetails = async ({ params }) => {
    const staticText = await getStaticText()
    const baseUrl = await getBaseUrl(true, true);
    const baseUrlLangOnly = await getBaseUrl(true, false)
    const data = await getSpecialityData.getSingleSpeciality(params.details);
    const allProcedure = await procedureData.getAll(5)
    const allDiseas = await diseaseData.getAll(10);
    const allSubSpeciality = await getSpecialityData.getAllSubSpeciality(data.speciality?.id)

    const expertDataSet = {
        sectionTitle: data.expertSection?.title,
        buttonText: 'View All', buttonURL: `${baseUrl + "/doctor"}`,
        data: await doctorData.getBySpeciality(data.speciality.id),
        baseUrl: baseUrl
    };
    const testimonialDataSet = {
        sectionTitle: data.testimonialSection?.title,
        buttonText: 'View All', buttonURL: `${baseUrl + "/testimonial"}`,
        data: await testimonialData.getBySpeciality(data.speciality.id),
        baseUrl: baseUrl
    }
    const blogDataSet = {
        sectionTitle: data.blogSection?.title,
        buttonText: 'View All', buttonURL: `${baseUrl + "/blog"}`,
        data: await blogData.getBySpeciality(data.speciality.id),
        baseUrl: baseUrl
    }
    const docTalkDataSet = {
        sectionTitle: data.doctorTalk?.title,
        buttonText: 'View All', buttonURL: `${baseUrl + "/doctor-talk"}`,
        data: await doctorTalkData.getBySpciality(data.speciality.id),
        baseUrl: baseUrl
    }


    return (
        <>
            <Header />
            <div role="main" className="main">
                <div className="speciality-details-page">
                    <section className="section details-page-before py-0 d-lg-block d-none">
                        <div className="procedures-details-page-header inner-pages-header details-page-header">
                            <div className="container-fluid px-0">
                                <div className="row">
                                    <div className="col-md-6 details-proceduce-banner-left-col">
                                        <div className="hospital-banner-container">
                                            <div className="breadcrumb-wrapper">
                                                <div className="row">
                                                    <div className="col-12 px-lg-0 px-4">
                                                        <ul className="breadcrumb mb-0">
                                                            <li>
                                                                <a href={baseUrl + "/"}>{staticText['Home']}</a>
                                                            </li>
                                                            <li>
                                                                <a href={baseUrl + "/speciality"}> {staticText['Specialities']}</a>
                                                            </li>
                                                            <li className="active"> {data.title} </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="details-banner pt-lg-5 pt-4">
                                                <div className="details-heading">
                                                    <Form2 title={"Have a query?"} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-6 details-proceduce-banner-right-col">
                                        <img src={
                                            data.pageBanner[0].bannerImageDesktop ? process.env.NEXT_PUBLIC_IMAGE_URL + data.pageBanner[0].bannerImageDesktop.url : "/img/no-image.jpg"}
                                            className="img-fluid details-banner-image" alt={data.title} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="section details-page-before py-0 d-lg-none d-block">
                        <div className="procedures-details-page-header inner-pages-header details-page-header">
                            <div className="container-fluid px-0">
                                <div className="row">
                                    <div className="col-md-6 details-proceduce-banner-right-col">
                                        <div className="breadcrumb-wrapper">
                                            <div className="row">
                                                <div className="col-12 px-lg-0 px-4">
                                                    <ul className="breadcrumb mb-0">
                                                        <li>
                                                            <a href="/">{staticText["Home"]}</a>
                                                        </li>
                                                        <li>
                                                            <a href={baseUrl + "/speciality"}> {staticText['Specialities']}</a>
                                                        </li>
                                                        <li className="active"> {data.title} </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <img src={
                                            data.pageBanner[0].bannerImageDesktop?.url ? process.env.NEXT_PUBLIC_IMAGE_URL + data.pageBanner[0].bannerImageMobile?.url : "/img/no-image.jpg"}
                                            className="img-fluid details-banner-image" alt={data.title} />
                                    </div>
                                    <div className="col-md-6 details-proceduce-banner-left-col">
                                        <div className="hospital-banner-container">

                                            <div className="details-banner pt-lg-5 pt-4">
                                                <div className="details-heading">
                                                    <Form2 title={"Have a query?"} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="section">
                        <div className="container">
                            <div className="row justify-content-between">
                                <div className="col-md-7  mb-lg-0 mb-3 pe-lg-5">
                                    <div className="main-heading sub-heading">
                                        <h2>{data.overviewSection.title}</h2>
                                    </div>
                                    <div dangerouslySetInnerHTML={{ __html: marked(data.overviewSection?.details || "") || "" }}>
                                    </div>
                                </div>
                                <div className="col-md-5">
                                    <div className="details-right-col text-center">
                                        <img src={
                                            data.speciality?.featuredImage ? process.env.NEXT_PUBLIC_IMAGE_URL + data.speciality?.featuredImage.url : "/img/no-image.jpg"} alt="" className="img-fluid w-100" />
                                        <h5>{data.overviewSection?.caption}</h5>
                                        <p>{data.overviewSection?.shortDetails} </p>
                                        <div className="main-btn">
                                            <WatchVideoButton txt={"Watch Video"} id={data.overviewSection.videoId} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="line-divider"> </div>
                    <section className="section"
                        style={{ background: "linear-gradient(180deg,rgba(255, 255, 255, 1) 45%, rgba(248, 248, 248, 1) 74%)" }}>
                        <div className="container">
                            <div className="details-card-wrapper pb-5">
                                <div className="row position-relative" style={{ zIndex: "99" }}>

                                    {
                                        allSubSpeciality.map((subS, index) => {
                                            return <div className="col-md-4 mb-lg-0 mb-3" key={index}>
                                                <div className="details-card text-center">
                                                    <div className="card-content">
                                                        <h4>{subS.title}</h4>
                                                        <p>{subS.overviewSection?.details.slice(0, 70)}</p>

                                                        <div className="main-btn">
                                                            <a href={baseUrl + "/speciality/" + subS?.speciality?.slug}>
                                                                {staticText['Read More']}<span>
                                                                    <i className="fa-solid fa-arrow-right"></i>
                                                                </span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        })
                                    }

                                </div>
                            </div>

                            <div className="detsils-key-procedures">
                                <div className="main-heading text-center">
                                    <h2>Diseases and Key Procedures</h2>
                                </div>

                                <div className="details-key-row">
                                    <div className="row justify-content-between">
                                        <div className="col-md-5 col-12 mt-lg-0 mt-3">
                                            <form action="">
                                                <div className="input-group p-0 my-lg-5 my-1 position-relative justify-content-center">

                                                    <select className="form-select diseases-page-search">
                                                        <option >Search for conditions/diseases </option>
                                                        <option value="1">One</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                    </select>
                                                    <button className="input-group-text border-0 search-btn-page"><i
                                                        className="fa-solid fa-magnifying-glass"></i></button>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="col-md-5 col-12 mb-lg-0 mb-3">
                                            <form action="">
                                                <div className="input-group p-0 my-lg-5 my-1 position-relative justify-content-center">

                                                    <select className="form-select treatments-page-search">
                                                        <option >Search for procedures/treatments </option>
                                                        <option value="1">One</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                    </select>
                                                    <button className="input-group-text border-0 search-btn-page"><i
                                                        className="fa-solid fa-magnifying-glass"></i></button>
                                                </div>
                                            </form>
                                        </div>

                                        <div className="col-md-4 mb-lg-0 mb-3">
                                            {
                                                allDiseas.map((d, index) => {
                                                    return index < 5 ? <a href={baseUrlLangOnly + "/diseases/" + d.diseases[0].slug} key={index}>
                                                        <div className="details-key-box">
                                                            <div className="details-key-left-col">
                                                                <h5>{d.title}</h5>
                                                            </div>
                                                            <div className="details-key-right-col">
                                                                <span>C</span>
                                                            </div>
                                                        </div>
                                                    </a> : null
                                                })
                                            }

                                            <div className="over-all-btn text-start mt-3 ms-2 ps-1 d-lg-block d-none">
                                                <a href={baseUrlLangOnly + "/disease"}>View all Diseases <span><img src="/img/slider-right-arrow.svg"
                                                    className="img-fluid" alt="" /></span></a>
                                            </div>
                                        </div>


                                        <div className="col-md-4 mb-lg-0 mb-3">
                                            {
                                                allDiseas.map((d, index) => {
                                                    return index >= 5 && index < 10 ? <a href={baseUrlLangOnly + "/diseases/" + d.diseases[0].slug} key={index}>
                                                        <div className="details-key-box">
                                                            <div className="details-key-left-col">
                                                                <h5>{d.title}</h5>
                                                            </div>
                                                            <div className="details-key-right-col">
                                                                <span>C</span>
                                                            </div>
                                                        </div>
                                                    </a> : null
                                                })
                                            }
                                        </div>

                                        <div className="over-all-btn text-start mb-3 ms-2 ps-1 d-lg-none d-block">
                                            <a href={baseUrlLangOnly + "/disease"}>View all Diseases <span><img src="/img/slider-right-arrow.svg"
                                                className="img-fluid" alt="" /></span></a>
                                        </div>


                                        <div className="col-md-4 mb-lg-0 mb-3">
                                            {
                                                allProcedure.map((p, index) => {
                                                    return <a href={baseUrlLangOnly + "/" + p.procedure.slug} key={index}>
                                                        <div className="details-key-box">
                                                            <div className="details-key-left-col">
                                                                <h5>{p.title}</h5>
                                                            </div>
                                                            <div className="details-key-right-col">
                                                                <span>T</span>
                                                            </div>
                                                        </div>
                                                    </a>
                                                })
                                            }

                                            <div className="over-all-btn text-start mt-3 ms-2 ps-1">
                                                <a href={baseUrlLangOnly + "/procedure"}>View all Procedures<span><img src="/img/slider-right-arrow.svg"
                                                    className="img-fluid" alt="" /></span></a>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>


                    <div className="line-divider"> </div>
                    <ExpertCarousel dataSet={expertDataSet} />


                    <div className="line-divider"></div>
                    <TestimonialSection dataSet={testimonialDataSet} />


                    <div className="line-divider"></div>
                    <FromDoctor dataSet={docTalkDataSet} />


                    <div className="line-divider"></div>
                    <BlogCarousel dataSet={blogDataSet} />

                </div>
            </div>
            <Footer />
        </>
    )
}

export default SpecialityDetails;

