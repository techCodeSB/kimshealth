"use client"
import langLoc from '@/helper/getLangLoc';
import getStaticText from '@/helper/getStaticText';
import React, { useEffect, useState } from 'react'

const Form3 = ({ title }) => {
    const [allLocation, setAllLocation] = useState();
    const [staticTexts, setStaticTexts] = useState({});

    useEffect(() => {
        const fetchTexts = async () => {
            setStaticTexts({ ...await getStaticText() })
        };

        fetchTexts();
    }, []);

    useEffect(() => {
        const get = async () => {
            setAllLocation(await langLoc.getLocations())
        }

        get()

    }, [])

    return (
        <>
            <h3>{title}</h3>
            <div className="rounded-field-form mb-3">
                <div className="row">
                    <div className="col-12 mb-3">
                        <label className="form-label">{staticTexts['Select Hospital']} <span>*</span></label>
                        <select className="form-select">
                            <option value={""}>{staticTexts['All Hospital']}</option>
                            {
                                allLocation?.map((loc, i) => {
                                    return <option value={loc.title} key={i}>{loc.title}</option>
                                })
                            }
                        </select>
                    </div>
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
