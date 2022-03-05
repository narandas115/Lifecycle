import React from 'react'
import { useParams } from 'react-router-dom'

export default function Contact() {
    let val=useParams();
    return (
        <div>
            <h1>Contact us</h1>
            ]<h2>{val.name}</h2>
        </div>
    )
}
