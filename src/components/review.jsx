import { useEffect, useState } from "react";
import ReviewTile from "./reviewTile";
import { FaRegStar, FaStar} from "react-icons/fa";
import "../styles/review.css";
import Modal from "./modal";

export function Review({productId}){
    
    const reviewsData = [
  {
    id: "1",
    product_id: "1-2",
    username: "Tim",
    title: "Good value for money",
    review: "The product is good and performs as expected. Worth the price.",
    rating: 4,
    date: "2025-09-21"
  },
  {
    id: "2",
    product_id: "1-2",
    username: "Sarah",
    title: "Excellent quality!",
    review: "Loved the build quality and packaging. Would definitely recommend it.",
    rating: 5,
    date: "2025-09-23"
  },
  {
    id: "3",
    product_id: "1-2",
    username: "John",
    title: "Decent but late",
    review: "The product works fine, but delivery was delayed by 3 days.",
    rating: 3,
    date: "2025-09-24"
  },
  {
    id: "4",
    product_id: "1-2",
    username: "Emma",
    title: "Exceeded expectations",
    review: "Honestly better than I thought. Great performance and easy to use.",
    rating: 5,
    date: "2025-09-25"
  },
  {
    id: "5",
    product_id: "1-2",
    username: "Alex",
    title: "Not worth it",
    review: "The material quality was disappointing and not as described.",
    rating: 2,
    date: "2025-09-26"
  },
  {
    id: "6",
    product_id: "1-2",
    username: "Liam",
    title: "Highly recommended",
    review: "Excellent product and value for money. Would buy again.",
    rating: 5,
    date: "2025-09-28"
  },
  {
    id: "7",
    product_id: "1-2",
    username: "Sophia",
    title: "As described",
    review: "Does exactly what it says. No complaints so far.",
    rating: 4,
    date: "2025-09-29"
  },
  {
    id: "8",
    product_id: "1-2",
    username: "Noah",
    title: "Great support",
    review: "Customer service was quick to resolve my issue. Good experience.",
    rating: 4,
    date: "2025-09-30"
  },
  {
    id: "9",
    product_id: "1-2",
    username: "Olivia",
    title: "Average",
    review: "It's okay for basic use, but there are better options available.",
    rating: 3,
    date: "2025-10-01"
  },
  {
    id: "10",
    product_id: "1-2",
    username: "Mason",
    title: "Fast delivery",
    review: "Arrived earlier than expected and works well. Very happy.",
    rating: 5,
    date: "2025-10-02"
  }
];

const[reviews,setReviews]=useState(reviewsData);
const[name,setName]=useState(null);
const[title,setTitle]=useState(null);
const[review,setReview]=useState(null);
const[rating,setRating]=useState(null);
const[isOpen,setIsOpen]=useState(false);


useEffect(()=>{
    
},[rating])

function randomId(){
    const max = 100000;
    const num = Math.floor(Math.random() * (max + 1)); 
    return num;
}

function makeStars(){
    var stars=[]
    for(let i=1;i<=5;i++){
        if(rating<i){
            stars.push(<FaRegStar onClick={()=>setRating(i)}/>);
        }
        else{
            stars.push(<FaStar onClick={()=>setRating(i)}/>);
        }
    }
    return stars;
}

function addReview(e){
    e.preventDefault();
    if(name!=="" && title!=="" && review!=="" && rating){
        const newReview={
            id:randomId(),
            product_id:productId,
            username:name,
            title:title,
            review:review,
            rating:rating,
            date: new Date().toISOString().split('T')[0]
        }
        setReviews((existingReviews)=>[newReview,...existingReviews]);

        setName("");
        setRating("");
        setTitle("");
        setReview("");
        setIsOpen(true);
    }
}

    return(
        <div className="reviews">
            <div className="reivews_header">
              <div className="reviews_header-title">Add Reviews</div>
              <div>OR</div>
              <button className="reviews_header-viewbtn" onClick={()=>setIsOpen(true)}>View Reviews</button>
            </div>
              <form onSubmit={addReview} className="review_form">
                  <input className="review_form-inputs" type="text" placeholder="Name" value={name} name="Name" onChange={(e)=>setName(e.target.value)}/>
                  <input className="review_form-inputs" type="text" placeholder="Title" value={title} name="Title" onChange={(e)=>setTitle(e.target.value)}/>
                  <textarea  className="review_form-inputs review-textarea" placeholder="Enter your review" value={review} name="Review" onChange={(e)=>setReview(e.target.value)} />
                  <div className="review-rating">
                      Rating {
                          makeStars()
                      }
                  </div>
                  <button className="reviews_form-postbtn" type="submit">Post</button>
              </form>
              <Modal isOpen={isOpen} onClose={()=>setIsOpen(false)}>
                {   reviews &&
                    reviews.map((review)=><ReviewTile key={review.id} review={review}/>)
                }
              </Modal>
        </div>
    );
}