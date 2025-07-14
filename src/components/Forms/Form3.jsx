import React from 'react'

const Form3 = ({ title }) => {
    return (
        <>
            <h3>{title}</h3>
            <div className="rounded-field-form mb-3">
                <div className="row">
                    <div className="col-12 mb-3">
                        <label className="form-label">Name <span>*</span></label>
                        <input type="text" className="form-control" placeholder="Enter your name" name="name" />
                    </div>

                    <div className="col-12 mb-3">
                        <label className="form-label">Mobile Number <span>*</span></label>
                        <input type="text" className="form-control" placeholder="Enter Mobile No." name="name" />
                    </div>

                    <div className="col-12 mb-3">
                        <button className="form-btn">Submit</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Form3