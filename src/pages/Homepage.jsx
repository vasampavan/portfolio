import Profile from "../components/sections/Profile.jsx"
import Projects from "../components/sections/Projects.jsx";
import Contact from "../components/sections/Contact.jsx";
import Footer from "../components/sections/Footer.jsx";
import EducationAndExperience from "../components/sections/EducationAndExperience.jsx";
import Skills from "../components/sections/Skills.jsx";
import '../components/styles/homepage.css'
function Homepage(){
    return(
        <div className="page-wrapper">
            <div className="page-container">
                <Profile/>
                <Projects/>
                <EducationAndExperience/>
                <Skills/>
                <Contact/>
                <hr className="page-divider"/>
                <Footer/>
            </div> 
        </div>
    )
}
export default Homepage