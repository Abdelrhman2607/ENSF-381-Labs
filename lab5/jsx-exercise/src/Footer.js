import React from 'react'

function Footer(){
    const today = new Date().toLocaleDateString();

    return(
        <p>{today} - Abdelrahman - Maxime</p>
    );
}

export default Footer