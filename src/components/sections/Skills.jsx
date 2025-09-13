import '../styles/skills.css'
import { DiGithubAlt} from "react-icons/di";
import { FaGitAlt,FaCss3Alt, FaHtml5, FaNodeJs, FaPython, FaReact} from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import {SiExpress} from "react-icons/si"
import { IoCodeSlash } from "react-icons/io5";
import { GrMysql } from "react-icons/gr";
import { FaC } from "react-icons/fa6";
import { FaJava } from "react-icons/fa";
import useScrollReveal from "./useScrollReveal";
import { FaBootstrap } from "react-icons/fa";
import { SiSpringboot } from "react-icons/si";
function Skills(){
    useScrollReveal();
    return(
        <section id="skills" className="skills section-animate">
            <h4 className="title">
               <IoCodeSlash className='technologysymbol' /> Technologies
            </h4>
            <div className="grid">
                <span className="item">
                    <FaJava  className="icon"/>Java
                </span>
                <span className="item">
                    <FaC  className="icon"/>C/C++
                </span>
                 <span className="item">
                    <FaPython className="icon"/>Python
                </span>
                <span className="item">
                    <IoLogoJavascript className="icon"/>JavaScript
                </span>
                <span className="item">
                    <FaReact className="icon"/>React
                </span>
                <span className="item">
                    <FaNodeJs className="icon"/>NodeJs
                </span>
                <span className="item">
                    <SiExpress className="icon"/>Express
                </span>
                <span className="item">
                    <GrMysql  className="icon"/>MySQL 
                </span>
                <span className="item">
                    <FaGitAlt className="icon"/>Git
                </span>
                <span className="item">
                    <DiGithubAlt className="icon"/>Github
                </span>
                 <span className="item">
                    <FaCss3Alt className="icon"/>CSS
                </span>
                 
                <span className="item">
                    <FaHtml5 className="icon"/>HTML
                </span>   
                <span className="item">
                    <FaBootstrap  className="icon"/>Bootstrap
                </span>  
                <span className="item">
                    <SiSpringboot   className="icon"/>Springboot
                </span>  
            </div>
        </section>
    )
}
export default Skills