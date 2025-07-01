import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'

const BlogDetails = () => {
    return (
        <>
            <Header />
            <div role="main" className="main">
                <div className="blog-details-main-page">
                    <section className="section details-page-before py-0 d-lg-block d-none">
                        <div className="procedures-details-page-header inner-pages-header">
                            <div className="container-fluid px-0">
                                <div className="row">
                                    <div className="col-md-6 details-proceduce-banner-left-col mt-lg-auto">
                                        <div className="hospital-banner-container">
                                            <div className="breadcrumb-wrapper py-2 ps-2 ms-1">
                                                <div className="row">
                                                    <div className="col-12 px-0">
                                                        <ul className="breadcrumb mb-0">
                                                            <li>
                                                                <a href="index.php">Home</a>
                                                            </li>
                                                            <li>
                                                                <a href="hospital-master.php">Blogs</a>
                                                            </li>
                                                            <li className="active"> Is your Psoriasis Getting Out of Control: 5 Things
                                                                That Can Help </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="details-banner">
                                                <div className="details-heading">
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <img src="/img/Dr Ajith R.png" alt="" className="img-fluid" />
                                                        </div>
                                                        <div className="col-md-6 my-auto">
                                                            <h3>Dr. Ajith R</h3>
                                                            <p>KIMSHEALTH, Trivandrum</p>
                                                            <h4>Neurosurgery</h4>
                                                            <div className="mt-4">
                                                                <a href="#" className="hospital-primarybtn "> Speak to Our Specialist
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>


                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-6 details-proceduce-banner-right-col mt-lg-0 mt-4">
                                        <img src="/img/home-details-banner.png" className="img-fluid details-banner-image" alt="" />
                                    </div>

                                    {/* <!-- <div className="col-md-6">
                                        <img src="/img/details-banner.png" alt="" className="img-fluid w-100">
                                    </div> --> */}
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section details-page-before py-0 d-lg-none d-block">
                        <div className="procedures-details-page-header inner-pages-header">
                            <div className="container-fluid px-0">
                                <div className="row">
                                    <div className="col-md-6 details-proceduce-banner-left-col mt-lg-auto">
                                        <div className="hospital-banner-container">
                                            <div className="breadcrumb-wrapper py-2 ps-2 ms-1">
                                                <div className="row">
                                                    <div className="col-12">
                                                        <ul className="breadcrumb mb-0">
                                                            <li>
                                                                <a href="index.php">Home</a>
                                                            </li>
                                                            <li>
                                                                <a href="hospital-master.php">Blogs</a>
                                                            </li>
                                                            <li className="active"> Is your Psoriasis Getting Out of Control</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="details-proceduce-banner-right-col mt-lg-0 mt-4">
                                                <img src="/img/home-details-banner.png" className="img-fluid details-banner-image"
                                                    alt="" />
                                            </div>


                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6 mt-lg-0 mt-4">
                                    <div className="details-banner">
                                        <div className="details-heading">
                                            <div className="row">
                                                <div className="col-5">
                                                    <img src="/img/Dr Ajith R.png" alt="" className="img-fluid" />
                                                </div>
                                                <div className="col-6 my-auto pe-3">
                                                    <h3>Dr. Ajith R</h3>
                                                    <p>KIMSHEALTH, Trivandrum</p>
                                                    <h4>Neurosurgery</h4>
                                                    <div className="mt-4">
                                                        <a href="#" className="hospital-primarybtn d-block"> Speak to Our Specialist
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>


                                        </div>
                                    </div>

                                    {/* <!-- <div className="col-md-6">
                                        <img src="/img/details-banner.png" alt="" className="img-fluid w-100">
                                    </div> --> */}
                                </div>
                            </div>
                        </div>
                    </section>


                    <section className="section blog-details-section">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-8 mb-3">
                                    <div className="main-heading sub-heading">
                                        <h2 className="mb-1">Is your Psoriasis Getting Out of Control: 5 Things That Can Help</h2>
                                        <p>Psoriasis is a condition that causes cells to multiply leading to red or white patches on
                                            the skin. It can be quite a painful trial for many a condition not only comes with
                                            physical discomfort but also a lot of mental anxiety about one’s appearance. Psoriasis
                                            outbreaks, if left unattended, can cause scarring. However, the condition is very much
                                            manageable if we choose to make some simple changes in our lifestyles. Here’s a list of
                                            easy and simple lifestyle changes and hacks that you can adopt to care for your skin.
                                        </p>
                                        <h3>1. Manage your Stress</h3>
                                        <p>Handling one’s stress is one of the most indispensable lifestyle changes for any disorder
                                            or condition. Research suggests that stress and psoriasis outbreaks go hand in hand.
                                            Some key measures you can take towards a stress-free or even low-stress lifestyle is to
                                            try meditation and yoga. Ensure that your stress-relieving methods do not end up
                                            aggravating the situation - stay away from alcohol and tobacco. Alcohol, specifically,
                                            can have some unwanted adverse reactions with psoriasis drugs. Often, psoriasis might
                                            have a negative impact on your self-esteem; consider therapy if you require so.</p>
                                        <h3>2. Stay Moisturized</h3>
                                        <p>One major recommendation for dealing with psoriasis is to avoid cold and dry weather. In
                                            fact, some experts suggest using a humidifier to keep the skin moist. Maintaining
                                            moisture goes a long way in preventing an outbreak. However, it is highly important to
                                            choose the right moisturizer and maintain a continuous regime to ensure effectiveness.
                                            Often, in an effort to ensure skin hydration, people skip on cleansing. Ensure that you
                                            always wash up to remove all the flaky skin. Make sure that you use only mild and safe
                                            products on your skin; avoid chemicals at all costs. Some DIY strategies are to use
                                            products like oatmeal or Epsom salts for effective moisturizing. You could also use
                                            medicated creams after a
                                            prescription from your doctor to ensure better results. Moisturize for at least 10
                                            minutes for the essential hydration and oils to sink in. Some experts also suggest using
                                            scalp oil such as coconut and olive oil on your scalp as well as areas around your
                                            scalp. This helps reduce itchiness and burning and also keeps the skin moist.</p>
                                        <h3>3. Regulate your Diet</h3>
                                        <p>With psoriasis, there are some trigger foods and good foods. ‘Trigger’ foods are those
                                            that cause the immune system to flare up. Red meats, especially beef and all egg
                                            products have shown to cause
                                            psoriasis lesions. Another food category to avoid is gluten; reduce or stop the intake
                                            of wheat and its derivatives including pasta, noodles and certain sauces. All processed
                                            foods, especially canned goods with higher amounts of salt and sugar can also cause
                                            inflammation. What to eat then? Consume fruits and vegetables as they contain
                                            antioxidants which can decrease inflammation. Vegetables like broccoli and cauliflower,
                                            leafy greens and fruits like berries and grapes help to prevent outbreaks.</p>
                                        <h3>4. Exposure to Sunlight</h3>
                                        <p>You might come across tips that suggest you stay away from the sun, DO NOT DO THAT! UV or
                                            UltraViolet Rays from the sun have immunosuppressive effects; they help mitigate the
                                            symptoms of
                                            autoimmune conditions like psoriasis. A study by the NCBI states that “Sun exposure
                                            induces rapid
                                            immunological changes in skin and peripheral blood in patients with psoriasis”. In fact,
                                            UV treatment is highly recommended for patients with psoriasis. Hence, get some mild and
                                            short exposure of natural sunlight as this can go a long way in reducing flaking and
                                            other symptoms. Alternatively, you can also talk to your doctor about Vitamin D
                                            supplements. However extended exposure to sunlight can cause sunburn, which actually
                                            triggers psoriasis flares. Ensure that you expose yourself to a mild and healthy amount
                                            of sunlight, and wear protective gear or sunscreen during the hottest parts of the day.
                                        </p>
                                        <h3>5. Beware of Skin Injuries</h3>
                                        <p>While the list suggests what can be done to keep your psoriasis flares in check, it is
                                            also recommended to be very careful with your skin. Ensure that you perform all tasks
                                            with the utmost care. Keoner
                                            Phenomenon is the appearance of skin lesions in areas of injury which do not appear
                                            otherwise. Hence, injuries can actually be the inception site of painful psoriasis
                                            lesions and flares. Exercising enough
                                            caution in everyday tasks like preparing food, cutting your nails, gardening, and
                                            protection against insect bites can reduce the probability of flares. Avoid tattoos and
                                            piercings and also refrain from
                                            adventure sports or other potentially harmful activities. While psoriasis might be a
                                            long-term autoimmune condition, there are multiple tiny steps you can take to maintain
                                            control over the situation.
                                            Understanding the triggers and causes can help you manage and even avoid the symptoms to
                                            lead
                                            a comfortable life.</p>

                                    </div>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <div className="association-form-card">
                                        <h3>GET A CALLBACK FROM OUR HEALTH ADVISOR</h3>
                                        <form action="">
                                            <div className="row">
                                                <div className="col-md-12 mb-3">
                                                    <input type="text" className="form-control" placeholder="Name" name="name" />
                                                </div>
                                                <div className="col-md-12 mb-3">
                                                    <input type="text" className="form-control"
                                                        placeholder="Enter 10 Digit Mobile Number" name="name" />
                                                </div>
                                                <div className="col-md-12 mb-3">
                                                    <textarea className="form-control" placeholder="Message"
                                                        id="floatingTextarea"></textarea>
                                                </div>
                                                <div className="col-md-12 mb-3 text-center">
                                                    <button className="btn mb-lg-0 mb-2 hospital-primarybtn px-5 py-2">Submit</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="line-divider"> </div>

                    <section className="section blog-section d-lg-block d-none">
                        <div className="container">
                            <div className="row justify-content-between" data-aos="fade-down">
                                <div className="col-md-3 col-8">
                                    <div className="main-heading">
                                        <h2>Related Blogs </h2>
                                    </div>
                                </div>
                                <div className="col-md-2 col-4">
                                    <div className="over-all-btn text-end">
                                        <a href="#">View All <span><img src="/img/slider-right-arrow.svg" className="img-fluid"
                                            alt="" /></span></a>
                                    </div>
                                </div>
                            </div>

                            <div className="owl-carousel owl-theme blog">
                                <div className="card border-0" data-aos="slide-down" data-aos-duration="1000">
                                    <div className="card-top">
                                        <a href="#">
                                            <img src="/img/blog1.jpg" className="img-fluid w-100" alt="" />
                                        </a>
                                    </div>
                                    <div className="card-content">
                                        <a href="#">
                                            <h4>Stapled Hemorrhoidectomy </h4>
                                        </a>
                                        <p>Many individuals, at some point in thier lives, confront the Many individuals,</p>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div>
                                                <strong> By: KIMSHEALTH</strong>
                                            </div>
                                            <div className="main-btn">
                                                <a href="#">Read More <span><i className="fa-solid fa-arrow-right"></i></span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card border-0" data-aos="slide-down" data-aos-duration="1400">
                                    <div className="card-top">
                                        <a href="#">
                                            <img src="/img/blog2.jpg" className="img-fluid w-100" alt="" />
                                        </a>
                                    </div>
                                    <div className="card-content">
                                        <a href="#">
                                            <h4>In-Vitro Fertilization (IVF)</h4>
                                        </a>
                                        <p>The journey towards parenthood isn't always straightforward towards parenthood </p>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div>
                                                <strong> By: KIMSHEALTH</strong>
                                            </div>
                                            <div className="main-btn">
                                                <a href="#">Read More <span><i className="fa-solid fa-arrow-right"></i></span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card border-0" data-aos="slide-down" data-aos-duration="1800">
                                    <div className="card-top">
                                        <a href="#">
                                            <img src="/img/blog3.jpg" className="img-fluid w-100" alt="" />
                                        </a>
                                    </div>
                                    <div className="card-content">
                                        <a href="#">
                                            <h4>High Cholesterol</h4>
                                        </a>
                                        <p>Cholesterol is a type of fat, it is a
                                            double-edged sword Cholesterol is a type of fat</p>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div>
                                                <strong> By: KIMSHEALTH</strong>
                                            </div>
                                            <div className="main-btn">
                                                <a href="#">Read More <span><i className="fa-solid fa-arrow-right"></i></span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card border-0" data-aos="slide-down" data-aos-duration="2200">
                                    <div className="card-top">
                                        <a href="#">
                                            <img src="/img/blog4.jpg" className="img-fluid w-100" alt="" />
                                        </a>
                                    </div>
                                    <div className="card-content">
                                        <a href="#">
                                            <h4>Skincare Routines</h4>
                                        </a>
                                        <p>Having oily skin can be detrimental since that makes you prone to can be detrimental</p>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div>
                                                <strong> By: KIMSHEALTH</strong>
                                            </div>
                                            <div className="main-btn">
                                                <a href="#">Read More <span><i className="fa-solid fa-arrow-right"></i></span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card border-0" data-aos="slide-down" data-aos-duration="2400">
                                    <div className="card-top">
                                        <a href="#">
                                            <img src="/img/blog2.jpg" className="img-fluid w-100" alt="" />
                                        </a>
                                    </div>
                                    <div className="card-content">
                                        <a href="#">
                                            <h4>In-Vitro Fertilization (IVF)</h4>
                                        </a>
                                        <p>The journey towards parenthood isn't always straightforward towards parenthood </p>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div>
                                                <strong> By: KIMSHEALTH</strong>
                                            </div>
                                            <div className="main-btn">
                                                <a href="#">Read More <span><i className="fa-solid fa-arrow-right"></i></span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card border-0" data-aos="slide-down" data-aos-duration="2600">
                                    <div className="card-top">
                                        <a href="#">
                                            <img src="/img/blog3.jpg" className="img-fluid w-100" alt="" />
                                        </a>
                                    </div>
                                    <div className="card-content">
                                        <a href="#">
                                            <h4>High Cholesterol</h4>
                                        </a>
                                        <p>Cholesterol is a type of fat, it is a
                                            double-edged sword Cholesterol is a type of fat</p>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div>
                                                <strong> By: KIMSHEALTH</strong>
                                            </div>
                                            <div className="main-btn">
                                                <a href="#">Read More <span><i className="fa-solid fa-arrow-right"></i></span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="section blog-section d-lg-none d-block">
                        <div className="container">
                            <div className="row justify-content-between" data-aos="fade-up">
                                <div className="col-md-3 col-8">
                                    <div className="main-heading">
                                        <h2>Related Blogs </h2>
                                    </div>
                                </div>
                                <div className="col-md-2 col-4">
                                    <div className="over-all-btn text-end">
                                        <a href="#">View All <span><img src="/img/slider-right-arrow.svg" className="img-fluid"
                                            alt="" /></span></a>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-12">
                                    <div className="blog-card" data-aos="fade-up">
                                        <div className="row">
                                            <div className="col-6 my-auto">
                                                <div className="testi-rightbox">
                                                    <a href="#">
                                                        <h3>In-Vitro Fertilization (IVF)</h3>
                                                    </a>
                                                    <p>Many individuals, at some point in thier lives, confront the Many
                                                        individuals,
                                                    </p>
                                                    <div className="d-block align-items-center justify-content-between">
                                                        <div>
                                                            <strong> By: Dr Aman Agarwal</strong>
                                                        </div>
                                                        <div className="main-btn mt-lg-0 mt-1">
                                                            <a href="#">Read More <span><i
                                                                className="fa-solid fa-arrow-right"></i></span></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <a href="#">
                                                    <img src="/img/blog2.jpg" className="img-fluid w-100" alt="" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="blog-card" data-aos="fade-up">
                                        <div className="row">
                                            <div className="col-6 my-auto">
                                                <div className="testi-rightbox">
                                                    <a href="#">
                                                        <h3>High Cholesterol</h3>
                                                    </a>
                                                    <p>Cholesterol is a type of fat, it is a
                                                        double-edged sword Cholesterol is a type of fat </p>

                                                    <div className="d-block align-items-center justify-content-between">
                                                        <div>
                                                            <strong> By: Dr Aman Agarwal </strong>
                                                        </div>
                                                        <div className="main-btn mt-lg-0 mt-1">
                                                            <a href="#">Read More <span><i
                                                                className="fa-solid fa-arrow-right"></i></span></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <a href="#">
                                                    <img src="/img/blog3.jpg" className="img-fluid w-100" alt="" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default BlogDetails