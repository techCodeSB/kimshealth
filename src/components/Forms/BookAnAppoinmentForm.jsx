"use client";
import getStaticText from '@/helper/getStaticText';
import getCurrentLangLocClient from '@/helper/getCurrentLangLocClient'
import langLoc from '@/helper/getLangLoc'
import React, { useEffect, useState } from 'react'

const BookAnAppoinmentForm = ({ pageContent, URLParams }) => {
  const [staticText, setStaticText] = useState({});
  const [locationList, setLocationList] = useState()
  const [selectedLocation, setSelectedLocation] = useState(URLParams.location)
  const [selectedSpeciality, setSelectedSpeciality] = useState(URLParams.speciality);
  const [selectedDoctor, setSelectedDoctor] = useState(URLParams.doctor);
  const [allSpeciality, setAllSpeciality] = useState();
  const [allDoctors, setAllDoctors] = useState([]);
  const [doctorLoading, setDoctorLoading] = useState(true);

  useEffect(() => {
    const fetchTexts = async () => {
      setStaticText({ ...await getStaticText() })
    };

    fetchTexts();
  }, []);



  const getSpeciality = async ({ lang, loc }) => {

    const baseUrl = process.env.NEXT_PUBLIC_CMS_API_URL;
    // Get total count
    const initialReq = await fetch(`${baseUrl}/specialty-details?filters[locations][slug][$eq]=${loc}`);
    const initialRes = await initialReq.json();
    const totalCount = initialRes.meta.pagination.total;

    const limit = 100;
    const pages = Math.ceil(totalCount / limit);
    let data = [];

    // Actual Data
    for (let i = 0; i < pages; i++) {
      const start = i * limit;
      const url = `${baseUrl}/specialty-details?populate=*&pagination[start]=${start}&pagination[limit]=${limit}&filters[locations][slug][$eq]=${loc}&sort=title:asc`;
      const res = await fetch(url);
      const json = await res.json();
      data = [...data, ...json.data];
    }

    setAllSpeciality(data);
  }


  const getDoctor = async ({ lang, loc, speciality }) => {
    setDoctorLoading(true)
    const baseUrl = process.env.NEXT_PUBLIC_CMS_API_URL;

    const locationFilter = loc
      ? `&filters[locations][slug][$eq]=${loc}`
      : ``;

    const specialityFilter = speciality
      ? `&filters[specialities][slug][$eq]=${speciality}`
      : ``;

    // Get total count
    const initialReq = await fetch(`${baseUrl}/doctor-details?${locationFilter}${specialityFilter}`);
    const initialRes = await initialReq.json();
    const totalCount = initialRes.meta.pagination.total;

    const limit = 100;
    const pages = Math.ceil(totalCount / limit);
    let data = [];

    // Actual Data
    for (let i = 0; i < pages; i++) {
      const start = i * limit;
      const url = `${baseUrl}/doctor-details?populate=*&pagination[start]=${start}&pagination[limit]=${limit}${locationFilter}${specialityFilter}&sort=name:asc`;
      const res = await fetch(url);
      const json = await res.json();
      data = [...data, ...json.data];
    }

    setAllDoctors(data);
    setDoctorLoading(false)
  }




  useEffect(() => {
    const get = async () => {
      let currentLangLoc = await getCurrentLangLocClient();
      setLocationList(await langLoc.getLocations())
      await getSpeciality({ loc: selectedLocation == "" ? currentLangLoc.loc.slug : selectedLocation });
      await getDoctor({ loc: selectedLocation == "" ? "" : selectedLocation, speciality: selectedSpeciality == "" ? "" : selectedSpeciality });

    }
    get()

  }, [selectedLocation, selectedSpeciality])

  return (
    <>

      <section className="section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12 mb-3">
              <div className="book-appointment-card">
                <div className="main-heading text-center mb-4">
                  <h2>{pageContent[1]?.title}</h2>
                </div>

                <div className="row justify-content-center">
                  <div className="col-md-10">
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <div className="custom-from bg-field mx-0">
                          <div className="row justify-content-between">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-12 mb-3">
                              <label htmlFor=''>{staticText['Patient / Visitor Name']}*</label>
                              <input type="text" placeholder="Enter Your Name" name=""
                                className="form-control pe-0" />

                            </div>
                            <div className="col-xl-12 col-lg-12 col-md-12 col-12 mb-3">
                              <label htmlFor=''>{staticText['Contact Number']}*</label>
                              <input type="text" placeholder={staticText["Enter Your Phone Number"]} name=""
                                className="form-control pe-0" />
                            </div>


                            <div className="col-xl-12 col-lg-12 col-md-12 col-12 mb-3">
                              <label htmlFor=''>{staticText['Location']}*</label>
                              <select className="form-select from-location" value={selectedLocation} onChange={(e) => {
                                setSelectedLocation(e.target.value)
                                setSelectedSpeciality("")
                              }}>
                                <option value={""}>{staticText['Select a Location']}</option>
                                {
                                  locationList?.map((loc, i) => {
                                    return <option value={loc.slug} key={i}>{loc.title}</option>
                                  })
                                }
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 mb-3">
                        <div className="custom-from bg-field mx-0">
                          <div className="row justify-content-between">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-12 mb-3">
                              <label htmlFor=''>{staticText['Select Department']}*</label>
                              <select className="form-select from-location" value={selectedSpeciality} onChange={(e) => {
                                setSelectedSpeciality(e.target.value)
                              }}>
                                <option value={""}>{staticText['Select a Department']}</option>
                                {
                                  allSpeciality?.map((splty, i) => {
                                    return <option value={splty.speciality?.slug} key={i}>{splty.title}</option>
                                  })
                                }
                              </select>
                            </div>

                            <div className="col-xl-12 col-lg-12 col-md-12 col-12 mb-3">
                              <label htmlFor=''>{staticText['Select Doctors']}*</label>
                              <select className="form-select from-location" value={selectedDoctor} onChange={(e) => {
                                setSelectedDoctor(e.target.value)
                              }}>
                                {!doctorLoading ? (
                                  <>
                                    <option value="">{staticText['Select a Doctor']}</option>
                                    {allDoctors.map((d, i) => (
                                      <option value={d?.slug} key={i}>
                                        {d.name}
                                      </option>
                                    ))}
                                  </>
                                ) : (
                                  <option value="">{staticText['Loading...'] || 'Loading...'}</option>
                                )}
                              </select>
                            </div>

                            <div className="col-xl-12 col-lg-12 col-md-12 col-12 mb-3">
                              <label htmlFor=''>{staticText['Appointment Date']}*</label>
                              <div className="input-group">
                                <input type="text" placeholder="Select Your Date" name=""
                                  className="form-control pe-0 datepicker" autoComplete="off" />
                                <span className="input-group-text" id="from-icon"><i
                                  className="icon-calendar"></i></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="from-btn text-center">
                          <button type="button" className="btn d-inline-block w-auto">{staticText['Submit']}</button>
                        </div>
                      </div>
                    </div>



                  </div>
                </div>
              </div>
            </div>
            {/* <div className="col-md-5 mb-3">
                                        <div className="main-heading">
                                            <h2>{pageContent[2]?.title}</h2>
                                        </div>
                                        <div className="custom-from bg-field mx-0">
                                            <div className="row justify-content-between">
                                                <div className="col-xl-12 col-lg-12 col-md-12 col-12 mb-3">
                                                    <label htmlFor=''>Select Department*</label>
                                                    <select className="form-select from-location">
                                                        <option >Select a Department</option>
                                                        <option value="1">One</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                    </select>
                                                </div>


                                                <div className="col-xl-12 col-lg-12 col-md-12 col-12 mb-3">
                                                    <label htmlFor=''>Select Doctors*</label>
                                                    <select className="form-select from-location">
                                                        <option >Select a Doctor</option>
                                                        <option value="1">One</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                    </select>
                                                </div>


                                                <div className="col-xl-12 col-lg-12 col-md-12 col-12 mb-3">
                                                    <label htmlFor=''>Appointment Date*</label>
                                                    <div className="input-group">
                                                        <input type="text" placeholder="Select Your Date" name=""
                                                            className="form-control pe-0 datepicker" autoComplete="off" />
                                                        <span className="input-group-text" id="from-icon"><i
                                                            className="icon-calendar"></i></span>
                                                    </div>
                                                </div>


                                                <div className="col-xl-12 col-lg-12 col-md-12 col-12 mb-3">
                                                    <label htmlFor=''>Appointment Time*</label>
                                                    <div className="input-group">
                                                        <input type="text" placeholder="Select Your Time" name=""
                                                            className="form-control pe-0 timePicker" autoComplete="off" />
                                                        <span className="input-group-text" id="from-icon"><i
                                                            className="icon-clock"></i></span>
                                                    </div>
                                                </div>
                                                <div className="col-xl-6 col-lg-6 col-md-6 col-12 mb-3">
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}
          </div>
        </div>
      </section>
    </>
  )
}

export default BookAnAppoinmentForm;