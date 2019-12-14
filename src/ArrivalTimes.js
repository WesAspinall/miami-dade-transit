import React from 'react';
import LineColor from './LineColor';


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
           <div>Northbound</div>
           <ul>
               <li><LineColor lineId={props.station.NB_Time1_LineID}/>Train 1: {props.station.NB_Time1_Arrival} {formatter(props.station.NB_Time1)}</li>
               <li><LineColor lineId={props.station.NB_Time2_LineID}/>Train 2: {props.station.NB_Time2_Arrival} {formatter(props.station.NB_Time2)}</li>
               <li><LineColor lineId={props.station.NB_Time3_LineID}/>Train 3: {props.station.NB_Time3_Arrival} {formatter(props.station.NB_Time3)}</li>
           </ul>

           <div>Southbound</div>
           <ul>
               <li><LineColor lineId={props.station.SB_Time1_LineID}/>Train 1: {props.station.SB_Time1_Arrival} {formatter(props.station.SB_Time1)}</li>
               <li><LineColor lineId={props.station.SB_Time2_LineID}/>Train 2: {props.station.SB_Time2_Arrival} {formatter(props.station.SB_Time2)}</li>
               <li><LineColor lineId={props.station.SB_Time3_LineID}/>Train 3: {props.station.SB_Time3_Arrival} {formatter(props.station.SB_Time3)}</li>
           </ul>
        </div>
       
    )
};

export default ArrivalTimes;