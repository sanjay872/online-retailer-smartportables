import { FaStar } from "react-icons/fa";
import "../styles/reviewTile.css";
import { FaRegUserCircle } from "react-icons/fa";

export default function ReviewTile({review}){

    const makeStars=()=>{
        let elements=[];
        for(let i=0;i<review.rating;i++){
            elements.push(<FaStar/>);
        }
        return elements;
    }

    function convertDate(dateStr){
        const date = new Date(dateStr);
        const options = { month: "short", day: "numeric", year: "numeric" };
        const formatted = date.toLocaleDateString("en-US", options);
        return formatted;
    }

    return(
        <div className="review_tile">
            <div className="review_tile_header">
                <FaRegUserCircle />
                <div>{review.username}</div>
            </div>
            <div className="review_title_body">
                <div className="review_title_body_rating">
                    <div className="review_title_body_rating-stars">
                        {makeStars()} 
                    </div>
                    <div className="review_title_body_rating-title">{review.title}</div>
                </div>
                <div className="review_title_body-subinfo">
                    <div>Reviewed on {convertDate(review.date)}</div>
                </div>
                <div className="review_title_body-main">{review.review}</div>
            </div>
        </div>
    );
}