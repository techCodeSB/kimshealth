"use client"
import getStaticText from '@/helper/getStaticText';
import React, { useEffect, useState } from 'react'

const FormInternational = () => {
    const [staticTexts, setStaticTexts] = useState({});


    useEffect(() => {
        const fetchTexts = async () => {
            setStaticTexts({ ...await getStaticText() })
        };

        fetchTexts();
    }, []);



    return (
        <form action="">
            <div className="row">
                <div className="col-md-6 col-12 mb-3">
                    <div className="input-group">
                        <input type="text" className="form-control"
                            placeholder={staticTexts["Enter Your Name"]} name="search" />
                    </div>
                </div>
                <div className="col-md-6 col-12 mb-3">
                    <div className="input-group">
                        <input type="text"
                            className="form-control phone-international" defaultValue={'+1'} placeholder={staticTexts["Enter Mobile Number"]}
                            name="search" />
                    </div>
                </div>

                <div className="col-md-6 col-12 mb-3">
                    <button className="form-btn w-auto px-5">{staticTexts['Submit']}</button>
                </div>
            </div>
        </form>
    )
}

export default FormInternational;
