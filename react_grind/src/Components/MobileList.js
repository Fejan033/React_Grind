import React from "react";
import './MobileList.css';

function MobileList() {


    const image ="https://m.media-amazon.com/images/I/61Io5-ojWUL._AC_UY327_FMwebp_QL65_.jpg";
    const title = 'One Plus Nord 2';
    const price = 100;

    return (
        <div className="container">
            <img className="image" alt="image" src={image}/>
            <h3 className="name">{title}</h3>
            <h5 className="Price">${price}</h5>
            <button className="button">Add to Cart</button>
        </div>
    );
}

export default MobileList;
