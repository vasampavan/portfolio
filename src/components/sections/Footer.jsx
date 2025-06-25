import info from "../../data/info.js";
import '../styles/footer.css'
function Footer({theme}){
    return(
        <footer className="wrapper">
            <p className="text">{info.footer}</p>

        </footer>
    )
}
export default Footer