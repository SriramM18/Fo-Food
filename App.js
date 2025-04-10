import React from "react";
import ReactDOM from "react-dom/client";

/*
* Header
*  - Logo
*  - Nav Items
* Body
*  - Search
*  - RestrauntContainer
*    - RestrauntCard
*      - Img
*      - Rest name, rating, Cusinines, Delivery time
* Footer
*  - Copyright
*  - Links
*  - Address
*  - Contact
*/

const Header = () =>{
    return(
        <div className='header'>
            <div className='logo-container'>
                <img className='logo' src='https://i.pinimg.com/736x/b1/fc/bb/b1fcbbfd4fb8116c714ef352bb39bbaf.jpg' />
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}
 
const RestrauntCard = () =>{
    return(
        <div className='res-card' style={{
            backgroundColor: '#f0f0f0'
        }}>
            <img 
            className='res-logo'
            alt='res-logo'
            src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/RX_THUMBNAIL/IMAGES/VENDOR/2024/11/21/395529a6-0759-432e-b44f-dd83cb6844b9_392699.jpg'
            />
            <h3>Nandana Palace</h3>
            <h4>
                Biryani, North-Indian, Asian
            </h4>
            <h4>4.4 stars</h4>
            <h4>38 minutes</h4>
        </div>
    )
}
const Body = () =>{
    return(
        <div className='body'>
            <div className='search'>
                Search
            </div>
            <div className='res-container'>
               <RestrauntCard />
               <RestrauntCard />
               <RestrauntCard />
               <RestrauntCard />
               <RestrauntCard />
               <RestrauntCard />
               <RestrauntCard />
               <RestrauntCard />
               <RestrauntCard />
               <RestrauntCard />
               <RestrauntCard />
               <RestrauntCard />
            </div>
        </div>
    )
}
const AppLayout = () =>{
    return <div className='app'>
        <Header />
        <Body />
    </div>
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);