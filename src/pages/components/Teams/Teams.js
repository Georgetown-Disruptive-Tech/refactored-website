import React from "react";
import TeamDescription from "./TeamDescription";
import shoppingbag from "../../../img/004-shopping-bag.svg"
import idea from "../../../img/003-idea.svg"
import achievement from '../../../img/001-achievement.svg'
import pencil from "../../../img/002-pencil.svg"

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
                    
                        {/* <Operations /> */}
                        <TeamDescription imageLocation={achievement} 
                        teamName="Operations"
                        description="Responsible for the day-to-day running and logistics of
                        the club. Oversight on budgeting, recruiting, and the
                        newsletter. Often works in collaboration with other
                        teams to ensure operational efficiency."
                        />

                        {/* <Marketing /> */}
                        <TeamDescription imageLocation={pencil} 
                        teamName="Marketing" 
                        description="Working to maintain external and internal network, in
                        order to cultivate relationships and ensure
                        communicative clarity. Responsible for securing event
                        guests, alumni relations, and internal communication." />
                    
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