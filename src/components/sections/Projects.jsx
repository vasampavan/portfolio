import Project from "../Project"

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