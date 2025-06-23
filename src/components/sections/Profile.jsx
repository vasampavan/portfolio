import { IoIosArrowForward } from "react-icons/io"
function Profile(){
    return(
        <section>
            <div>
                <div>
                    <div>
                        <h2>{info.main.role}</h2>
                        <h1>{info.main.name}</h1>
                        <p>{info.main.description}</p>
                    
                        <div>
                            <a href="#projects">Projects</a>
                            <a href="#contact">
                                <span>Contact</span>
                                <IoIosArrowForward/>
                            </a>
                        </div>

                    </div>
                    <div>
                      <img src={info.main.photo} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Profile