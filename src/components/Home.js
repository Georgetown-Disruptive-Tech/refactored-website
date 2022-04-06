import React from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
// import { Link } from "react-router-dom";


import '../recruitment_css/bootstrap.min.css'
import '../recruitment_css/calendar.scss'
import '../recruitment_css/style.css'
import '../recruitment_css/responsive.css'
// import '../recruitment_css/theme.css'
import justin from '../img/justin-goldstein.jpeg'
import achievement from '../img/001-achievement.svg'
import ripplematch from "../img/ripple-match-logo.svg"
import pencil from "../img/002-pencil.svg"
import idea from "../img/003-idea.svg"
import shoppingbag from "../img/004-shopping-bag.svg"
import ixperience from "../img/ixperience-logo.svg"
import gdtlogo from "../img/gdt-logo.svg"
import banner from '../img/banner.svg'

import { Link } from "react-router-dom";
const url =
  "https://domains.us4.list-manage.com/subscribe/post?u=da48ecb7a5439e08f4de18e0e&amp;id=539c6d6da7";

function Home() {
    return (
//       <div className="App">
//         <div className="wrapper">
//           <main>
//             <section className="application">
//               <div className="col-md">
//                 <div className="row">
//                   <div className="col-md">
//                     <h2 className="section-title">Recruitment</h2>
//                   </div>
//                 </div>
                
//                 <h5 className="section-title">
//                   We no longer accept applications.
//                   <br />Please check back Fall 2022.
//                 </h5>
//               </div>
//             </section>
//             </main>
//           </div>
//       </div>
//     );
//   }
// }
    // <div className="App"> 
    //   Hello 
    //   </div>
    <div className="App">
    
        <div className="hero flex middle-xs" 
        style={{
            height: '100%', 
            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.3) , rgba(0, 0, 0, 0)), url("../img/ink.gif")'}}
        >
        <div className="hero-text "></div>
        {/* <img src={banner} /> */}
        <svg 
            version={1.0 } 
            xmlns="http://www.w3.org/2000/svg " 
            width="1027.000000pt " 
            height="333.000000pt " 
            viewBox="0 0 1027.000000 333.000000 " 
            preserveAspectRatio="xMidYMid meet"
        >
            {" "}
            <g
            transform="translate(0.000000,333.000000) scale(0.100000,-0.100000) "
            fill="#000000 "
            stroke-dasharray="1200 2000 "
            >
            {" "}
            <path
                className="shape "
                d="M2025 3310 c-207 -37 -335 -175 -335 -359 0 -94 24 -162 78 -223 57 -63 126 -97 299 -149 163 -49 219 -75 261 -123 75 -85
            45 -212 -63 -266 -44 -22 -63 -25 -155 -25 -119 1 -163 16 -217 79 -28 31 -73 129 -73 157 0 7 -12 9 -32 5 -18 -3 -56 -8 -84 -12 -77 -9 -78 -11 -60 -88 20 -86 48 -141 100 -194 81 -85 190 -122 361 -122 180 0 288 40 378 140 61 68 82 131 82 245 0 78 -4
            97 -28 147 -50 101 -126 148 -357 222 -176 56 -242 91 -270 146 -42 82 -14 182 63 222 51 26 194 37 251 18 74 -24 128 -93 142 -180 l7 -42 66 6 c127 13 124 11 116 65 -25 164 -113 274 -255 316 -67 20 -207 27 -275 15z "
            />{" "}
            <path
                className="shape "
                d="M18 3295
            c-5 -5 -8 -296 -8 -647 l0 -638 253 0 c218 0 263 3 336 20 233 56 377 199 437 435 24 95 24 314 1 405 -42 162 -138 290 -260 350 -124 60 -194 71 -487 77 -146 3 -268 2 -272 -2z m546 -190 c114 -24 191 -82 239 -180 33 -67 47 -146 47 -275 0 -168 -39 -280
            -126 -360 -88 -81 -187 -110 -386 -110 l-128 0 0 470 0 470 143 0 c85 0 169 -6 211 -15z "
            />{" "}
            <path
                className="shape "
                d="M1270 2655 l0 -645 100 0 100 0 0 645 0 645 -100 0 -100 0 0 -645z "
            />{" "}
            <path
                className="shape "
                d="M2770 2656 l0 -646 95 0 95 0 2 258 3 257
            124 0 124 0 141 -257 141 -257 108 -1 c59 0 107 2 107 5 0 3 -68 129 -151 281 -83 151 -149 276 -148 278 2 1 28 17 57 35 116 73 165 168 165 321 1 185 -72 286 -243 342 -58 18 -96 21 -342 26 l-278 4 0 -646z m520 453 c97 -21 140 -79 140 -190 0 -97 -25 -149
            -88 -187 -45 -26 -53 -27 -214 -30 l-168 -4 0 211 0 211 140 0 c76 0 162 -5 190 -11z "
            />{" "}
            <path
                className="shape "
                d="M3834 3285 c-3 -8 -4 -225 -1 -482 3 -378 7 -478 19 -518 48 -160 129 -240 285 -280 83 -22 271 -20 354 3 128 36 223 117 270 229 l24 58 3 503
            3 502 -95 0 -95 0 -3 -478 -3 -478 -30 -60 c-27 -51 -38 -62 -89 -89 -54 -27 -68 -30 -155 -30 -87 0 -102 3 -156 30 -63 31 -95 69 -117 134 -8 25 -13 177 -15 504 l-4 467 -95 0 c-74 0 -96 -3 -100 -15z "
            />{" "}
            <path
                className="shape "
                d="M5080 2656 l0 -646 95 0
            95 0 0 224 0 223 163 6 c166 5 228 17 310 59 133 68 206 219 194 408 -9 149 -63 247 -167 304 -95 52 -134 57 -422 63 l-268 5 0 -646z m500 453 c57 -12 111 -53 137 -103 27 -50 23 -188 -6 -248 -44 -92 -112 -118 -308 -118 l-133 0 0 240 0 240 130 0 c71 0
            152 -5 180 -11z "
            />{" "}
            <path
                className="shape "
                d="M6000 3210 l0 -90 188 -2 187 -3 3 -1532 2 -1533 1930 0 1930 0 0 1625 0 1625 -790 0 -790 0 0 -645 0 -645 395 0 395 0 0 85 0 85 -295 0 -295 0 0 195 0 195 265 0 265 0 0 85 0 85 -265 0 -265 0 0 190 0 190 590
            0 590 0 0 -930 0 -930 -280 0 -280 0 -2 268 -3 267 -97 3 -98 3 0 -776 0 -775 -1355 0 -1355 0 2 1433 3 1432 188 3 187 2 0 90 0 90 -475 0 -475 0 0 -90z m4040 -2550 l0 -410 -280 0 -280 0 0 410 0 410 280 0 280 0 0 -410z "
            />{" "}
            <path
                className="shape "
                d="M7100
            2655 l0 -645 100 0 100 0 -2 643 -3 642 -97 3 -98 3 0 -646z "
            />{" "}
            <path
                className="shape "
                d="M7648 2655 l217 -645 124 2 123 3 204 635 c112 349 204 638 204 643 0 4 -45 7 -100 7 l-99 0 -26 -82 c-146 -477 -303 -969 -307 -962 -3 5 -42 124 -88 264 -45 140 -120
            373 -166 518 l-85 262 -109 0 -109 0 217 -645z "
            />{" "}
            <path
                className="shape "
                d="M8525 1814 c-11 -2 -45 -9 -75 -15 -166 -34 -312 -154 -380 -315 -54 -124 -77 -307 -60 -464 32 -293 160 -460 392 -515 83 -19 257 -19 333 0 94 24 177 70 229 125 52 56 102 152 112
            217 7 47 17 41 -106 66 l-66 14 -17 -58 c-24 -82 -70 -138 -142 -174 -55 -28 -68 -30 -165 -30 -91 1 -112 4 -160 26 -30 14 -69 38 -86 52 -42 36 -92 133 -109 214 -19 87 -19 279 -1 364 42 194 164 305 350 316 189 12 299 -72 322 -246 l7 -52 36 5 c20 3 62
            8 94 12 66 7 66 7 43 115 -46 216 -196 333 -441 344 -49 2 -99 2 -110 -1z "
            />{" "}
            <path
                className="shape "
                d="M7090 1155 l0 -645 395 0 395 0 0 85 0 85 -295 0 -295 0 0 195 0 195 270 0 270 0 0 85 0 85 -270 0 -270 0 0 190 0 190 285 0 285 0 0 90 0 90 -385 0 -385
            0 0 -645z "
            />{" "}
            </g>{" "}
        </svg>

        <div className="hero-text"></div>
        </div> 
        <div className="col-md menu">
            <ul className="menu">
            <li><a href="#contact">Contact</a></li>
            <li>
                <Link to="/recruitment">Recruitment</Link>
            </li>
            <li><a href="#leadership">Leadership</a></li>
            <li><a href="#teams">Our Teams</a></li>
            </ul>
        </div>
        
    

        <div className="wrapper">
        <main>
            <section className="application ">
            <div className="col-md ">
                <div className="row ">
                <div className="col-md ">
                    <h2 className="section-title ">Recruitment</h2>
                </div>
                </div>
                <h5 className="section-title ">
                We no longer accept applications.
                <br />Please check back Fall 2022.
                </h5>
            </div>
            </section>
            <section className="intro" id="about-us">
            <div className="container">
                <div className="row">
                <div className="col-md">
                    <h2 className="section-title">About GDT</h2>
                </div>
                </div>
                <div className="row margin-bottom ">
                <div className="col-md">
                    <h5>
                    Founded on the hilltop of D.C., Georgetown Disruptive
                    Technology is the leading technology-oriented club at
                    Georgetown University.
                    <br />
                        <br />
                        <p>
                            {" "}
                            We offer various technical workshops and networking
                            events to students and invite guest speakers
                            throughout the academic year.{" "}
                            <br />
                            In addition, We also provide tech-consulting for
                            startups, organizations, or personal projects.{" "}
                            
                        </p>
                        
                    
                    </h5>
                </div>
                </div>
            </div>
            </section>
            <section className="intro" id="about-us">
            <div className="container">
                <div className="row">
                <div className="col-md">
                    <h2 className="section-title">What We Do</h2>
                </div>
                </div>
                <div className="row margin-bottom ">
                <div className="col-md">
                    <p className="author">Education</p>
                    <p className="highlight">
                    We provide opportunities for novice tech enthusiasts to
                    learn programming skills, graphic design, and explore the
                    thematics of different branches of tech.
                    </p>
                </div>
                <div className="col-md">
                    <p className="author">Networking</p>
                    <p className="highlight">
                    GDT has hosted various events with key members from the
                    tech industry as well as high ranking government
                    officials. Connect with recruiters and key personnel
                    through our partnerships and events.
                    </p>
                </div>
                <div className="col-md">
                    <p className="author">Projects</p>
                    <p className="highlight">
                    GDT members have the opportunity to engage in a range of
                    partnership-driven special research, web design, and tech
                    consulting projects to enhance and expand their skill set.
                    </p>
                </div>
                </div>
            </div>
            </section>
            <hr />
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
                <div className="col-md">
                
                    <img src={achievement} className="icon " />
                
                    <h3>Operations</h3>
                    <p>
                    <h5>
                        Responsible for the day-to-day running and logistics of
                        the club. Oversight on budgeting, recruiting, and the
                        newsletter. Often works in collaboration with other
                        teams to ensure operational efficiency.{" "}
                    </h5>
                    </p>
                </div>
                <div className="col-md">
                
                    <img src={pencil} className="icon" />
                
                    <h3>Marketing</h3>
                    <p>
                    <h5>
                        Working to maintain external and internal network, in
                        order to cultivate relationships and ensure
                        communicative clarity. Responsible for securing event
                        guests, alumni relations, and internal communication.
                    </h5>
                    </p>
                </div>
                </div>
                <div className="row center-xs">
                <div className="col-md">
                
                    <img src={idea} className="icon" />
                
                    <h3>Events</h3>
                    <p>
                    <h5>
                        Conceptualizes and organizes events, often working in
                        conjunction with the Public Relations team to formulate
                        a calendar. Lead team on the day of events.{" "}
                    </h5>
                    </p>
                </div>
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
                </div>
            </div>
            </section>
            <hr />
            <hr />
            <section className="intro" id="leadership">
            <div className="container">
                <div className="row">
                <div className="col-md">
                    <h2 className="section-title">Leadership</h2>
                </div>
                </div>
                <div className="row team center-xs">
                <div className="col-md image-col">
                    <div className="hover-outer-box">
                    
                    <img
                        className="person-image" 
                        src={require('../img/justin-goldstein.jpeg')}
                        // src={require("../img/justin-goldstein.jpeg"
                    />
                    
                    <div className="hover-inner-box ">
                        <div className="hover-content ">
                        <h3>Justin Goldstein</h3>
                        <p>
                            Justin is a Sophomore in the College studying
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
                                Georgetown.
                            
                            
                        </p>
                        </div>
                    </div>
                    </div>
                    <p className="team-name ">
                    Justin Goldstein <br />
                    <span className="position ">President</span>
                    </p>
                </div>
                <div className="col-md image-col">
                    <div className="hover-outer-box ">
                    
                    <img 
                        className="person-image" 
                        src={require("../img/carlo-dwek.jpeg")} 
                        />
                    
                    <div className="hover-inner-box ">
                        <div className="hover-content ">
                        <h3>Irini Fournier Vardinoyannis</h3>
                        <p>
                            Irini is a Sophomore in the MSB studying marketing
                            and Computer Science.
                            <br />
                            <br />
                                Irini generates online growth strategies and
                                strengthens the brand design for several
                                international sustainable companies/startups
                                through her digital branding and marketing
                                agency, GTech.{" "}
                            
                            
                        </p>
                        </div>
                    </div>
                    </div>
                    <p className="team-name ">
                    Irini Fournier Vardinoyannis <br />
                    <span className="position ">Vice President</span>
                    </p>
                </div>
                <div className="col-md image-col">
                    <div className="hover-outer-box ">
                    
                    <img 
                        className="person-image" 
                        src={require("../img/anna-gasner.JPG")} 
                    />
                    
                    <div className="hover-inner-box">
                        <div className="hover-content">
                        <h3>Anna Diaz Gessner</h3>
                        <p>
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
                            
                            
                        </p>
                        </div>
                    </div>
                    </div>
                    <p className="team-name ">
                    Anna Diaz Gaessner <br />
                    <span className="position ">Head of Operations</span>
                    </p>
                </div>
                </div>
                <div className="row team center-xs ">
                <div className="col-md image-col">
                    <div className="hover-outer-box ">
                    
                    <img
                        className="person-image"
                        src={require("../img/minseo-kang1.jpg")}
                    />
                    
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
                <div className="col-md image-col">
                    <div className="hover-outer-box ">
                    
                    <img
                        className="person-image"
                        src={require("../img/Shanaya-Munot2.jpeg")}
                    />
                    
                    <div className="hover-inner-box ">
                        <div className="hover-content ">
                        <h3>Shanaya Munot</h3>
                        <p>
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
                            
                            
                        </p>
                        </div>
                    </div>
                    </div>
                    <p className="team-name ">
                    Shanaya Munot <br />
                    <span className="position ">Head of Events and PR</span>
                    </p>
                </div>
                <div className="col-md image-col">
                    <div className="hover-outer-box ">
                    
                    <img
                        className="person-image"
                        src={require("../img/andrew-rozanov.jpeg")}
                    />
                    
                    <div className="hover-inner-box ">
                        <div className="hover-content ">
                        <h3>Alexandra Giorno</h3>
                        <p>
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
                            
                            
                        </p>
                        </div>
                    </div>
                    </div>
                    <p className="team-name ">
                    Alexandra Giorno<br />
                    <span className="position ">
                        Head of Special Projects
                    </span>
                    </p>
                </div>
                </div>
            </div>
            </section>
            <section className="blurbs" id="benefits">
            <div className="container">
                <div className="row">
                <div className="col-md">
                    <h2 className="section-title">Sponsors</h2>
                </div>
                </div>
                <div className="sponsor">
                <a href="https://ripplematch.com/">
                
                    <img src={ripplematch} />
                
                </a>
                </div>
                <div className="sponsor">
                <a href="https://developers.google.com/">
                
                    <img src={require("../img/google_developers_logo.png")} />
                
                </a>
                </div>
                <div className="sponsor">
                <a href="https://monday.com">
                
                    <img src={require("../img/monday-logo.png")} />
                
                </a>
                </div>
                <div className="sponsor">
                <a href="https://ixperience.co/">
                
                    <img src={ixperience} />
                
                </a>
                </div>
            </div>
            </section>
            
            <hr />

            <section className="newsletter ">
            <div className="container ">
                <div className="row center-xs ">
                <div className="col-md ">
                    {/* <link href="//cdn-images.mailchimp.com/embedcode/classic-10_7.css" rel="stylesheet" type="text/css" />
                            <style type="text/css">
                                {
                                    mc_embed_signup = {
                                    background : "#fff",
                                    clear : "left",
                                    font : "1em inherit"
                                    }
                                };
                            </style>
                            <div id="mc_embed_signup">
                                <form action="https://domains.us4.list-manage.com/subscribe/post?u=da48ecb7a5439e08f4de18e0e&amp;id=539c6d6da7" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" novalidate>
                                    <div id="mc_embed_signup_scroll">
                                        <h2>Subscribe to our Weekly newsletter.</h2>
                                        <div className="mc-field-group">
                                            <label for="mce-EMAIL">Email Address </label>
                                            <input type="email" value="" name="EMAIL" className="required email" id="mce-EMAIL" />
                                        </div>
                                        <div id="mce-responses" className="clear">
                                            <div className="response" id="mce-error-response" style="display:none"></div>
                                            <div className="response" id="mce-success-response" style="display:none"></div>
                                        </div>
                                        <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_da48ecb7a5439e08f4de18e0e_539c6d6da7" tabindex="-1" value="" /></div>
                                        <div className="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button" /></div>
                                    </div>
                                </form>
                            </div>
                            <script type='text/javascript' src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script>
                            <script type='text/javascript'>
                                (function($) {
                                    window.fnames = new Array(),
                                    window.ftypes = new Array(),
                                    fnames[0] = 'EMAIL',
                                    ftypes[0] = 'email',
                                    fnames[1] = 'FNAME',
                                    ftypes[1] = 'text',
                                    fnames[2] = 'LNAME',
                                    ftypes[2] = 'text'
                                }(jQuery));
                                var $mcj = jQuery.noConflict(true);
                            </script> */}
                    <MailchimpSubscribe url={url} />
                </div>
                </div>
            </div>
            </section>
            <section className="contact " id="contact">
            <div className="container ">
                <div className="row ">
                <div className="col-md center-xs ">
                    <h2 className="section-title ">Contact</h2>
                </div>
                </div>
                <div className="row margin-bottom-small center-xs ">
                <div className="col-md ">
                    <h5>
                    Address
                    <br />
                    3700 O St. NW, Washington, D.C.
                    </h5>
                </div>
                <div className="col-md ">
                    <h5>
                    Email
                    <br />
                    disruptivetech@georgetown.edu
                    </h5>
                </div>
                </div>
            </div>
            </section>
        </main>
        </div>

        <footer>
        <div className="container ">
            <div className="row ">
            <div className="col-md center-xs ">
            
                <img
                src={gdtlogo}
                className="margin-bottom "
                style={{maxWidth: "300px" }}
                />
            
            </div>
            </div>
            <div className="row margin-bottom-small ">
            <div className="col-md-8 ">
                <h3>About us</h3>
                <p>
                Founded on the hilltop of D.C., Georgetown Disruptive
                Technology is the leading technology-oriented club at
                Georgetown University.{" "}
                <br />
                    <br />
                    We offer various technical workshops and networking events
                    to students and invite guest speakers throughout the
                    academic year. We also provide tech-consulting for
                    startups, organizations, or personal projects.{" "}
                    
                
                </p>
            </div>
            <div className="col-md-4 ">
                <ul>
                <li>
                    <a href="#about-us ">About us</a>
                </li>
                <li>
                    <a href="#teams ">Team</a>
                </li>
                <li>
                    <a href="#leadership ">Leadership</a>
                </li>
                <li>
                    <Link to="/recruitment">Recruitment</Link>
                </li>
                <li>
                    <a href="#contact ">Contact</a>
                </li>
                </ul>
            </div>
            </div>
        </div>
        </footer>

        <div className="row secondary-footer ">
        <div className="col-md ">
            <p>Georgetown Disruptive Technology © 2021.</p>
        </div>
        <div className="col-md end-md ">
            <p>Designed and maintained by the special project team.</p>
        </div>
        </div>
        <script
        src="https://cdn.polyfill.io/v2/polyfill.min.js?callback=polyfillsAreLoaded "
        defer
        ></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js "></script>
        <script src="js/script.js " defer></script>
    </div>
    );
}

  
export default Home;
  