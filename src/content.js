import React from 'react';
import './index.css'

const content = (props) => {
    return(
        <div>
            <h1 className='head'>Content Heading {props.num}</h1>
            {props.children}
        </div>
    )
}
export default content;