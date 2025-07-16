"use client"
import React, { useEffect, useState } from 'react'
import langLoc from "@/helper/getLangLoc";
import { onLangChangeRedirection, } from "@/helper/onChageRedirection";
import Cookies from 'js-cookie';
import { getBaseUrl } from '@/helper/getBaseUrl';
import getLocation from '@/app/lib/getLocation';
import getSpecialityData from '@/app/lib/getSpeciality';
import hospitalData from '@/app/lib/getHospital';
import getStaticText from '@/helper/getStaticText';
import getCurrentLangLocClient from '@/helper/getCurrentLangLocClient';
import InternationalMenu from './InternationalMenu';
import SearchBox from './Forms/SearchBox';


const Header = () => {
  const [selectedLangLoc, setselectedLangLoc] = useState([]);
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
  const [showSearch, setShowSearch] = useState(false); // FOR SEARCH TOGGLE


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
      const LangLoc = await getCurrentLangLocClient()
      setselectedLangLoc(LangLoc);

      setSpeciality(await getSpecialityData.getHeaderSpeciality({ LangLoc }))

      setLocationData(await getLocation());


      setAllHospital(await hospitalData.getAllHospitalAndMedicalCenter());

    }
    get();

  }, [])


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



  // Toggle bar for 
  useEffect(() => {
    const hamburger = document.getElementById('hamburger');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    const menuItems = document.querySelectorAll('.menu-item');
    const dropdownItems = document.querySelectorAll('.has-dropdown');


    // Toggle sidebar
    hamburger?.addEventListener('click', function () {
      this?.classList.toggle('active');
      sidebar?.classList.toggle('active');
      overlay?.classList.toggle('active');


      // Prevent scrolling when sidebar is open
      document.body.style.overflow = sidebar?.classList.contains('active') ? 'hidden' : '';
    });


    // Close sidebar when clicking on overlay
    overlay?.addEventListener('click', function () {
      hamburger?.classList.remove('active');
      sidebar?.classList.remove('active');
      this?.classList.remove('active');
      document.body.style.overflow = '';
    });


    // Menu item click effect
    menuItems.forEach(item => {
      item.addEventListener('click', function (e) {
        // Check if this item is part of a dropdown
        const parentLi = this.closest('.has-dropdown');


        if (parentLi) {
          e.stopPropagation();
          // Close all other dropdowns first
          dropdownItems.forEach(dropdown => {
            if (dropdown !== parentLi) {
              dropdown.classList.remove('open');
              const otherSubmenu = dropdown.querySelector('.submenu');
              if (otherSubmenu) {
                otherSubmenu?.classList.remove('open');
              }
            }
          });


          // Toggle current dropdown
          parentLi?.classList.toggle('open');


          // Find the submenu element
          const submenu = parentLi.querySelector('.submenu');
          if (submenu) {
            submenu?.classList.toggle('open');
          }


          // Prevent other actions for dropdown items
          return;
        }


        // Remove active class from all items
        menuItems.forEach(i => i?.classList.remove('active'));


        // Add active class to clicked item
        this?.classList.add('active');


        // Close sidebar on mobile after selection
        if (window.innerWidth <= 768) {
          setTimeout(() => {
            hamburger?.classList.remove('active');
            sidebar?.classList.remove('active');
            overlay?.classList.remove('active');
            document.body.style.overflow = '';
          }, 300);
        }
      });
    });


    // Close sidebar when window is resized to desktop
    window?.addEventListener('resize', function () {
      if (window.innerWidth > 768 && sidebar?.classList.contains('active')) {
        hamburger?.classList.remove('active');
        sidebar?.classList.remove('active');
        overlay?.classList.remove('active');
        document.body.style.overflow = '';
      }
    });


    // Submenu item click handling
    document.querySelectorAll('.submenu-item').forEach(item => {
      item.addEventListener('click', function (e) {
        e.stopPropagation();


        // Remove active class from all items
        menuItems.forEach(i => i?.classList.remove('active'));


        // Add active class to parent menu item
        const parentMenuItem = this.closest('.has-dropdown').querySelector('.menu-item');
        if (parentMenuItem) {
          parentMenuItem?.classList.add('active');
        }


        // Highlight this submenu item
        document.querySelectorAll('.submenu-item').forEach(i => {
          i?.classList.remove('active');
        });
        this?.classList.add('active');


        // Close sidebar on mobile after selection
        if (window.innerWidth <= 768) {
          setTimeout(() => {
            hamburger?.classList.remove('active');
            sidebar?.classList.remove('active');
            overlay?.classList.remove('active');
            document.body.style.overflow = '';
          }, 300);
        }
      });
    });


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
            <div className="header-contact d-flex align-items-center justify-content-center position-relative">
              <ul>
                <li><a href={`${basePath}/about-us`}>{staticTexts['About Us']}</a></li>
                <li><a href={`${basePath}/at-home-services`}>{staticTexts['Home Care']}</a></li>
                <li><a href={`${basePath}/second-opinion`}>{staticTexts['Second Opinion']}</a></li>
                <li><a href={`${basePath}/ambulance-services`}>{staticTexts['Call Ambulance']}</a></li>
                <li className="menu-item-has-children show-submenu">
                  <a href={`${basePath}/contact-us`}>{staticTexts['Contact Us']}</a>
                  <div className="sub-menu sub-menu-single">
                    <div className="sub-menu-details">
                      <ul>
                        <li>
                          <a href={"tel:" + locationData?.phone}><i className="fa-solid fa-phone"></i>   {locationData?.phone}</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li><a href={"https://healthcheckup.kimshealthcare.com/p/kims-trivandrum-1/"} target='_blank'>{staticTexts['Health Checkup']}</a></li>
              </ul>

              <div className="top-bar-icon d-flex align-items-center">
                <div className="whatapp-icon">
                  <a href={"https://wa.me/" + locationData?.whatsapp} target='_blank'> <img src="/img/whatsapp.svg" className="img-fluid" alt="" /></a>
                </div>

                <div className="search-icon ms-3 me-2 rounded-field-form">
                  <a href="#" className="search-button" onClick={() => {
                    setShowSearch(!showSearch);
                  }}>
                    <i className="fa-solid fa-magnifying-glass"></i></a>
                  <div className={`search-box input-group p-0 my-lg-3 my-3 ${showSearch ? "d-flex" : "d-none"}`}>
                    <SearchBox />
                  </div>
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




        {/* ::::::::: Mobile menu bar :::::::::: */}

        <div className="header-menu mobileMenuBar" id="menuHeader">
          <div className="container">
            <nav className="header-menu-container justify-content-lg-end">
              <div className="navbar-brand">
                <a href={"/"} className="text-decoration-none">
                  <img src="/img/logo.png" height="55" className="img-fluid" />
                </a>
              </div>
              <div className="mobile_primary" id="primary-nav">
                <ul className="menu-navigation" id="menu-main-navigation-1">
                  <li className="menu-item-has-children show-submenu">
                    <a href={basePath + "/speciality"} className="anchor-menu">{staticTexts['Specialities']}</a>
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
                                  <a href={basePath + "/speciality/" + s?.speciality?.slug}>
                                    <span>
                                      <img src={s.speciality?.iconImage?.url ? process.env.NEXT_PUBLIC_IMAGE_URL + s.speciality?.iconImage.url : "/img/no-image.jpg"} alt={s?.title} className="img-fluid" />
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
                  <li><a href={`${basePath}/doctor`} className="anchor-menu">{staticTexts['Find a Doctor']}</a></li>
                  <li><a href={`${basePath}/visa-medical`} className="anchor-menu">{staticTexts['Visa Medical']}</a></li>
                  <li><a href={`${basePath}/international-patient`} className="anchor-menu">
                    {staticTexts['International Patients']}</a></li>
                  <li className="menu-item-has-children show-submenu d-lg-inline-block d-none">
                    <a href={basePathOnlyLang + "/hospital"} className="anchor-menu">{staticTexts['Locations']}</a>
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
                                    <a href={basePathOnlyLang + "/" + loc?.slug}>{loc?.title} <i className="fa-solid fa-chevron-right"></i></a>
                                  </div>
                                ))
                              }
                            </div>
                          </div>
                        </div>

                        <div className="col-lg-8">
                          <div className="sub-menu-details location-menu-red-color">
                            {
                              allLocations.map((l, index) => {
                                // Filter once per location
                                const hospitalsForLocation = allHospital?.filter(h => h?.location.id === l.id) || [];

                                const onlyHospitals = hospitalsForLocation.filter(h => h?.type === "Hospital");
                                const onlyMedicalCenters = hospitalsForLocation.filter(h => h.type === "Medical Center");

                                return (
                                  <div id={"tab" + index} className={`tab-content ${index === 0 ? 'active' : ''}`} key={index}>
                                    {l?.slug !== "ip" ? <div className="row">
                                      <div className="col-md-6 mb-3">
                                        {onlyHospitals?.length > 0 && <h3>{staticTexts['Hospitals']}</h3>}
                                        <ul>
                                          {onlyHospitals.map((hospital, i) => (
                                            <li key={`hospital-${i}`}>
                                              <a href={`${basePathOnlyLang}/${l?.slug}/hospital/${hospital?.slug}`}>{hospital?.title}</a>
                                            </li>
                                          ))}
                                        </ul>
                                      </div>

                                      <div className="col-md-6 mb-3">
                                        {
                                          onlyMedicalCenters.length > 0 && <h3>{staticTexts["Medical Centers"]}</h3>
                                        }
                                        <ul>
                                          {onlyMedicalCenters?.map((center, i) => (
                                            <li key={`medcenter-${i}`}>
                                              <a href={`${basePathOnlyLang}/${l?.slug}/hospital/${center?.slug}`}>{center?.title}</a>
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                    </div> : <InternationalMenu />}
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
                    <a href={basePath + "/hospital"}>{staticTexts['Locations']}</a>
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
                                      {l.slug !== "ip" ? <div className="row">
                                        <div className="col-md-6 mb-3">
                                          {onlyHospitals?.length > 0 && <h3>{staticTexts['Hospitals']}</h3>}
                                          <ul>
                                            {onlyHospitals.map((hospital, i) => (
                                              <li key={`hospital-${i}`}>
                                                <a href={`${basePathOnlyLang}/${l.slug}/hospital/${hospital?.slug}`}>
                                                  {hospital?.title}
                                                </a>
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                        <div className="col-md-6">
                                          {
                                            onlyMedicalCenters?.length > 0 && <h3>{staticTexts["Medical Centers"]}</h3>
                                          }
                                          <ul>
                                            {onlyMedicalCenters?.map((center, i) => (
                                              <li key={`medcenter-${i}`}>
                                                <a href={`${basePathOnlyLang}/${l?.slug}/hospital/${center?.slug}`}>
                                                  {center?.title}
                                                </a>
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                      </div> : <InternationalMenu />}
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

                  <li className="menu-item-has-children show-submenu quicklink-header">
                    <a href="#" className="anchor-menu">{staticTexts['About Us']}</a>
                    <div className="sub-menu">
                      <div className="row">
                        <div className="col-lg-4">
                          <div className="sub-menu-details">
                            <ul>
                              <li>
                                <a href={basePath + "/about-us"}>{staticTexts['Overview']}</a>
                              </li>
                              <li>
                                <a href={basePath + "/leadership"}>{staticTexts['Leadership']}</a>
                              </li>
                              <li>
                                <a href={basePath + "/milestone"}>{staticTexts['Milestones']}</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="quicklink-header"><a href={`${basePath}/at-home-services`} className="anchor-menu">{staticTexts['Home Care']}</a></li>
                  <li className="quicklink-header"><a href={`${basePath}/second-opinion`} className="anchor-menu">{staticTexts['Second Opinion']}</a></li>
                  <li className="quicklink-header"><a href={`${basePath}/ambulance-services`} className="anchor-menu">{staticTexts['Call Ambulance']}</a></li>
                  <li className="quicklink-header"><a href={`${basePath}/contact-us`} className="anchor-menu">{staticTexts['Contact Us']}</a></li>
                  <li className="quicklink-header"><a target='_blank' href={"https://healthcheckup.kimshealthcare.com/p/kims-trivandrum-1/"} className="anchor-menu">{staticTexts['Health Checkup']}</a></li>



                  <li className="quicklink-header">
                    <a target='_blank' href="https://consult.bestdocapp.com/home/KIMSTVM?version=new" className="anchor-menu">{staticTexts['Telehealth']}</a>
                  </li>
                  <li className="quicklink-header">
                    <a href={basePath + "/investor"} className="anchor-menu">{staticTexts['Corporate']}</a>
                  </li>
                  <li className="menu-item-has-children show-submenu quicklink-header">
                    <a href="#" className="anchor-menu">{staticTexts['CSR']}</a>
                    <div className="sub-menu">
                      <div className="row">
                        <div className="col-lg-4">
                          <div className="sub-menu-details">
                            <ul>
                              <li>
                                <a href={basePath + "/csr-policy"}>
                                  {staticTexts['CSR Policy']}</a>
                              </li>
                              <li>
                                <a href={basePath + "/csr-initiative"}>
                                  {staticTexts['CSR Initiative']}</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="menu-item-has-children show-submenu quicklink-header">
                    <a href="#" className="anchor-menu">{staticTexts['Patients and Visitors']}</a>
                    <div className="sub-menu">
                      <div className="row">
                        <div className="col-lg-4">
                          <div className="sub-menu-details">
                            <ul>
                              <li>
                                <a href={basePath + "/testimonial"}>
                                  {staticTexts['Patient Testimonials']}</a>
                              </li>
                              <li>
                                <a href={basePath + "/patient-stories"}>
                                  {staticTexts['Patient Stories']}</a>
                              </li>
                              <li>
                                <a href={basePath + "/patients-rights-and-responsibilities"} >
                                  {staticTexts['Patient Rights']}
                                </a>
                              </li>
                              <li>
                                <a href={basePath + "/guidebook-for-tpa-patients"}>
                                  {staticTexts['Guidelines']}</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="quicklink-header">
                    <a href={basePath + "/ethics-committee"}>{staticTexts['Ethics Committee']}</a>
                  </li>
                  <li className="menu-item-has-children show-submenu quicklink-header">
                    <a href="#" className="anchor-menu">{staticTexts['Academics']}</a>
                    <div className="sub-menu">
                      <div className="row">
                        <div className="col-lg-4">
                          <div className="sub-menu-details">
                            <ul>
                              <li>
                                <a href={basePath + "/kisa-kimshealth-institute-of-skill-acquisition"}>{staticTexts['KISA (KIMSHEALTH Institute of Skill Acquisition)']}</a>
                              </li>
                              <li>
                                <a href={basePath + "/internal-medicine-training-imt"}>{staticTexts['Internal Medicine Training (IMT)']}</a>
                              </li>
                              <li>
                                <a href={basePath + "/emergency-medicine-program"}>{staticTexts['Emergency Medicine Program']}</a>
                              </li>
                              <li>
                                <a href={basePath + "/american-heart-association"}>
                                  {staticTexts['American Heart Association']}</a>
                              </li>
                              <li>
                                <a href={basePath + "/doctoral-courses"}>
                                  {staticTexts['Doctoral Courses']}</a>
                              </li>
                              <li>
                                <a href={basePath + "/socomer"}>
                                  {staticTexts['SOCOMER']}</a>
                              </li>
                              <li>
                                <a href={basePath + "#"}>
                                  {staticTexts['Nursing Recruitment']}</a>
                              </li>
                              <li>
                                <a href={basePath + "/paramedical-courses"}>{staticTexts['Paramedical Courses']}</a>
                              </li>
                              <li>
                                <a href={basePath + "/kimshealth-clinical-skills-and-simulation-centre"}>
                                  {staticTexts['KIMSHEALTH Clinical Skills and Simulation Centre']}</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  {/* <li className="quicklink-header">
                    <a href={basePath + "#"}>{staticTexts['Facilities']}</a>
                  </li> */}
                  {/* <li className="quicklink-header">
                    <a href={basePath + "#"}>{staticTexts['Quality Focus']}</a>
                  </li> */}
                  <li className="quicklink-header">
                    <a href={basePath + "/all-companies-on-panel"}>{staticTexts['Insurance Providers']}</a>
                  </li>
                  {/* <li className="quicklink-header">
                    <a href={basePath + "#"}>{staticTexts['Careers']}</a>
                  </li> */}
                  <li className="quicklink-header">
                    <a href={basePath + "/blog"}>{staticTexts['Blogs']}</a>
                  </li>
                  <li className="quicklink-header">
                    <a href={basePath + "/doctor-talk"}>
                      {staticTexts['Videos']}</a>
                  </li>


                  <li className="menu-item-has-children show-submenu quicklink-header">
                    <a href="#" className="anchor-menu">{staticTexts['Others']}</a>
                    <div className="sub-menu">
                      <div className="row">
                        <div className="col-lg-4">
                          <div className="sub-menu-details">
                            <ul>
                              <li>
                                <a href={basePath + "/media-and-events"}>{staticTexts['Events']}</a>
                              </li>
                              <li>
                                <a href={basePath + "/travel-clinic"}>{staticTexts['Travel Clinic']}</a>
                              </li>
                              <li>
                                <a href={basePath + "/ews-services"}>{staticTexts['EWS Services']}</a>
                              </li>
                              <li>
                                <a href={basePath + "/blood-bank"} >
                                  {staticTexts['Blood Bank']}
                                </a>
                              </li>
                              <li>
                                <a href={basePath + "/bmw-report"}>{staticTexts['BMW Reports']}</a>
                              </li>

                              {/* <li>
                                <a href={basePath + "/faqs"}>{staticTexts['FAQs']}</a>
                              </li> */}
                              <li>
                                <a href={basePath + "/stents-price-list"}>{staticTexts['Stents Price List']}</a>
                              </li>
                              <li>
                                <a href={basePath + "/knee-implant-list"}>{staticTexts['Knee Implant List']}</a>
                              </li>
                              <li>
                                <a href={basePath + "/donor-information"}>{staticTexts['Donor Information']}</a>
                              </li>
                              <li>
                                <a href={basePath + "/privacy-policy"}>{staticTexts['Privacy Policies']}</a>
                              </li>
                              <li>
                                <a href={basePath + "/terms-and-conditions"}>{staticTexts['Term & Conditions']}</a>
                              </li>
                              <li>
                                <a href={basePath + "/refund-and-cancellation-policy"}>{staticTexts['Refund & Cancellation Policy']}</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>


              <div className="appointment-btn d-lg-block d-none me-4">
                <button className="btn" type="submit"
                  onClick={() => { location.href = `${basePath}/book-an-appointment` }}>
                  {staticTexts['Book An Appointment']}
                </button>
              </div>


              <div className="desktop-humberger-menu">
                <div className="hamburger" id="hamburger">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div className="sidebar pb-5" id="sidebar" style={{ overflowY: 'auto' }}>
                  <div className="menu-items">
                    <ul className="sub-menu-details">
                      {/* <li className="has-dropdown">
                        <a href={basePath + "#"} className="menu-item">{staticTexts['About Us']}<i className="fa-solid fa-angle-down"></i></a>

                        <ul className="submenu">
                          <li className="submenu-item">
                            <a href={basePath + "/about-us"}>{staticTexts['Overview']}</a>
                          </li>
                          <li className="submenu-item">
                            <a href={basePath + "/leadership"}>{staticTexts['Leadership']}</a>
                          </li>
                          <li className="submenu-item">
                            <a href={basePath + "/milestone"}>{staticTexts['Milestones']}</a>
                          </li>
                        </ul>
                      </li> */}
                      <li>
                        <a target='_blank' href="https://consult.bestdocapp.com/home/KIMSTVM?version=new" className="menu-item mt-2">{staticTexts['Telehealth']}</a>
                      </li>
                      <li>
                        <a href={basePath + "/investor"} className="menu-item">{staticTexts['Corporate']}</a>
                      </li>

                      <li className="has-dropdown">
                        <a href="#" className="menu-item">{staticTexts['CSR']}<i className="fa-solid fa-angle-down"></i></a>

                        <ul className="submenu">
                          <li className="submenu-item">
                            <a href={basePath + "/csr-policy"}>{staticTexts['CSR Policy']}</a>
                          </li>
                          <li className="submenu-item">
                            <a href={basePath + "/csr-initiative"}>{staticTexts['CSR Initiative']}</a>
                          </li>
                        </ul>
                      </li>

                      <li className="has-dropdown">
                        <a href="#" className="menu-item">{staticTexts['Patients and Visitors']}<i className="fa-solid fa-angle-down"></i></a>

                        <ul className="submenu">
                          <li className="submenu-item">
                            <a href={basePath + "/testimonial"}>{staticTexts['Patient Testimonials']}</a>
                          </li>
                          <li className="submenu-item">
                            <a href={basePath + "/patient-stories"}>{staticTexts['Patient Stories']}</a>
                          </li>
                          <li className="submenu-item">
                            <a href={basePath + "/patients-rights-and-responsibilities"} >
                              {staticTexts['Patient Rights']}
                            </a>
                          </li>
                          <li className="submenu-item">
                            <a href={basePath + "/guidebook-for-tpa-patients"}>{staticTexts['Guidelines']}</a>
                          </li>
                        </ul>
                      </li>

                      <li className="has-dropdown">
                        <a href="#" className="menu-item">{staticTexts['Academics']}<i className="fa-solid fa-angle-down"></i></a>

                        <ul className="submenu">
                          <li className="submenu-item">
                            <a href={basePath + "/kisa-kimshealth-institute-of-skill-acquisition"}>{staticTexts['KISA (KIMSHEALTH Institute of Skill Acquisition)']}</a>
                          </li>
                          <li className="submenu-item">
                            <a href={basePath + "/internal-medicine-training-imt"}>{staticTexts['Internal Medicine Training (IMT)']}</a>
                          </li>
                          <li className="submenu-item">
                            <a href={basePath + "/emergency-medicine-program"}>{staticTexts['Emergency Medicine Program']}</a>
                          </li>
                          <li className="submenu-item">
                            <a href={basePath + "/american-heart-association"}>{staticTexts['American Heart Association']}</a>
                          </li>
                          <li className="submenu-item">
                            <a href={basePath + "/doctoral-courses"}>{staticTexts['Doctoral Courses']}</a>
                          </li>
                          <li className="submenu-item">
                            <a href={basePath + "/socomer"}>{staticTexts['SOCOMER']}</a>
                          </li>
                          {/* <li className="submenu-item">
                            <a href={basePath + "#"}>{staticTexts['Nursing Recruitment']}</a>
                          </li> */}
                          <li className="submenu-item">
                            <a href={basePath + "/paramedical-courses"}>{staticTexts['Paramedical Courses']}</a>
                          </li>
                          <li className="submenu-item">
                            <a href={basePath + "/kimshealth-clinical-skills-and-simulation-centre"}>{staticTexts['KIMSHEALTH Clinical Skills and Simulation Centre']}</a>
                          </li>
                        </ul>
                      </li>
                      {/* <li>
                        <a href={basePath + "#"} className="menu-item mt-2">{staticTexts['Facilities']}</a>
                      </li> */}
                      {/* <li>
                        <a href={basePath + "#"} className="menu-item mt-2">{staticTexts['Quality Focus']}</a>
                      </li> */}
                      <li>
                        <a href={basePath + "/all-companies-on-panel"} className="menu-item mt-2">{staticTexts['Insurance Providers']}</a>
                      </li>
                      {/* <li>
                        <a href={basePath + "#"} className="menu-item mt-2">{staticTexts['Careers']}</a>
                      </li> */}
                      <li>
                        <a href={basePath + "/blog"} className="menu-item mt-2">{staticTexts['Blogs']}</a>
                      </li>
                      <li>
                        <a href={basePath + "/doctor-talk"} className="menu-item mt-2">
                          {staticTexts['Videos']}</a>
                      </li>
                      <li>
                        <a href={basePath + "/ethics-committee"} className="menu-item mt-2">{staticTexts['Ethics Committee']}</a>
                      </li>

                      {/* OTHERS */}
                      <li className="has-dropdown">
                        <a href="#" className="menu-item">{staticTexts['Others']} <i className="fa-solid fa-angle-down"></i></a>

                        <ul className="submenu">
                          <li className="submenu-item">
                            <a href={basePath + "/media-and-events"}>{staticTexts['Events']}</a>
                          </li>
                          <li className="submenu-item">
                            <a href={basePath + "/travel-clinic"}>{staticTexts['Travel Clinic']}</a>
                          </li>
                          <li className="submenu-item">
                            <a href={basePath + "/ews-services"}>{staticTexts['EWS Services']}</a>
                          </li>
                          <li className="submenu-item">
                            <a href={basePath + "/blood-bank"} >
                              {staticTexts['Blood Bank']}
                            </a>
                          </li>
                          <li className="submenu-item">
                            <a href={basePath + "/bmw-report"}>{staticTexts['BMW Reports']}</a>
                          </li>

                          {/* <li className="submenu-item">
                            <a href={basePath + "/faqs"}>{staticTexts['FAQs']}</a>
                          </li> */}
                          <li className="submenu-item">
                            <a href={basePath + "/stents-price-list"}>{staticTexts['Stents Price List']}</a>
                          </li>
                          <li className="submenu-item">
                            <a href={basePath + "/knee-implant-list"}>{staticTexts['Knee Implant List']}</a>
                          </li>
                          <li className="submenu-item">
                            <a href={basePath + "/donor-information"}>{staticTexts['Donor Information']}</a>
                          </li>
                          <li className="submenu-item">
                            <a href={basePath + "/privacy-policy"}>{staticTexts['Privacy Policies']}</a>
                          </li>
                          <li className="submenu-item">
                            <a href={basePath + "/terms-and-conditions"}>{staticTexts['Term & Conditions']}</a>
                          </li>
                          <li className="submenu-item">
                            <a href={basePath + "/refund-and-cancellation-policy"}>{staticTexts['Refund & Cancellation Policy']}</a>
                          </li>

                        </ul>
                      </li>
                    </ul>

                  </div>
                </div>
              </div>


              <div className="mobile-spacing-nav">
                {/* <div className="mobile-location-dropdown d-md-none d-block">
                                    <select aria-label="Default select example">
                                        <option value={""}>En</option>
                                        <option value="1">Ar</option>
                                        <option value="2">Ml</option>
                                    </select>
                                </div> */}
                {/* <div className="mobile-location-dropdown d-md-none d-block">
                  <select value={basePathOnlyLang + "/" + selectedLangLoc?.loc?.slug} aria-label="Default select example" onChange={(e) => {
                    const url = e.target.value;
                    window.open(url, '_self', 'noreferrer');
                  }}>
                    <option value={basePathOnlyLang + "/hospital"}>{staticTexts['Location']}</option>
                    {
                      allLocations?.map((loc, i) => {
                        return <option value={basePathOnlyLang + "/" + loc?.slug} key={i}>{loc?.title}</option>
                      })
                    }

                  </select>
                </div> */}
                <div className="search-icon ms-3 me-2 rounded-field-form d-md-none d-block">
                  <a href="#" className="search-button" onClick={() => {
                    setShowSearch(!showSearch);
                  }}>
                    <i className="fa-solid fa-magnifying-glass"></i></a>
                  <div className={`search-box input-group p-0 my-lg-3 my-3 ${showSearch ? "d-flex" : "d-none"}`} >
                    <SearchBox />
                  </div>
                </div>
                <div className="menu-button">
                  <span className="toggle-bar"></span>
                  <span className="toggle-bar"></span>
                  <span className="toggle-bar"></span>
                </div>
              </div>

            </nav>

          </div>
        </div>
      </header>
    </>
  )
}

export default Header;
