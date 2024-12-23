import React, { useState } from 'react';

function DeveloperNotes(props) {
    return(
         <>
            <h2>{props.devNote.title}</h2>
            <p>{props.devNote.date}</p>
            <p>{props.devNote.author}</p>
            <p>{props.devNote.text}</p>
         </>
    )
}

export default DeveloperNotes