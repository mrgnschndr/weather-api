import React, { useState } from 'react';

function Post({ title, imgURL }) {
    let titled = title;
    let imageURL = imgURL;
    console.log(imageURL);

    const [count, setCount] = useState(0);

    function incrementCount() {
        setCount((prevCount) => prevCount + 1)
    }
    function decrementCount() {
        setCount((prevCount) => prevCount - 1)
    }

    return (
        <div className="post-container">
            <p>{titled}</p>
            <img alt='test' src={`/images/${imageURL}`} />
            <div className="button-wrapper">
                <button onClick={decrementCount}>-</button>
                <p>{count}</p>
                <button onClick={incrementCount}>+</button>
            </div>
        </div>
    )
}

export default Post;