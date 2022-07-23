import React from 'react';

class Plans extends React.Component {
    render() {
        return <div className="row plan_head g-0" >
            <div className="col-md-4 p-0 mt-4 mb-3 col-12 m-2 plan_card" >
                <div class="plan-card-header">
                    General English (One-on-One)

                </div>
                <div className="plan-card-body">
                    <div>- 3500 per month
                    </div>
                    <div>- 9000 for 3-month enrolment</div>
                    <div>- 15000 for 6-month enrolment
                    </div>

                    <br />

                    <div className="col-12 text-center">
                        <div className="pt-md-2 mt-1" style={{ margin: "auto", width: "fit-content" }}>
                            <button className="bookBTN2">
                                <a href={"https://wa.me/918999800008?text=Hello, I would like to know more about the courses offered."}
                                    target="_blank"
                                    rel="noreferrer"
                                    style={{ textDecoration: "none", color: "white" }}>Book Your Trial @ 99</a></button>
                        </div>
                    </div>

                </div>
            </div>
            <div className="col-md-4 p-0 mt-4 mb-3 col-12 m-2 plan_card" >
                <div class="plan-card-header">
                    General English (Group Sessions)
                </div>
                <div className="plan-card-body">
                    <div>- 2500 per month
                    </div>
                    <div>- 5000 for 3-month enrolment</div>
                    <div>- 9500 for 6-month enrolment
                    </div>
                    <br />

                    <div className="col-12 text-center">
                        <div className="pt-md-2 mt-1" style={{ margin: "auto", width: "fit-content" }}>
                            <button className="bookBTN2">
                                <a href={"https://wa.me/918999800008?text=Hello, I would like to know more about the courses offered."}
                                    target="_blank"
                                    rel="noreferrer"
                                    style={{ textDecoration: "none", color: "white" }}>Book Your Trial @ 99</a></button>
                        </div>
                    </div>

                </div>
            </div>
            <div className="col-md-3 p-0  mt-4  mb-3 col-12 m-2 plan_card" >
                <div class="plan-card-header">
                    Business English

                </div>
                <div className="plan-card-body">
                    <div>- 4500 per month
                    </div>



                    <br />
                    <br />
                    <br />

                    <div className="col-12 text-center">
                        <div className="pt-md-2 mt-1" style={{ margin: "auto", width: "fit-content" }}>
                            <button className="bookBTN2">
                                <a href={"https://wa.me/918999800008?text=Hello, I would like to know more about the courses offered."}
                                    target="_blank"
                                    rel="noreferrer"
                                    style={{ textDecoration: "none", color: "white" }}>Book Your Trial @ 99</a></button>
                        </div>
                    </div>

                </div>
            </div>
        </div >;
    }
}

export default Plans;