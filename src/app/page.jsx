import BlogCarousel from '@/components/BlogCarousel'
import ExcellenceCarousel from '@/components/ExcellenceCarousel'
import ExpertCarousel from '@/components/ExpertCarousel'
import Footer from '@/components/Footer'
import FromDoctor from '@/components/FromDoctor'
import Header from '@/components/Header'
// import HomeBanner from '@/components/HomeBanner'
import SocialMedia from '@/components/SocialMedia'
import TestimonialSection from '@/components/TestimonialSection'
import WallframeSection from '@/components/WallframeSection'
import mainHelper from '@/app/lib/getLangLoc'
import dynamic from 'next/dynamic'
import { cookies } from 'next/headers'
import { getStaticPageContent } from './lib/getStaticPageContent'
const HomeBanner = dynamic(()=>import("@/components/HomeBanner"));



const Home = async () => {
  const pageData = await getStaticPageContent();

  return (
    <>
      <Header />
      <div role="main" className="main">
        <HomeBanner/>

        {/* <!-- ======= homepage end ========== --> */}
        <section className="section py-4 d-lg-block d-none">
          <div className="container">
            <div className="custom-from">
              <div className="row justify-content-between">
                <div className="col-xl-3 col-lg-3 col-md-3 col-12">
                  <div className="input-group mb-lg-0 mb-3">
                    <span className="input-group-text" id="from-icon"><i
                      className="fa-solid icon-location-pin"></i></span>
                    <select className="form-select from-location">
                      <option >Select hospital location</option>
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
                    <button type="button" className="btn">Book An Appointment</button>
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
                          <img src="/img/right-arrow.svg" className="img-fluid" alt=""/>
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
                          <img src="/img/right-arrow.svg" className="img-fluid" alt=""/>
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
                          <img src="/img/right-arrow.svg" className="img-fluid" alt=""/>
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
                          <img src="/img/right-arrow.svg" className="img-fluid" alt=""/>
                        </div> --> */}
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section pt-lg-0 pt-2 pb-2 d-lg-none d-block" data-aos="fade-up">
          <div className="container-fluid ps-0">
            <div className="row">
              <div className="cta-col ctn-left-col">
                <div className="cta-diff">
                  <div className="d-flex align-items-center justify-content-center">
                    <img src="/img/appointment-mb.png" alt="" />
                    <h3>Book an <br /> Appointment</h3>
                    {/* <!-- <div className="cta-right-arrow">
                        <img src="/img/right-arrow.svg" className="img-fluid" alt=""/>
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
                          <img src="/img/right-arrow.svg" className="img-fluid" alt=""/>
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
                          <img src="/img/right-arrow.svg" className="img-fluid" alt=""/>
                        </div> --> */}
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- ====== cta section ==== --> */}
        <ExcellenceCarousel />

        <div className="line-divider"> </div>

        <ExpertCarousel />

        <div className="line-divider"> </div>

        <WallframeSection />

        <div className="line-divider"></div>
        <TestimonialSection />


        {/* <!-- ========== testimonial section end ============ --> */}

        <div className="line-divider"></div>
        <BlogCarousel />

        {/* <!-- ========== blog section end =========== --> */}

        <div className="line-divider"></div>

        <FromDoctor />

        <SocialMedia />

      </div>

      <Footer />
    </>
  )
}

export default Home;
