import { FaLandmark } from "react-icons/fa6";
import info from "../../data/info.js";
function EducationAndExperience(){
    return(
        <section id="education-and-experience">
            <div>
                <h4>
                    <FaLandmark/>
                    Education
                </h4>
                {info.education.map((edu,index)=>{
                    return(
                        <div key={index}>
                        <div>
                            <h3>{edu.duration}</h3>
                        </div>
                        <div>
                            <div>
                                <div>
                                    <div></div>
                                </div>
                            </div>
                        <div>
                            <h3>
                                <img src={edu.image} alt="school logo" />
                                <div>
                                    {edu.school}
                                    <p>{edu.degree}</p>
                                </div>
                            </h3>
                        </div>
                        </div>
                        </div>
                    )
                })}
                <h4>
                   <PiCertificateFill/>
                   Certificates
                </h4>
                <div>
                    <div>
                        <div>
                            {info.certificates.map((cert,index)=>{
                                return(
                                    <div key={index}>
                                        {cert.icon==="ibm"?(
                                            <SiIbm/>
                                        ):cert.icon==="google"?(
                                            <FcGoogle/>
                                        ):(
                                            <SiHackerrank/>
                                        )}
                                        <div>
                                            <div>
                                                <a href={cert.link}>
                                                    <p>{cert.title}</p>
                                                    <p>{cert.description}</p>
                                                </a>
                                                <span>
                                                    Open Certificate
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <button>
                        <span>
                            <svg>
                                <path></path>
                            </svg>
                        </span>
                        <span>Previous</span>
                    </button>
                    <button>
                        <span>Next</span>
                        <span>
                            <svg>
                                <path></path>
                            </svg>
                        </span>
                    </button>
                    <div>
                        {info.certificates.map((cert,index)=>{
                            return(
                                <span key={index}></span>
                            )
                        })}
                    </div>
                </div>
            </div>
            
        </section>
    )
}
export default EducationAndExperience