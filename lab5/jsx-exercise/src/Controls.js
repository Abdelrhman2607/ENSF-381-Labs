import React from 'react'

function Delete(){
    return(
        <div>
            <p></p>
            <button>Delete</button>
        </div>
    );
}

function Controls(){
    return(
        <div>
            <Delete />
            <button>Sort by Group</button>
            <button>Sort by ID</button>
            <button>Grid/List</button>
        </div>
    );
}

export default Controls;