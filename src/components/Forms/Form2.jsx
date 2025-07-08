"use client"
import getStaticText from '@/helper/getStaticText';
import React, { useEffect, useState } from 'react'

const Form2 = ({title}) => {
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
      <form action="" method="">
        <div className="row">
          <div className="col-xl-8 col-lg-8 col-md-8 col-12 mb-3">
            <input type="text" className="form-control border-0"
              placeholder={`${staticTexts['Enter Your Name']} *`} aria-label="Username"
              aria-describedby="basic-addon1" />
          </div>
          <div className="col-xl-8 col-lg-8 col-md-8 col-12 mb-3">
            <input type="text" className="form-control border-0"
              placeholder={`${staticTexts['Enter 10 Digit Mobile Number']} *`} aria-label="Username"
              aria-describedby="basic-addon1" />
          </div>
          <div className="col-xl-8 col-lg-8 col-md-8 col-12">
            <div className="from-btn">
              <button type="button" className="btn">{staticTexts['Request a Call Back']}</button>
            </div>
          </div>
        </div>
      </form>
    </>
  )
}

export default Form2