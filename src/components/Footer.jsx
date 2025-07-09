"use client"
import hospitalData from '@/app/lib/getHospital';
import getSpecialityData from '@/app/lib/getSpeciality';
import { getBaseUrl } from '@/helper/getBaseUrl';
import getStaticText from '@/helper/getStaticText';
import React, { useEffect, useState } from 'react'

const Footer = () => {
    const [basePath, setBasePath] = useState(null);
    const [speciality, setSpeciality] = useState();
    const [hospitals, setHospitals] = useState();
    const [staticTexts, setStaticTexts] = useState({});



    useEffect(() => {
        const fetchTexts = async () => {
            setStaticTexts({ ...await getStaticText() })
        };

        fetchTexts();
    }, []);

    useEffect(() => {
        const fetchAllTitles = async () => {
            try {
                setSpeciality(await getSpecialityData.getFooterSpeciality());
                setHospitals(await hospitalData.getFooterHospital());
            } catch (error) {
                console.error("Error fetching titles:", error);
            }


        };

        fetchAllTitles();
        setBasePath(getBaseUrl(true, true));
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
                                            <strong><u>INDIA</u></strong>
                                            <p>
                                                KIMSHEALTH, P.B.No.1, Anayara
                                                P.O, Trivandrum – 695029,
                                                Kerala, India</p>
                                        </div>
                                    </div>
                                    <a href="mailto:feedback.tvm@kimshealth.org">
                                        <div className="address-item d-flex align-items-center mb-3">
                                            <i className="fa-regular fa-envelope mt-0 ms-0 fw-bold"></i>
                                            <div className="ms-2">
                                                <strong className="fw-normal">feedback.tvm@kimshealth.org</strong>
                                            </div>
                                        </div>
                                    </a>

                                    <a href="tel:4712941400">
                                        <div className="address-item d-flex align-items-center mb-3">
                                            <i className="fa-solid fa-phone"></i>
                                            <div className="ms-2">
                                                <strong className="fw-normal">+91 471 294 1400</strong>
                                            </div>
                                        </div>
                                    </a>

                                </div>
                            </div>

                            <div className="social-media-icon mt-4">
                                <img src="/img/facebook.png" className="img-fluid" alt="" />
                                <img src="/img/instagram.png" className="img-fluid" alt="" />
                                <img src="/img/linkedin.png" className="img-fluid" alt="" />
                                <img src="/img/youtube.png" className="img-fluid" alt="" />
                            </div>

                            <div className="newsletter mt-5">
                                <h3>Newsletter</h3>
                                <p>Exclusive Content. Delivered to Your Inbox</p>
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
                            </div>
                        </div>

                        <div className="col-md-2">
                            <div className="link-part">
                                <h3>{staticTexts['Important Link']}</h3>
                                <ul>
                                    <li><a href={basePath + "/about-us"}>About Us</a></li>
                                    <li><a href={basePath + "/doctor"}>Find a Doctor</a></li>
                                    <li><a href={basePath + "/book-an-appointment"}>Book an Appointment</a></li>
                                    <li><a href={basePath + "/health-package"}>Book a Health Check-up</a></li>
                                    <li><a href={basePath + "/at-home-services"}>Home Care Services</a></li>
                                    <li><a href={basePath + "/second-opinion"}>Get Second Opinion</a></li>
                                    <li><a href={basePath + "/visa-medical"}>Visa Medicals</a></li>
                                    <li><a href={"https://consult.bestdocapp.com/home/KIMSTVM?version=new"} target='_blank'>Telehealth</a></li>
                                    <li><a href={basePath + "/bmw-report"}>Lab Reports</a></li>
                                    <li><a href={basePath + "/all-companies-on-panel"}>TPA and Insurance</a></li>
                                    <li><a href={basePath + "/"}>Corporate</a></li>
                                    <li><a href={basePath + "/csr-policy"}>CSR</a></li>
                                    <li><a href={basePath + "/media-and-events"}>News and Media</a></li>
                                    <li><a href={basePath + "/patients-rights-and-responsibilities"}>Rights &amp; Responsibilities</a></li>
                                    <li><a href={basePath + "/"}>Health Tips</a></li>
                                    <li><a href={basePath + "/"}>Career</a></li>
                                    <li><a href={basePath + "/"}>Sitemap</a></li>
                                    <li><a href={basePath + "/contact-us"}>Contact Us</a></li>
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
                                                <a href={basePath + "/speciality/" + sp?.speciality.slug}>{sp?.speciality.title}</a>
                                            </li>
                                        })
                                    }
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

                </div>
            </footer>

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
                                                <a href={basePath + "/speciality/" + sp?.speciality.slug}>{sp?.speciality.title}</a>
                                            </li> 
                                        })
                                    }
                                </ul>
                            </div>
                        </div>


                        <div className="colum-link col-12 mb-4">
                            <div className="footer-menu expanded link-part">
                                <h3 className="accordian-footer position-relative d-lg-none">{staticTexts['Important Link']}</h3>
                                <ul className="first-child">
                                    <li><a href={basePath + "/about-us"}>About Us</a></li>
                                    <li><a href={basePath + "/doctor"}>Find a Doctor</a></li>
                                    <li><a href={basePath + "/book-an-appointment"}>Book an Appointment</a></li>
                                    <li><a href={basePath + "/health-package"}>Book a Health Check-up</a></li>
                                    <li><a href={basePath + "/at-home-services"}>Home Care Services</a></li>
                                    <li><a href={basePath + "/second-opinion"}>Get Second Opinion</a></li>
                                    <li><a href={basePath + "/visa-medical"}>Visa Medicals</a></li>
                                    <li><a href={"https://consult.bestdocapp.com/home/KIMSTVM?version=new"} target='_blank'>Telehealth</a></li>
                                    <li><a href={basePath + "#"}>Lab Reports</a></li>
                                    <li><a href={basePath + "/all-companies-on-panel"}>TPA and Insurance</a></li>
                                    <li><a href={basePath + "#"}>Corporate</a></li>
                                    <li><a href={basePath + "/csr-policy"}>CSR</a></li>
                                    <li><a href={basePath + "/media-and-events"}>News and Media</a></li>
                                    <li><a href={basePath + "/patients-rights-and-responsibilities"}>Rights &amp; Responsibilities</a></li>
                                    <li><a href={basePath + "#"}>Health Tips</a></li>
                                    <li><a href={basePath + "#"}>Career</a></li>
                                    <li><a href={basePath + "#"}>Sitemap</a></li>
                                    <li><a href={basePath + "/contact-us"}>Contact Us</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-12">
                            <div className="location mt-lg-4">
                                <div className="location-item">
                                    <div className="address-item d-flex mb-3">
                                        <i className="fa-solid fa-location-dot"></i>
                                        <div className="ms-2">
                                            <strong style={{ color: '#b71c2b' }}><u>INDIA</u></strong>
                                            <p>
                                                KIMSHEALTH, P.B.No.1, Anayara
                                                P.O, Trivandrum – 695029,
                                                Kerala, India</p>
                                        </div>
                                    </div>
                                    <a href="mailto:feedback.tvm@kimshealth.org">
                                        <div className="address-item d-flex align-items-center mb-3">
                                            <i className="fa-regular fa-envelope mt-0 ms-0 fw-bold"></i>
                                            <div className="ms-2">
                                                <strong>feedback.tvm@kimshealth.org</strong>
                                            </div>
                                        </div>
                                    </a>

                                    <a href="tel:4712941400">
                                        <div className="address-item d-flex align-items-center mb-3">
                                            <i className="fa-solid fa-phone"></i>
                                            <div className="ms-2">
                                                <strong>+91 471 294 1400</strong>
                                            </div>
                                        </div>
                                    </a>

                                </div>
                            </div>

                            <div className="social-media-icon mt-4">
                                <img src="/img/facebook.png" className="img-fluid" alt="" />
                                <img src="/img/instagram.png" className="img-fluid" alt="" />
                                <img src="/img/linkedin.png" className="img-fluid" alt="" />
                                <img src="/img/youtube.png" className="img-fluid" alt="" />
                            </div>

                            <div className="newsletter mt-4">
                                <h3>Newsletter</h3>
                                <p>Exclusive Content. Delivered to Your Inbox</p>
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
                            </div>
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
                        <p>Copyright © 2024. KIMSHEALTH. All Rights Reserved</p>
                        <p>Designed & Developed by Healthcare Martech</p>
                    </div>
                </div>
            </div>

            <div className="fixed-lg-footer d-none d-lg-block">
                <a href="#">EMERGENCY</a>
            </div>

            <button id="scrolltoButton" className=""></button>

            <div className="fixed-footer d-block d-lg-none">
                <div className="row">
                    <div className="col-3 fixed-footer-img">
                        <a href="#"><img src="/img/calendar.png" className="img-fluid" alt="" />
                            <p>Appointment</p>
                        </a>

                    </div>
                    <div className="col-3 fixed-footer-img">
                        <a href="#"><img src="/img/doctors.png" className="img-fluid" alt="" />
                            <p>Doctors</p>
                        </a>
                    </div>
                    <div className="col-3 fixed-footer-img">
                        <a href="#"><img src="/img/ambulance.png" className="img-fluid" alt="" />
                            <p>Ambulance</p>
                        </a>
                    </div>

                    <div className="col-3 fixed-footer-img">
                        <a href="#"><img src="/img/telephone.png" className="img-fluid" alt="" />
                            <p>Call Us</p>
                        </a>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Footer