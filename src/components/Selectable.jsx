import React from 'react'

export default function Selectable(props) {
    if (props.data == null) return (<p> Dados ainda não carregados </p>)
    
return (
    <select onChange={props.onChange}>
        { props.data.map(item => ( <option value={item}> {item} </option> ))}
    </select>
    )
}