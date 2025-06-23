import Project from "../Project"
import info from "../../data/info.js";
function Projects(){
    return(
        <section id="projects">
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
    )
}
export default Projects