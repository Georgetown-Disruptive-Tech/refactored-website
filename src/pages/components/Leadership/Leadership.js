import React from "react";
import President from "./President";
import VP from "./VP";
import HeadOps from "./HeadOps";
import HeadMarketing from "./HeadMarketing";
import HeadEvents from "./HeadEvents";
import HeadSP from "./HeadSP";
import BoardMember from "./BoardMember";
import justin from '../../../img/justin-goldstein.jpeg'

function Leadership(){
    return(
        <div>
            <section className="intro" id="leadership">
            <div className="container">
                <div className="row">
                <div className="col-md">
                    <h2 className="section-title">Leadership</h2>
                </div>
                </div>
                <div className="row team center-xs">
                
                    {/* <President /> */}
                    {/* Justin: Make components like this so we can pass
                    information and avoid code duplication */}
                    <BoardMember name="Justin Goldstein" imageLocation={justin}
                    position="President" 
                    description={
                        <div>Justin is a Sophomore in the College studying
                            Computer Science, and he is from Connecticut.
                            <br />
                            <br />
                            Justin is interested in Neural Information
                            Retrieval, Machine Learning, and software
                            development.
                            
                            
                            He loves to run, go to the gym, and work with
                            startups.
                            <br />
                            <br />
                            This semester, Justin is excited to lead GDT and
                            execute its mission of bringing tech to
                            Georgetown. </div>
                    } />

                    <VP />

                    <HeadOps />
                </div>

                <div className="row team center-xs ">
                
                    <HeadMarketing />

                    <HeadEvents />

                    <HeadSP />
                
                </div>
            </div>
            </section>
        </div>
    );
}

export default Leadership;