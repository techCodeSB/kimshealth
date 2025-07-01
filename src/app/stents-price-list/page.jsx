import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React from 'react'

const StentsPriceList = () => {
    return (
        <>
            <Header />
            <div role="main" className="main">
                <div className="ethics-committee-main-page">
                    <div className="page-header">
                        <div className="container">
                            <h2>Donor Information</h2>
                        </div>
                    </div>
                    <section className="breadcrumb-wrapper py-2">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <ul className="breadcrumb mb-0">
                                        <li>
                                            <a href="index.php">Home</a>
                                        </li>
                                        <li className="active"> Donor Information</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="section">
                        <div className="container">
                            <div className="main-heading main-list sub-heading">
                                <h2>Donors & Recipients Information</h2>
                            </div>

                            <div className="table-responsive services-table mt-4">
                                <table className="table table-hover text-start" style={{width:"100%"}}>
                                    <tbody>

                                        <tr>
                                            <th>Sl. No </th>
                                            <th> Type</th>
                                            <th> Name of Manufacture</th>
                                            <th>Price to Patient (Include GST)</th>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td>Xience Prime Everolimus Eluting Coronary Stent	</td>
                                            <td>Abbott Healthcare Pvt.Ltd	</td>
                                            <td>RS. 100000</td>
                                        </tr>

                                        <tr>
                                            <td>2</td>
                                            <td>Xience Prime Everolimus Eluting Coronary Stent	</td>
                                            <td>Abbott Healthcare Pvt.Ltd	</td>
                                            <td>RS. 100000</td>
                                        </tr>


                                        <tr>
                                            <td>3</td>
                                            <td>Xience Prime Everolimus Eluting Coronary Stent	</td>
                                            <td>Abbott Healthcare Pvt.Ltd	</td>
                                            <td>RS. 100000</td>
                                        </tr>

                                        <tr>
                                            <td>4</td>
                                            <td>Xience Prime Everolimus Eluting Coronary Stent	</td>
                                            <td>Abbott Healthcare Pvt.Ltd	</td>
                                            <td>RS. 100000</td>
                                        </tr>

                                        <tr>
                                            <td>5</td>
                                            <td>Xience Prime Everolimus Eluting Coronary Stent	</td>
                                            <td>Abbott Healthcare Pvt.Ltd	</td>
                                            <td>RS. 100000</td>
                                        </tr>

                                        <tr>
                                            <td>6</td>
                                            <td>Xience Prime Everolimus Eluting Coronary Stent	</td>
                                            <td>Abbott Healthcare Pvt.Ltd	</td>
                                            <td>RS. 100000</td>
                                        </tr>

                                        <tr>
                                            <td>7</td>
                                            <td>Xience Prime Everolimus Eluting Coronary Stent	</td>
                                            <td>Abbott Healthcare Pvt.Ltd	</td>
                                            <td>RS. 100000</td>
                                        </tr>

                                        <tr>
                                            <td>8</td>
                                            <td>Xience Prime Everolimus Eluting Coronary Stent	</td>
                                            <td>Abbott Healthcare Pvt.Ltd	</td>
                                            <td>RS. 100000</td>
                                        </tr>

                                        <tr>
                                            <td>9</td>
                                            <td>Xience Prime Everolimus Eluting Coronary Stent	</td>
                                            <td>Abbott Healthcare Pvt.Ltd	</td>
                                            <td>RS. 100000</td>
                                        </tr>

                                        <tr>
                                            <td>10</td>
                                            <td>Xience Prime Everolimus Eluting Coronary Stent	</td>
                                            <td>Abbott Healthcare Pvt.Ltd	</td>
                                            <td>RS. 100000</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default StentsPriceList;
