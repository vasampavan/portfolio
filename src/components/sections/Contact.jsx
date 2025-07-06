import info from "../../data/info.js";
import { FaSquareXTwitter, FaLinkedin } from "react-icons/fa6";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import '../styles/contact.css'
import useScrollReveal from "./useScrollReveal";
function Contact(){
    useScrollReveal();
    return(
        <section id="contact" className="contact section-animate">
            <h4 className="heading">
                Let&apos;s Get in Touch:{" "}
                <span className="highlight">
                    Ways to Connect with Me 
                </span>
            </h4>
            <p className="description">
                {info.contact.description}
            </p>
            <div className="links">
                <a href={info.socials.facebook} className="link">
                    <FaFacebook className="icon"/>
                    <span>Follow on Facebook</span>
                </a>
                <a href={info.socials.instagram} className="link">
                    <FaInstagram className="icon"/>
                    <span>Follow on Instagram</span>
                </a>
                
                <a href={info.socials.linkedin} className="link">
                    <FaLinkedin className="icon"/>
                    <span>Follow on LinkedIn</span>
                </a>
                <hr className="dividerline" />
                <a href={`mailto:${info.main.email}`}className="email-link">
                    <MdEmail className="icon"/>
                    <span>{info.main.email}</span>
                </a>
                <a href={info.socials.github}className="link">
                    <FaGithub className="icon"/>
                    <span>Github</span>
                </a>
            </div>
        </section>
    )
}
export default Contact