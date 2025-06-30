import { FaSadTear } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import '../components/styles/404.css'; 

function NotFound() {
    const navigate = useNavigate();

    return (
        <div className="notfound-wrapper">
            <div className="notfound-container">
                <div className="notfound-inner">
                    <div className='notfound-content'>
                        <div className='notfound-title'>
                            Oops! <FaSadTear />
                        </div>
                        <div className="notfound-message">
                            We can&rsquo;t seem to find the page you&rsquo;re looking for.
                            <br />
                            The requested URL &quot;{window.location.href}&quot; was not found on this server.
                        </div>
                        <div className='notfound-button-wrapper'>
                            <button onClick={() => navigate("/")} className='notfound-button'>
                                Go back to homepage
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NotFound;
