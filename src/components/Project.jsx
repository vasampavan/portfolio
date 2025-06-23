import {CiLink} from "react-icons/ci"
function Project({title,description,technologies,link,github}){
    return(
        <div>
            <div>
                {technologies.split(",").map((tech,index)=>(
                    <span key={index}>{tech}</span>
                ))}
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
            <div>
                <a href={link}>
                    <CiLink/>
                    <span>View Project</span>
                </a>
                <a href={github}>
                    <CiLink/>
                    <span>View Github</span>
                </a>
            </div>
        </div>
    )
}
export default Project