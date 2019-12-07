import React from 'react';

const ArrivalTimes = (props) => {
    return (
        <div>
            <div>{props.direction}</div>
            <span>Train 1: {props.station.NB_Time1_Arrival} (arrives in {props.station.NB_Time1}) </span> | <span>Train 2: {props.station.NB_Time2_Arrival} (arrives in {props.station.NB_Time2}) </span> | <span>Train 3: {props.station.NB_Time3_Arrival} (arrives in {props.station.NB_Time3})</span>
        </div>
       
    )
};

export default ArrivalTimes;