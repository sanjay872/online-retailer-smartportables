import { useNavigate } from "react-router-dom";
import "../styles/notfound.css";

export function NotFound(){

    const navigate=useNavigate();

    return(
        <div className="notfound">
            <div className="notfound-text">NOT FOUND</div>
            <div onClick={()=>navigate("/")} className="notfound-redirect">Go to Home</div>
        </div>
    );
}