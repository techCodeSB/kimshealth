"use client"
import React, { useEffect, useState } from 'react'
import langLoc from "@/helper/getLangLoc";
import { onLangChangeRedirection, } from "@/helper/onChageRedirection";
import Link from 'next/link';
import Cookies from 'js-cookie';
import { getBaseUrl } from '@/helper/getBaseUrl';
import getLocation from '@/app/lib/getLocation';
import getSpecialityData from '@/app/lib/getSpeciality';
import hospitalData from '@/app/lib/getHospital';
import getStaticText from '@/helper/getStaticText';


const Header = () => {
    const [allLanguages, setAllLanguage] = useState([]); // Store all language;
    const [allLocations, setAllLocations] = useState([]); // Store all locations;
    const [selectedLang, setSelectedLang] = useState(null);
    const [selectedLoc, setSelectedLoc] = useState(null);
    const [basePath, setBasePath] = useState();
    const [basePathOnlyLang, setBasePathOnlyLang] = useState();
    const [speciality, setSpeciality] = useState();
    const [locationData, setLocationData] = useState();
    const [allHospital, setAllHospital] = useState();
    const [activeIndex, setActiveIndex] = useState(null);
    const [staticTexts, setStaticTexts] = useState({});


    useEffect(() => {
        const fetchTexts = async () => {
            setStaticTexts({ ...await getStaticText() })
        };

        fetchTexts();
    }, []);


    const toggleAccordion = (index) => {
        setActiveIndex((prev) => (prev === index ? null : index));
    };


    useEffect(() => {
        const get = async () => {
            setSpeciality(await getSpecialityData.getHeaderSpeciality())
            setLocationData(await getLocation());

            // await hospitalData.getHospitalByLocationId();
            setAllHospital(await hospitalData.getAllHospitalAndMedicalCenter());

        }
        get();


    }, [])


    // Get all languages
    useEffect(() => {
        const getLang = async () => {
            const lang = await langLoc.getLanguages();
            setAllLanguage([...lang]);
        }

        const getLoc = async () => {
            const loc = await langLoc.getLocations();
            setAllLocations([...loc]);
        }

        getLang()
        getLoc()


        setSelectedLang(JSON.parse(Cookies.get("systemLang")))
        setSelectedLoc(JSON.parse(Cookies.get("systemLocation")))

        setBasePath(getBaseUrl(true, true));
        setBasePathOnlyLang(getBaseUrl(true, false));

    }, [])


    return (
        <>
            <header id="header-sticky" className="header">
                <section id="topheader" className="d-lg-block d-none">
                    <div className="container d-flex align-items-center justify-content-between">
                        <div className="navbar-logo py-2 ">
                            <a href="/">
                                <img src="/img/logo.png" alt="" className="img-fluid" />
                            </a>
                        </div>
                        <div className="header-contact d-flex align-items-center justify-content-center">
                            <ul>
                                <li><a href={`${basePath}/about-us`}>About Us</a></li>
                                <li><a href={`${basePath}/at-home-services`}>Home Care</a></li>
                                <li><a href={`${basePath}/second-opinion`}>Second Opinion</a></li>
                                <li><a href="#">My Reports</a></li>
                                <li><a href={`${basePath}/ambulance-services`}>Call Ambulance</a></li>
                                <li><a href={`${basePath}/contact-us`}>Contact Us</a></li>
                                <li><a href={"https://healthcheckup.kimshealthcare.com/p/kims-trivandrum-1/"} target='_blank'>Health Checkup</a></li>
                            </ul>

                            <div className="top-bar-icon d-flex align-items-center">
                                <div className="whatapp-icon">
                                    <a href={"https://wa.me/" + locationData?.whatsapp} target='_blank'> <img src="/img/whatsapp.svg" className="img-fluid" alt="" /></a>
                                </div>
                                <div className="search-icon ms-3 me-2">
                                    <i className="fa-solid fa-magnifying-glass"></i>
                                </div>
                                <div className="top-drop-down">
                                    <select value={selectedLang?.slug || ""} className="border-0 " onChange={onLangChangeRedirection}>
                                        {
                                            allLanguages.length < 1 ? <option>Loading...</option> :
                                                allLanguages.map((l, _) => {
                                                    return <option value={l.code} data-fulldata={JSON.stringify(l)} key={l.id}>
                                                        {l.name}
                                                    </option>
                                                })
                                        }
                                    </select>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <div className="header-menu mobileMenuBar" id="menuHeader">
                    <div className="container">
                        <nav className="header-menu-container justify-content-lg-end">
                            <div className="navbar-brand">
                                <a href={"/"} className="text-decoration-none">
                                    <img src="/img/logo.png" height="55" className="img-fluid" />
                                </a>
                            </div>
                            <div className="mobile_primary" id="primary-nav">
                                {/* <!-- <div className="navbar-brand navbar-logo d-none d-lg-block">
                                <a href="#">
                                    <img src="/img/imi-logo.png" alt="" className="img-fluid"/>
                                </a>
                            </div> --> */}
                                <ul className="menu-navigation" id="menu-main-navigation-1">
                                    <li className="menu-item-has-children show-submenu">
                                        <a href={basePath + "/speciality"} className="anchor-menu">Specialities & Treatments</a>
                                        <div className="sub-menu">
                                            <div className="row">
                                                {
                                                    (() => {
                                                        const columns = [[], [], []]; // 3 columns
                                                        const perColumn = Math.ceil(speciality?.length / 3);

                                                        for (let i = 0; i < speciality?.length; i++) {
                                                            const s = speciality[i];
                                                            const colIndex = Math.floor(i / perColumn);
                                                            columns[colIndex].push(
                                                                <li key={i}>
                                                                    <a href={basePath + "/speciality/" + s?.speciality.slug}>
                                                                        <span>
                                                                            <img src={s.speciality.iconImage?.url ? process.env.NEXT_PUBLIC_IMAGE_URL + s.speciality.iconImage.url : "/img/no-image.jpg"} alt={s?.title} className="img-fluid" />
                                                                        </span>
                                                                        {s?.title}
                                                                    </a>
                                                                </li>
                                                            );

                                                        }

                                                        return columns.map((items, idx) => (
                                                            <div className="col-lg-4" key={idx}>
                                                                <div className="sub-menu-details">
                                                                    <ul>{items}</ul>
                                                                </div>
                                                            </div>
                                                        ));
                                                    })()
                                                }
                                            </div>

                                        </div>
                                    </li>
                                    <li><a href={`${basePath}/doctor`} className="anchor-menu">Find a Doctor</a></li>
                                    {/* <!-- <li><a href="" className="anchor-menu">Health Checkup</a></li> --> */}
                                    <li><a href={`${basePath}/visa-medical`} className="anchor-menu">Visa Medical</a></li>
                                    <li><a href={`${basePath}/international-patient`} className="anchor-menu">International Patients</a></li>
                                    <li className="menu-item-has-children show-submenu d-lg-inline-block d-none">
                                        <a href={basePathOnlyLang + "/hospital"} className="anchor-menu">Locations</a>
                                        <div className="sub-menu ">
                                            <div className="row">
                                                <div className="col-md-4">
                                                    <div className="sub-menu-details">
                                                        <div className="tabs">
                                                            {
                                                                allLocations.map((loc, _) => (
                                                                    <div

                                                                        onMouseEnter={(e) => {
                                                                            const tabId = e.currentTarget.getAttribute('data-tab');
                                                                            document.querySelectorAll('.tab-content').forEach(tab => {
                                                                                tab.classList.remove('active');
                                                                            });
                                                                            const targetTab = document.getElementById(tabId);
                                                                            if (targetTab) {
                                                                                targetTab.classList.add('active');
                                                                            }
                                                                        }}
                                                                        className={`tab ${selectedLoc?.slug === loc.slug ? 'active' : ''}`}
                                                                        data-tab={"tab" + _} key={loc.documentId}
                                                                    >
                                                                        <a href={basePathOnlyLang + "/" + loc.slug}>{loc.title} <i className="fa-solid fa-chevron-right"></i></a>
                                                                    </div>
                                                                ))
                                                            }
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-lg-8">
                                                    <div className="sub-menu-details">
                                                        {
                                                            allLocations.map((l, index) => {
                                                                // Filter once per location
                                                                const hospitalsForLocation = allHospital?.filter(h => h.location.id === l.id) || [];

                                                                const onlyHospitals = hospitalsForLocation.filter(h => h.type === "Hospital");
                                                                const onlyMedicalCenters = hospitalsForLocation.filter(h => h.type === "Medical Center");

                                                                return (
                                                                    <div id={"tab" + index} className={`tab-content ${index === 0 ? 'active' : ''}`} key={index}>
                                                                        <div className="row">
                                                                            <div className="col-md-6 mb-3">
                                                                                {onlyHospitals.length > 0 && <h3>{staticTexts['Hospital']}</h3>}
                                                                                <ul>
                                                                                    {onlyHospitals.map((hospital, i) => (
                                                                                        <li key={`hospital-${i}`}>
                                                                                            <a href={`${basePathOnlyLang}/${l.slug}/hospital/${hospital.slug}`}>{hospital.title}</a>
                                                                                        </li>
                                                                                    ))}
                                                                                </ul>
                                                                            </div>

                                                                            <div className="col-md-6 mb-3">
                                                                                {
                                                                                    onlyMedicalCenters.length > 0 && <h3>{staticTexts["Medical Centers"]}</h3>
                                                                                }
                                                                                <ul>
                                                                                    {onlyMedicalCenters.map((center, i) => (
                                                                                        <li key={`medcenter-${i}`}>
                                                                                            <a href={`${basePathOnlyLang}/${l.slug}/hospital/${center.slug}`}>{center.title}</a>
                                                                                        </li>
                                                                                    ))}
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                );
                                                            })
                                                        }
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </li>

                                    <li className="menu-item-has-children show-submenu d-lg-none d-block">
                                        <a href={basePath+"/hospital"}>Locations</a>
                                        <div className="sub-menu">
                                            <div className="sub-menu-details">
                                                <div className="accordion">
                                                    {allLocations.map((l, index) => {
                                                        const hospitalsForLocation = allHospital?.filter(h => h.location.id === l.id) || [];
                                                        const onlyHospitals = hospitalsForLocation.filter(h => h.type === "Hospital");
                                                        const onlyMedicalCenters = hospitalsForLocation.filter(h => h.type === "Medical Center");

                                                        const isOpen = activeIndex === index;

                                                        return (
                                                            <div className={`accordion-item ${isOpen ? "active" : ""}`} key={index}>
                                                                <div className="accordion-header" onClick={() => toggleAccordion(index)}>
                                                                    <h3>
                                                                        <a href={basePathOnlyLang + "/" + l.slug}>{l.title}</a>
                                                                    </h3>
                                                                    <div className="accordion-icon"></div>
                                                                </div>

                                                                {isOpen && (
                                                                    <div className="accordion-content">
                                                                        <div className="content-inner">
                                                                            <div className="row">
                                                                                <div className="col-md-6 mb-3">
                                                                                    {onlyHospitals.length > 0 && <h3>{staticTexts['Hospital']}</h3>}
                                                                                    <ul>
                                                                                        {onlyHospitals.map((hospital, i) => (
                                                                                            <li key={`hospital-${i}`}>
                                                                                                <a href={`${basePathOnlyLang}/${l.slug}/hospital/${hospital.slug}`}>
                                                                                                    {hospital.title}
                                                                                                </a>
                                                                                            </li>
                                                                                        ))}
                                                                                    </ul>
                                                                                </div>
                                                                                <div className="col-md-6">
                                                                                    {
                                                                                        onlyMedicalCenters.length > 0 && <h3>{staticTexts["Medical Centers"]}</h3>
                                                                                    }
                                                                                    <ul>
                                                                                        {onlyMedicalCenters.map((center, i) => (
                                                                                            <li key={`medcenter-${i}`}>
                                                                                                <a href={`${basePathOnlyLang}/${l.slug}/hospital/${center.slug}`}>
                                                                                                    {center.title}
                                                                                                </a>
                                                                                            </li>
                                                                                        ))}
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                )}
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    </li>

                                </ul>
                            </div>

                            <div className="appointment-btn d-lg-block d-none me-4">
                                <button className="btn" type="submit"
                                    onClick={() => { location.href = `${basePath}/book-an-appointment` }}>
                                    Book An Appointment
                                </button>
                            </div>
                            <div className="desktop-humberger-menu">
                                <div className="hamburger" id="hamburger">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                                <div className="sidebar" id="sidebar">
                                    <div className="menu-items">
                                        <div className="sub-menu-details">
                                            <ul>
                                                <li>
                                                    <a href="#">Kuravankonam</a>
                                                </li>
                                                <li>
                                                    <a href="#">Manacaud</a>
                                                </li>
                                                <li>
                                                    <a href="#">Attingal</a>
                                                </li>
                                                <li>
                                                    <a href="#">Pothencode</a>
                                                </li>
                                                <li>
                                                    <a href="#">Ayoor</a>
                                                </li>
                                                <li>
                                                    <a href="#">Vedivachankoil</a>
                                                </li>
                                                <li>
                                                    <a href="#">Vattiyoorkavu</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="menu-button">
                                <span className="toggle-bar"></span>
                                <span className="toggle-bar"></span>
                                <span className="toggle-bar"></span>
                            </div>
                        </nav>

                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;
