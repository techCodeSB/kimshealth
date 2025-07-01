"use client"
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import langLoc from "@/app/lib/getLangLoc";
import { onLangChangeRedirection, onLocChangeRedirection, } from "@/helper/onChageRedirection";
import Link from 'next/link';
import Cookies from 'js-cookie';


const Header = () => {
    const [allLanguages, setAllLanguage] = useState([]); // Store all language;
    const [allLocations, setAllLocations] = useState([]); // Store all locations;
    const pathname = usePathname();
    let [selectedLang, setSelectedLang] = useState(null);
    let [selectedLoc, setSelectedLoc] = useState(null);




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


        console.log("in useEffect--->", JSON.parse(Cookies.get("systemLang")))

    }, [])






    // Set Current Language and location on Page load or URL redirection
    // useEffect(() => {
    //     const refer = document.referrer;
    //     const origin = location.origin;

    //     if (refer == "" || `${origin}/` !== refer) {
    //         detectedAndSetLocationORLanguage()
    //             .then((d) => {
    //                 setSelectedLang(JSON.parse(localStorage.getItem("systemLang")))
    //                 setSelectedLoc(JSON.parse(localStorage.getItem("systemLocation")))
    //             })
    //             .catch(er => {
    //                 console.log(er)
    //             })
    //     }
    // }, [pathname])
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
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Home Care</a></li>
                                <li><a href="">Second Opinion</a></li>
                                <li><a href="#">My Reports</a></li>
                                <li><a href="#">Call Ambulance</a></li>
                                <li><a href="/contact-us">Contact Us</a></li>
                                <li><a href="">Health Checkup</a></li>
                            </ul>

                            <div className="top-bar-icon d-flex align-items-center">
                                <div className="whatapp-icon">
                                    <a href="#"> <img src="/img/whatsapp.svg" className="img-fluid" alt="" /></a>
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
                                <a href="#" className="text-decoration-none">
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
                                        <a href="speciality.php" className="anchor-menu">Specialities & Treatments</a>
                                        <div className="sub-menu">
                                            <div className="row">
                                                <div className="col-lg-4">
                                                    <div className="sub-menu-details">
                                                        <ul>
                                                            <li>
                                                                <a href="#"><span><img src="/img/oncology.png" alt=""
                                                                    className="img-fluid" /></span>Oncology</a>
                                                            </li>
                                                            <li>
                                                                <a href="#"><span><img src="/img/oncology.png" alt=""
                                                                    className="img-fluid" /></span>Neuro Sciences</a>
                                                            </li>
                                                            <li>
                                                                <a href="#"><span><img src="/img/oncology.png" alt=""
                                                                    className="img-fluid" /></span>Cardiac Sciences</a>
                                                            </li>
                                                            <li>
                                                                <a href="#"><span><img src="/img/oncology.png" alt=""
                                                                    className="img-fluid" /></span>Orthopadics</a>
                                                            </li>
                                                            <li>
                                                                <a href="#"><span><img src="/img/oncology.png" alt=""
                                                                    className="img-fluid" /></span>Transplants</a>
                                                            </li>
                                                            <li>
                                                                <a href="#"><span><img src="/img/oncology.png" alt=""
                                                                    className="img-fluid" /></span>Urology</a>
                                                            </li>
                                                            <li>
                                                                <a href="#"><span><img src="/img/oncology.png" alt=""
                                                                    className="img-fluid" /></span>Nephrology</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>

                                                <div className="col-lg-4">
                                                    <div className="sub-menu-details">
                                                        <ul>
                                                            <li>
                                                                <a href="#"><span><img src="/img/oncology.png" alt=""
                                                                    className="img-fluid" /></span>Oncology</a>
                                                            </li>
                                                            <li>
                                                                <a href="#"><span><img src="/img/oncology.png" alt=""
                                                                    className="img-fluid" /></span>Neuro Sciences</a>
                                                            </li>
                                                            <li>
                                                                <a href="#"><span><img src="/img/oncology.png" alt=""
                                                                    className="img-fluid" /></span>Cardiac Sciences</a>
                                                            </li>
                                                            <li>
                                                                <a href="#"><span><img src="/img/oncology.png" alt=""
                                                                    className="img-fluid" /></span>Orthopadics</a>
                                                            </li>
                                                            <li>
                                                                <a href="#"><span><img src="/img/oncology.png" alt=""
                                                                    className="img-fluid" /></span>Transplants</a>
                                                            </li>
                                                            <li>
                                                                <a href="#"><span><img src="/img/oncology.png" alt=""
                                                                    className="img-fluid" /></span>Urology</a>
                                                            </li>
                                                            <li>
                                                                <a href="#"><span><img src="/img/oncology.png" alt=""
                                                                    className="img-fluid" /></span>Nephrology</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>


                                                <div className="col-lg-4">
                                                    <div className="sub-menu-details">
                                                        <ul>
                                                            <li>
                                                                <a href="#"><span><img src="/img/oncology.png" alt=""
                                                                    className="img-fluid" /></span>Oncology</a>
                                                            </li>
                                                            <li>
                                                                <a href="#"><span><img src="/img/oncology.png" alt=""
                                                                    className="img-fluid" /></span>Neuro Sciences</a>
                                                            </li>
                                                            <li>
                                                                <a href="#"><span><img src="/img/oncology.png" alt=""
                                                                    className="img-fluid" /></span>Cardiac Sciences</a>
                                                            </li>
                                                            <li>
                                                                <a href="#"><span><img src="/img/oncology.png" alt=""
                                                                    className="img-fluid" /></span>Orthopadics</a>
                                                            </li>
                                                            <li>
                                                                <a href="#"><span><img src="/img/oncology.png" alt=""
                                                                    className="img-fluid" /></span>Transplants</a>
                                                            </li>
                                                            <li>
                                                                <a href="#"><span><img src="/img/oncology.png" alt=""
                                                                    className="img-fluid" /></span>Urology</a>
                                                            </li>
                                                            <li>
                                                                <a href="#"><span><img src="/img/oncology.png" alt=""
                                                                    className="img-fluid" /></span>Nephrology</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </li>
                                    <li><a href="" className="anchor-menu">Find a Doctor</a></li>
                                    {/* <!-- <li><a href="" className="anchor-menu">Health Checkup</a></li> --> */}
                                    <li><a href="" className="anchor-menu">Visa Medical</a></li>
                                    <li><a href="" className="anchor-menu">International Patients</a></li>
                                    <li className="menu-item-has-children show-submenu d-lg-inline-block d-none">
                                        <Link href="#" className="anchor-menu">Locations</Link>
                                        <div className="sub-menu ">
                                            <div className="row">
                                                <div className="col-md-4">
                                                    <div className="sub-menu-details">
                                                        <div className="tabs">
                                                            {
                                                                allLocations.map((loc, _) => (
                                                                    <div
                                                                        onClick={() => onLocChangeRedirection(loc)}
                                                                        className={`tab ${selectedLoc?.slug === loc.slug ? 'active' : ''}`}
                                                                        data-tab="tab5" key={loc.documentId}
                                                                    >
                                                                        {loc.title} <i className="fa-solid fa-chevron-right"></i>
                                                                    </div>
                                                                ))
                                                            }
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-lg-8">
                                                    <div className="sub-menu-details">
                                                        <div id="tab1" className="tab-content active">
                                                            <div className="row">
                                                                <div className="col-md-6 mb-3">
                                                                    <h3>Hospital</h3>
                                                                    <ul>
                                                                        <li>
                                                                            <a href="#">KIMSHEALTH Trivandrum</a>
                                                                        </li>
                                                                    </ul>
                                                                </div>

                                                                <div className="col-md-6 mb-3">
                                                                    <h3>Medical Centers</h3>
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

                                                        <div id="tab2" className="tab-content">
                                                            <div className="row">
                                                                <div className="col-md-6 mb-3">
                                                                    <h3>Medical Centers</h3>
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
                                                                <div className="col-md-6 mb-3">
                                                                    <h3>Hospital</h3>
                                                                    <ul>
                                                                        <li>
                                                                            <a href="#">KIMSHEALTH Trivandrum</a>
                                                                        </li>
                                                                    </ul>
                                                                </div>


                                                            </div>
                                                        </div>
                                                        <div id="tab3" className="tab-content">
                                                            <div className="row">
                                                                <div className="col-md-6 mb-3">
                                                                    <h3>Hospital</h3>
                                                                    <ul>
                                                                        <li>
                                                                            <a href="#">KIMSHEALTH Trivandrum</a>
                                                                        </li>
                                                                    </ul>
                                                                </div>

                                                                <div className="col-md-6 mb-3">
                                                                    <h3>Medical Centers</h3>
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
                                                        <div id="tab4" className="tab-content">
                                                            <div className="row">
                                                                <div className="col-md-6 mb-3">
                                                                    <h3>Medical Centers</h3>
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
                                                                <div className="col-md-6 mb-3">
                                                                    <h3>Hospital</h3>
                                                                    <ul>
                                                                        <li>
                                                                            <a href="#">KIMSHEALTH Trivandrum</a>
                                                                        </li>
                                                                    </ul>
                                                                </div>


                                                            </div>
                                                        </div>
                                                        <div id="tab5" className="tab-content">
                                                            <div className="row">
                                                                <div className="col-md-6 mb-3">
                                                                    <h3>Hospital</h3>
                                                                    <ul>
                                                                        <li>
                                                                            <a href="#">KIMSHEALTH Trivandrum</a>
                                                                        </li>
                                                                    </ul>
                                                                </div>

                                                                <div className="col-md-6 mb-3">
                                                                    <h3>Medical Centers</h3>
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
                                                </div>

                                            </div>
                                        </div>

                                    </li>
                                    <li className="menu-item-has-children show-submenu d-lg-none d-block">
                                        <a href="#">Locations</a>
                                        <div className="sub-menu">
                                            <div className="sub-menu-details">
                                                <div className="accordion">
                                                    <div className="accordion-item">
                                                        <div className="accordion-header">
                                                            <h3>Trivandrum</h3>
                                                            <div className="accordion-icon"></div>
                                                        </div>
                                                        <div className="accordion-content">
                                                            <div className="content-inner">
                                                                <div className="row">
                                                                    <div className="col-md-6 mb-3">
                                                                        <h3>Hospital</h3>
                                                                        <ul>
                                                                            <li>
                                                                                <a href="#">KIMSHEALTH Trivandrum</a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="col-md-6">
                                                                        <h3>Medical Centers</h3>
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
                                                    </div>

                                                    <div className="accordion-item">
                                                        <div className="accordion-header">
                                                            <h3>Kollam</h3>
                                                            <div className="accordion-icon"></div>
                                                        </div>
                                                        <div className="accordion-content">
                                                            <div className="content-inner">
                                                                <div className="row">
                                                                    <div className="col-md-6 mb-3">
                                                                        <h3>Medical Centers</h3>
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
                                                                    <div className="col-md-6 mb-0">
                                                                        <h3>Hospital</h3>
                                                                        <ul>
                                                                            <li>
                                                                                <a href="#">KIMSHEALTH Trivandrum</a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>


                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="accordion-item">
                                                        <div className="accordion-header">
                                                            <h3>Kottayam</h3>
                                                            <div className="accordion-icon"></div>
                                                        </div>
                                                        <div className="accordion-content">
                                                            <div className="content-inner">
                                                                <div className="row">
                                                                    <div className="col-md-6 mb-3">
                                                                        <h3>Hospital</h3>
                                                                        <ul>
                                                                            <li>
                                                                                <a href="#">KIMSHEALTH Trivandrum</a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>

                                                                    <div className="col-md-6 mb-0">
                                                                        <h3>Medical Centers</h3>
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
                                                    </div>

                                                    <div className="accordion-item">
                                                        <div className="accordion-header">
                                                            <h3>Perintalmanna</h3>
                                                            <div className="accordion-icon"></div>
                                                        </div>
                                                        <div className="accordion-content">
                                                            <div className="content-inner">
                                                                <div className="row">
                                                                    <div className="col-md-6 mb-3">
                                                                        <h3>Medical Centers</h3>
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
                                                                    <div className="col-md-6 mb-0">
                                                                        <h3>Hospital</h3>
                                                                        <ul>
                                                                            <li>
                                                                                <a href="#">KIMSHEALTH Trivandrum</a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>


                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="accordion-item">
                                                        <div className="accordion-header">
                                                            <h3>Nagercoil</h3>
                                                            <div className="accordion-icon"></div>
                                                        </div>
                                                        <div className="accordion-content">
                                                            <div className="content-inner">
                                                                <div className="row">
                                                                    <div className="col-md-6 mb-3">
                                                                        <h3>Medical Centers</h3>
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
                                                                    <div className="col-md-6 mb-0">
                                                                        <h3>Hospital</h3>
                                                                        <ul>
                                                                            <li>
                                                                                <a href="#">KIMSHEALTH Trivandrum</a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>

                                            </div>
                                        </div>
                                    </li>

                                    {/* <!-- <li className="menu-item-has-children show-submenu">
                                    <a href="#" className="anchor-menu">Programmes</a>
                                    <div className="sub-menu">
                                        <div className="row">
                                            <div className="col-lg-4">
                                                <div className="sub-menu-details">
                                                    <h3>Admissions</h3>
                                                    <ul>
                                                        <li>
                                                            <a href="">Centre for Heart & Vascular Care</a>
                                                        </li>
                                                        <li>
                                                            <a href="">
                                                                Centre for Bone & Joint Care</a>
                                                        </li>

                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="sub-menu-details">
                                                    <h3>Executive Education</h3>
                                                    <ul>
                                                        <li>
                                                            <a href="">
                                                                Centre for Gastro Sciences</a>
                                                        </li>
                                                        <li>
                                                            <a href="">
                                                                Centre for Nephro urosciences and Kidney Transplantation</a>
                                                        </li>

                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="sub-menu-details">
                                                    <h3>Faculty</h3>
                                                    <ul>
                                                        <li>
                                                            <a href="">
                                                                Centre For Neurosciences</a>
                                                        </li>

                                                        <li>
                                                            <a href="">
                                                                Centre for Blood Disease, BMT & Cancer Immunotherapy</a>
                                                        </li>

                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sub-menu sub-menu-single">
                                        <div className="sub-menu-details">
                                            <ul>
                                                <li>
                                                    <a href="#">Post-Graduate Diploma In Management (PGDM)</a>
                                                </li>
                                                <li>
                                                    <a href="#">Fellow Programme In Management (FPM)</a>
                                                </li>
                                                <li>
                                                    <a href="#">Online Post Graduate Diploma In Management (OPGDM)</a>
                                                </li>
                                                <li>
                                                    <a href="#">International Student Exchange Programme (ISEP)</a>
                                                </li>
                                                <li>
                                                    <a href="#">Post Graduate Certificate In Financial Market
                                                        (PGCFM)</a>
                                                </li>
                                                <li>
                                                    <a href="#">Certificate Programme In Data Science</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li> --> */}

                                    {/* <!-- <li><a href="" className="anchor-menu">Executive Education</a>
                                    <div className="sub-menu sub-menu-single">
                                        <div className="sub-menu-details">
                                            <ul>
                                                <li>
                                                    <a href="">Collaborative Programme</a>
                                                </li>
                                                <li>
                                                    <a href="">Custom Programme</a>
                                                </li>
                                                <li>
                                                    <a href="">Custom Programme - Contact</a>
                                                </li>

                                            </ul>
                                        </div>
                                    </div>
                                </li> --> */}
                                    {/* <!-- <li><a href="" className="anchor-menu">Faculty</a></li> --> */}
                                    {/* <!-- <li><a href="" className="anchor-menu">Research</a>
                                    <div className="sub-menu sub-menu-single">
                                        <div className="sub-menu-details">
                                            <ul>
                                                <li>
                                                    <a href="">Faculty Publications</a>
                                                </li>
                                                <li>
                                                    <a href="">IMI Kolkata Publications</a>
                                                </li>
                                                <li>
                                                    <a href="">Certers Of Exellence</a>
                                                </li>

                                            </ul>
                                        </div>
                                    </div>
                                </li> --> */}

                                </ul>
                            </div>

                            <div className="appointment-btn d-lg-block d-none me-4">
                                <button className="btn" type="submit">Book An Appointment</button>
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

export default Header