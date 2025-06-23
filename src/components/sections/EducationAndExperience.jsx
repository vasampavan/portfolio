import { FaLandmark } from "react-icons/fa6";

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
                                </div>
                            </div>
                        </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}
export default EducationAndExperience