import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { getStaticPageContent } from '@/app/lib/getStaticPageContent';
import Breadcrumb from '@/components/Breadcrumb';
import getStaticText from '../lib/getStaticTextServer';

const BookAnAppoinment = async () => {
    const data = await getStaticPageContent("book-an-appointment");
    const pageContent = data?.data[0]?.pageContent;
    const pageMeta = data?.data[0]?.metaSection;
    const staticText = await getStaticText();


    return (
        <>
            <Header />
            <div role="main" className="main">
                <div className="book-appointment-main-page">
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

                    <section className="section d-none">
                        <div className="container">
                            <form action="">
                                <div className="row justify-content-between">
                                    <div className="col-md-5 mb-3">
                                        <div className="main-heading">
                                            <h2>{pageContent[1]?.title}</h2>
                                        </div>
                                        <div className="custom-from bg-field mx-0">
                                            <div className="row justify-content-between">
                                                <div className="col-xl-12 col-lg-12 col-md-12 col-12 mb-3">
                                                    <label htmlFor=''>Patient / Visitor Name*</label>
                                                    <input type="text" placeholder="Enter Your Name" name=""
                                                        className="form-control pe-0" />

                                                </div>
                                                <div className="col-xl-12 col-lg-12 col-md-12 col-12 mb-3">
                                                    <label htmlFor=''>Contact Number*</label>
                                                    <input type="text" placeholder="Enter Your Phone Number" name=""
                                                        className="form-control pe-0" />

                                                </div>

                                                <div className="col-xl-12 col-lg-12 col-md-12 col-12 mb-3">
                                                    <label htmlFor=''>Email Address*</label>
                                                    <input type="text" placeholder="Enter Your Email Address" name=""
                                                        className="form-control pe-0" />

                                                </div>
                                                <div className="col-xl-12 col-lg-12 col-md-12 col-12 mb-3">
                                                    <label htmlFor=''>Location*</label>
                                                    <select className="form-select from-location">
                                                        <option >Select Location</option>
                                                        <option value="1">One</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                    </select>
                                                </div>




                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-5 mb-3">
                                        <div className="main-heading">
                                            <h2>{pageContent[2]?.title}</h2>
                                        </div>
                                        <div className="custom-from bg-field mx-0">
                                            <div className="row justify-content-between">
                                                <div className="col-xl-12 col-lg-12 col-md-12 col-12 mb-3">
                                                    <label htmlFor=''>Select Department*</label>
                                                    <select className="form-select from-location">
                                                        <option >Select a Department</option>
                                                        <option value="1">One</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                    </select>
                                                </div>

                                                <div className="col-xl-12 col-lg-12 col-md-12 col-12 mb-3">
                                                    <label htmlFor=''>Select Doctors*</label>
                                                    <select className="form-select from-location">
                                                        <option >Select a Doctor</option>
                                                        <option value="1">One</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                    </select>
                                                </div>

                                                <div className="col-xl-12 col-lg-12 col-md-12 col-12 mb-3">
                                                    <label htmlFor=''>Appointment Date*</label>
                                                    <div className="input-group">
                                                        <input type="text" placeholder="Select Your Date" name=""
                                                            className="form-control pe-0 datepicker" autoComplete="off" />
                                                        <span className="input-group-text" id="from-icon"><i
                                                            className="icon-calendar"></i></span>
                                                    </div>


                                                </div>

                                                <div className="col-xl-12 col-lg-12 col-md-12 col-12 mb-3">
                                                    <label htmlFor=''>Appointment Time*</label>
                                                    <div className="input-group">
                                                        <input type="text" placeholder="Select Your Time" name=""
                                                            className="form-control pe-0 timePicker" autoComplete="off" />
                                                        <span className="input-group-text" id="from-icon"><i
                                                            className="icon-clock"></i></span>
                                                    </div>


                                                </div>

                                                <div className="col-xl-6 col-lg-6 col-md-6 col-12 mb-3">

                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="from-btn">
                                    <button type="button" className="btn d-inline-block w-auto">Submit</button>
                                </div>
                            </form>
                        </div>
                    </section>

                    <section className="section ">
                        <div className="container">
                            <form action="">
                                <div className="row justify-content-center">
                                    <div className="col-md-12 mb-3">
                                        <div className="main-heading">
                                            <h2>{pageContent[1]?.title}</h2>
                                        </div>
                                        <div className="row justify-content-center">
                                            <div className="col-md-8">
                                                <div className="custom-from bg-field mx-0">
                                                    <div className="contact-right-col order-lg-2 order-1">
                                                        <div className="association-form-card mb-5 sticky-from">
                                                            <div className="tab-group text-start mb-3">
                                                                <button type="button" className="btn-tab treat-tab form-btn w-auto active mx-2">
                                                                    {/* onClick="showBox(this,'omega')"> */}
                                                                    Queries</button>


                                                                <button type="button" className="btn-tab form-btn  w-auto treat-tab mx-2">
                                                                    {/* onClick="showBox(this,'omega1')"> */}
                                                                    Feedback/Complaints</button>
                                                            </div>
                                                            <div className="treat-box" id="omega" style={{ 'display': 'block' }}>
                                                                <div className="custom-from bg-field mx-0">
                                                                    <form action="">
                                                                        <div className="row justify-content-between">
                                                                            <div className="col-xl-6 col-lg-6 col-md-6 col-12 mb-3">
                                                                                <label htmlFor=''>First Name*</label>
                                                                                <input type="text" className="form-control pe-0" />


                                                                            </div>
                                                                            <div className="col-xl-6 col-lg-6 col-md-6 col-12 mb-3">
                                                                                <label htmlFor=''>Last Name</label>
                                                                                <input type="text" className="form-control pe-0" />


                                                                            </div>


                                                                            <div className="col-xl-12 col-lg-12 col-md-12 col-12 mb-3">
                                                                                <label htmlFor=''>Mobile Number*</label>
                                                                                <input type="text" id="phone" defaultValue="+91" className="form-control pe-0" />


                                                                            </div>



                                                                            <div className="col-xl-12 col-lg-12 col-md-12 col-12 mb-3">
                                                                                <label htmlFor=''>Hospitals*</label>
                                                                                <select className="form-select from-location">
                                                                                    <option>Select Hospital</option>
                                                                                    <option value="1">One</option>
                                                                                    <option value="2">Two</option>
                                                                                    <option value="3">Three</option>
                                                                                </select>
                                                                            </div>


                                                                            <div className="col-xl-12 col-lg-12 col-md-12 col-12 mb-3">
                                                                                <label htmlFor=''>Query*</label>
                                                                                <textarea className="form-control" placeholder="Leave a comment here"
                                                                                    id="floatingTextarea"></textarea>


                                                                            </div>










                                                                            <div className="col-xl-6 col-lg-6 col-md-6 col-12 mb-3">
                                                                                <div className="from-btn">
                                                                                    <button type="button"
                                                                                        className="btn d-inline-block w-auto">Submit</button>
                                                                                </div>
                                                                            </div>


                                                                        </div>
                                                                    </form>
                                                                </div>


                                                            </div>






                                                            <div className="treat-box" id="omega1" style={{ display: 'none' }}>
                                                                <div className="custom-from bg-field mx-0">
                                                                    <form action="">
                                                                        <div className="row justify-content-between">
                                                                            <div className="col-xl-6 col-lg-6 col-md-6 col-12 mb-3">
                                                                                <label htmlFor=''>First Name*</label>
                                                                                <input type="text" className="form-control pe-0" />


                                                                            </div>
                                                                            <div className="col-xl-6 col-lg-6 col-md-6 col-12 mb-3">
                                                                                <label htmlFor=''>Last Name</label>
                                                                                <input type="text" className="form-control pe-0" />


                                                                            </div>


                                                                            <div className="col-xl-12 col-lg-12 col-md-6 col-12 mb-3">
                                                                                <label htmlFor=''>Mobile Number*</label>
                                                                                <input type="text" id="tel" defaultValue="+91" className="form-control pe-0" />


                                                                            </div>



                                                                            <div className="col-xl-12 col-lg-12 col-md-12 col-12 mb-3">
                                                                                <label htmlFor=''>Hospitals*</label>
                                                                                <select className="form-select from-location">
                                                                                    <option >Select Hospital</option>
                                                                                    <option value="1">One</option>
                                                                                    <option value="2">Two</option>
                                                                                    <option value="3">Three</option>
                                                                                </select>
                                                                            </div>


                                                                            <div className="col-xl-12 col-lg-12 col-md-12 col-12 mb-3">
                                                                                <label htmlFor=''>Query*</label>
                                                                                <textarea className="form-control" placeholder="Leave a comment here"
                                                                                    id="floatingTextarea"></textarea>


                                                                            </div>










                                                                            <div className="col-xl-6 col-lg-6 col-md-6 col-12 mb-3">
                                                                                <div className="from-btn">
                                                                                    <button type="button"
                                                                                        className="btn d-inline-block w-auto">Submit</button>
                                                                                </div>
                                                                            </div>


                                                                        </div>
                                                                    </form>
                                                                </div>
                                                            </div>




                                                        </div>




                                                    </div>
                                                    {/* <div className="row justify-content-between">
                                                <div className="col-xl-12 col-lg-12 col-md-12 col-12 mb-3">
                                                    <label htmlFor=''>Patient / Visitor Name*</label>
                                                    <input type="text" placeholder="Enter Your Name" name=""
                                                        className="form-control pe-0" />


                                                </div>
                                                <div className="col-xl-12 col-lg-12 col-md-12 col-12 mb-3">
                                                    <label htmlFor=''>Contact Number*</label>
                                                    <input type="text" placeholder="Enter Your Phone Number" name=""
                                                        className="form-control pe-0" />


                                                </div>


                                                <div className="col-xl-12 col-lg-12 col-md-12 col-12 mb-3">
                                                    <label htmlFor=''>Email Address*</label>
                                                    <input type="text" placeholder="Enter Your Email Address" name=""
                                                        className="form-control pe-0" />


                                                </div>
                                                <div className="col-xl-12 col-lg-12 col-md-12 col-12 mb-3">
                                                    <label htmlFor=''>Location*</label>
                                                    <select className="form-select from-location">
                                                        <option >Select Location</option>
                                                        <option value="1">One</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                    </select>
                                                </div>








                                            </div> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div className="col-md-5 mb-3">
                                        <div className="main-heading">
                                            <h2>{pageContent[2]?.title}</h2>
                                        </div>
                                        <div className="custom-from bg-field mx-0">
                                            <div className="row justify-content-between">
                                                <div className="col-xl-12 col-lg-12 col-md-12 col-12 mb-3">
                                                    <label htmlFor=''>Select Department*</label>
                                                    <select className="form-select from-location">
                                                        <option >Select a Department</option>
                                                        <option value="1">One</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                    </select>
                                                </div>


                                                <div className="col-xl-12 col-lg-12 col-md-12 col-12 mb-3">
                                                    <label htmlFor=''>Select Doctors*</label>
                                                    <select className="form-select from-location">
                                                        <option >Select a Doctor</option>
                                                        <option value="1">One</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                    </select>
                                                </div>


                                                <div className="col-xl-12 col-lg-12 col-md-12 col-12 mb-3">
                                                    <label htmlFor=''>Appointment Date*</label>
                                                    <div className="input-group">
                                                        <input type="text" placeholder="Select Your Date" name=""
                                                            className="form-control pe-0 datepicker" autoComplete="off" />
                                                        <span className="input-group-text" id="from-icon"><i
                                                            className="icon-calendar"></i></span>
                                                    </div>




                                                </div>


                                                <div className="col-xl-12 col-lg-12 col-md-12 col-12 mb-3">
                                                    <label htmlFor=''>Appointment Time*</label>
                                                    <div className="input-group">
                                                        <input type="text" placeholder="Select Your Time" name=""
                                                            className="form-control pe-0 timePicker" autoComplete="off" />
                                                        <span className="input-group-text" id="from-icon"><i
                                                            className="icon-clock"></i></span>
                                                    </div>




                                                </div>


                                                <div className="col-xl-6 col-lg-6 col-md-6 col-12 mb-3">


                                                </div>


                                            </div>
                                        </div>
                                    </div> */}
                                </div>

                            </form>
                        </div>
                    </section>



                </div>
            </div>
            <Footer />
        </>
    )
}

export default BookAnAppoinment;
