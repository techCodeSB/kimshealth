"use client"
import getStaticText from '@/helper/getStaticText';
import React, { useEffect, useState } from 'react'

const FormInternationalMiddle = () => {
    const [staticTexts, setStaticTexts] = useState({});


    useEffect(() => {
        const fetchTexts = async () => {
            setStaticTexts({ ...await getStaticText() })
        };

        fetchTexts();
    }, []);



    return (
        <div className="row justify-content-center">
            <div className="col-md-4 col-12 mb-3">
                <div className="input-group">
                    <input type="text" className="form-control" placeholder={staticTexts["Enter Your Name"]}
                        name="search" />
                </div>
            </div>
            <div className="col-md-4 col-12 mb-3">
                <div className="input-group">
                    <input type="text" className="form-control phone-international" defaultValue={'+1'}
                        placeholder={staticTexts["Enter Mobile Number"]} name="search" />
                </div>
            </div>

            <div className="col-lg-2 col-xl-3 col-md-3 col-12 mb-3 ">
                <button className="form-btn w-100 px-5">{staticTexts['Submit']}</button>
            </div>
        </div>
    )
}

export default FormInternationalMiddle;
