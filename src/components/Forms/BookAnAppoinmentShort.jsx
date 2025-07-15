"use client"
import langLoc from '@/helper/getLangLoc'
import getStaticText from '@/helper/getStaticText'
import React, { useEffect, useState } from 'react'

const BookAnAppoinmentShort = () => {
    const [locationList, setLocationList] = useState()
    const [staticTexts, setStaticTexts] = useState({});


    useEffect(() => {
        const fetchTexts = async () => {
            setStaticTexts({ ...await getStaticText() })
        };

        fetchTexts();
    }, []);



    useEffect(() => {
        const get = async () => {
            setLocationList(await langLoc.getLocations())
        }

        get()

    }, [])

    return (
        <section className="section py-4 d-lg-block d-none">
            <div className="container">
                <div className="custom-from">
                    <div className="row justify-content-between">
                        <div className="col-xl-3 col-lg-3 col-md-3 col-12">
                            <div className="input-group mb-lg-0 mb-3">
                                <span className="input-group-text" id="from-icon"><i
                                    className="fa-solid icon-location-pin"></i></span>
                                <select className="form-select from-location">
                                    <option value={""}>{staticTexts['Select hospital location']}</option>
                                    {
                                        locationList?.map((loc, i) => {
                                            return <option value={loc.id} key={i}>{loc.title}</option>
                                        })
                                    }
                                </select>
                            </div>
                        </div>

                        <div className="col-xl-3 col-lg-3 col-md-3 col-12">
                            <div className="input-group mb-lg-0 mb-3">
                                <span className="input-group-text" id="from-icon"><i
                                    className="fa-solid fa-magnifying-glass"></i></span>
                                <input type="text" className="form-control pe-0" placeholder="Search doctor/specialities"
                                    aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-3 col-12">
                            <div className="from-btn">
                                <button type="button" className="btn">{staticTexts['Book An Appointment']}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BookAnAppoinmentShort;
