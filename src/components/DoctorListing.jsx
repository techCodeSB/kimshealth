"use client"
import doctorData from '@/app/lib/getDoctor'
import getStaticText from '@/helper/getStaticText'
import React, { useEffect, useState } from 'react'

const DoctorListing = ({ baseURL }) => {
    const [docData, setDocData] = useState()
    const [count, setCount] = useState(12)
    const [staticText, setStaticTexts] = useState({});

    useEffect(() => {
        const fetchTexts = async () => {
            setStaticTexts({ ...await getStaticText() })
        };

        fetchTexts();
    }, []);

    useEffect(() => {

        const getFstLoad = async () => {
            const data = await doctorData.getDoctorAll(0, count)
            setDocData(data);
            console.log("doc", data)
        }
        getFstLoad()

    }, [])


    const loadDoctor = async () => {
        const data = await doctorData.getDoctorAll(count, count + count)
        setDocData([...docData, ...data]);
        setCount(count + count)
    }


    return (
        <>
            <div className="col-md-9 expert-section">
                <div className="row">
                    {
                        docData?.map((d, index) => {
                            return <div className="col-md-4 col-6 mb-3" key={index}>
                                <div className="expert-card">
                                    <div className="card border-0 p-lg-4 p-0">
                                        <div className="card-top">
                                            <a href="#">
                                                <img src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${d.doctorImage.url}`} className="img-fluid w-100" alt="" />
                                            </a>
                                        </div>
                                        <div className="card-content">
                                            <h4>{d.name}</h4>
                                            <p>{d.doctorDesignation}</p>
                                            <h5>{d.specialities[0]?.title}</h5>
                                            <div className="from-btn">
                                                <a href="#" className="btn">{staticText['Appointment']}</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="main-btn  text-lg-center text-start ms-lg-0 ms-2 mt-2">
                                        <a href={baseURL + "/doctor/" + d.slug}>{staticText['View Profile']}</a>
                                    </div>
                                </div>
                            </div>
                        })
                    }

                    <div className='text-center' >
                        <button
                            onClick={loadDoctor}
                            className='btn btn-sm form-btn mt-3 w-25'>
                            Load More
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DoctorListing;

