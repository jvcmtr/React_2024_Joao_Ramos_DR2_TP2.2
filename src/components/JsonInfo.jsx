export default function JsonInfo({data, style={}, valueStyle={fontStyle: "italic"}, keyStyle={fontWeight :"bold"}}){

    const KeyValueElement = (key, value) => (
        <p>
            <span style={keyStyle}>{""+key} :</span> 
            <span style={valueStyle}>{""+value}</span>
        </p>
    )

    const getAllProperties = (data) => {
        const elements = [];
        for (const key in data) {
            elements.push(KeyValueElement(key, data[key]));
        }
        return elements;
    }

    return(
        <div style={style}>
        {
            getAllProperties(data) 
        }
        </div>
    )
}