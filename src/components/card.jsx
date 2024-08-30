import React from 'react'

export default function Card(props) {
return (
    <div className='card_container' style={{...props.style}}>
          {props.children}
    </div>
    )
}