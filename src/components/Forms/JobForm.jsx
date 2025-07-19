"use client"
import getStaticText from '@/helper/getStaticText';
import React, { useEffect, useState } from 'react'

const JobForm = ({ title }) => {
  const [staticTexts, setStaticTexts] = useState({});

  useEffect(() => {
    const fetchTexts = async () => {
      setStaticTexts({ ...await getStaticText() })
    };

    fetchTexts();
  }, []);


  return (
    <>
      <h3>{staticTexts[title]}</h3>
        <div className="row">
          <div className="col-md-12 mb-3">
            <input type="text" className="form-control" placeholder={staticTexts['Name']} name="name" />
          </div>
          <div className="col-md-12 mb-3">
            <input type="text" className="form-control"
              placeholder={staticTexts['Enter 10 Digit Mobile Number']} name="name" />
          </div>
          <div className="col-xl-12 col-lg-12 col-md-12 col-12 mb-3">
            <div className="file-input-group">
              <input type="file" maxLength="100"
                id="file-input" className="form-control file-input__input"
                name="report" />
              <label htmlFor="file-input" className="file-input-label"><i
                className="icon-docs"></i><span>{staticTexts['Attach Report']}</span>
              </label>
            </div>
          </div>
          <div className="col-md-12 mb-3 text-center">
            <button
              className="btn mb-lg-0 mb-2 hospital-primarybtn px-5 py-2">{staticTexts['Submit']}</button>
          </div>
        </div>
    </>
  )
}

export default JobForm