import React from "react";
export default function JsonInfo(props){
    
    const valueStyle = {color:'#3030aa', ...props.valueStyle}
    const keyStyle = {fontWeight:'bold', ...props.valueStyle}
    const listStyle = {...props.listStyle}

    if (props.data === null || props.data === undefined) {
      return <span>Null or undefined</span>;
    }
  
    if (Array.isArray(props.data)) {
      return (
        <ol style={listStyle}>
          {props.data.map((item, index) => (
            <li key={index}>
              <JsonInfo data={item} />
            </li>
          ))}
        </ol>
      );
    }
  
    if (typeof props.data == 'object') {
      return (
        <ul>
          {Object.keys(props.data).map((key) => (
            <li key={key}>
              <span style={keyStyle}>{key}:</span> <JsonInfo data={props.data[key]} />
            </li>
          ))}
        </ul>
      );
    }
  
    return <span style={valueStyle}>{props.data.toString()}</span>;
  };
