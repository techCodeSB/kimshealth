"use client"
import getStaticText from '@/helper/getStaticText';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

const CorporateForm = () => {
    const [staticTexts, setStaticTexts] = useState({});
    const [loading, setLoading] = useState(false);

    // separate states for each block
    const [noticeForm, setNoticeForm] = useState({ email: "", report_notice_type: "", type: "Notice of General Meetings" });
    const [annualForm, setAnnualForm] = useState({ email: "", report_notice_type: "", type: "Download Annual Report" });
    const [draftForm, setDraftForm] = useState({ email: "", report_notice_type: "", type: "Download Draft Annual Return" });

    const sendMail = async (formData) => {
        setLoading(true);

        if ([formData.email, formData.report_notice_type].some((field) => !field || field === "")) {
            toast("Fill the required fields", { theme: 'light', type: 'error', closeOnClick: true });
            setLoading(false);
            return;
        }

        try {
            const htmlMsg = `
                <ul>
                    <li><strong> Subject: </strong> ${formData.type}</li>
                    <li><strong> Email: </strong> ${formData.email}</li>
                    <li><strong> Report/Notice: </strong> ${formData.report_notice_type}</li>
                    <li><strong> Page URL: </strong> ${document.location.href}</li>
                </ul>`;

            const req = await fetch("/api/send-mail", {
                method: 'POST',
                headers: { "Content-type": "application/json" },
                body: JSON.stringify({ data: htmlMsg, formType: "Corporate" }),
            });

            const res = await req.json();

            if (req.status !== 200) {
                toast(res.err, { theme: 'light', type: 'error', closeOnClick: true });
            } else {
                toast("Successfully sent", { theme: 'light', type: 'success', closeOnClick: true });
            }

            // reset the specific form
            if (formData.type === "Notice of General Meetings") setNoticeForm({ email: "", report_notice_type: "", type: formData.type });
            if (formData.type === "Download Annual Report") setAnnualForm({ email: "", report_notice_type: "", type: formData.type });
            if (formData.type === "Download Draft Annual Return") setDraftForm({ email: "", report_notice_type: "", type: formData.type });

        } catch (error) {
            console.log(error);
            toast("Something went wrong", { theme: 'light', type: 'error', closeOnClick: true });
        }

        setLoading(false);
    }

    useEffect(() => {
        const fetchTexts = async () => setStaticTexts({ ...await getStaticText() });
        fetchTexts();
    }, []);

    return (
        <div className="row">

            {/* Notice Form */}
            <div className="col-md-4 mb-3">
                <div className="corporate-notice-form association-form-card">
                    <h3>{staticTexts['Notice of General Meetings']}</h3>
                    <div className="row">
                        <div className="col-md-12 mb-3">
                            <div className="input-group mb-lg-0 mb-3">
                                <span className="input-group-text"><i className="fa-regular fa-envelope"></i></span>
                                <input type="text" className="form-control" placeholder={staticTexts['Email']}
                                    value={noticeForm.email}
                                    onChange={(e) => setNoticeForm({ ...noticeForm, email: e.target.value })} />
                            </div>
                        </div>
                        <div className="col-md-12 mb-3">
                            <div className="input-group mb-lg-0 mb-3">
                                <span className="input-group-text"><i className="fa-regular fa-pen-to-square"></i></span>
                                <select className="form-select from-location"
                                    value={noticeForm.report_notice_type}
                                    onChange={(e) => setNoticeForm({ ...noticeForm, report_notice_type: e.target.value })}>
                                    <option value="">{staticTexts['Select Notice']}</option>
                                    <option value="Notice - 20th AGM">Notice - 20th AGM</option>
                                    <option value="Notice - 21st AGM">Notice - 21st AGM</option>
                                    <option value="Notice - 22nd AGM">Notice - 22nd AGM</option>
                                    <option value="Notice of EGM">Notice of EGM</option>
                                    <option value="Notice - 23rd AGM">Notice - 23rd AGM</option>
                                    <option value="Notice - 24th AGM">Notice - 24th AGM</option>
                                    <option value="Notice - 25th AGM">Notice - 25th AGM</option>
                                    <option value="Notice - 26th AGM">Notice - 26th AGM</option>
                                    <option value="Notice - 27th AGM">Notice - 27th AGM</option>
                                    <option value="Notice - 28th AGM">Notice - 28th AGM</option>
                                    <option value="Notice - 29th AGM">Notice - 29th AGM</option>
                                    <option value="EGM Notice_24.02.2024">EGM Notice_24.02.2024</option>
                                    <option value="Notice of 30th AGM">Notice of 30th AGM</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-12 mb-3 text-start">
                            <button className="btn hospital-primarybtn px-5 py-2"
                                disabled={loading}
                                onClick={() => sendMail(noticeForm)}>
                                {staticTexts['Submit']}
                                {loading && <i className="fas fa-spinner fa-spin ms-1"></i>}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Annual Report Form */}
            <div className="col-md-4 mb-3">
                <div className="corporate-notice-form association-form-card">
                    <h3>{staticTexts['Download Annual Report']}</h3>
                    <div className="row">
                        <div className="col-md-12 mb-3">
                            <div className="input-group mb-lg-0 mb-3">
                                <span className="input-group-text"><i className="fa-regular fa-envelope"></i></span>
                                <input type="text" className="form-control" placeholder={staticTexts['Email']}
                                    value={annualForm.email}
                                    onChange={(e) => setAnnualForm({ ...annualForm, email: e.target.value })} />
                            </div>
                        </div>
                        <div className="col-md-12 mb-3">
                            <div className="input-group mb-lg-0 mb-3">
                                <span className="input-group-text"><i className="fa-regular fa-pen-to-square"></i></span>
                                <select className="form-select from-location"
                                    value={annualForm.report_notice_type}
                                    onChange={(e) => setAnnualForm({ ...annualForm, report_notice_type: e.target.value })}>
                                    <option value="">{staticTexts['Select Report']}</option>
                                    <option value="FY 2014-2015">FY 2014-2015</option>
                                    <option value="FY 2015-2016">FY 2015-2016</option>
                                    <option value="FY 2016-2017">FY 2016-2017</option>
                                    <option value="FY 2017-2018">FY 2017-2018</option>
                                    <option value="FY 2018-2019">FY 2018-2019</option>
                                    <option value="FY 2019 - 2020">FY 2019 - 2020</option>
                                    <option value="FY 2020 - 2021">FY 2020 - 2021</option>
                                    <option value="FY 2021- 2022">FY 2021- 2022</option>
                                    <option value="FY 2022-2023">FY 2022-2023</option>
                                    <option value="FY 2023-2024">FY 2023-2024</option>
                                    <option value="FY 2024-2025">FY 2024-2025</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-12 mb-3 text-start">
                            <button className="btn hospital-primarybtn px-5 py-2"
                                disabled={loading}
                                onClick={() => sendMail(annualForm)}>
                                {staticTexts['Submit']}
                                {loading && <i className="fas fa-spinner fa-spin ms-1"></i>}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Draft Annual Return Form */}
            <div className="col-md-4 mb-3">
                <div className="corporate-notice-form association-form-card">
                    <h3>{staticTexts['Download Draft Annual Return']}</h3>
                    <div className="row">
                        <div className="col-md-12 mb-3">
                            <div className="input-group mb-lg-0 mb-3">
                                <span className="input-group-text"><i className="fa-regular fa-envelope"></i></span>
                                <input type="text" className="form-control" placeholder={staticTexts['Email']}
                                    value={draftForm.email}
                                    onChange={(e) => setDraftForm({ ...draftForm, email: e.target.value })} />
                            </div>
                        </div>
                        <div className="col-md-12 mb-3">
                            <div className="input-group mb-lg-0 mb-3">
                                <span className="input-group-text"><i className="fa-regular fa-pen-to-square"></i></span>
                                <select className="form-select from-location"
                                    value={draftForm.report_notice_type}
                                    onChange={(e) => setDraftForm({ ...draftForm, report_notice_type: e.target.value })}>
                                    <option value="">{staticTexts['Select Report']}</option>
                                    <option value="Annual Return - 2020-21">Annual Return - 2020-21</option>
                                    <option value="Annual Return - 2021-22">Annual Return - 2021-22</option>
                                    <option value="Annual Return - 2022-23">Annual Return - 2022-23</option>
                                    <option value="Annual Return - 2023-24">Annual Return - 2023-24</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-12 mb-3 text-start">
                            <button className="btn hospital-primarybtn px-5 py-2"
                                disabled={loading}
                                onClick={() => sendMail(draftForm)}>
                                {staticTexts['Submit']}
                                {loading && <i className="fas fa-spinner fa-spin ms-1"></i>}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CorporateForm;
