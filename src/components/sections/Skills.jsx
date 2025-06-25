import { FaHtml5 } from "react-icons/fa6";
import '../styles/skills.css'
function Skills(){
    return(
        <section id="skills" className="skills">
            <h4 className="title">
                Technologies I Use.
            </h4>
            <div className="grid">
                <span className="item">
                    <FaHtml5 className="icon"/>HTML
                </span>
            </div>
        </section>
    )
}
export default Skills