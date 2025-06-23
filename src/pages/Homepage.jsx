import Profile from "../components/sections/Profile.jsx"
import Projects from "../components/sections/Projects.jsx";
import Contact from "../components/sections/Contact.jsx";
import Footer from "../components/sections/Footer.jsx";
import EducationAndExperience from "../components/sections/EducationAndExperience.jsx";
import Skills from "../components/sections/Skills.jsx";

function Homepage(){
    return(
        <div>
            <div>
                <Profile/>
                <Projects/>
                <EducationAndExperience/>
                <Skills/>
                <Contact/>
                <hr />
                <Footer/>
            </div> 
        </div>
    )
}
export default Homepage