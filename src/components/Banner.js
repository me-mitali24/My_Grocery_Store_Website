import React from 'react';

const Banner = ({ imageUrl, altText }) => {
    return (
        <div className="banner">
            <img src={imageUrl} alt={altText} style={{ width: '100%', height: 'auto' }} />
        </div>
    );
};

export default Banner;
