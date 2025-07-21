import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { getStaticPageContent } from '@/app/lib/getStaticPageContent';
import Breadcrumb from '@/components/Breadcrumb';
import getStaticText from '@/app/lib/getStaticTextServer';
import getCurrentLangLoc from '@/app/lib/getCurrentLangLoc';
import doctorData from '@/app/lib/getDoctor';

const BookAnAppoinment = async ({ searchParams }) => {
    const URLParams = await searchParams;
    const getLangLoc = await getCurrentLangLoc()
    const data = await getStaticPageContent("book-an-appointment");
    const pageContent = data?.data[0]?.pageContent;
    const pageMeta = data?.data[0]?.metaSection;
    const staticText = await getStaticText();
    const docData = await doctorData.getSingleDoctor(URLParams.doctor);
    const doctorName = URLParams.doctorname ? URLParams.doctorname : docData?.name;
    console.log(URLParams.doctorname)
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
                                        <div className="main-heading ">
                                            <h2>{pageContent[1]?.title}</h2>
                                        </div>
                                        <div className="custom-from bg-field mx-0">
                                            <div className="row justify-content-between">
                                                <div className="col-xl-12 col-lg-12 col-md-12 col-12 mb-3">
                                                    <label htmlFor=''>{staticText['Patient / Visitor Name']}*</label>
                                                    <input type="text" placeholder="Enter Your Name" name=""
                                                        className="form-control pe-0" />

                                                </div>
                                                <div className="col-xl-12 col-lg-12 col-md-12 col-12 mb-3">
                                                    <label htmlFor=''>{staticText['Contact Number']}*</label>
                                                    <input type="text" placeholder={staticText["Enter Your Phone Number"]} name=""
                                                        className="form-control pe-0" />
                                                </div>

                                                <div className="col-xl-12 col-lg-12 col-md-12 col-12 mb-3">
                                                    <label htmlFor=''>{staticText['Email Address']}*</label>
                                                    <input type="text" placeholder={staticText['Enter Your Email Address']} name=""
                                                        className="form-control pe-0" />

                                                </div>
                                                <div className="col-xl-12 col-lg-12 col-md-12 col-12 mb-3">
                                                    <label htmlFor=''>{staticText['Location']}*</label>
                                                    <select className="form-select from-location">
                                                        <option value={''}>Select Location</option>
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
                                                    <label htmlFor=''>{staticText['Select Department']}*</label>
                                                    <select className="form-select from-location">
                                                        <option >Select a Department</option>
                                                        <option value="1">One</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                    </select>
                                                </div>

                                                <div className="col-xl-12 col-lg-12 col-md-12 col-12 mb-3">
                                                    <label htmlFor=''>{staticText['Select Doctors']}*</label>
                                                    <select className="form-select from-location">
                                                        <option >Select a Doctor</option>
                                                        <option value="1">One</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                    </select>
                                                </div>

                                                <div className="col-xl-12 col-lg-12 col-md-12 col-12 mb-3">
                                                    <label htmlFor=''>{staticText['Appointment Date']}*</label>
                                                    <div className="input-group">
                                                        <input type="text" placeholder="Select Your Date" name=""
                                                            className="form-control pe-0 datepicker" autoComplete="off" />
                                                        <span className="input-group-text" id="from-icon"><i
                                                            className="icon-calendar"></i></span>
                                                    </div>
                                                </div>

                                                <div className="col-xl-12 col-lg-12 col-md-12 col-12 mb-3">
                                                    <label htmlFor=''>{staticText['Appointment Time']}*</label>
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

                            </form>
                        </div>
                    </section>

                    <section className="section">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-md-12 mb-3">
                                    <div className="book-appointment-card">
                                        <div className="main-heading text-center mb-4">
                                            <h2>{pageContent[1]?.title}</h2>
                                        </div>

                                        <div className="row justify-content-center">
                                            <div className="col-md-10">
                                                <div className="row">
                                                    <div className="col-md-6 mb-3">
                                                        <div className="custom-from bg-field mx-0">
                                                            <div className="row justify-content-between">
                                                                <div className="col-xl-12 col-lg-12 col-md-12 col-12 mb-3">
                                                                    <label htmlFor=''>{staticText['Patient / Visitor Name']}*</label>
                                                                    <input type="text" placeholder="Enter Your Name" name=""
                                                                        className="form-control pe-0" />

                                                                </div>
                                                                <div className="col-xl-12 col-lg-12 col-md-12 col-12 mb-3">
                                                                    <label htmlFor=''>{staticText['Contact Number']}*</label>
                                                                    <input type="text" placeholder={staticText["Enter Your Phone Number"]} name=""
                                                                        className="form-control pe-0" />
                                                                </div>


                                                                <div className="col-xl-12 col-lg-12 col-md-12 col-12 mb-3">
                                                                    <label htmlFor=''>{staticText['Location']}*</label>
                                                                    <select className="form-select from-location">
                                                                        <option value={''}>Select Location</option>
                                                                        <option value="1">One</option>
                                                                        <option value="2">Two</option>
                                                                        <option value="3">Three</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 mb-3">
                                                        <div className="custom-from bg-field mx-0">
                                                            <div className="row justify-content-between">
                                                                <div className="col-xl-12 col-lg-12 col-md-12 col-12 mb-3">
                                                                    <label htmlFor=''>{staticText['Select Department']}*</label>
                                                                    <select className="form-select from-location">
                                                                        <option >Select a Department</option>
                                                                        <option value="1">One</option>
                                                                        <option value="2">Two</option>
                                                                        <option value="3">Three</option>
                                                                    </select>
                                                                </div>

                                                                <div className="col-xl-12 col-lg-12 col-md-12 col-12 mb-3">
                                                                    <label htmlFor=''>{staticText['Select Doctors']}*</label>
                                                                    <select className="form-select from-location">
                                                                        <option >Select a Doctor</option>
                                                                        <option value="1">One</option>
                                                                        <option value="2">Two</option>
                                                                        <option value="3">Three</option>
                                                                    </select>
                                                                </div>

                                                                <div className="col-xl-12 col-lg-12 col-md-12 col-12 mb-3">
                                                                    <label htmlFor=''>{staticText['Appointment Date']}*</label>
                                                                    <div className="input-group">
                                                                        <input type="text" placeholder="Select Your Date" name=""
                                                                            className="form-control pe-0 datepicker" autoComplete="off" />
                                                                        <span className="input-group-text" id="from-icon"><i
                                                                            className="icon-calendar"></i></span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="from-btn text-center">
                                                            <button type="button" className="btn d-inline-block w-auto">{staticText['Submit']}</button>
                                                        </div>
                                                    </div>
                                                </div>



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
                        </div>
                    </section>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default BookAnAppoinment;
