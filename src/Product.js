import React, { useState } from 'react';

function Product(props) {
    return(
         <>
            <h2>{props.prod.name}</h2>
            <p>{props.prod.description}</p>
            <p>{props.prod.price}</p>
            <p>{props.prod.company}</p>
         </>
    )
}

export default Product




// Refactor app.get, use for iterative loop to make products into an array, generate 20-50, push each object into object's array to show, go back into App.js and map over and display each product