import React, { useState } from 'react';


const Square = () => {

    const [backgroundColor, setBackgroundColor] = useState('black');
    const [backgroundColorInterval, setBackgroundColorInterval] = useState(null);

    const getRandomInt = (max) => Math.floor(Math.random() * max);

    const onMouseEnter = () => setBackgroundColorInterval(setInterval(() => setBackgroundColor(`rgb(${getRandomInt(256)}, ${getRandomInt(256)}, ${getRandomInt(256)})`), 100));

    const onMouseLeave = () => clearInterval(backgroundColorInterval);

    const onDoubleClick = () => clearInterval(backgroundColorInterval);

    return (
        <div
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onDoubleClick={onDoubleClick}
            style={{ width: '255px', height: '255px', backgroundColor: backgroundColor }}
        ></div>
    );

};


export default Square;
