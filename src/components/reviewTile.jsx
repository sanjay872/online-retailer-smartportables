import { FaStar } from "react-icons/fa";

export default function ReviewTile({review}){

    const makeStars=()=>{
        let elements=[];
        for(let i=0;i<review.rating;i++){
            elements.push(<FaStar/>);
        }
        return elements;
    }

    return(
        <div className="review_tile">
            <div>
                <div>User Image</div>
                <div>{review.username}</div>
            </div>
            <div>
                <div>
                    {makeStars()}
                </div>
                <div>{review.title}</div>
                <div>{review.date}</div>
                <div>{review.review}</div>
            </div>
        </div>
    );
}