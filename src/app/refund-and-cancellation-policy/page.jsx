import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'

const RefundAndCancellation = () => {
    return (
        <>
            <Header />
            <div role="main" className="main">
                <div className="refund-policy-main-page">
                    <div className="page-header">
                        <div className="container">
                            <h2>Refund Policy</h2>
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
                                        <li className="active"> Refund Policy</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="section">
                        <div className="container">
                            <div className="main-heading main-list sub-heading">
                                <h2>Electronic Payments/ Refunds:</h2>
                                <p>An appointment slot will be reserved for an individual upon remittance of Rs. 100/- (Rupees One
                                    Hundred only) as a non- refundable appointment service charge for medical examination prescribed
                                    under the immigration rules for countries like UK, Canada, Australia, and New Zealand. The
                                    aforesaid fee will be adjusted against the total cost of the medical examination. The total cost
                                    towards medical examination for VISA may vary on a case to case basis subject to the need to
                                    conduct additional or ancillary tests, which may arise from the identification of potential or
                                    actual medical conditions during the examination by the Physician.</p>
                                <p>KIMSHEALTH Online Appointment Services offers online payment facility for the remittance of the
                                    appointment service charge. If the user chooses to utilize the online payment option, the page
                                    will be redirected to an approved third-party payment gateway to enable processing of the
                                    payment. This transaction will be governed by the terms and conditions and privacy policy of the
                                    third-party payment gateway. The amount may be remitted via internet banking or debit/credit
                                    cards, or can be settled in cash at the Registration counter on the day of appointment.</p>
                                <p>KIMSHEALTH shall not be liable for any transaction that is not completed or may not be completed
                                    or for any failure of the debit/ credit card or bank or the third-party site or agency to
                                    perform any of its obligations or in respect of any loss or damage arising directly or
                                    indirectly arising out of the decline or acceptance of authorization for any transaction, for
                                    any reason whatsoever.</p>
                                <p>Further KIMSHEALTH shall not be liable for any claims or issues arising out of (i) incorrect or
                                    inaccurate credit/debit card details provided by the user for remitting the Fees (ii) the use of
                                    credit/debit card not lawfully owned by the user (iii) the act or omission of the user allowing
                                    any third party to use their account credentials.</p>

                            </div>
                        </div>
                    </section>
                </div>





            </div>
            <Footer />
        </>
    )
}

export default RefundAndCancellation