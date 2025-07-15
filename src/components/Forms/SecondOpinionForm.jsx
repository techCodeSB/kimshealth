"use client"

const SecondOpinionForm = ({ pageContent }) => {
    return (
        <section className="section second-opinion-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 mb-4">
                        <div className="find-doctor-left-col">
                            <div className="tab-group text-center mb-3">
                                <button type="button" className="btn-tab treat-tab omega active"
                                    onClick={(e) => showBox('omega')}>
                                    {pageContent[1]?.title}
                                </button>

                                <button type="button" className="btn-tab treat-tab omega1"
                                    onClick={(e) => showBox('omega1')}>
                                    {pageContent[2]?.title}
                                </button>
                            </div>

                        </div>
                    </div>

                    <div className="col-md-8 expert-section">
                        <div className="treat-box" id="omega" style={{ display: "block" }}>

                            <div className="main-heading sub-heading main-list mb-4">
                                <h2>{pageContent[1]?.title}</h2>

                            </div>
                            <div className="custom-from bg-field mx-0">
                                <form action="">
                                    <div className="row justify-content-between">
                                        <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                                            <div className="input-group mb-3">
                                                <span className="input-group-text" id="from-icon"><i
                                                    className="icon-user"></i></span>
                                                <input type="text" className="form-control pe-0" placeholder="Name*"
                                                    aria-label="Username" aria-describedby="basic-addon1" />
                                            </div>
                                        </div>


                                        <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                                            <div className="input-group mb-3">
                                                <span className="input-group-text" id="from-icon"><i
                                                    className="icon-phone"></i></span>
                                                <input type="text" className="form-control pe-0" placeholder="Mobile Number*"
                                                    aria-label="Username" aria-describedby="basic-addon1" />
                                            </div>
                                        </div>

                                        <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                                            <div className="input-group mb-3">
                                                <span className="input-group-text" id="from-icon"><i
                                                    className="icon-settings"></i></span>
                                                <select className="form-select from-location">
                                                    <option value={""}>Select Speciality</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>

                                            </div>
                                        </div>

                                        <div className="col-xl-6 col-lg-6 col-md-6 col-12 mb-3">
                                            {/* <!-- <div className="input-group mb-3">
                                                            <span className="input-group-text" id="from-icon"><i
                                                                className="fa-solid fa-magnifying-glass"></i></span>
                                                            <input type="file" className="form-control pe-0"
                                                                placeholder="Search doctor/specialities" aria-label="Username"
                                                                aria-describedby="basic-addon1" />
                                                        </div> --> */}
                                            <div className="file-input-group">
                                                <input type="file" maxLength="100" id="file-input"
                                                    className="form-control file-input__input" name="report" />
                                                <label htmlFor="file-input" className="file-input-label">
                                                    <i className="icon-docs"></i>
                                                    <span>Attach Report</span>
                                                </label>
                                            </div>
                                        </div>



                                        <div className="col-xl-12 col-lg-12 col-md-12 col-12">
                                            <div className="input-group mb-3">
                                                <span className="input-group-text" id="from-icon"><i
                                                    className="fa fa-pencil-square"></i></span>
                                                <textarea className="form-control pe-0" name='message' placeholder='Type your query'></textarea>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6 col-12 mb-3">
                                            <div className="from-btn">
                                                <button type="button" className="btn d-inline-block w-auto">Submit</button>
                                            </div>
                                        </div>

                                    </div>
                                </form>
                            </div>

                        </div>



                        <div className="treat-box" id="omega1" style={{ display: "none" }}>
                            <div className="main-heading sub-heading main-list mb-4">
                                <h2>{pageContent[2]?.title}</h2>

                            </div>
                            <div className="custom-from bg-field mx-0">
                                <form action="">
                                    <div className="row justify-content-between">
                                        <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                                            <div className="input-group mb-3">
                                                <span className="input-group-text" id="from-icon"><i
                                                    className="icon-user"></i></span>
                                                <input type="text" className="form-control pe-0" placeholder="Name*"
                                                    aria-label="Username" aria-describedby="basic-addon1" />
                                            </div>
                                        </div>


                                        <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                                            <div className="input-group mb-3">
                                                <span className="input-group-text" id="from-icon"><i
                                                    className="icon-phone"></i></span>
                                                <input type="text" className="form-control pe-0" placeholder="Mobile Number*"
                                                    aria-label="Username" aria-describedby="basic-addon1" />
                                            </div>
                                        </div>


                                        <div className="col-xl-12 col-lg-12 col-md-12 col-12 mb-3">
                                            {/* <!-- <div className="input-group mb-3">
                                                            <span className="input-group-text" id="from-icon"><i
                                                                className="fa-solid fa-magnifying-glass"></i></span>
                                                            <input type="file" className="form-control pe-0"
                                                                placeholder="Search doctor/specialities" aria-label="Username"
                                                                aria-describedby="basic-addon1" />
                                                        </div> --> */}
                                            <div className="file-input-group">
                                                <input type="file" maxLength="100" id="file-input"
                                                    className="form-control file-input__input" name="report" />
                                                <label htmlFor="file-input" className="file-input-label">
                                                    <i className="icon-docs"></i>
                                                    <span>Attach Report</span>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-xl-12 col-lg-12 col-md-12 col-12">
                                            <div className="input-group mb-3">
                                                <span className="input-group-text" id="from-icon"><i
                                                    className="fa fa-pencil-square"></i></span>
                                                <textarea className="form-control pe-0" name='message' placeholder='Type your query'></textarea>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                                            <div className="from-btn">
                                                <button type="button" className="btn d-inline-block w-auto">Submit</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default SecondOpinionForm;