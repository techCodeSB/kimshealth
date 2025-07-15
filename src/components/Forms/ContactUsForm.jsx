"use client"
import getStaticText from "@/helper/getStaticText";
import { useEffect, useState } from "react";

const ContactUsForm = () => {
    const [staticTexts, setStaticTexts] = useState({});


    useEffect(() => {
        const fetchTexts = async () => {
            setStaticTexts({ ...await getStaticText() })
        };

        fetchTexts();
    }, []);
    return (
        <div className="col-md-6 contact-right-col order-lg-2 order-1 ">
            <div className="association-form-card mb-5 sticky-from custom-tab-button-wrapper">
                <div className="tab-group text-start mb-3">
                    <button type="button" className="btn-tab treat-tab form-btn w-auto active mx-2 omega"
                        onClick={() => showBox('omega')}>
                        {staticTexts['Appointment Queries']}
                    </button>

                    <button type="button" className="btn-tab form-btn w-auto treat-tab mx-2 omega1" onClick={() => showBox('omega1')}>
                        {staticTexts['Feedback/Complaints']}
                    </button>
                </div>
                <div className="treat-box" id="omega" style={{ 'display': 'block' }}>
                    <div className="custom-from bg-field mx-0">
                        <div className="row justify-content-between">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-12 mb-3">
                                <label htmlFor=''>First Name*</label>
                                <input type="text" className="form-control pe-0" />

                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-12 mb-3">
                                <label htmlFor=''>Last Name*</label>
                                <input type="text" className="form-control pe-0" />
                            </div>


                            <div className="col-xl-6 col-lg-6 col-md-6 col-12 mb-3">
                                <label htmlFor=''>Mobile Number*</label>
                                <input type="text" id="phone" defaultValue="+91" className="form-control pe-0" />
                            </div>


                            <div className="col-xl-6 col-lg-6 col-md-6 col-12 mb-3">
                                <label htmlFor=''>Email*</label>
                                <input type="text" className="form-control pe-0" />
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
                    </div>
                </div>


                <div className="treat-box" id="omega1" style={{ display: 'none' }}>
                    <div className="custom-from bg-field mx-0">
                        <div className="row justify-content-between">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-12 mb-3">
                                <label htmlFor=''>First Name*</label>
                                <input type="text" className="form-control pe-0" />
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-12 mb-3">
                                <label htmlFor=''>Last Name*</label>
                                <input type="text" className="form-control pe-0" />
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-12 mb-3">
                                <label htmlFor=''>Mobile Number*</label>
                                <input type="text" id="tel" defaultValue="+91" className="form-control pe-0" />
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-12 mb-3">
                                <label htmlFor=''>Email*</label>
                                <input type="text" className="form-control pe-0" />
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
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUsForm