"use client"
import getStaticText from '@/helper/getStaticText';
import React, { useEffect, useState } from 'react'

const CorporateForm = () => {
    const [staticTexts, setStaticTexts] = useState({});
    const [allLocation, setAllLocation] = useState();
    const [selectedLocation, setSelectedLocation] = useState(null);
    const [formData, setFormData] = useState({
        subject: 'Appointment Queries', fname: "", lname: '', number: '', email: '', hostpital: '', query: ''
    });

    useEffect(() => {
        const fetchTexts = async () => {
            setStaticTexts({ ...await getStaticText() })
        };

        fetchTexts();
    }, []);



    return (
        <div className="row">
            <div className="col-md-4 mb-3">
                <div className="corporate-notice-form association-form-card">
                    <h3>Notice of General Meetings</h3>
                    <div className="row">
                        <div className="col-md-12 mb-3">
                            <div className="input-group mb-lg-0 mb-3">
                                <span className="input-group-text" id="from-icon">
                                    <i className="fa-regular fa-envelope"></i>
                                </span>
                                <input type="text" className="form-control" placeholder={staticTexts['Email']} name="Email" />
                            </div>

                        </div>
                        <div className="col-md-12 mb-3">
                            <div className="input-group mb-lg-0 mb-3">
                                <span className="input-group-text" id="from-icon">
                                    <i className="fa-regular fa-pen-to-square"></i>
                                </span>
                                <select className="form-select from-location">
                                    <option value="">Select Notice</option>
                                    <option value="trivandrum">Trivandrum</option>
                                    <option value="perintalmanna">Perintalmanna</option>
                                    <option value="nagercoil">Nagercoil</option>
                                    <option value="kottayam">Kottayam</option>
                                    <option value="kollam">Kollam</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-12 mb-3 text-start">
                            <button
                                className="btn mb-lg-0 mb-2 hospital-primarybtn px-5 py-2">{staticTexts['Submit']}</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-md-4 mb-3">
                <div className="corporate-notice-form association-form-card">
                    <h3>Download Annual Report</h3>
                    <div className="row">
                        <div className="col-md-12 mb-3">
                            <div className="input-group mb-lg-0 mb-3">
                                <span className="input-group-text" id="from-icon">
                                    <i className="fa-regular fa-envelope"></i>
                                </span>
                                <input type="text" className="form-control" placeholder={staticTexts['Email']} name="Email" />
                            </div>

                        </div>
                        <div className="col-md-12 mb-3">
                            <div className="input-group mb-lg-0 mb-3">
                                <span className="input-group-text" id="from-icon">
                                    <i className="fa-regular fa-pen-to-square"></i>
                                </span>
                                <select className="form-select from-location">
                                    <option value="">Select Report</option>
                                    <option value="trivandrum">Trivandrum</option>
                                    <option value="perintalmanna">Perintalmanna</option>
                                    <option value="nagercoil">Nagercoil</option>
                                    <option value="kottayam">Kottayam</option>
                                    <option value="kollam">Kollam</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-12 mb-3 text-start">
                            <button
                                className="btn mb-lg-0 mb-2 hospital-primarybtn px-5 py-2">{staticTexts['Submit']}</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-md-4 mb-3">
                <div className="corporate-notice-form association-form-card">
                    <h3>Download Draft Annual Return</h3>
                    <div className="row">
                        <div className="col-md-12 mb-3">
                            <div className="input-group mb-lg-0 mb-3">
                                <span className="input-group-text" id="from-icon">
                                    <i className="fa-regular fa-envelope"></i>
                                </span>
                                <input type="text" className="form-control" placeholder={staticTexts['Email']} name="Email" />
                            </div>

                        </div>
                        <div className="col-md-12 mb-3">
                            <div className="input-group mb-lg-0 mb-3">
                                <span className="input-group-text" id="from-icon">
                                    <i className="fa-regular fa-pen-to-square"></i>
                                </span>
                                <select className="form-select from-location">
                                    <option value="">Select Report</option>
                                    <option value="trivandrum">Trivandrum</option>
                                    <option value="perintalmanna">Perintalmanna</option>
                                    <option value="nagercoil">Nagercoil</option>
                                    <option value="kottayam">Kottayam</option>
                                    <option value="kollam">Kollam</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-12 mb-3 text-start">
                            <button 
                                className="btn mb-lg-0 mb-2 hospital-primarybtn px-5 py-2">
                                {staticTexts['Submit']}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CorporateForm