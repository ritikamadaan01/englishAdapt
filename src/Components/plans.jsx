import React from 'react';

class Plans extends React.Component {
    render() {
        return <div className="row plan_head g-0" >
            <div className="col-md-4 p-0 mt-4 mb-3 col-12 m-2 plan_card" >
                <div class="plan-card-header">
                    Standard (10 weeks) 6000/-

                </div>
                <div className="plan-card-body">
                    <div>- Personal Trainer</div>
                    <div>- Customized Training</div>
                    <div>- Personalized Training</div>
                    <div>- 20- 1:1 Sessions</div>
                    <div>- 5 Group Sessions</div>
                    <div>- 20 Assignments (In different formats with through feedbacks)</div>

                    <br />
                    <br />
                    <br />
                    <br />

                    <div className="col-12 text-center">
                        <div className="pt-md-2 mt-1" style={{ margin: "auto", width: "fit-content" }}>
                            <button className="bookBTN2">
                                <a
                                    href={"https://forms.gle/xv9G9iLSj5cAzD6w5"}
                                    // href={"https://wa.me/918999800008?text=Hello, I would like to know more about the courses offered."}
                                    target="_blank"
                                    rel="noreferrer"
                                    style={{ textDecoration: "none", color: "white" }}>Book Your Trial</a></button>
                        </div>
                    </div>

                </div>
            </div>
            <div className="col-md-4 p-0 mt-4 mb-3 col-12 m-2 plan_card" >
                <div class="plan-card-header">
                    Standard Plus (14 weeks) 9000/-
                </div>
                <div className="plan-card-body">
                    <div>- Personal Trainer</div>
                    <div>- Customized Training</div>
                    <div>- Personalized Training</div>
                    <div>- 30- 1:1 Sessions</div>
                    <div>- 10 Group Sessions</div>
                    <div>- Resources on demand</div>
                    <div>- Required Resources</div>
                    <div>- 25 Assignments (In different formats with through feedbacks)</div>

                    <br />
                    <br />


                    <div className="col-12 text-center">
                        <div className="pt-md-2 mt-1" style={{ margin: "auto", width: "fit-content" }}>
                            <button className="bookBTN2">
                                <a
                                    href={"https://forms.gle/xv9G9iLSj5cAzD6w5"}
                                    // href={"https://wa.me/918999800008?text=Hello, I would like to know more about the courses offered."}
                                    target="_blank"
                                    rel="noreferrer"
                                    style={{ textDecoration: "none", color: "white" }}>Book Your Trial</a></button>
                        </div>
                    </div>

                </div>
            </div>
            <div className="col-md-3 p-0  mt-4  mb-3 col-12 m-2 plan_card" >
                <div class="plan-card-header">
                    Elite (20 weeks) 12000/-

                </div>
                <div className="plan-card-body">
                    <div>- Personal Trainer</div>
                    <div>- Customized Training</div>
                    <div>- Personalized Training</div>

                    <div>- 40- 1:1 Sessions</div>
                    <div>- 15 Group Sessions</div>
                    <div>- Resources on demand</div>
                    <div>- Personalized Feedback</div>
                    <div>- Required Resources</div>
                    <div>- 40 Assignments (In different formats with through feedbacks)</div>



                    <br />

                    <div className="col-12 text-center">
                        <div className="pt-md-2 mt-1" style={{ margin: "auto", width: "fit-content" }}>
                            <button className="bookBTN2">
                                <a
                                    href={"https://forms.gle/xv9G9iLSj5cAzD6w5"}
                                    // href={"https://wa.me/918999800008?text=Hello, I would like to know more about the courses offered."}
                                    target="_blank"
                                    rel="noreferrer"
                                    style={{ textDecoration: "none", color: "white" }}>Book Your Trial</a></button>
                        </div>
                    </div>

                </div>
            </div>
        </div >;
    }
}

export default Plans;