import React , {useState, useEffect} from 'react'

export default function LoadCard(props) {

    const [data, setData] = useState();
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);

    useEffect(()=>{
        setLoading(true)
        async function Request(){
            try{
                let resp = await fetch(props.url)
                resp = await resp.json()
                setData(resp)
            } catch (e){
                console.log( "request Error ", e)
                setError("ERRO. Incapaz de carregar informações.")
            }
            setLoading(false)
        }
        Request()
    },[])

    const a = React.Children.map(props.children, (child) =>
        React.cloneElement(child, {data})
    );


    return (
        <div className='card_container' style={{...props.style}}>
            { isLoading? "Carregando ..." : null }
            { (error && !isLoading)? error : null }
            { data? a : null }
        </div>
    )
}
