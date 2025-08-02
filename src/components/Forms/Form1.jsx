"use client"
import getStaticText from '@/helper/getStaticText';
import React, { useEffect, useState } from 'react'
import langLoc from '@/helper/getLangLoc';
import getCurrentLangLocClient from '@/helper/getCurrentLangLocClient';

const Form1 = ({ title }) => {
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
      setAllLocation(await langLoc.getLocations())

      const loc = (await getCurrentLangLocClient()).loc;
      setSelectedLocation(loc.slug);
    }

    get()

  }, [])


  return (
    <>
      <h3>{staticTexts[title]}</h3>
      <form action="">
        <div className="row">
          <div className="col-md-12 mb-3">
            <input type="text" className="form-control" placeholder={staticTexts['Name']} name="name" />
          </div>
          <div className="col-md-12 mb-3">
            <select className="form-control" value={selectedLocation} onChange={(e)=>{
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
          <div className="col-md-12 mb-3">
            <input type="text" className="form-control"
              placeholder={staticTexts['Enter 10 Digit Mobile Number']} name="name" />
          </div>
          <div className="col-md-12 mb-3">
            <textarea className="form-control" placeholder={staticTexts['Message']}
              id="floatingTextarea"></textarea>
          </div>
          <div className="col-md-12 mb-3 text-center">
            <button className="btn mb-lg-0 mb-2 hospital-primarybtn px-5 py-2">{staticTexts['Submit']}</button>
          </div>
        </div>
      </form>
    </>
  )
}

export default Form1