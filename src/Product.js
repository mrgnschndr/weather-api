import React, { useState } from 'react';

function Product({product:{name, description, price, companyName}}) {
    return(
         <>
            <h2>{name}</h2>
            <p>{description}</p>
            <p>{price}</p>
            <p>{companyName}</p>
         </>
    )
}

export default Product




// Refactor app.get, use for iterative loop to make products into an array, generate 20-50, push each object into object's array to show, go back into App.js and map over and display each product