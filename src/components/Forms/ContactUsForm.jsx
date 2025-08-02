"use client"
import getStaticText from "@/helper/getStaticText";
import langLoc from '@/helper/getLangLoc';
import { useEffect, useState } from "react";
import getCurrentLangLocClient from "@/helper/getCurrentLangLocClient";

const ContactUsForm = () => {
    const [staticTexts, setStaticTexts] = useState({});
    const [allLocation, setAllLocation] = useState();
    const [selectedLocation, setSelectedLocation] = useState(null);


    useEffect(() => {
        const fetchTexts = async () => {
            setStaticTexts({ ...await getStaticText() })
        };

        fetchTexts();
    }, []);


    useEffect(() => {
        const get = async () => {
            setAllLocation(await langLoc.getLocations());

            const loc = (await getCurrentLangLocClient()).loc;
            setSelectedLocation(loc.slug);
        }

        get()

    }, [])
    return (
        <div className="col-md-6 contact-right-col order-lg-2 order-1 ">
            <div className="association-form-card mb-5 sticky-from custom-tab-button-wrapper">
                <div className="tab-group text-start mb-3">
                    <button type="button" className="btn-tab treat-tab form-btn w-auto w-md-100 mb-lg-auto mb-1 active mx-2 omega d-inline-block"
                        onClick={() => showBox('omega')}>
                        {staticTexts['Appointment Queries']}
                    </button>

                    <button type="button" className="btn-tab form-btn w-auto w-md-100 treat-tab mx-2 omega1" onClick={() => showBox('omega1')}>
                        {staticTexts['Feedback/Complaints']}
                    </button>
                </div>
                <div className="treat-box" id="omega" style={{ 'display': 'block' }}>
                    <div className="custom-from bg-field mx-0">
                        <div className="row justify-content-between">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-12 mb-3">
                                <label htmlFor=''>{staticTexts['First Name']}*</label>
                                <input type="text" className="form-control pe-0" />

                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-12 mb-3">
                                <label htmlFor=''>{staticTexts['Last Name']}*</label>
                                <input type="text" className="form-control pe-0" />
                            </div>


                            <div className="col-xl-6 col-lg-6 col-md-6 col-12 mb-3">
                                <label htmlFor=''>{staticTexts['Mobile Number']}*</label>
                                <input type="text" id="phone" defaultValue="+91" className="form-control pe-0" />
                            </div>

                            <div className="col-xl-6 col-lg-6 col-md-6 col-12 mb-3">
                                <label htmlFor=''>{staticTexts['Email']}*</label>
                                <input type="text" className="form-control pe-0" />
                            </div>
                            <div className="col-xl-12 col-lg-12 col-md-12 col-12 mb-3">
                                <label htmlFor=''>{staticTexts['Hospitals']}*</label>
                                <select className="form-select from-location" value={selectedLocation} onChange={(e) => {
                                    setSelectedLocation(e.target.value)
                                }}>
                                    <option value={""}>{staticTexts['All Hospital']}</option>
                                    {
                                        allLocation?.map((loc, i) => {
                                            return <option value={loc.slug} key={i}>{loc.title}</option>
                                        })
                                    }
                                </select>
                            </div>

                            <div className="col-xl-12 col-lg-12 col-md-12 col-12 mb-3">
                                <label htmlFor=''>{staticTexts['Query']}*</label>
                                <textarea className="form-control" placeholder="Leave a comment here"
                                    id="floatingTextarea"></textarea>
                            </div>

                            <div className="col-xl-6 col-lg-6 col-md-6 col-12 mb-3">
                                <div className="from-btn">
                                    <button type="button"
                                        className="btn d-inline-block w-auto">{staticTexts['Submit']}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="treat-box" id="omega1" style={{ display: 'none' }}>
                    <div className="custom-from bg-field mx-0">
                        <div className="row justify-content-between">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-12 mb-3">
                                <label htmlFor=''>{staticTexts['First Name']}*</label>
                                <input type="text" className="form-control pe-0" />
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-12 mb-3">
                                <label htmlFor=''>{staticTexts['Last Name']}*</label>
                                <input type="text" className="form-control pe-0" />
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-12 mb-3">
                                <label htmlFor=''>{staticTexts['Mobile Number']}*</label>
                                <input type="text" id="tel" defaultValue="+91" className="form-control pe-0" />
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-12 mb-3">
                                <label htmlFor=''>{staticTexts['Email']}*</label>
                                <input type="text" className="form-control pe-0" />
                            </div>
                            <div className="col-xl-12 col-lg-12 col-md-12 col-12 mb-3">
                                <label htmlFor=''>{staticTexts['Hospitals']}*</label>
                                <select className="form-select from-location">
                                    <option value={""}>{staticTexts['Select Hospital']}</option>
                                    {
                                        allLocation?.map((loc, i) => {
                                            return <option value={loc.title} key={i}>{loc.title}</option>
                                        })
                                    }
                                </select>
                            </div>
                            <div className="col-xl-12 col-lg-12 col-md-12 col-12 mb-3">
                                <label htmlFor=''>{staticTexts['Query']}*</label>
                                <textarea className="form-control" placeholder={staticTexts["Leave a comment here"]}
                                    id="floatingTextarea"></textarea>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-12 mb-3">
                                <div className="from-btn">
                                    <button type="button"
                                        className="btn d-inline-block w-auto">{staticTexts['Submit']}</button>
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