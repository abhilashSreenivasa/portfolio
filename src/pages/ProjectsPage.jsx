import HeaderItems from '../components/HeaderItems';

const Project=()=>{
    return(
        <>
        <div className="main">
            <HeaderItems/>
            <div className="main-projects">
                
                <div className="projects">
                    <div className="project-header">
                        <div><a href="https://github.com/abhilashSreenivasa/movie_recommendation" >Recommendation System Application</a></div>
                    </div>
                    <div className="project-details">
                        <ul>
                            <li>Designed and developed a Netflix-like web app, showcasing trending movies by genre using the MovieDB API.</li>
                            <li>Implemented an efficient recommendation system for personalized movie suggestions.</li>
                            <li>Established a secure <b>OAuth</b> login system with JWT token authentication for data privacy and user account security.</li>
                            <li>Utilized <b>JavaScript, React, MovieDB API, OAuth, and JWT </b> to independently create a feature-rich and responsive web application.</li>
                            <li>Created user-friendly features, such as favorite movie saving and trailer viewing, enhancing the user experience.</li>
                        </ul>
                    </div>
                </div>
                <hr className="hr-small"></hr>
                <div className="projects">
                    <div className="project-header">
                        <div>Spam Detector</div>
                    </div>
                    <div className="project-details">
                        <ul>
                            <li>Developed a Spam Detector Application that effectively blocked spam tickets from entering the ticketing system.</li>
                            <li>Implemented robust content checks using <b>Akismet</b>, a powerful spam detection tool, to identify and notify the web support team of potential spam content.</li>
                            <li>Significantly reduced spam tickets by <b>70%</b>, leading to a substantial improvement in the efficiency of the ticketing system.</li>
                            <li>Contributed to a more streamlined support process by minimizing false tickets and reducing the support team's workload.</li>
                        </ul>
                    </div>
                </div>
                <hr className="hr-small"></hr>
                <div className="projects">
                    <div className="project-header">
                        <div><a href="https://github.com/abhilashSreenivasa/bug_tracker">Bugtracker - A Ticketing System for Developers</a></div>
                    </div>
                    <div className="project-details">
                        <ul>
                        <li>A ticket tracking system with three different roles- Manager, Developer, and Client.</li>
                        <li>Visually represented ticket status through dynamic charts using ChartJS library.</li> 
                        <li>Assigned specific privileges and provided features based on specific roles. Facilitated a smooth communication among different roles.</li> 
                        <li>Represented each ticket data using Bootstrap Data table and incorporated key features such as 
                        searchbar , pagination , sorting options and CRUD operations.</li>
                        <li><b>Technologies used: Python, Django Docker, MySQL , CharJS, Bootstrap.</b></li>
                        </ul>
                    </div>
                </div>
                <hr className="hr-small"/>
                <div className="projects">
                    <div className="project-header">
                        <div><a href="https://github.com/ChicoState/PantryNode">PantryNode</a></div>
                    </div>
                    <div className="project-details">
                        <ul>
                            <li>Migrated an old website to a full-stack website for Chico State Pantry by containerizing the entire project using Docker for improved scalability and deployment.</li>
                            <li> Created visual representation of Pantry items details using <b>React charts</b>, enhancing data visualization.</li>
                            <li>Conducted code reviews of other team members' pull requests to ensure code quality and adherence to best practices.</li>
                       </ul>
                    </div>
                </div>
                <hr className="hr-small"/>
                <div className="projects">
                    <div className="project-header">
                        <div><a href="https://github.com/abhilashSreenivasa/undash">Undash - A Custom Javascript Library ( MIT Licenced Personal Project) </a></div>
                    </div>
                    <div className="project-details">
                        <ul>
                            <li>A custom JavaScript library that provides helper functions without extending any built-in objects.</li>
                            <li>Implemented modern ES6 Javascript functions such as map, reduce and filter. </li>
                            <li>Provided several mathematical functions that are not available to Javascript inbuilt Math library.</li>
                            <li><b>Technologies used: ES6 Javascript, Node Package Manager.</b></li>
                        </ul>
                    </div>
                </div>
                
            </div>
      </div>
        </>
    )
}
export default Project