import info from "../../data/info.js";
import { IoIosArrowForward } from "react-icons/io"
import '../styles/profile.css'
import useScrollReveal from "./useScrollReveal";
function Profile(){
   useScrollReveal();
    return(
        <section id="profile" className="section-animate">
            <div className="self-center">
                <div className="flex-wrap-custom">
                    <div className="text-block">
                        <h2>{info.main.role}</h2>
                        <h1>{info.main.name}</h1>
                        <p>{info.main.description}</p>
                    
                        <div className="buttons">
                            <a className="projectandgithub" href="#projects">Projects</a>
                            <a className="projectandgithub" href={info.socials.github}>Github</a>
                            <a href="#contact">
                                <span>Contact</span>
                                <IoIosArrowForward/>
                            </a>
                        </div>

                    </div>
                    <div className="image-block">
                      <img src={info.main.photo} alt="profile picture" />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Profile