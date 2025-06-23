import info from "../../data/info.js";
import { IoIosArrowForward } from "react-icons/io"
import '../styles/profile.css'
function Profile(){
    return(
        <section id="profile">
            <div className="self-center">
                <div className="flex-wrap-custom">
                    <div className="text-block">
                        <h2>{info.main.role}</h2>
                        <h1>{info.main.name}</h1>
                        <p>{info.main.description}</p>
                    
                        <div className="buttons">
                            <a href="#projects">Projects</a>
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