import { getBaseUrl } from '@/app/lib/getBaseUrl';
import blogData from '@/app/lib/getBlog';
import doctorData from '@/app/lib/getDoctor';
import doctorTalkData from '@/app/lib/getDoctorTalk';
import getStaticText from '@/app/lib/getStaticTextServer';
import BlogCarousel from '@/components/BlogCarousel';
import Footer from '@/components/Footer';
import FromDoctor from '@/components/FromDoctor';
import Header from '@/components/Header';
import { marked } from 'marked';



const DoctorDetails = async ({ params }) => {
    const basePath = await getBaseUrl(true, true)
    const imgUrl = process.env.NEXT_PUBLIC_IMAGE_URL;
    const slug = params.details;
    const data = await doctorData.getSingleDoctor(slug);
    const staticText = await getStaticText();

    const docTalkDataSet = {
        sectionTitle: data.doctorTalk.title,
        buttonText: 'View All', buttonURL: basePath+"/doctor-talk",
        data: await doctorTalkData.getByDoctor(data.id),
        baseUrl: basePath
    }

    const blogDataSet = {
        sectionTitle: data.blogSection.title,
        buttonText: 'View All', buttonURL: basePath+"/blog",
        data: await blogData.getByDoctor(data.id),
        baseUrl: basePath
    }

    return (
        <>
            <Header />

            <div role="main" className="main">
                <div className="doctor-details-main-page">
                    <div className="page-header">
                        <div className="container">
                            <h2>{data.name}</h2>
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
                                        <li>
                                            <a href="/doctor">{staticText['Find a Doctor']}</a>
                                        </li>
                                        <li className="active"> {data.name}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-3 mb-4">
                                    <div className="left-col-img">
                                        <img src={imgUrl + data.doctorImage.url} alt={data.name} className="img-fluid w-100" />
                                        <div className="main-heading sub-heading mt-3">
                                            <h3>{data.name}</h3>
                                        </div>
                                        <div className="left-details-list mt-3">
                                            <ul>
                                                <li className="details-doc-ic">{data.doctorDesignation}</li>
                                                <li className="details-liver-ic"><strong>{data.specialities[0].title}</strong></li>
                                                <li className="details-hospital-ic">{data.hospitals[0].address}</li>
                                            </ul>
                                            <a href="#" className="form-btn mt-3 d-block text-center text-light">{staticText['Book An Appointment']}</a>
                                        </div>

                                        {/* <div className="calendar mt-5">
                                            <div className="calendar-header">
                                                <button className="btn  previous-month-btn">
                                                    {staticText['Prev']}</button>
                                                <p className="calendar-title"></p>
                                                <button className="btn  next-month-btn">{staticText['Next']} </button>
                                            </div>
                                            <div className="calendar-body">
                                                <div className="calendar-row">
                                                    <div className="calendar-day">S</div>
                                                    <div className="calendar-day">M</div>
                                                    <div className="calendar-day">T</div>
                                                    <div className="calendar-day">W</div>
                                                    <div className="calendar-day">T</div>
                                                    <div className="calendar-day">F</div>
                                                    <div className="calendar-day">S</div>
                                                </div>
                                            </div>

                                            <button className="form-btn my-3">Go to Doctor's Slot</button>
                                        </div> */}
                                    </div>
                                </div>

                                <div className="col-md-9">
                                    <div className="right-col-details">
                                        <div className="main-heading main-list sub-heading">

                                            {data?.workExperience ?
                                                <div className="d-flex align-items-center gap-2 mb-2">
                                                    <img src="/img/briefcase.png" alt="" className="img-fluid" />
                                                    <h3>{staticText['Work Experience']}</h3>
                                                </div>
                                                : null}
                                            <div dangerouslySetInnerHTML={{ __html: data?.workExperience ? marked(data.workExperience) : "" }} ></div>


                                            {data?.areaOfExpertise ? <div className="d-flex align-items-center gap-2 mb-2">
                                                <img src="/img/badge.png" alt="" className="img-fluid" />
                                                <h3>{staticText['Area of Expertise']}</h3>
                                            </div> : null}
                                            <div dangerouslySetInnerHTML={{ __html: data?.areaOfExpertise ? marked(data.areaOfExpertise) : "" }}></div>


                                            {data?.educationAndTraning ? <div className="d-flex align-items-center gap-2 mb-2">
                                                <img src="/img/mortarboard.png" alt="" className="img-fluid" />
                                                <h3>{staticText['Education & Tranning']}</h3>
                                            </div> : null}
                                            <div dangerouslySetInnerHTML={{ __html: data?.educationAndTraning ? marked(data.educationAndTraning) : "" }}></div>

                                            {data?.membership ? <div className="d-flex align-items-center gap-2 mb-2">
                                                <img src="/img/recommendation.png" alt="" className="img-fluid" />
                                                <h3>{staticText['Membership']}</h3>
                                            </div> : null}
                                            <div dangerouslySetInnerHTML={{ __html: data?.membership ? marked(data.membership) : "" }}></div>

                                            {data?.awards ? <div className="d-flex align-items-center gap-2 mb-2">
                                                <img src="/img/award.png" alt="" className="img-fluid" />
                                                <h3>{staticText['Awards']}</h3>
                                            </div> : null}
                                            <div dangerouslySetInnerHTML={{ __html: data?.awards ? marked(data.awards) : "" }}></div>


                                            {data?.languagesKnown ? <div className="d-flex align-items-center gap-2 mb-2">
                                                <img src="/img/internet.png" alt="" className="img-fluid" />
                                                <h3>{staticText['Languages Known']}</h3>
                                            </div> : null}
                                            <div dangerouslySetInnerHTML={{ __html: data?.languagesKnown ? marked(data.languagesKnown) : "" }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>


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

export default DoctorDetails;
