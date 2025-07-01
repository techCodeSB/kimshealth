import Footer from '@/components/Footer'
import Header from '@/components/Header';
import React from 'react'

const page = () => {
    return (
        <>
            <Header />

            <div role="main" className="main">
                <div className="page-header">
                    <div className="container">
                        <h2>Conditions / Diseases</h2>
                    </div>
                </div>
                <section className="breadcrumb-wrapper py-2">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <ul className="breadcrumb mb-0">
                                    <li>
                                        <a href="index.php">Home</a>
                                    </li>
                                    <li className="active"> Conditions / Diseases </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section pt-lg-4 pt-0">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-9 mb-3">

                                <div className="speciality-masterpage-card key-procedures-master-page">

                                    <div className="details-key-row">
                                        <div className="row justify-content-between">
                                            <div className="col-md-6 mb-2">
                                                <form action="">
                                                    <div className="input-group p-0 my-lg-4 my-1 position-relative justify-content-center">

                                                        <select className="form-select diseases-page-search">
                                                            <option>Search for Conditions/Diseases</option>
                                                            <option value="1">One</option>
                                                            <option value="2">Two</option>
                                                            <option value="3">Three</option>
                                                        </select>
                                                        <button className="input-group-text border-0 search-btn-page"><i className="fa-solid fa-magnifying-glass"></i></button>
                                                    </div>
                                                </form>
                                            </div>
                                            <div className="col-md-6 mb-2">
                                                <form action="">
                                                    <div className="input-group p-0 my-lg-4 my-1 position-relative justify-content-center">

                                                        <select className="form-select speciality-page-search">
                                                            <option >Select by Speciality</option>
                                                            <option value="1">One</option>
                                                            <option value="2">Two</option>
                                                            <option value="3">Three</option>
                                                        </select>
                                                        <button className="input-group-text border-0 search-btn-page"><i className="fa-solid fa-angle-down"></i></button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="speciality-masterpage-card-content">
                                                <a href="#">
                                                    <div className="key-master-row">
                                                        <div className="key-master-image">
                                                            <img src="img/key-proce1.png" alt="" className="img-fluid" />
                                                        </div>
                                                        <div className="key-master-content">
                                                            <h5>Coronary Artery Disease (CAD)</h5>
                                                        </div>
                                                    </div>

                                                </a>
                                            </div>

                                            <div className="speciality-masterpage-card-content">
                                                <a href="#">
                                                    <div className="key-master-row">
                                                        <div className="key-master-image">
                                                            <img src="img/key-proce2.png" alt="" className="img-fluid" />
                                                        </div>
                                                        <div className="key-master-content">
                                                            <h5>Kidney Stones (Nephrolithiasis)</h5>
                                                        </div>
                                                    </div>

                                                </a>
                                            </div>

                                            <div className="speciality-masterpage-card-content">
                                                <a href="#">
                                                    <div className="key-master-row">
                                                        <div className="key-master-image">
                                                            <img src="img/key-proce3.png" alt="" className="img-fluid" />
                                                        </div>
                                                        <div className="key-master-content">
                                                            <h5>Nephrotic Syndrome</h5>
                                                        </div>
                                                    </div>

                                                </a>
                                            </div>

                                            <div className="speciality-masterpage-card-content">
                                                <a href="#">
                                                    <div className="key-master-row">
                                                        <div className="key-master-image">
                                                            <img src="img/key-proce4.png" alt="" className="img-fluid" />
                                                        </div>
                                                        <div className="key-master-content">
                                                            <h5>Esophagitis  </h5>
                                                        </div>
                                                    </div>

                                                </a>
                                            </div>
                                            <div className="speciality-masterpage-card-content">
                                                <a href="#">
                                                    <div className="key-master-row">
                                                        <div className="key-master-image">
                                                            <img src="img/key-proce1.png" alt="" className="img-fluid" />
                                                        </div>
                                                        <div className="key-master-content">
                                                            <h5>Coronary Artery Disease (CAD)</h5>
                                                        </div>
                                                    </div>

                                                </a>
                                            </div>

                                            <div className="speciality-masterpage-card-content">
                                                <a href="#">
                                                    <div className="key-master-row">
                                                        <div className="key-master-image">
                                                            <img src="img/key-proce2.png" alt="" className="img-fluid" />
                                                        </div>
                                                        <div className="key-master-content">
                                                            <h5>Kidney Stones (Nephrolithiasis)</h5>
                                                        </div>
                                                    </div>

                                                </a>
                                            </div>

                                            <div className="speciality-masterpage-card-content">
                                                <a href="#">
                                                    <div className="key-master-row">
                                                        <div className="key-master-image">
                                                            <img src="img/key-proce3.png" alt="" className="img-fluid" />
                                                        </div>
                                                        <div className="key-master-content">
                                                            <h5>Nephrotic Syndrome</h5>
                                                        </div>
                                                    </div>

                                                </a>
                                            </div>

                                            <div className="speciality-masterpage-card-content">
                                                <a href="#">
                                                    <div className="key-master-row">
                                                        <div className="key-master-image">
                                                            <img src="img/key-proce4.png" alt="" className="img-fluid" />
                                                        </div>
                                                        <div className="key-master-content">
                                                            <h5>Esophagitis  </h5>
                                                        </div>
                                                    </div>

                                                </a>
                                            </div>
                                            <div className="speciality-masterpage-card-content">
                                                <a href="#">
                                                    <div className="key-master-row">
                                                        <div className="key-master-image">
                                                            <img src="img/key-proce1.png" alt="" className="img-fluid" />
                                                        </div>
                                                        <div className="key-master-content">
                                                            <h5>Coronary Artery Disease (CAD)</h5>
                                                        </div>
                                                    </div>

                                                </a>
                                            </div>

                                            <div className="speciality-masterpage-card-content">
                                                <a href="#">
                                                    <div className="key-master-row">
                                                        <div className="key-master-image">
                                                            <img src="img/key-proce2.png" alt="" className="img-fluid" />
                                                        </div>
                                                        <div className="key-master-content">
                                                            <h5>Kidney Stones (Nephrolithiasis)</h5>
                                                        </div>
                                                    </div>

                                                </a>
                                            </div>

                                            <div className="speciality-masterpage-card-content">
                                                <a href="#">
                                                    <div className="key-master-row">
                                                        <div className="key-master-image">
                                                            <img src="img/key-proce3.png" alt="" className="img-fluid" />
                                                        </div>
                                                        <div className="key-master-content">
                                                            <h5>Nephrotic Syndrome</h5>
                                                        </div>
                                                    </div>

                                                </a>
                                            </div>

                                            <div className="speciality-masterpage-card-content">
                                                <a href="#">
                                                    <div className="key-master-row">
                                                        <div className="key-master-image">
                                                            <img src="img/key-proce4.png" alt="" className="img-fluid" />
                                                        </div>
                                                        <div className="key-master-content">
                                                            <h5>Esophagitis  </h5>
                                                        </div>
                                                    </div>

                                                </a>
                                            </div>
                                            <div className="speciality-masterpage-card-content">
                                                <a href="#">
                                                    <div className="key-master-row">
                                                        <div className="key-master-image">
                                                            <img src="img/key-proce1.png" alt="" className="img-fluid" />
                                                        </div>
                                                        <div className="key-master-content">
                                                            <h5>Coronary Artery Disease (CAD)</h5>
                                                        </div>
                                                    </div>

                                                </a>
                                            </div>

                                            <div className="speciality-masterpage-card-content">
                                                <a href="#">
                                                    <div className="key-master-row">
                                                        <div className="key-master-image">
                                                            <img src="img/key-proce2.png" alt="" className="img-fluid" />
                                                        </div>
                                                        <div className="key-master-content">
                                                            <h5>Kidney Stones (Nephrolithiasis)</h5>
                                                        </div>
                                                    </div>

                                                </a>
                                            </div>

                                            <div className="speciality-masterpage-card-content">
                                                <a href="#">
                                                    <div className="key-master-row">
                                                        <div className="key-master-image">
                                                            <img src="img/key-proce3.png" alt="" className="img-fluid" />
                                                        </div>
                                                        <div className="key-master-content">
                                                            <h5>Nephrotic Syndrome</h5>
                                                        </div>
                                                    </div>

                                                </a>
                                            </div>

                                            <div className="speciality-masterpage-card-content">
                                                <a href="#">
                                                    <div className="key-master-row">
                                                        <div className="key-master-image">
                                                            <img src="img/key-proce4.png" alt="" className="img-fluid" />
                                                        </div>
                                                        <div className="key-master-content">
                                                            <h5>Esophagitis  </h5>
                                                        </div>
                                                    </div>

                                                </a>
                                            </div>
                                            <div className="speciality-masterpage-card-content">
                                                <a href="#">
                                                    <div className="key-master-row">
                                                        <div className="key-master-image">
                                                            <img src="img/key-proce1.png" alt="" className="img-fluid" />
                                                        </div>
                                                        <div className="key-master-content">
                                                            <h5>Coronary Artery Disease (CAD)</h5>
                                                        </div>
                                                    </div>

                                                </a>
                                            </div>

                                            <div className="speciality-masterpage-card-content">
                                                <a href="#">
                                                    <div className="key-master-row">
                                                        <div className="key-master-image">
                                                            <img src="img/key-proce2.png" alt="" className="img-fluid" />
                                                        </div>
                                                        <div className="key-master-content">
                                                            <h5>Kidney Stones (Nephrolithiasis)</h5>
                                                        </div>
                                                    </div>

                                                </a>
                                            </div>

                                            <div className="speciality-masterpage-card-content">
                                                <a href="#">
                                                    <div className="key-master-row">
                                                        <div className="key-master-image">
                                                            <img src="img/key-proce3.png" alt="" className="img-fluid" />
                                                        </div>
                                                        <div className="key-master-content">
                                                            <h5>Nephrotic Syndrome</h5>
                                                        </div>
                                                    </div>

                                                </a>
                                            </div>

                                            <div className="speciality-masterpage-card-content">
                                                <a href="#">
                                                    <div className="key-master-row">
                                                        <div className="key-master-image">
                                                            <img src="img/key-proce4.png" alt="" className="img-fluid" />
                                                        </div>
                                                        <div className="key-master-content">
                                                            <h5>Esophagitis  </h5>
                                                        </div>
                                                    </div>

                                                </a>
                                            </div>






                                        </div>

                                        <div className="col-md-6">
                                            <div className="speciality-masterpage-card-content">
                                                <a href="#">
                                                    <div className="key-master-row">
                                                        <div className="key-master-image">
                                                            <img src="img/key-proce1.png" alt="" className="img-fluid" />
                                                        </div>
                                                        <div className="key-master-content">
                                                            <h5>Coronary Artery Disease (CAD)</h5>
                                                        </div>
                                                    </div>

                                                </a>
                                            </div>

                                            <div className="speciality-masterpage-card-content">
                                                <a href="#">
                                                    <div className="key-master-row">
                                                        <div className="key-master-image">
                                                            <img src="img/key-proce2.png" alt="" className="img-fluid" />
                                                        </div>
                                                        <div className="key-master-content">
                                                            <h5>Kidney Stones (Nephrolithiasis)</h5>
                                                        </div>
                                                    </div>

                                                </a>
                                            </div>

                                            <div className="speciality-masterpage-card-content">
                                                <a href="#">
                                                    <div className="key-master-row">
                                                        <div className="key-master-image">
                                                            <img src="img/key-proce3.png" alt="" className="img-fluid" />
                                                        </div>
                                                        <div className="key-master-content">
                                                            <h5>Nephrotic Syndrome</h5>
                                                        </div>
                                                    </div>

                                                </a>
                                            </div>

                                            <div className="speciality-masterpage-card-content">
                                                <a href="#">
                                                    <div className="key-master-row">
                                                        <div className="key-master-image">
                                                            <img src="img/key-proce4.png" alt="" className="img-fluid" />
                                                        </div>
                                                        <div className="key-master-content">
                                                            <h5>Esophagitis  </h5>
                                                        </div>
                                                    </div>

                                                </a>
                                            </div>
                                            <div className="speciality-masterpage-card-content">
                                                <a href="#">
                                                    <div className="key-master-row">
                                                        <div className="key-master-image">
                                                            <img src="img/key-proce1.png" alt="" className="img-fluid" />
                                                        </div>
                                                        <div className="key-master-content">
                                                            <h5>Coronary Artery Disease (CAD)</h5>
                                                        </div>
                                                    </div>

                                                </a>
                                            </div>

                                            <div className="speciality-masterpage-card-content">
                                                <a href="#">
                                                    <div className="key-master-row">
                                                        <div className="key-master-image">
                                                            <img src="img/key-proce2.png" alt="" className="img-fluid" />
                                                        </div>
                                                        <div className="key-master-content">
                                                            <h5>Kidney Stones (Nephrolithiasis)</h5>
                                                        </div>
                                                    </div>

                                                </a>
                                            </div>

                                            <div className="speciality-masterpage-card-content">
                                                <a href="#">
                                                    <div className="key-master-row">
                                                        <div className="key-master-image">
                                                            <img src="img/key-proce3.png" alt="" className="img-fluid" />
                                                        </div>
                                                        <div className="key-master-content">
                                                            <h5>Nephrotic Syndrome</h5>
                                                        </div>
                                                    </div>

                                                </a>
                                            </div>

                                            <div className="speciality-masterpage-card-content">
                                                <a href="#">
                                                    <div className="key-master-row">
                                                        <div className="key-master-image">
                                                            <img src="img/key-proce4.png" alt="" className="img-fluid" />
                                                        </div>
                                                        <div className="key-master-content">
                                                            <h5>Esophagitis  </h5>
                                                        </div>
                                                    </div>

                                                </a>
                                            </div>
                                            <div className="speciality-masterpage-card-content">
                                                <a href="#">
                                                    <div className="key-master-row">
                                                        <div className="key-master-image">
                                                            <img src="img/key-proce1.png" alt="" className="img-fluid" />
                                                        </div>
                                                        <div className="key-master-content">
                                                            <h5>Coronary Artery Disease (CAD)</h5>
                                                        </div>
                                                    </div>

                                                </a>
                                            </div>

                                            <div className="speciality-masterpage-card-content">
                                                <a href="#">
                                                    <div className="key-master-row">
                                                        <div className="key-master-image">
                                                            <img src="img/key-proce2.png" alt="" className="img-fluid" />
                                                        </div>
                                                        <div className="key-master-content">
                                                            <h5>Kidney Stones (Nephrolithiasis)</h5>
                                                        </div>
                                                    </div>

                                                </a>
                                            </div>

                                            <div className="speciality-masterpage-card-content">
                                                <a href="#">
                                                    <div className="key-master-row">
                                                        <div className="key-master-image">
                                                            <img src="img/key-proce3.png" alt="" className="img-fluid" />
                                                        </div>
                                                        <div className="key-master-content">
                                                            <h5>Nephrotic Syndrome</h5>
                                                        </div>
                                                    </div>

                                                </a>
                                            </div>

                                            <div className="speciality-masterpage-card-content">
                                                <a href="#">
                                                    <div className="key-master-row">
                                                        <div className="key-master-image">
                                                            <img src="img/key-proce4.png" alt="" className="img-fluid" />
                                                        </div>
                                                        <div className="key-master-content">
                                                            <h5>Esophagitis  </h5>
                                                        </div>
                                                    </div>

                                                </a>
                                            </div>
                                            <div className="speciality-masterpage-card-content">
                                                <a href="#">
                                                    <div className="key-master-row">
                                                        <div className="key-master-image">
                                                            <img src="img/key-proce1.png" alt="" className="img-fluid" />
                                                        </div>
                                                        <div className="key-master-content">
                                                            <h5>Coronary Artery Disease (CAD)</h5>
                                                        </div>
                                                    </div>

                                                </a>
                                            </div>

                                            <div className="speciality-masterpage-card-content">
                                                <a href="#">
                                                    <div className="key-master-row">
                                                        <div className="key-master-image">
                                                            <img src="img/key-proce2.png" alt="" className="img-fluid" />
                                                        </div>
                                                        <div className="key-master-content">
                                                            <h5>Kidney Stones (Nephrolithiasis)</h5>
                                                        </div>
                                                    </div>

                                                </a>
                                            </div>

                                            <div className="speciality-masterpage-card-content">
                                                <a href="#">
                                                    <div className="key-master-row">
                                                        <div className="key-master-image">
                                                            <img src="img/key-proce3.png" alt="" className="img-fluid" />
                                                        </div>
                                                        <div className="key-master-content">
                                                            <h5>Nephrotic Syndrome</h5>
                                                        </div>
                                                    </div>

                                                </a>
                                            </div>

                                            <div className="speciality-masterpage-card-content">
                                                <a href="#">
                                                    <div className="key-master-row">
                                                        <div className="key-master-image">
                                                            <img src="img/key-proce4.png" alt="" className="img-fluid" />
                                                        </div>
                                                        <div className="key-master-content">
                                                            <h5>Esophagitis  </h5>
                                                        </div>
                                                    </div>

                                                </a>
                                            </div>
                                            <div className="speciality-masterpage-card-content">
                                                <a href="#">
                                                    <div className="key-master-row">
                                                        <div className="key-master-image">
                                                            <img src="img/key-proce1.png" alt="" className="img-fluid" />
                                                        </div>
                                                        <div className="key-master-content">
                                                            <h5>Coronary Artery Disease (CAD)</h5>
                                                        </div>
                                                    </div>

                                                </a>
                                            </div>

                                            <div className="speciality-masterpage-card-content">
                                                <a href="#">
                                                    <div className="key-master-row">
                                                        <div className="key-master-image">
                                                            <img src="img/key-proce2.png" alt="" className="img-fluid" />
                                                        </div>
                                                        <div className="key-master-content">
                                                            <h5>Kidney Stones (Nephrolithiasis)</h5>
                                                        </div>
                                                    </div>

                                                </a>
                                            </div>

                                            <div className="speciality-masterpage-card-content">
                                                <a href="#">
                                                    <div className="key-master-row">
                                                        <div className="key-master-image">
                                                            <img src="img/key-proce3.png" alt="" className="img-fluid" />
                                                        </div>
                                                        <div className="key-master-content">
                                                            <h5>Nephrotic Syndrome</h5>
                                                        </div>
                                                    </div>

                                                </a>
                                            </div>

                                            <div className="speciality-masterpage-card-content">
                                                <a href="#">
                                                    <div className="key-master-row">
                                                        <div className="key-master-image">
                                                            <img src="img/key-proce4.png" alt="" className="img-fluid" />
                                                        </div>
                                                        <div className="key-master-content">
                                                            <h5>Esophagitis  </h5>
                                                        </div>
                                                    </div>

                                                </a>
                                            </div>

                                        </div>




                                    </div>
                                </div>

                            </div>

                            <div className="col-md-3">
                                <a href="#">
                                    <div className="key-master-book-appointment-btn mb-1">
                                        <div className="key-master-book-appointment-content">
                                            <img src="img/doctor.svg" alt="" className="img-fluid" />
                                            <h5> Find a Doctor</h5>
                                        </div>

                                    </div>
                                </a>

                                <a href="#">
                                    <div className="key-master-book-appointment-btn mb-1">
                                        <div className="key-master-book-appointment-content">
                                            <img src="img/calender.svg" alt="" className="img-fluid" />
                                            <h5> Book an Appointment</h5>
                                        </div>

                                    </div>
                                </a>

                                <a href="#">
                                    <div className="key-master-help-btn">
                                        <div className="key-master-book-appointment-content">
                                            <h5> Need Help Making An Appointment?</h5>
                                        </div>

                                    </div>
                                </a>
                                <a href="tel:+914712941400">
                                    <div className="key-master-call-btn">
                                        <div className="key-master-book-appointment-content text-center">
                                            <h5> Please Call</h5>
                                            <h4><i className="fa-solid fa-phone"></i> +91 471 294 1400</h4>
                                        </div>

                                    </div>
                                </a>
                            </div>

                        </div>
                    </div>
                </section>
            </div>

            <Footer />
        </>
    )
}

export default page;