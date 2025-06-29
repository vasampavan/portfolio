import Project from "../Project"
import info from "../../data/info.js";
import { FaFileCode } from "react-icons/fa";
import '../styles/projects.css'
import useScrollReveal from "./useScrollReveal";
function Projects(){
    useScrollReveal();
    return(
        <>
        <h2 >
            <FaFileCode className="headline"/> Projects
        </h2>
        <section id="projects" className="projects-grid section-animate">
          
            {info.projects.map((project,index)=>{
                return(
                    <Project
                    key={index}
                    title={project.title}
                    description={project.description}
                    technologies={project.technologies}
                    github={project.github}
                    link={project.link}
                    />
                )
            })}
        </section>
        </>
    )
}
export default Projects