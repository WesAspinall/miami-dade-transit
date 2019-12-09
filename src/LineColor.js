import React from 'react';

const LineColor = (props) => {

    function color() {
        if(props.lineId === 'ORG') {
            return 'orange';
        } else if (props.lineId === 'GRN') {
            return 'green';
        }
    }
   
    let style = {
        backgroundColor: color(props),
        width: 8,
        height: 8,
        borderRadius: 50,
        display: 'inline-block',
        marginBottom: '1px',
        verticalAlign: 'middle'
    }

    return (
        <div style={style} className="line-color">
        
        </div>
    )
}

export default LineColor;