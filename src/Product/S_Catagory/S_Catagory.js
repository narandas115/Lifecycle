import React from 'react'
import prodData from '..Product.json'
import {useParams} from 'react-router-dom'
const subCat = () => {
    const value=useParams();
    console.log("Value in subcat: ",value);
    return (
        <div>
            <h1>subCat</h1>
        </div>
    )
}

export default subCat;

