import React, { useState } from 'react';

function Post({ title, imgURL }) {
    let titled = title;
    let imageURL = imgURL;
    const [count, setCount] = useState(0);

    function incrementCount() {
        setCount((prevCount) => prevCount + 1)
        console.log(count)
    }
    function decrementCount() {
        setCount((prevCount) => prevCount - 1)
        console.log(count)
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