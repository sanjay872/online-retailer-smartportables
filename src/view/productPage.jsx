import { useState } from "react";
import ItemTile from "../components/itemTile";
import { useParams } from 'react-router-dom';
import { useEffect } from "react";

function ProductPage(){

    const [product,setProduct]=useState(null);
    const { id } = useParams();

    useEffect(
        ()=>{
            const products = [
      {
          id: "1",
          name: "Wearable Technology",
          items: [
              {
                  id: "1-1",
                  imageId: "smartwatch_aura.jpg",
                  title: "Aura Smartwatch Series 8",
                  price: 429.99,
                  stock: 150,
                  description: "The ultimate device for a healthy life with advanced sensors and a beautiful, durable design.",
                  salePrice: 399.99,
              },
              {
                  id: "1-2",
                  imageId: "fitness_tracker_flex.jpg",
                  title: "FlexFit Activity Tracker",
                  price: 129.50,
                  stock: 220,
                  description: "Track your daily activity, sleep, and exercise with this lightweight and stylish fitness band.",
                  salePrice: 0,
              },
              {
                  id: "1-3",
                  imageId: "smart_glasses_vision.jpg",
                  title: "Visionary Smart Glasses",
                  price: 699.00,
                  stock: 45,
                  description: "Experience augmented reality with hands-free navigation, notifications, and camera.",
                  salePrice: 0,
              },
          ]
      },
      {
          id: "2",
          name: "Phones",
          items: [
              {
                  id: "2-1",
                  imageId: "phone_galaxy_pro.jpg",
                  title: "Galaxy Pro X2",
                  price: 1199.99,
                  stock: 85,
                  description: "A flagship phone with a pro-grade camera system, stunning display, and all-day battery life.",
                  salePrice: 0,
              },
              {
                  id: "2-2",
                  imageId: "phone_pixel_lite.jpg",
                  title: "Pixel Lite 5A",
                  price: 449.00,
                  stock: 300,
                  description: "The brilliant Pixel camera and helpful features in a more affordable, streamlined package.",
                  salePrice: 429.00,
              },
          ]
      },
      {
          id: "3",
          name: "Laptops",
          items: [
              {
                  id: "3-1",
                  imageId: "ultrabook_aero.jpg",
                  title: "AeroBook Thin & Light",
                  price: 999.00,
                  stock: 110,
                  description: "An incredibly thin and light ultrabook with powerful performance for professionals on the go.",
                  salePrice: 0,
              },
              {
                  id: "3-2",
                  imageId: "gaming_laptop_omen.jpg",
                  title: "Omen Gaming Laptop 16",
                  price: 1849.50,
                  stock: 60,
                  description: "Dominate the competition with a high-refresh-rate display and top-tier graphics performance.",
                  salePrice: 1799.00,
              },
              {
                  id: "3-3",
                  imageId: "chromebook_spin.jpg",
                  title: "SpinBook Chrome 14",
                  price: 379.99,
                  stock: 450,
                  description: "A versatile and secure Chromebook with a 360° hinge for work, creativity, and entertainment.",
                  salePrice: 0,
              },
          ]
      },
      {
          id: "4",
          name: "Voice Assistant",
          items: [
              {
                  id: "4-1",
                  imageId: "smart_speaker_echo.jpg",
                  title: "Echo Hub Mini",
                  price: 49.99,
                  stock: 800,
                  description: "A compact smart speaker that delivers crisp vocals and balanced bass for full sound.",
                  salePrice: 29.99,
              },
              {
                  id: "4-2",
                  imageId: "smart_speaker_google.jpg",
                  title: "Google mini",
                  price: 69.99,
                  stock: 500,
                  description: "Smart speaker with Advance AI that delivers fast and high quality content",
                  salePrice: 69.99,
              },
          ]
      }
            ];
            const foundProduct = products.find((product) => product.id === id);
            setProduct(foundProduct);
        }
    ,[id]);
    

    return(
        <div>
            {
                product &&
                <div className="productpage">
                    <div className="productpage-name">
                        {product.name}
                    </div>
                    <div className="productpage-items">
                        {
                            product.items.map((item)=><ItemTile key={item.id} item={item}></ItemTile>)
                        }
                    </div>
                </div>
            }
        </div>
    );
}

export default ProductPage;