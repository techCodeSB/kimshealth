import { getBaseUrl } from '@/app/lib/getBaseUrl';
import blogData from '@/app/lib/getBlog';
import doctorData from '@/app/lib/getDoctor';
import doctorTalkData from '@/app/lib/getDoctorTalk';
import hospitalData from '@/app/lib/getHospital';
import getSpecialityData from '@/app/lib/getSpeciality';
import getStaticText from '@/app/lib/getStaticTextServer';
import testimonialData from '@/app/lib/getTestimonial';
import BlogCarousel from '@/components/BlogCarousel';
import ExcellenceCarousel from '@/components/ExcellenceCarousel';
import ExpertCarousel from '@/components/ExpertCarousel';
import Footer from '@/components/Footer';
import FromDoctor from '@/components/FromDoctor';
import Header from '@/components/Header';
import TestimonialSection from '@/components/TestimonialSection';
import WatchVideoButton from '@/components/WatchVideoButton';
import { marked } from 'marked';


const HospitalDetails = async ({ params }) => {
    const basePath = await getBaseUrl(true, true);
    const hptData = await hospitalData.getSingleHospital(params.details);
    const hospitals = await hospitalData.getAll(10);

    const specialityDataSet = {
        sectionTitle: hptData.specialitySection.title,
        buttonText: 'View All', buttonURL: '#',
        data: await getSpecialityData.getAll(),
        baseUrl: basePath
    };

    const expertDataSet = {
        sectionTitle: hptData.expertSection.title,
        buttonText: 'View All', buttonURL: '#',
        data: await doctorData.getDoctorAll(10),
        baseUrl: basePath
    };

    const testimonialDataSet = {
        sectionTitle: hptData.testimonialSection.title,
        buttonText: 'View All', buttonURL: '#',
        data: await testimonialData.getAll(10),
        baseUrl: basePath
    }

    const blogDataSet = {
        sectionTitle: hptData.blog.title,
        buttonText: 'View All', buttonURL: '#',
        data: await blogData.allBlog(10),
        baseUrl: basePath
    }

    const docTalkDataSet = {
        sectionTitle: hptData.doctorTalk.title,
        buttonText: 'View All', buttonURL: '#',
        data: await doctorTalkData.allData(10),
        baseUrl: basePath
    }

    return (
        <>
            <Header />
            <div role="main" className="main">
                {/* <!-- <section className="section details-page-before py-0">
        <div className="procedures-details-page-header">
            <div className="container-fluid px-0">
                <div className="row">
                    <div className="col-md-6 details-proceduce-banner-left-col">

                        <div className="hospital-banner-container">
                            <div className="breadcrumb-wrapper py-2 ps-2 ms-1">
                                <div className="row">
                                    <div className="col-12 px-0">
                                        <ul className="breadcrumb mb-0">
                                            <li>
                                                <a href="index.php">Home</a>
                                            </li>
                                            <li>
                                                <a href="hospital-master.php">Our Hospital</a>
                                            </li>
                                            <li className="active"> KIMSHEALTH Trivandrum </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="details-banner">
                                <div className="details-heading">
                                    <div className="hospital-content">
                                        <ul>
                                            <li className="hospital-icon-custom"> KIMSHEALTH Trivandrum </li>
                                            <li className="location-icon-custom"> KIMSHEALTH, P.B.No.1, Anayara P.O, Trivandrum – 695029, Kerala, India</li>
                                            <li className="telephone-icon-custom"><a href="tel:04714711000"> Appointment Number- 0471 471 1000</a></li>
                                            <li className="send-custom-icon"><a href="#"> Get Direction</a></li>
                                        </ul>
                                        <div className="d-flex align-items-center">
                                            <img src="/img/google.png" alt="Google Logo" className="me-2" />
                                            <div className="star-rating" data-rating="4.7">
                                                <i className="fa fa-solid fa-star ms-1" style={{color: "#ffc107"}}></i>
                                                <i className="fa fa-solid fa-star ms-1" style={{color: "#ffc107"}}></i>
                                                <i className="fa fa-solid fa-star ms-1" style={{color: "#ffc107"}}></i>
                                                <i className="fa fa-solid fa-star ms-1" style={{ color: "#ffc107" }}></i>
                                                <i className="fa fa-solid fa-star-half ms-1" style={{ color: "#ffc107" }}></i>
                                                4.5
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 details-proceduce-banner-right-col">
                        <div className="owl-carousel owl-theme hospital-details-slider">
                            <div className="item">
                                <img src="/img/hospital-details-img1.jpg" alt="" className="img-fluid w-100" />
                            </div>
                            <div className="item">
                                <img src="/img/hospital-details-img1.jpg" alt="" className="img-fluid w-100" />
                            </div>

                            <div className="item">
                                <img src="/img/hospital-details-img1.jpg" alt="" className="img-fluid w-100" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section> --> */}

                <section className="section pt-3 hospital-details-page-section d-lg-block  d-none">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5 pt-4">
                                <div className="breadcrumb-wrapper py-2 ps-2 ms-1">
                                    <div className="row">
                                        <div className="col-12 px-0">
                                            <ul className="breadcrumb mb-0">
                                                <li>
                                                    <a href={basePath + "/"}>Home</a>
                                                </li>
                                                <li>
                                                    <a href={basePath + "/hospital"}>Our Hospital</a>
                                                </li>
                                                <li className="active"> {hptData.title} </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-7">
                                <div className="row">
                                    <div className="col-md-6 ">
                                        <div className="details-banner">
                                            <div className="details-heading">
                                                <div className="hospital-content">
                                                    <ul>
                                                        <li className="hospital-icon-custom">{hptData.title}  </li>
                                                        <li>{hptData.address} </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="details-banner">
                                            <div className="details-heading">
                                                <div className="hospital-content">
                                                    <ul>
                                                        <li className="telephone-icon-custom"><a href={`tel:${hptData.contactNo}`}> Appointment Number- {hptData.contactNo} </a></li>
                                                        <li className="send-custom-icon">
                                                            <a href={hptData.mapURL} target='_blank'> Get Direction</a>
                                                        </li>
                                                    </ul>
                                                    <div className="d-flex align-items-center">
                                                        <img src="/img/google.png" alt="Google Logo" className="me-2" />
                                                        <div className="star-rating" data-rating="4.7">
                                                            <i className="fa fa-solid fa-star ms-1" style={{ color: "#ffc107" }}></i>
                                                            <i className="fa fa-solid fa-star ms-1" style={{ color: "#ffc107" }}></i>
                                                            <i className="fa fa-solid fa-star ms-1" style={{ color: "#ffc107" }}></i>
                                                            <i className="fa fa-solid fa-star ms-1" style={{ color: "#ffc107" }}></i>
                                                            <i className="fa fa-solid fa-star-half ms-1" style={{ color: "#ffc107" }}></i>
                                                            4.5
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section hospital-details-page-md-section py-0  d-lg-none  d-block">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 px-0">
                                <img src={process.env.NEXT_PUBLIC_IMAGE_URL + hptData.featuredImage.url} alt="" className="img-fluid hospital-details-mobile-banner" />
                            </div>
                            <div className="col-12">
                                <div className="row">
                                    <div className="col-12 pt-">
                                        <div className="breadcrumb-wrapper py-2 ps-2 ms-1">
                                            <div className="row">
                                                <div className="col-12 px-0">
                                                    <ul className="breadcrumb mb-0">
                                                        <li>
                                                            <a href={basePath + "/"}>Home</a>
                                                        </li>
                                                        <li>
                                                            <a href={basePath + "/hospital"}>Our Hospital</a>
                                                        </li>
                                                        <li className="active"> {hptData.title} </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="details-banner">
                                                    <div className="details-heading">
                                                        <div className="hospital-content">
                                                            <ul>
                                                                <li className="hospital-icon-custom">{hptData.title} </li>
                                                                <li>{hptData.address}</li>
                                                                <li className="telephone-icon-custom"><a href={`tel:${hptData.contactNo}`}> Appointment Number- {hptData.contactNo}</a></li>
                                                                <li className="send-custom-icon"><a href="#"> Get Direction</a></li>
                                                            </ul>

                                                            <div className="d-flex align-items-center mt-2">
                                                                <img src="/img/google.png" alt="Google Logo" className="me-2" />
                                                                <div className="star-rating" data-rating="4.7">
                                                                    {
                                                                        Array.from({ length: hptData.rating }).map((r, index) => {
                                                                            return index + 1 < hptData.rating - 1 ?
                                                                                <i className="fa fa-solid fa-star ms-1" style={{ color: "#ffc107" }} key={index}></i>
                                                                                : <i key={index} className={`fa fa-solid ms-1 ${Number.isInteger(hptData.rating) ? 'fa-star' : 'fa-star-half'}`} style={{ color: "#ffc107" }}></i>
                                                                        })
                                                                    }
                                                                    {hptData.rating}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>




                <section className="section py-4 d-lg-block d-none">
                    <div className="container">
                        <div className="custom-from">
                            <div className="row justify-content-between">

                                <div className="col-xl-3 col-lg-3 col-md-3 col-12">
                                    <div className="input-group mb-lg-0 mb-3">
                                        <span className="input-group-text" id="from-icon"><i
                                            className="fa-solid icon-location-pin"></i></span>
                                        <select className="form-select from-location">
                                            <option >Select Trivandrum</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>

                                    </div>
                                </div>

                                <div className="col-xl-3 col-lg-3 col-md-3 col-12">
                                    <div className="input-group mb-lg-0 mb-3">
                                        <span className="input-group-text" id="from-icon"><i
                                            className="fa-solid fa-magnifying-glass"></i></span>
                                        <input type="text" className="form-control pe-0" placeholder="Search doctor/specialities"
                                            aria-label="Username" aria-describedby="basic-addon1" />
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-3 col-12">
                                    <div className="from-btn">
                                        <a href={basePath + "/book-an-appointment"} className='btn'>
                                            {/* Book An Appointment */}
                                            {await getStaticText("Book An Appointment")}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!--=========== fromsection end =======--> */}
                <section className="section py-0 d-lg-block d-none">
                    <div className="container-fluid ps-0">
                        <div className="row">
                            <div className="cta-col ctn-left-col">
                                <div className="cta-diff">
                                    <h3>I am here to <i className="icon-arrow-right"></i></h3>
                                </div>
                            </div>
                            <div className="cta-col">
                                <a href="#">
                                    <div className="cta-diff">
                                        <div className="d-flex align-items-center justify-content-center">
                                            <img src="/img/doctor.png" alt="" />
                                            <h3>Find a <br /> <span>Doctor</span></h3>
                                            {/* <!-- <div className="cta-right-arrow">
                                        <img src="/img/right-arrow.svg" className="img-fluid" alt="" />
                                    </div> --> */}
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="cta-col">
                                <a href="#">
                                    <div className="cta-diff">
                                        <div className="d-flex align-items-center justify-content-center">
                                            <img src="/img/appointment.png" alt="" />
                                            <h3>Book an <br /> <span>Appointment</span></h3>
                                            {/* <!-- <div className="cta-right-arrow">
                                        <img src="/img/right-arrow.svg" className="img-fluid" alt="" />
                                    </div> --> */}
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="cta-col">
                                <a href="#">
                                    <div className="cta-diff">
                                        <div className="d-flex align-items-center justify-content-center">
                                            <img src="/img/health.png" alt="" />
                                            <h3>Book a <br /> <span>Health Checkup</span></h3>
                                            {/* <!-- <div className="cta-right-arrow">
                                        <img src="/img/right-arrow.svg" className="img-fluid" alt="" />
                                    </div> --> */}
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="cta-col">
                                <a href="#">
                                    <div className="cta-diff">
                                        <div className="d-flex align-items-center justify-content-center">
                                            <img src="/img/opinion.png" alt="" />
                                            <h3>Get <br /> <span>Second Opinion</span></h3>
                                            {/* <!-- <div className="cta-right-arrow">
                                        <img src="/img/right-arrow.svg" className="img-fluid" alt="" />
                                    </div> --> */}
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section pt-lg-0 pt-2 pb-0 d-lg-none d-block" data-aos="fade-up">
                    <div className="container-fluid ps-0">
                        <div className="row">
                            <div className="cta-col ctn-left-col">
                                <div className="cta-diff">
                                    <div className="d-flex align-items-center justify-content-center">
                                        <img src="/img/appointment-mb.png" alt="" />
                                        <h3>Book an <br /> Appointment</h3>
                                        {/* <!-- <div className="cta-right-arrow">
                                    <img src="/img/right-arrow.svg" className="img-fluid" alt="" />
                                </div> --> */}
                                    </div>
                                </div>
                            </div>
                            <div className="cta-col">
                                <a href="#">
                                    <div className="cta-diff">
                                        <div className="d-flex align-items-center justify-content-center">
                                            <img src="/img/doctor.png" alt="" />
                                            <h3>Find a <br /> <span>Doctor</span></h3>
                                            {/* <!-- <div className="cta-right-arrow">
                                        <img src="/img/right-arrow.svg" className="img-fluid" alt="" />
                                    </div> --> */}
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="cta-col">
                                <a href="#">
                                    <div className="cta-diff">
                                        <div className="d-flex align-items-center justify-content-center">
                                            <img src="/img/opinion.png" alt="" />
                                            <h3>Health <br /> <span> Check-up</span></h3>
                                            {/* <!-- <div className="cta-right-arrow">
                                        <img src="/img/right-arrow.svg" className="img-fluid" alt="" />
                                    </div> --> */}
                                        </div>
                                    </div>
                                </a>
                            </div>


                        </div>
                    </div>
                </section>

                <section className="section hospital-details-overview-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5 my-auto order-lg-1 order-2">
                                <div className="details-right-col text-center">
                                    <img src={process.env.NEXT_PUBLIC_IMAGE_URL + hptData.featuredImage.url} alt="" className="img-fluid w-100" />
                                    <h5>{hptData.title}</h5>
                                    <p>An Integrated Healthcare Destination </p>
                                    {
                                        hptData.overviewSection.videoId ?
                                            <WatchVideoButton txt={"Watch Video"} id={hptData.overviewSection.videoId} />
                                            : null
                                    }
                                </div>
                            </div>
                            <div className="col-md-7 sub-heading order-lg-2 order-1 mb-lg-0 mb-3">
                                <div className="main-heading">
                                    <h2 className="mb-1">{hptData.overviewSection.title}</h2>
                                    <h4 className="mb-3">{hptData.overviewSection.subTitle}</h4>
                                </div>

                                <div dangerouslySetInnerHTML={{ __html: marked(hptData.overviewSection.details) }}></div>

                                {hptData.USPSection.uspItem.length > 1 ? <div className="details-counter-section">
                                    <div className="row">
                                        {
                                            hptData.USPSection.uspItem.map((upsec, index) => {
                                                return <div className="col-md-3 col-6 mb-lg-0 mb-3" key={index}>
                                                    <div className="details-counter-box">
                                                        <h2><span className="counter">{upsec.number}</span> <span>{upsec.suffix}</span></h2>
                                                        <p>{upsec.title}</p>
                                                    </div>
                                                </div>
                                            })
                                        }
                                    </div>
                                </div> : null}
                            </div>

                        </div>
                    </div>
                </section>

                <div className="line-divider"></div>
                <ExcellenceCarousel dataSet={specialityDataSet} />


                <div className="line-divider"> </div>
                <ExpertCarousel dataSet={expertDataSet} />

                <div className="line-divider"></div>
                <TestimonialSection dataSet={testimonialDataSet} />

                <div className="line-divider"></div>
                <FromDoctor dataSet={docTalkDataSet} />

                <div className="line-divider"></div>
                <BlogCarousel dataSet={blogDataSet} />

                <div className="line-divider"></div>
                <section className="section">
                    <div className="container">
                        <div className="row justify-content-between" data-aos="fade-up">
                            <div className="col-md-6 col-8">
                                <div className="main-heading">
                                    <h2>{hptData.hospitalsSection.title} </h2>
                                </div>
                            </div>
                            <div className="col-md-2 col-4">
                                <div className="over-all-btn text-end">
                                    <a href={basePath+"/hospital"}>View All <span><img src="/img/slider-right-arrow.svg" className="img-fluid"
                                        alt="" /></span></a>
                                </div>
                            </div>
                        </div>
                        <div className="owl-carousel owl-theme hospital-slider">
                            {
                                hospitals.map((h, index) => {
                                    return <div className="custom-hospital-top-card" key={index}>
                                        <div className="custom-hospital-top-card">
                                            <div className="hospital-img">
                                                <a href={basePath + "/hospital/" + h.slug}>
                                                    <img src={process.env.NEXT_PUBLIC_IMAGE_URL + h.featuredImage.url} alt="" className="img-fluid w-100" />
                                                </a>
                                            </div>
                                            <div className="hospital-content">

                                                <ul>
                                                    <li className="hospital-icon-custom">{h.title}</li>
                                                    <li className="location-icon-custom">{h.address}</li>
                                                    <li className="telephone-icon-custom">{h.contactNo}</li>
                                                </ul>
                                                <div className="d-lg-flex d-block align-items-center justify-content-between py-2 " style={{ borderBottom: "1px solid #fff" }}>
                                                    <div className="hospital-content mb-lg-0 mb-3 p-0">
                                                        <ul>
                                                            <li className="mb-0 send-custom-icon">
                                                                <a href={h.mapURL} target='_blank'>Get Direction</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <img src="/img/google.png" alt="Google Logo" className="me-2" style={{ width: "auto" }} />
                                                        <div className="star-rating" data-rating="4.7">
                                                            {
                                                                Array.from({ length: h.rating }).map((r, index) => {
                                                                    return index + 1 < h.rating - 1 ?
                                                                        <i className="fa fa-solid fa-star ms-1" style={{ color: "#ffc107" }} key={index}></i>
                                                                        : <i key={index} className={`fa fa-solid ms-1 ${Number.isInteger(h.rating) ? 'fa-star' : 'fa-star-half'}`} style={{ color: "#ffc107" }}></i>
                                                                })
                                                            }
                                                            {h.rating}
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="d-lg-flex d-block align-items-center justify-content-between pt-3">
                                                    <a href={basePath + "/hospital/" + h.slug} className="btn mb-lg-0 mb-2 hospital-primarybtn">View Details</a>
                                                    <a href={basePath + "/book-an-appointment"} className="btn mb-lg-0 mb-3 hospital-secondarybtn">Appointment</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                })
                            }
                        </div>
                    </div>
                </section>


            </div>
            <Footer />
        </>
    )
}

export default HospitalDetails