import React from "react";
import Marketing from "./Marketing";
import Operations from "./Operations";
import Events from "./Events";
import SpecialProjects from "./SpecialProjects";
import TeamDescription from "./TeamDescription";
import shoppingbag from "../../../img/004-shopping-bag.svg"
import idea from "../../../img/003-idea.svg"

function Teams(){
    return(
        <div>
            <section className="services" id="teams">
                <div className="container">
                    <div className="row">
                    <div className="col-md-12 center-xs">
                        <h2 className="section-title">Teams</h2>
                    </div>
                    </div>
                </div>
            </section>
            <section className="blurbs" id="benefits">
                <div className="container">
                    <div className="row margin-bottom-small center-xs">
                    
                        <Operations />

                        <Marketing />
                    
                    </div>
                    <div className="row center-xs">
                    {/* Justin: You can reuse components like this
                    each attribute of the Team Description tag
                    gets passed into the props argument for the 
                    Team Description function in TeamDescription.js
                    */}
                        {/* <Events /> */}
                        <TeamDescription imageLocation={idea} 
                        teamName="Events"
                        description="Conceptualizes and organizes events, often working in
                        conjunction with the Public Relations team to formulate
                        a calendar. Lead team on the day of events."
                        />

                        {/* <SpecialProjects /> */}
                        <TeamDescription imageLocation={shoppingbag} 
                        teamName="Special Projects" 
                        description="Provides education for novice tech enthusiasts and
                        spearheads internal research projects, including making
                        this website. Work with Google Student Developers
                        community." />

                    </div>
                </div>
            </section>
        </div>
    );
}

export default Teams;