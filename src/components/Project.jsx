import {CiLink} from "react-icons/ci"
import '../components/styles/project.css'
function Project({title,description,technologies,link,github}){
    return(
        <div className="project-card">
            <div className="tech-list">
                {technologies.split(",").map((tech,index)=>(
                    <span className="tech-badge" key={index}>{tech}</span>
                ))}
            </div>
            <h3 className="project-title">{title}</h3>
            <p className="project-description">{description}</p>
            <div className="project-links">
                <a className="project-link" href={link}>
                    <CiLink className="project-link-icon"/>
                    <span className="project-link-text">View Project</span>
                </a>
                <a href={github} className="project-link">
                    <CiLink className="project-link-icon"/>
                    <span className="project-link-text">View Github</span>
                </a>
            </div>
        </div>
    )
}
export default Project