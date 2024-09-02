import React, { useState } from 'react'

export default function Table(props) {

    const Data = props.mapper? props.data.map((i) => props.mapper(i)) : props.data 
    const Columns = props.columns? props.columns : Object.keys(Data[0])
    const ColumnStyle = props.columnStyle? props.columnStyle:  {};

    const getColumns = ()=>{
        return Columns.map((col, id)=>(
            <th style={{...ColumnStyle[col], ...props.headerStyle}} key={id}>  
                {col}
            </th>)
        )
    }

    const getRows = () => {
        return Data.map((item, index) => (
            <tr 
                onClick={() => props.onClick(props.data[index])} 
                style={{...props.rowStyle}} 
                className='tableRow' 
                key={index}
            >
                {getRowData(item)}
            </tr>
        ))  
    }

    const getRowData = (row_obj) => {
        return Columns.map((col, id)=>(
            <td style={{...ColumnStyle[col], ...props.cellStyle }} key={id}>
                { row_obj[ col ] }
            </td>
        ))
    }

    return (
        <table style={{...props.style}}>
            <tbody>
                <tr style={{...props.rowStyle}} className='tableRow'>
                    {getColumns()}
                </tr>
            </tbody>
            { getRows()}
        </table>
    )
}