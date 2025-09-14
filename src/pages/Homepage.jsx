import Profile from "../components/sections/Profile.jsx"
import Projects from "../components/sections/Projects.jsx";
import Contact from "../components/sections/Contact.jsx";
import Footer from "../components/sections/Footer.jsx";
import EducationAndExperience from "../components/sections/EducationAndExperience.jsx";
import Skills from "../components/sections/Skills.jsx";
import '../components/styles/homepage.css'
import ToggleTheme from "../components/ToggleTheme.jsx";
import { AppContext } from "../App.jsx";
import { useContext } from "react";
import CodingProfiles from "../components/sections/CodingProfiles.jsx";
import Particles from "../components/Particles.jsx";
function Homepage(){
    const { theme, switchTheme } = useContext(AppContext);
    
    return(
        <>
        <Particles/>
        <div className="wrapper">
            <div className="container">
                <ToggleTheme switchTheme={switchTheme} />
                <Profile/>
                <Projects/>
                <EducationAndExperience/>
                <Skills/>
                <CodingProfiles/>
                <Contact/>
                <Footer theme={theme}/>
            </div> 
        </div>
        </>
    )
}
export default Homepage