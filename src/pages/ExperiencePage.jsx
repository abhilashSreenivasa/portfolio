import NavigationMenu from "../components/NavigationMenu"

function Experience(){
    return(
        <>
            <div className="main">
                <div id='header-name'>Abhilash Sreenivasa</div>
                <div id='header-identity'>Student | Software Engineer | Full-Stack Developer</div>
                <hr className='hr-large'/>
                <NavigationMenu />
                <div className="header-h3">Experience</div>
                <hr className="hr-small"/>
                <div className="main-content-experience">
                    <div className="experience-company">
                        <img className="company-logo" src="chico-logo.ico" alt="Chico State Logo"></img>
                        <div className="work-desc">
                            <div className="work-title">
                                <div></div>
                                <div><i> Web Development Intern , CSU Chico</i></div>
                                <div className="work-duration">2021 OCT - PRESENT</div>
                            </div>
                            <ul>
                            <li>Implemented a tool that checks and prevents spam tickets from entering the ticketing system. Reduced the spam tickets by 60%.</li>
                                <li>Implemented a full-stack web application that collects data from CSU Chico website and generates reports. <b>Technologies used: HTML, CSS, Node.js, Docker.</b></li>
                                <li> Migrated all the projects and its details from Asana to <b>Microsoft Excel</b> and set up a cost-free project management system.</li>
                                <li>Utilized Site Improve to identify and resolve broken links across the website, ensuring accessibility adherence.</li>
                                <li>Consistently maintained and updated the UI, which included the development of numerous <b>JavaScript</b> widgets.</li>
                                
                            </ul>
                        </div>
                    </div>
                    <hr className="hr-small"/>
                    <div className="experience-company">
                        <img className="company-logo" src="antares-logo.png" alt="Antares Logo"></img>
                        <div className="work-desc">
                            <div className="work-title">
                                <div></div>
                                <div><i> Software Engineer - Antares Systems Limited - Bengaluru,India</i></div>
                                <div className="work-duration">NOV 2018 - SEPT 2019</div>
                            </div>
                            <ul>
                                <li> Refactored legacy code from the early 2000s by separating the business logic using MVC architecture, significantly improving the code readability and scalability. <b>Technologies used: Java ,JSP, Servlets , PostgreSQL, Javascript, Eclipse, Git.</b></li>
                                <li> Incorporated multi-screen compatibility in several existing  web pages using CSS Media Query.</li>
                                <li> Developed comment section feature in <b>REACT</b> for an internal website, Facilitating a smooth interaction among the developers.</li>

                            </ul>
                        </div>
                    </div>
                    <hr className="hr-small"/>
                    <div className="experience-company">
                        <img className="company-logo" src="Bosch-logo.png" alt="Bosch Logo"></img>
                        <div className="work-desc">
                            <div className="work-title">
                                <div></div>
                                <div><i> Web Developer Intern - Robert Bosch LLC - Bengaluru, India</i></div>
                                <div className="work-duration"> JAN 2018 - AUGUST 2018</div>
                            </div>
                            <ul>
                                <li>Created UI designs using <b>Balsamiq Mockups</b>, a wireframing software.</li>
                                <li>Designed a database schema from scratch and developed a complex Database System in <b>MS SQL</b>.</li>
                                <li> Generated dynamic reports using <b>Vanilla Javascript</b> and provided Excel and PDF export options.</li>
                                <li> Delivered a fully functional web application for an internal department that has more than 400 users.</li>

                            </ul>
                        </div>
                    </div>
                    <hr className="hr-small"/>
                </div>
            </div>
            
        </>
    )
}
export default Experience