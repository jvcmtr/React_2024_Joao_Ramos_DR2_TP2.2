import React, {useEffect, useState} from 'react'
import JsonInfo from './JsonInfo'

export default function Product(props) {
    const [data, setData] = useState();
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);

    useEffect(()=>{
        setLoading(true)
        fetch(`https://fakestoreapi.com/products/${props.id}`)
            .then(res => res.json())
            .then(res=>{
                console.log(res)
                setData(res)
                setLoading(false)
            })
            .catch(error =>{
                console.log("FETCH error: ", error)
                setError("ERRO. Incapaz de carregar informações.")
                setLoading(false)
            })
    },[])

    

    return (
        <div className='product' style={{...props.style}}>
            { isLoading? "Loading ..." : null }
            { (error && !isLoading)? error : null }
            { data? ( 
                <div>
                    <h3>{data.title}</h3> 
                    <p> <span style={{fontSize:"12px", borderRadius:"10px", backgroundColor:"#aaaaaa", padding:"2px"}}> 
                        {data.category} 
                    </span></p>
                    <img src={data.image} style={{width:"25vw"}}/>
                    <p> {data.description}</p>
                    <div style={{display:"flex", justifyContent:"space-between" }}>
                        <span>
                            <span style={{fontSize:"20px", fontWeight:"800", color:"#88aa00"}}> {data.rating.rate}⭐ </span> 
                            <span> {data.rating.count} avaliações</span>
                        </span>
                        <span style={{fontSize:"22px", fontWeight:"800", color:"#aa0000"}}> R$ {data.price}</span>
                    </div>
                </div>
             ): null }
        </div>
    )
}