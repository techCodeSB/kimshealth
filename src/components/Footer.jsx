"use client"
import hospitalData from '@/app/lib/getHospital';
import getLocation from '@/app/lib/getLocation';
import getSpecialityData from '@/app/lib/getSpeciality';
import { getBaseUrl } from '@/helper/getBaseUrl';
import getCurrentLangLocClient from '@/helper/getCurrentLangLocClient';
import langLoc from '@/helper/getLangLoc';
import getStaticText from '@/helper/getStaticText';
import React, { useEffect, useRef, useState } from 'react'
import SearchBox from '@/components/Forms/SearchBox';



const Footer = () => {
    const [selectedLangLoc, setselectedLangLoc] = useState();
    const [basePath, setBasePath] = useState(null);
    const [basePathOnlyLang, setBasePathOnlyLang] = useState();
    const [speciality, setSpeciality] = useState();
    const [hospitals, setHospitals] = useState();
    const [staticTexts, setStaticTexts] = useState({});
    const [allLocations, setAllLocations] = useState([]);
    const [locationData, setLocationData] = useState();



    useEffect(() => {
        const fetchTexts = async () => {
            setStaticTexts({ ...await getStaticText() })
            setLocationData(await getLocation());
        };

        fetchTexts();

        const getLoc = async () => {
            const loc = await langLoc.getLocations();
            setAllLocations([...loc]);
        }


        getLoc()
    }, []);



    useEffect(() => {
        const fetchAllTitles = async () => {
            try {
                const LangLoc = await getCurrentLangLocClient() //GET LOCATION AND LANGUAGE;

                setSpeciality(await getSpecialityData.getFooterSpeciality({ langLoc: LangLoc }));

                setHospitals(await hospitalData.getFooterHospital({ langLoc: langLoc }));

            } catch (error) {
                console.error("Error fetching titles:", error);
            }

        };

        fetchAllTitles();
        setBasePath(getBaseUrl(true, true));
        setBasePathOnlyLang(getBaseUrl(true, false));
    }, []);



    useEffect(() => {
        let selectedDate = new Date();

        const calendarTitle = document.querySelector('.calendar-title');
        const calendarBody = document.querySelector('.calendar-body');
        const prevBtn = document.querySelector('.previous-month-btn');
        const nextBtn = document.querySelector('.next-month-btn');

        // Safeguard
        if (!calendarTitle || !calendarBody || !prevBtn || !nextBtn) {
            console.warn("Calendar elements not found in the DOM.");
            return;
        }

        function renderCalendar() {
            calendarBody.innerHTML = '';

            const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
                'July', 'August', 'September', 'October', 'November', 'December'];
            const weekdayNames = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

            calendarTitle.textContent = `${monthNames[selectedDate.getMonth()]} ${selectedDate.getFullYear()}`;

            const weekdaysRow = document.createElement('div');
            weekdaysRow.classList.add('calendar-row');
            weekdayNames.forEach(day => {
                const cell = document.createElement('div');
                cell.classList.add('calendar-day');
                cell.textContent = day;
                weekdaysRow.appendChild(cell);
            });
            calendarBody.appendChild(weekdaysRow);

            const year = selectedDate.getFullYear();
            const month = selectedDate.getMonth();
            const firstDay = new Date(year, month, 1).getDay();
            const lastDate = new Date(year, month + 1, 0).getDate();

            const today = new Date();
            today.setHours(0, 0, 0, 0);

            let row = document.createElement('div');
            row.classList.add('calendar-row');

            for (let i = 0; i < firstDay; i++) {
                const emptyCell = document.createElement('div');
                emptyCell.classList.add('calendar-day');
                row.appendChild(emptyCell);
            }

            for (let day = 1; day <= lastDate; day++) {
                const cellDate = new Date(year, month, day);
                const dayCell = document.createElement('div');
                dayCell.classList.add('calendar-day');
                dayCell.textContent = day;

                if (cellDate < today) {
                    dayCell.classList.add('disabled-date');
                } else {
                    dayCell.addEventListener('click', function () {
                        document.querySelectorAll('.calendar-day').forEach(d => d.classList.remove('active'));
                        this.classList.add('active');
                        console.log("Selected date:", cellDate.toISOString().split('T')[0]);
                    });

                    if (
                        cellDate.getDate() === today.getDate() &&
                        cellDate.getMonth() === today.getMonth() &&
                        cellDate.getFullYear() === today.getFullYear()
                    ) {
                        dayCell.classList.add('active');
                    }
                }

                row.appendChild(dayCell);

                if ((firstDay + day - 1) % 7 === 6 || day === lastDate) {
                    calendarBody.appendChild(row);
                    row = document.createElement('div');
                    row.classList.add('calendar-row');
                }
            }
        }

        prevBtn.addEventListener('click', function () {
            selectedDate.setMonth(selectedDate.getMonth() - 1);
            renderCalendar();
        });

        nextBtn.addEventListener('click', function () {
            selectedDate.setMonth(selectedDate.getMonth() + 1);
            renderCalendar();
        });

        renderCalendar();

        // Cleanup listeners on unmount
        return () => {
            prevBtn.removeEventListener('click', () => { });
            nextBtn.removeEventListener('click', () => { });
        };


    }, []);

    return (
        <>
            <footer className="footer d-lg-block d-none">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-md-3">
                            <div className="footer-logo">
                                <img src="/img/logo.png" className="img-fluid" alt="" />
                            </div>

                            <div className="location mt-lg-4">
                                <div className="location-item">
                                    <div className="address-item d-flex mb-3">
                                        <i className="fa-solid fa-location-dot"></i>
                                        <div className="ms-3">
                                            <strong><u>{locationData?.country}</u></strong>
                                            <p>{locationData?.address}</p>
                                        </div>
                                    </div>
                                    <a href={"mailto:" + locationData?.email}>
                                        <div className="address-item d-flex align-items-center mb-3">
                                            <i className="fa-regular fa-envelope mt-0 ms-0 fw-bold"></i>
                                            <div className="ms-2">
                                                <strong className="fw-normal">{locationData?.email}</strong>
                                            </div>
                                        </div>
                                    </a>

                                    <a href={"tel:" + locationData?.phone}>
                                        <div className="address-item d-flex align-items-center mb-3">
                                            <i className="fa-solid fa-phone"></i>
                                            <div className="ms-2">
                                                <strong className="fw-normal">{locationData?.phone}</strong>
                                            </div>
                                        </div>
                                    </a>

                                    {locationData?.emergency && <a href={"tel:" + locationData?.emergency}>
                                        <div className="address-item d-flex align-items-center mb-3">
                                            <i className="fa-solid fa-phone"></i>
                                            <div className="ms-2">
                                                <strong><u>{staticTexts['Emergency']}</u></strong>
                                                <p><strong className="fw-normal">{locationData?.emergency}</strong></p>
                                            </div>
                                        </div>
                                    </a>}

                                    {locationData?.strokeHelpline && <a href={"tel:" + locationData?.strokeHelpline}>
                                        <div className="address-item d-flex align-items-center mb-3">
                                            <i className="fa-solid fa-phone"></i>
                                            <div className="ms-2">
                                                <strong><u>{staticTexts['Stroke Helpline']}</u></strong>
                                                <p><strong className="fw-normal">{locationData?.strokeHelpline}</strong></p>
                                            </div>
                                        </div>
                                    </a>}

                                    {locationData?.corporateEnquiries&& <a href={"tel:" + locationData?.corporateEnquiries}>
                                        <div className="address-item d-flex align-items-center mb-3">
                                            <i className="fa-solid fa-phone"></i>
                                            <div className="ms-2">
                                                <strong><u>{staticTexts['Corporate Enquiries']}</u></strong>
                                                <p><strong className="fw-normal">{locationData?.corporateEnquiries}</strong></p>
                                            </div>
                                        </div>
                                    </a>}

                                </div>
                            </div>

                            <div className="social-media-icon mt-4">
                                {/* <img src="/img/facebook.png" className="img-fluid" alt="Facebook" /> */}
                                <a href={locationData?.facebook} target="_blank" rel="noopener noreferrer">
                                    <img src="/img/facebook.png" className="img-fluid" alt="Facebook" />
                                </a>
                                <a href={locationData?.instagram} target="_blank" rel="noopener noreferrer" className="instagram-logo">
                                    <img src="/img/instagram.png" className="img-fluid" alt="Instagram" />
                                </a>
                                <a href={locationData?.linkedin} target="_blank" rel="noopener noreferrer">
                                    <img src="/img/linkedin.png" className="img-fluid" alt="LinkedIn" />
                                </a>
                                <a href={locationData?.youtube} target="_blank" rel="noopener noreferrer">
                                    <img src="/img/youtube.png" className="img-fluid" alt="YouTube" />
                                </a>
                            </div>

                            {/* <div className="newsletter mt-5">
                                <h3>{staticTexts['Newsletter']}</h3>
                                <p>{staticTexts['Exclusive Content. Delivered to Your Inbox']}</p>
                                <div className="custom-from m-0">
                                    <div className="row">
                                        <div className="col-xl-12 col-lg-12 col-md-12 col-12">
                                            <form action="">
                                                <div className="input-group p-0 my-lg-3 my-3">

                                                    <input type="text" className="form-control border-0"
                                                        placeholder="Your email address" aria-label="Username"
                                                        aria-describedby="basic-addon1" />
                                                    <button className="input-group-text border-0" id="from-icon"><i
                                                        className="fa-regular fa-envelope"></i></button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div> */}


                            <div className="newsletter mt-5">
                                <div className="custom-from m-0">
                                    <div className="row">
                                        <div className="col-xl-12 col-lg-12 col-md-12 col-12">

                                            <div className="input-group p-0 my-lg-3 my-3">
                                                <SearchBox />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-2">
                            <div className="link-part">
                                <h3>{staticTexts['Important Link']}</h3>
                                <ul>
                                    <li><a href={basePath + "/about-us"}>{staticTexts['About Us']}</a></li>
                                    <li><a href={basePath + "/blog"}>{staticTexts['Blog']}</a></li>
                                    <li><a href={basePath + "/book-an-appointment"}>{staticTexts['Book an Appointment']}</a></li>
                                    <li>
                                        <a target='_blank'
                                            href={"https://healthcheckup.kimshealthcare.com/p/kims-trivandrum-1/"}>
                                            {staticTexts['Book a Health Check-up']}
                                        </a>
                                    </li>
                                    <li><a href={basePath + "#"}>{staticTexts['Career']}</a></li>
                                    <li><a href={basePath + "/contact-us"}>{staticTexts['Contact Us']}</a></li>
                                    <li><a href={basePath + "/media-and-events"}>{staticTexts['Events']}</a></li>
                                    <li><a href={basePath + "/doctor"}>{staticTexts['Find a Doctor']}</a></li>
                                    <li><a href={basePath + "/gallery"}>{staticTexts['Gallery']}</a></li>
                                    <li><a href={basePath + "/at-home-services"}>{staticTexts['Home Care']}</a></li>
                                    <li><a href={basePath + "/second-opinion"}>{staticTexts['In-Patient Deposit']}</a></li>
                                    <li>
                                        <a href={basePathOnlyLang + "/international-patient"}>{staticTexts['International Care']}</a>
                                    </li>
                                    <li><a href={basePath + "#"}>{staticTexts['Specialist']}</a></li>
                                </ul>
                            </div>
                        </div>


                        <div className="col-md-3">
                            <div className="link-part">
                                <h3>{staticTexts['Our Specialities']}</h3>
                                <ul>
                                    {
                                        speciality?.map((sp, index) => {
                                            return <li key={index}>
                                                <a href={basePath + "/speciality/" + sp?.speciality?.slug}>{sp?.speciality?.title}</a>
                                            </li>
                                        })
                                    }
                                    <div className="from-btn">
                                        <a href={basePath + "/speciality"} className="btn w-100 mt-4">
                                            {staticTexts['View All Specialities']}</a>
                                    </div>
                                </ul>
                            </div>
                        </div>

                        <div className="col-md-2">
                            <div className="row">
                                <div className="col-12  mb-lg-4">
                                    <div className="link-part">
                                        <h3>{staticTexts['Hospitals']}</h3>
                                        <ul>
                                            {
                                                hospitals?.map((h, index) => {
                                                    return (h.type === null || h.type === "Hospital") && h?.manageAppearance?.showingFooter ?
                                                        <li key={index}>
                                                            <a href={basePath + "/hospital/" + h?.slug}>{h?.title}</a>
                                                        </li>
                                                        : null
                                                })
                                            }
                                        </ul>
                                    </div>
                                </div>

                                <div className="col-12">
                                    <div className="link-part">
                                        <h3>{staticTexts['Medical Centers']}</h3>
                                        <ul>
                                            {
                                                hospitals?.map((h, index) => {
                                                    return (h.type !== null && h.type !== "Hospital") && h?.manageAppearance?.showingFooter ? <li key={index}>
                                                        <a href={basePath + "/hospital/" + h?.slug}>{h?.title}</a>
                                                    </li>
                                                        : null
                                                })
                                            }
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="midle-footer py-2">
                        <div className="container">
                            <div className="d-flex justify-content-center gap-4 align-items-center main-btn">
                                <a href={basePath + "/bmw-report"}>{staticTexts['BMW Reports']}</a>
                                <a href={basePath + "/terms-and-conditions"}>{staticTexts['Term & Conditions']}</a>
                                <a href={basePath + "/privacy-policy"}>{staticTexts['Privacy Policies']}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>


            {/* :::::::::: MOBILE MENU :::::::::: */}

            <footer className="footer d-lg-none d-block">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-6 mb-4">
                            <div className="footer-logo">
                                <img src="/img/logo.png" className="img-fluid" alt="" />
                            </div>
                        </div>

                        <div className="colum-link col-12 mb-2">
                            <div className="footer-menu expanded link-part drop-down">
                                <h3 className="accordian-footer position-relative d-lg-none">{staticTexts['Hospitals']}</h3>
                                <ul className="first-child">
                                    {
                                        hospitals?.map((h, index) => {
                                            return (h.type === null || h.type === "Hospital") && h?.manageAppearance?.showingFooter ?
                                                <li key={index}>
                                                    <a href={basePath + "/hospital/" + h?.slug}>{h?.title}</a>
                                                </li>
                                                : null
                                        })
                                    }
                                </ul>
                            </div>
                        </div>


                        <div className="colum-link col-12 mb-2">
                            <div className="footer-menu expanded link-part">
                                <h3 className="accordian-footer position-relative d-lg-none">{staticTexts['Medical Centers']}</h3>
                                <ul className="first-child">
                                    {
                                        hospitals?.map((h, index) => {
                                            return h.type !== null && h.type !== "Hospital" && h?.manageAppearance?.showingFooter ?
                                                <li key={index}>
                                                    <a href={basePath + "/hospital/" + h?.slug}>{h?.title}</a>
                                                </li>
                                                : null
                                        })
                                    }
                                </ul>
                            </div>
                        </div>

                        <div className="colum-link col-12 mb-2">
                            <div className="footer-menu expanded link-part">
                                <h3 className="accordian-footer position-relative d-lg-none">{staticTexts['Our Specialities']}</h3>
                                <ul className="first-child">
                                    {
                                        speciality?.map((sp, index) => {
                                            return <li key={index}>
                                                <a href={basePath + "/speciality/" + sp?.speciality?.slug}>{sp?.speciality?.title}</a>
                                            </li>
                                        })
                                    }
                                    <div className="from-btn">
                                        <a href={basePath + "/speciality"} className="btn w-100 mt-2 mb-2">
                                            {staticTexts['View All Specialities']}</a>
                                    </div>
                                </ul>
                            </div>
                        </div>


                        <div className="colum-link col-12 mb-4">
                            <div className="footer-menu expanded link-part">
                                <h3 className="accordian-footer position-relative d-lg-none">{staticTexts['Important Link']}</h3>
                                <ul className="first-child">
                                    <li><a href={basePath + "/about-us"}>{staticTexts['About Us']}</a></li>
                                    <li><a href={basePath + "/blog"}>{staticTexts['Blog']}</a></li>
                                    <li><a href={basePath + "/book-an-appointment"}>{staticTexts['Book an Appointment']}</a></li>
                                    <li>
                                        <a target='_blank'
                                            href={"https://healthcheckup.kimshealthcare.com/p/kims-trivandrum-1/"}>
                                            {staticTexts['Book a Health Check-up']}
                                        </a>
                                    </li>
                                    <li><a href={basePath + "#"}>{staticTexts['Career']}</a></li>
                                    <li><a href={basePath + "/contact-us"}>{staticTexts['Contact Us']}</a></li>
                                    <li><a href={basePath + "/media-and-events"}>{staticTexts['Events']}</a></li>
                                    <li><a href={basePath + "/doctor"}>{staticTexts['Find a Doctor']}</a></li>
                                    <li><a href={basePath + "/gallery"}>{staticTexts['Gallery']}</a></li>
                                    <li><a href={basePath + "/at-home-services"}>{staticTexts['Home Care']}</a></li>
                                    <li><a href={basePath + "/second-opinion"}>{staticTexts['In-Patient Deposit']}</a></li>
                                    <li><a href={basePathOnlyLang + "/international-patient"}>{staticTexts['International Care']}</a></li>
                                    <li><a href={basePath + "#"}>{staticTexts['Specialist']}</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-12">
                            <div className="location mt-lg-4">
                                <div className="location-item">
                                    <div className="address-item d-flex mb-3">
                                        <i className="fa-solid fa-location-dot"></i>
                                        <div className="ms-2">
                                            <strong style={{ color: '#b71c2b' }}><u>{locationData?.country}</u></strong>
                                            <p>{locationData?.address}</p>
                                        </div>
                                    </div>
                                    <a href={"mailto:" + locationData?.email}>
                                        <div className="address-item d-flex align-items-center mb-3">
                                            <i className="fa-regular fa-envelope mt-0 ms-0 fw-bold"></i>
                                            <div className="ms-2">
                                                <strong>{locationData?.email}</strong>
                                            </div>
                                        </div>
                                    </a>

                                    <a href={"tel:" + locationData?.phone}>
                                        <div className="address-item d-flex align-items-center mb-3">
                                            <i className="fa-solid fa-phone"></i>
                                            <div className="ms-2">
                                                <strong>{locationData?.phone}</strong>
                                            </div>
                                        </div>
                                    </a>
                                    {locationData?.emergency && <a href={"tel:" + locationData?.emergency}>
                                        <div className="address-item d-flex align-items-center mb-3">
                                            <i className="fa-solid fa-phone"></i>
                                            <div className="ms-2">
                                                <strong style={{ color: '#b71c2b' }}><u>{staticTexts['Emergency']}</u></strong>
                                                <p><strong className="fw-normal">{locationData?.emergency}</strong></p>
                                            </div>
                                        </div>
                                    </a>}

                                    {locationData?.strokeHelpline && <a href={"tel:" + locationData?.strokeHelpline}>
                                        <div className="address-item d-flex align-items-center mb-3">
                                            <i className="fa-solid fa-phone"></i>
                                            <div className="ms-2">
                                                <strong style={{ color: '#b71c2b' }}><u>{staticTexts['Stroke Helpline']}</u></strong>
                                                <p><strong className="fw-normal">{locationData?.strokeHelpline}</strong></p>
                                            </div>
                                        </div>
                                    </a>}

                                    {locationData?.corporateEnquiries&& <a href={"tel:" + locationData?.corporateEnquiries}>
                                        <div className="address-item d-flex align-items-center mb-3">
                                            <i className="fa-solid fa-phone"></i>
                                            <div className="ms-2">
                                                <strong style={{ color: '#b71c2b' }}><u>{staticTexts['Corporate Enquiries']}</u></strong>
                                                <p><strong className="fw-normal">{locationData?.corporateEnquiries}</strong></p>
                                            </div>
                                        </div>
                                    </a>}

                                </div>
                            </div>

                            <div className="social-media-icon mt-4">
                                <a href={locationData?.facebook} target="_blank" rel="noopener noreferrer">
                                    <img src="/img/facebook.png" className="img-fluid" alt="Facebook" />
                                </a>
                                <a href={locationData?.instagram} target="_blank" rel="noopener noreferrer">
                                    <img src="/img/instagram.png" className="img-fluid" alt="Instagram" />
                                </a>
                                <a href={locationData?.linkedin} target="_blank" rel="noopener noreferrer">
                                    <img src="/img/linkedin.png" className="img-fluid" alt="LinkedIn" />
                                </a>
                                <a href={locationData?.youtube} target="_blank" rel="noopener noreferrer">
                                    <img src="/img/youtube.png" className="img-fluid" alt="YouTube" />
                                </a>
                            </div>

                            {/* <div className="newsletter mt-4">
                                <h3>{staticTexts['Newsletter']}</h3>
                                <p>{staticTexts['Exclusive Content. Delivered to Your Inbox']}</p>
                                <div className="custom-from m-0">
                                    <div className="row">
                                        <div className="col-xl-12 col-lg-12 col-md-12 col-12">
                                            <form action="">
                                                <div className="input-group p-0 my-lg-3 mt-2">

                                                    <input type="text" className="form-control border-0"
                                                        placeholder="Your email address" aria-label="Username"
                                                        aria-describedby="basic-addon1" />
                                                    <button className="input-group-text border-0" id="from-icon"><i
                                                        className="fa-regular fa-envelope"></i></button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div> */}

                            <div className="newsletter mt-4">
                                <div className="custom-from m-0">
                                    <div className="row">
                                        <div className="col-xl-12 col-lg-12 col-md-12 col-12">
                                            <div className="input-group p-0 my-lg-3 mt-2">
                                                <SearchBox />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="midle-footer mt-3">
                    <div className="container">
                        <div className="d-flex justify-content-center gap-4 align-items-center main-btn">
                            <a href={basePath + "/bmw-report"}>{staticTexts['BMW Reports']}</a>
                            <a href={basePath + "/terms-and-conditions"}>{staticTexts['Term & Conditions']}</a>
                            <a href={basePath + "/privacy-policy"}>{staticTexts['Privacy Policies']}</a>
                        </div>
                    </div>
                </div>
            </footer>







            <div className="midle-footer py-2">
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-md-1 col-2">
                            <img src="/img/achs-logo.png" className="img-fluid w-100" alt="" />
                        </div>
                        <div className="col-md-1 col-2">
                            <img src="/img/nabh-logo.png" className="img-fluid" alt="" style={{ width: "55px" }} />
                        </div>
                        <div className="col-md-1 col-2">
                            <img src="/img/unknown-logo.png" className="img-fluid" alt="" style={{ width: "55px" }} />
                        </div>
                        <div className="col-md-1 col-2">
                            <img src="/img/epihc.png" className="img-fluid w-100" alt="" />
                        </div>
                        <div className="col-md-1 col-2">
                            <img src="/img/unknown-logo2.png" className="img-fluid" alt="" style={{ width: "55px" }} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="bottom-footer mb-lg-0 mb-5">
                <div className="container">
                    <div className="d-lg-flex d-block align-items-center justify-content-between">
                        <p>Copyright © {new Date().getFullYear()}. KIMSHEALTH. All Rights Reserved</p>
                        <p>Designed & Developed by Healthcare Martech</p>
                    </div>
                </div>
            </div>

            <div className="fixed-lg-footer d-none d-lg-block">
                <a href={"tel:" + locationData?.emergency}>{staticTexts['EMERGENCY']}</a>
            </div>

            <button id="scrolltoButton" className=""></button>

            <div className="fixed-footer d-block d-lg-none">
                <div className="row">
                    <div className="col-3 fixed-footer-img">
                        <a href={basePath + "/doctor"}><img src="/img/doctors.png" className="img-fluid" alt="" />
                            <p>{staticTexts['Doctors']}</p>
                        </a>
                    </div>
                    <div className="col-3 fixed-footer-img">
                        <a href={basePath + "/book-an-appointment"}><img src="/img/calendar.png" className="img-fluid" alt="" />
                            <p>{staticTexts['Appointment']}</p>
                        </a>
                    </div>

                    <div className="col-3 fixed-footer-img">
                        <a href={basePath + "/ambulance-services"}><img src="/img/ambulance.png" className="img-fluid" alt="" />
                            <p>{staticTexts['Ambulance']}</p>
                        </a>
                    </div>

                    <div className="col-3 fixed-footer-img">
                        <a href="#"><img src="/img/telephone.png" className="img-fluid" alt="" />
                            <p>{staticTexts['Call Us']}</p>
                        </a>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Footer