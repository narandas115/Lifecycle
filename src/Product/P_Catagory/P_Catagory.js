import React from 'react'
// import './prodCat.css'
import prodData from '../Product.json'
import { Link } from 'react-router-dom'

const P_Catagory = () => {
    return (
        <>
           <h1>Different Product</h1> 
           <ul>
               {
                   prodData.Product.map((product)=>
                   <li key={product.p_id}>
                       <Link to={`/Sub_Cat/${product.p_id}`}>{product.p_name}</Link>
                       
                   </li>
                   )
               }
           </ul>
        </> 
    )
}
export default P_Catagory;