import React, { use } from "react";
import ReactDOM from "react-dom/client";
import RestrauntCard from "./RestrauntCard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () =>{
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);

  useEffect(()=>{
    fetchData();
  }, [])

  const fetchData = async ()=>{
    const data = await fetch("https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=12.9578047&lng=77.7130364&carousel=true&third_party_vendor=1");
    const json = await data.json();
    //setlistOfRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    console.log(json);
    // Optional chaining '?' is used to prevent errors if the data structure changes or if the data is not available.
    setlistOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };
  
    return listOfRestaurants.length === 0 ? <Shimmer/> : (
        <div className='body'>
            <div className='button'>
                <button className="filter-btn"
                  onClick={()=>{
                    const filteredData = listOfRestaurants.filter (
                      (res)=> res.info.avgRating >4.5
                    );
                    setlistOfRestaurants(filteredData);
                  }}
                >
                  Top rated restaurants
                </button>
            </div>
            <div className='res-container'>
              {
            listOfRestaurants.map((res) => ( 
                <RestrauntCard key={res.info.id} resData={res} />
              ))
              }
               
            </div>
        </div>
    )
}

export default Body;