
import { FaSquareXTwitter, FaLinkedin } from "react-icons/fa6";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
function Contact(){
    return(
        <section id="contact">
            <h4>
                Let&apos;s Get in Touch:{" "}
                <span>
                    Ways to Connect with Me 
                </span>
            </h4>
            <p>
                {info.contact.description}
            </p>
            <div>
                <a href={info.socials.facebook}>
                    <FaFacebook/>
                    <span>Follow on Facebook</span>
                </a>
                <a href={info.socials.instagram}>
                    <FaInstagram/>
                    <span>Follow on Instagram</span>
                </a>
                
                <a href={info.socials.linkedin}>
                    <FaLinkedin/>
                    <span>Follow on LinkedIn</span>
                </a>
                <hr />
                <a href={`mailto:${info.socials.instagram}`}>
                    <MdEmail/>
                    <span>{info.main.email}</span>
                </a>
            </div>
        </section>
    )
}
export default Contact