// import React, { useState } from 'react'
// import PropTypes from 'prop-types'
import React from 'react'



export default function News(props) {
    // const [Data , SetData] =useState("")
    // const [title, setTitle] = useState("")


    return (

        <>
            <div className="card " >
                <img src={props.imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.descrip}..</p>
                    <p className="card-text text-muted"><small>by:-{props.author ? props.author : "Unknown"} at  {new Date(props.publishedAt).toDateString()}</small></p>
                    <a href={props.san} className="btn btn-success btn-sm" target="blank">Read More</a>
                </div>
            </div>

        </>
    );
}

