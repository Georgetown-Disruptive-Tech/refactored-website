import React from "react";
import minseo from '../../../img/minseo-kang1.jpg' //need to change


function HeadMarketing(){
    return(
        <div className="col-md image-col">
            <div className="hover-outer-box ">
            
            <img src={minseo} className="person-image"/>
            
                <div className="hover-inner-box ">
                    <div className="hover-content ">
                        <h3>Sid Sundaram</h3>
                        <p>
                            Sid is a Senior in the SFS, pursuing a degree in
                            International Political Economy and a Minor in Art
                            History.
                            <br />
                            <br />
                            He was raised in Hong Kong, Sydney, San
                            Francisco, Shanghai, and Beijing and is
                            interested in the intersection between Art and
                            Technology. Sid has a passion for developing the
                            future of digital art, AI, and content creation.{" "}
                            
                            
                            <br />
                            <br />
                            In his spare time, you can catch him obsessing
                            over film and music.
                            
                            
                        </p>
                    </div>
                </div>
            </div>
            <p className="team-name ">
                Sid Sundaram <br />
                <span className="position ">Head of Marketing</span>
            </p>
        </div>
    );
}

export default HeadMarketing;