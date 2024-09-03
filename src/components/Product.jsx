import React, {useEffect, useState} from 'react'
import JsonInfo from './JsonInfo'

export default function Product(props) {
    if (!props.data) return (<p> Erro ao carregar os itens</p>)

    return (
        <div className='Product'>
            <h3>{props.data.title}</h3> 
            <p> <span style={{fontSize:"12px", borderRadius:"10px", backgroundColor:"#aaaaaa", padding:"2px"}}> 
                {props.data.category} 
            </span></p>
            <img src={props.data.image} />
            <p> {props.data.description}</p>
            <div style={{display:"flex", justifyContent:"space-between" }}>
                <span>
                    <span style={{fontSize:"20px", fontWeight:"800", color:"#88aa00"}}> {props.data.rating.rate}⭐ </span> 
                    <span> {props.data.rating.count} avaliações</span>
                </span>
                <span style={{fontSize:"22px", fontWeight:"800", color:"#aa0000"}}> R$ {props.data.price}</span>
            </div>
        </div>
    )
}