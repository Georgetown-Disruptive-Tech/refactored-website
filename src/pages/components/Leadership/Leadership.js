import React from "react";
import BoardMember from "./BoardMember";
import justin from '../../../img/justin-goldstein.jpeg'
import carlo from '../../../img/carlo-dwek.jpeg'
import anna from '../../../img/anna-gasner.JPG'
import minseo from '../../../img/minseo-kang1.jpg' //need to change
import shanaya from '../../../img/Shanaya-Munot2.jpeg'
import andrew from '../../../img/andrew-rozanov.jpeg' //need to change

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

                    {/* <Vice President /> */}
                    <BoardMember name='Irini Fournier Vardinoyannis' 
                        imageLocation={carlo} 
                        position='Vice President'
                        description={
                            <div>
                                Irini is a Sophomore in the MSB studying marketing
                                and Computer Science.
                                <br />
                                <br />
                                Irini generates online growth strategies and
                                strengthens the brand design for several
                                international sustainable companies/startups
                                through her digital branding and marketing
                                agency, GTech.{" "}
                            </div>
                    } />

                    {/* <Head of Operations /> */}
                    <BoardMember name='Anna Diaz Gessner' 
                        imageLocation={anna} 
                        position='Head of Operations'
                        description={
                            <div>
                                Anna is a Senior in the SFS, majoring in
                                International Politics with a concentration in
                                International Law. She minors in Women and Gender
                                Studies and dabbles in some Computer Science courses
                                at Georgetown.
                                <br />
                                <br />
                                Anna is Spanish and American but spent most of
                                her childhood in Belgium. She completed her
                                final high school years in Miami.
                                
                                
                                <br />
                                <br />
                                At GDT, Anna hopes to help bridge the gap
                                between tech and political science at
                                Georgetown. After graduating, Anna plans to go
                                to law school, focusing on tech policy and cyber
                                law.{" "}
                            </div>
                    } />


                </div>

                <div className="row team center-xs ">
                
                    {/* <Head of Marketing /> */}
                    <BoardMember name='Sid Sundaram' 
                        imageLocation={minseo} 
                        position='Head of Marketing'
                        description={
                            <div>
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
                            </div>
                    } />

                    {/* <Head of Events and PR /> */}
                    <BoardMember name='Shanaya Munot' 
                        imageLocation={shanaya} 
                        position='Head of Events and PR'
                        description={
                            <div>
                                Shanaya is a senior at the Walsh School of Foreign
                                of Services from Mumbai, India. She is majoring in
                                Science, Technology, and International Affairs with a
                                concentration in Business Growth and development.
                                <br />
                                <br />
                                Outside of GDT, she is the director of external
                                outreach at Innovo Consulting and interns at
                                Epsilon Acquisition Services. In her free time,
                                she loves to travel, explore new restaurants, do
                                adventure sports, and binge watch films.
                            </div>
                    } />

                    {/* <Head of Special Projects /> */}
                    <BoardMember name='Alexandra Giorno' 
                        imageLocation={andrew} 
                        position='Head of Special Projects'
                        description={
                            <div>
                                Alexandra is a Junior in the College studying
                                Computer Science from Nice, France and grew up in
                                South Florida.
                                <br />
                                <br />
                                Alexandra is interested in frontend development,
                                product design, and product management. Outside
                                of school, she loves to cook, travel, and find
                                new music.{" "}
                                
                                
                                <br />
                                <br />
                                This semester, Alexandra is excited to expand
                                Special Projects into several teams consisting
                                of technical consulting, web development, and
                                the Google Solutions Challenge.{" "}
                            </div>
                    } />
                
                </div>
            </div>
            </section>
        </div>
    );
}

export default Leadership;