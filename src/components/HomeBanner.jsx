"use client"
import React from 'react'

const HomeBanner = () => {
    return (
        <>
            <section className="d-lg-block d-none">
                <div className="container-wrapper">
                    <div className="owl-carousel owl-theme homepage-slider">
                        <div className="item">
                            <img src="/img/banner1.jpg" className="img-fluid" alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="d-lg-none d-block">
                <div className="container-wrapper">
                    <div className="owl-carousel owl-theme homepage-slider">
                        <div className="item">
                            <img src="/img/mobile-banner.jpg" className="img-fluid" alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomeBanner