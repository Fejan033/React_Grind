import React from 'react';
import './MobileList.css';

function MobileList(props) {

    const{image,title,price} =props;

    return (
        <div className="container">
            <img className="image" alt="itemphoto" src={image} />
            <h3 className="name">{title}</h3>
            <h5 className="Price">${price}</h5>
            <button className="button">Add to Cart</button>
        </div>
    );
}

export default MobileList;
