"use client"
import langLoc from '@/helper/getLangLoc';
import getStaticText from '@/helper/getStaticText';
import React, { useEffect, useState } from 'react'

const FormSpeciality = ({ title }) => {
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
      
      <div className="row">
        <div className="col-md-8">
          <div className="rounded-field-form text-center">
            <h3>{staticTexts[title]}</h3>
              <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-12 mb-3">
                  <div className="input-group">
                    <select className="form-select ">
                      <option value={""}>{staticTexts['All Hospital']}</option>
                      {
                        allLocation?.map((loc, i) => {
                          return <option value={loc.title} key={i}>{loc.title}</option>
                        })
                      }

                    </select>
                    <span className="input-group-text"><i className="fa-solid fa-chevron-down"></i></span>
                  </div>

                </div>
                <div className="col-xl-12 col-lg-12 col-md-12 col-12 mb-3">
                  <input type="text" className="form-control border-0"
                    placeholder={`${staticTexts['Enter Your Name']} *`} aria-label="Username"
                    aria-describedby="basic-addon1" />
                </div>
                <div className="col-xl-12 col-lg-12 col-md-12 col-12 mb-3">
                  <input type="text" className="form-control border-0"
                    placeholder={`${staticTexts['Enter 10 Digit Mobile Number']} *`} aria-label="Username"
                    aria-describedby="basic-addon1" />
                </div>
                <div className="col-xl-12 col-lg-12 col-md-12 col-12">
                  <div className="from-btn">
                    <button type="button" className="btn">{staticTexts['Request a Call Back']}</button>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default FormSpeciality;
