import getStaticText from '@/helper/getStaticText';
import React, { useEffect, useState } from 'react';


const Form3 = ({ title }) => {
    const [staticTexts, setStaticTexts] = useState({});

    useEffect(() => {
        const fetchTexts = async () => {
            setStaticTexts({ ...await getStaticText() })
        };

        fetchTexts();
    }, []);

    return (
        <>
            <h3>{title}</h3>
            <div className="rounded-field-form mb-3">
                <div className="row">
                    <div className="col-12 mb-3">
                        <label className="form-label">{staticTexts['Name']} <span>*</span></label>
                        <input type="text" className="form-control" placeholder={staticTexts['Enter Your Name']} name="name" />
                    </div>

                    <div className="col-12 mb-3">
                        <label className="form-label">{staticTexts['Mobile Number']}<span>*</span></label>
                        <input type="text" className="form-control" placeholder={staticTexts['Enter Mobile No.']} name="name" />
                    </div>

                    <div className="col-12 mb-3">
                        <button className="form-btn">{staticTexts['Submit']}</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Form3;
