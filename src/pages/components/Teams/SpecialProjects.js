import React from "react";
import shoppingbag from "../../../img/004-shopping-bag.svg"



function SpecialProjects(){
    return(
        <div className="col-md">
                    
            <img src={shoppingbag} className="icon" />
        
            <h3>Special Projects</h3>
            <p>
                <h5>
                    Provides education for novice tech enthusiasts and
                    spearheads internal research projects, including making
                    this website. Work with Google Student Developers
                    community.
                </h5>
            </p>
        </div>
    );
}

export default SpecialProjects;