import React from 'react';

const ArrivalTimes = (props) => {

    const formatter = (data) => {
        if(!data) {
            return ' data currently unavailable ';
        } else if (data === '*****'){
            return `closed`;
        } else {
            return `(arrives in ${data})`;
        }
    }

    return (
        <div>
            <div>{props.direction}</div>
            <span>Train 1: {props.station.NB_Time1_Arrival} {formatter(props.station.NB_Time1)} </span> | 
            <span>Train 2: {props.station.NB_Time2_Arrival} {formatter(props.station.NB_Time2)}</span>  | 
            <span>Train 3: {props.station.NB_Time3_Arrival} {formatter(props.station.NB_Time3)}</span>
        </div>
       
    )
};

export default ArrivalTimes;