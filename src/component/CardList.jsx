import React from 'react';
import logo from '../images/images.png'

const CardList = () => {
    const nama = "Rizwan Gustama";
    return (
        <div>
            <img src={logo} alt="images" />
            <div className='text-center text-black'>Hello World {nama}</div>
        </div>
    )
}

export default CardList;