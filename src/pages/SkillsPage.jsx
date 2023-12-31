import StarRating from "../components/StarRating"
import HeaderItems from '../components/HeaderItems';

const Skills=()=>{
    return (
        <>
        <div className="main">
            <HeaderItems/>
        
            <div className="skills">

                <div className="skills-group">
                    <div className="skill-header" >Programming Languages</div>
                    <hr className="hr-small"/>
                    <div className="skill-group-item">
                        <img className="skills-logo" src="/java-script (1).png" alt="Javascript"></img>
                        <span>JavaScript</span>
                        <StarRating value={4.5} /> 
                    </div>
                    <div className="skill-group-item">
                        <img className="skills-logo" src="/python.png" alt="Python"></img>
                        <span>Python</span>
                        <StarRating value={4} />
                    </div>
                    <div className="skill-group-item">
                        <img className="skills-logo" src="/java.png" alt="Java"></img>
                        <span>Java</span>
                        <StarRating value={5} />
                    </div>
                    <div className="skill-group-item">
                        <img className="skills-logo" src="/nodejs.png" alt="Javascript"></img>
                        <span>NodeJS</span>
                        <StarRating value={4} />
                    </div>
                </div>






                <div className="skills-group">
                    <div className="skill-header">Web Technologies</div>
                    <hr className="hr-small"/>
                    <div className="skill-group-item">
                        <img className="skills-logo" src="/react.png" alt="Java"></img>
                        <span>React</span>
                        <StarRating value={5} />
                    </div>
                    <div className="skill-group-item">
                        <img className="skills-logo" src="/django.png" alt="Django"></img>
                        <span>Django</span>
                        <StarRating value={4} />
                    </div>
                    <div className="skill-group-item">
                        <img className="skills-logo" src="/bootstrap.png" alt="Bootstrap"></img>
                        <span>Bootstrap</span>
                        <StarRating value={4} />
                    </div>
                    <div className="skill-group-item">
                        <img className="skills-logo" src="/html.png" alt="HTML"></img>
                        <span>HTML</span>
                        <StarRating value={5} />
                    </div>
                    <div className="skill-group-item">
                        <img className="skills-logo" src="/css.png" alt="CSS"></img>
                        <span>CSS</span>
                        <StarRating value={5} />
                    </div>
                </div>
                <div className="skills-group">
                    <div className="skill-header">Database</div>
                    <hr className="hr-small"/>
                    <div className="skill-group-item">
                        <img className="skills-logo" src="/mysql.png" alt="MySQL"></img>
                        <span>MySQL</span>
                        <StarRating value={5} />
                    </div>
                    <div className="skill-group-item">
                        <img className="skills-logo" src="/database.png" alt="MongoDB"></img>
                        <span>MongoDB</span>
                        <StarRating value={4} />
                    </div>
                    <div className="skill-group-item">
                        <img className="skills-logo" src="/sql-server.png" alt="MSSQL"></img>
                        <span>MS-SQL</span>
                        <StarRating value={3} />
                    </div>
                </div>
                <div className="skills-group">
                    <div className="skill-header">Tools and Softwares</div>
                    <hr className="hr-small"/>
                    <div className="skill-group-item">
                        <img className="skills-logo" src="/merge.png" alt="Git"></img>
                        <span>Git</span>
                        <StarRating value={4} />
                    </div>
                    <div className="skill-group-item">
                        <img className="skills-logo" src="/docker.png" alt="Docker"></img>
                        <span>Docker</span>
                        <StarRating value={4} />
                    </div>
                    <div className="skill-group-item">
                        <img className="skills-logo" src="/google-analytics.png" alt="Google Analytics"></img>
                        <span>Google Analytics</span>
                        <StarRating value={5} />
                    </div>
                    <div className="skill-group-item">
                        <img className="skills-logo" src="/excel.png" alt="Excel"></img>
                        <span>Excel</span>
                        <StarRating value={4} />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Skills