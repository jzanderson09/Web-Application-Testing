import React from 'react';
import './Display.scss';

const Display = ({ stats }) => {
    return (
        <div className='Display'>
            <h1>Display!</h1>
    <p>{`Balls:  ${stats.balls}`}</p>
    <p>{`Strikes:  ${stats.strikes}`}</p>
        </div>
    );
};

export default Display;