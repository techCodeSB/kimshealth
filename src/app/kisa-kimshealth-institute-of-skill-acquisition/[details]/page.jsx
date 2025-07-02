import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'

const DoctoralCourseDetails = () => {
    return (
        <>
            <Header />
            <div role="main" className="main">
                <div className="home-details-main-page">
                    <div className="page-header">
                        <div className="container">
                            <h2>Course Details</h2>
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
                                        <li className="active"> Course Details</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>


                    <section className="section">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-8">
                                    <div className="main-heading sub-heading">
                                        <h2 className="mb-1">Lorem ipsum dolor sit amet, consectetur </h2>
                                        <h3 className="mb-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus similique blanditiis !</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla explicabo incidunt necessitatibus totam sit accusamus, molestiae temporibus libero possimus quia vero eligendi, non excepturi cumque eos in, dolores unde quam.</p>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In nostrum, error exercitationem, voluptatem labore ad corporis nisi esse quam asperiores earum reiciendis ab sunt dolor itaque corrupti laboriosam cumque omnis.</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis commodi eveniet eligendi et, voluptatem accusantium delectus laborum amet assumenda quo neque doloremque ipsum dolorum inventore minus velit accusamus debitis quidem!
                                            Impedit temporibus accusantium mollitia magnam, sunt consectetur amet perferendis earum sed dicta expedita in ipsam illo quod quia iste quis. Dolores itaque optio praesentium consequuntur necessitatibus, dignissimos magni dolore maiores.</p>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil suscipit mollitia dignissimos itaque, cupiditate, aspernatur ducimus iste sint cum accusantium enim, voluptate perspiciatis! Nostrum, amet recusandae dolore dicta quas voluptate?</p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="doctoral-card-content sub-heading mb-4">
                                        <h3>DNB Respiratory Diseases</h3>
                                        <p>Certified by: NBE, New Delhi</p>
                                        <ul>
                                            <li className="hourglass">Duration : 3 years</li>
                                            <li className="luxury">Eligibility : DTCD CET</li>
                                            <li className="calender-doc">Commencement : Jan</li>
                                        </ul>

                                    </div>
                                    <div className="association-form-card mb-5">
                                        <h3>GET A CALLBACK</h3>
                                        <form action="">
                                            <div className="row">
                                                <div className="col-md-12 mb-3">
                                                    <input type="text" className="form-control" placeholder="Name" name="name" />
                                                </div>
                                                <div className="col-md-12 mb-3">
                                                    <input type="text" className="form-control" placeholder="Enter 10 Digit Mobile Number" name="name" />
                                                </div>
                                                <div className="col-md-12 mb-3">
                                                    <textarea className="form-control" placeholder="Message" id="floatingTextarea"></textarea>
                                                </div>
                                                <div className="col-md-12 mb-3 text-center">
                                                    <button className="btn mb-lg-0 mb-2 hospital-primarybtn px-5 py-2">Submit</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="line-divider"></div>

                    <section className="section">
                        <div className="container">
                            <div className="main-heading">
                                <h2>Other Courses </h2>
                            </div>
                            <div className="owl-carousel owl-theme hospital-slider">
                                <div className="doctoral-card-content sub-heading m-3">
                                    <h3>DNB Respiratory Diseases</h3>
                                    <p>Certified by: NBE, New Delhi</p>
                                    <ul>
                                        <li className="hourglass">Duration : 3 years</li>
                                        <li className="luxury">Eligibility : DTCD CET</li>
                                        <li className="calender-doc">Commencement : Jan</li>
                                    </ul>
                                    <a href="#" className="doctotal-btn">View More</a>

                                </div>

                                <div className="doctoral-card-content sub-heading m-3">
                                    <h3>DNB Respiratory Diseases</h3>
                                    <p>Certified by: NBE, New Delhi</p>
                                    <ul>
                                        <li className="hourglass">Duration : 3 years</li>
                                        <li className="luxury">Eligibility : DTCD CET</li>
                                        <li className="calender-doc">Commencement : Jan</li>
                                    </ul>
                                    <a href="#" className="doctotal-btn">View More</a>

                                </div>

                                <div className="doctoral-card-content sub-heading m-3">
                                    <h3>DNB Respiratory Diseases</h3>
                                    <p>Certified by: NBE, New Delhi</p>
                                    <ul>
                                        <li className="hourglass">Duration : 3 years</li>
                                        <li className="luxury">Eligibility : DTCD CET</li>
                                        <li className="calender-doc">Commencement : Jan</li>
                                    </ul>
                                    <a href="#" className="doctotal-btn">View More</a>

                                </div>

                                <div className="doctoral-card-content sub-heading m-3">
                                    <h3>DNB Respiratory Diseases</h3>
                                    <p>Certified by: NBE, New Delhi</p>
                                    <ul>
                                        <li className="hourglass">Duration : 3 years</li>
                                        <li className="luxury">Eligibility : DTCD CET</li>
                                        <li className="calender-doc">Commencement : Jan</li>
                                    </ul>
                                    <a href="#" className="doctotal-btn">View More</a>
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

export default DoctoralCourseDetails