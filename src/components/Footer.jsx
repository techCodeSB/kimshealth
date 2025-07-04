"use client"
import React, { useEffect } from 'react'

const Footer = () => {
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
                                <h3>Important Link</h3>

                                <ul>
                                    <ul>
                                        <li><a href="#">About Us</a></li>
                                        <li><a href="#">Find a Doctor</a></li>
                                        <li><a href="#">Book an Appointment</a></li>
                                        <li><a href="#">Book a Health Check-up</a></li>
                                        <li><a href="#">Home Care Services</a></li>
                                        <li><a href="#">Get Second Opinion</a></li>
                                        <li><a href="#">Visa Medicals</a></li>
                                        <li><a href="#">Telehealth</a></li>
                                        <li><a href="#">Lab Reports</a></li>
                                        <li><a href="#">TPA and Insurance</a></li>
                                        <li><a href="#">Corporate</a></li>
                                        <li><a href="#">CSR</a></li>
                                        <li><a href="#">News and Media</a></li>
                                        <li><a href="#">Rights & Responsibilities</a></li>
                                        <li><a href="#">Health Tips</a></li>
                                        <li><a href="#">Career</a></li>
                                        <li><a href="#">Sitemap</a></li>
                                        <li><a href="#">Contact Us</a></li>
                                    </ul>
                                </ul>
                            </div>
                        </div>


                        <div className="col-md-3">
                            <div className="link-part">
                                <h3>Our Specialities</h3>

                                <ul>
                                    <ul>
                                        <li><a href="#">Cardiology</a></li>
                                        <li><a href="#">Orthopedics</a></li>
                                        <li><a href="#">Neurosciences</a></li>
                                        <li><a href="#">Gastrosciences</a></li>
                                        <li><a href="#">Nephro-Urosciences</a></li>
                                        <li><a href="#">BMT, Cancer Immunotherapy</a></li>
                                        <li><a href="#">Obstetrics and Gynaecology</a></li>
                                        <li><a href="#">Liver Transplant</a></li>
                                        <li><a href="#">Heart and Lung Transplant</a></li>
                                    </ul>
                                </ul>
                            </div>

                        </div>

                        <div className="col-md-2">
                            <div className="row">
                                <div className="col-12  mb-lg-4">
                                    <div className="link-part">
                                        <h3>Hospitals</h3>

                                        <ul>
                                            <ul>
                                                <li><a href="#">Trivandrum</a></li>
                                                <li><a href="#">Kollam</a></li>
                                                <li><a href="#">Kottayam</a></li>
                                                <li><a href="#">Perintalmanna</a></li>
                                                <li><a href="#">Nagercoil</a></li>
                                            </ul>
                                        </ul>
                                    </div>
                                </div>

                                <div className="col-12">
                                    <div className="link-part">
                                        <h3>Medical Centers</h3>

                                        <ul>
                                            <ul>
                                                <li><a href="#">Kuravankonam</a></li>
                                                <li><a href="#">Manacaud</a></li>
                                                <li><a href="#">Attingal</a></li>
                                                <li><a href="#">Pothencode</a></li>
                                                <li><a href="#">Ayoor</a></li>
                                                <li><a href="#">Vedivachankoil</a></li>
                                                <li><a href="#">Vattiyoorkavu</a></li>
                                            </ul>
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
                                <h3 className="accordian-footer position-relative d-lg-none">Hospitals</h3>
                                <ul className="first-child">
                                    <li><a href="#">Trivandrum</a></li>
                                    <li><a href="#">Kollam</a></li>
                                    <li><a href="#">Kottayam</a></li>
                                    <li><a href="#">Perintalmanna</a></li>
                                    <li><a href="#">Nagercoil</a></li>
                                </ul>
                            </div>
                        </div>


                        <div className="colum-link col-12 mb-2">
                            <div className="footer-menu expanded link-part">
                                <h3 className="accordian-footer position-relative d-lg-none">Medical Centers</h3>
                                <ul className="first-child">
                                    <li><a href="#">Kuravankonam</a></li>
                                    <li><a href="#">Manacaud</a></li>
                                    <li><a href="#">Attingal</a></li>
                                    <li><a href="#">Pothencode</a></li>
                                    <li><a href="#">Ayoor</a></li>
                                    <li><a href="#">Vedivachankoil</a></li>
                                    <li><a href="#">Vattiyoorkavu</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="colum-link col-12 mb-2">
                            <div className="footer-menu expanded link-part">
                                <h3 className="accordian-footer position-relative d-lg-none">Our Specialities</h3>
                                <ul className="first-child">
                                    <li><a href="#">Cardiology</a></li>
                                    <li><a href="#">Orthopedics</a></li>
                                    <li><a href="#">Neurosciences</a></li>
                                    <li><a href="#">Gastrosciences</a></li>
                                    <li><a href="#">Nephro-Urosciences</a></li>
                                    <li><a href="#">BMT, Cancer Immunotherapy</a></li>
                                    <li><a href="#">Obstetrics and Gynaecology</a></li>
                                    <li><a href="#">Liver Transplant</a></li>
                                    <li><a href="#">Heart and Lung Transplant</a></li>
                                </ul>
                            </div>
                        </div>




                        <div className="colum-link col-12 mb-4">
                            <div className="footer-menu expanded link-part">
                                <h3 className="accordian-footer position-relative d-lg-none">Important Link</h3>
                                <ul className="first-child">
                                    <li><a href="#">About Us</a></li>
                                    <li><a href="#">Find a Doctor</a></li>
                                    <li><a href="#">Book an Appointment</a></li>
                                    <li><a href="#">Book a Health Check-up</a></li>
                                    <li><a href="#">Home Care Services</a></li>
                                    <li><a href="#">Get Second Opinion</a></li>
                                    <li><a href="#">Visa Medicals</a></li>
                                    <li><a href="#">Telehealth</a></li>
                                    <li><a href="#">Lab Reports</a></li>
                                    <li><a href="#">TPA and Insurance</a></li>
                                    <li><a href="#">Corporate</a></li>
                                    <li><a href="#">CSR</a></li>
                                    <li><a href="#">News and Media</a></li>
                                    <li><a href="#">Rights and Responsibilities</a></li>
                                    <li><a href="#">Health Tips</a></li>
                                    <li><a href="#">Career</a></li>
                                    <li><a href="#">Sitemap</a></li>
                                    <li><a href="#">Contact Us</a></li>
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