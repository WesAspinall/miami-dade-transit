import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            stations: []
        }

    }

    componentDidMount() {
        fetch('https://miami-transit-api.herokuapp.com/api/TrainTracker.json')
            .then((res) => res.json())
            .then((data) => this.setState({ stations: data.RecordSet.Record }));
    }

    render() {
        return (
            <div className="app">
                <h1>Metro Rail Stations</h1>
                <div className="station-list">
                    {this.state.stations.map((item, index) => {
                        return (
                            <div className="train-trackers">
                                <h4 style={{marginBottom:'5px'}}>{item.StationName}</h4>
                                 <div>Northbound</div>
                                 <span>Train 1: {item.NB_Time1_Arrival} (arrives in {item.NB_Time1}) </span> | <span>Train 2: {item.NB_Time2_Arrival} (arrives in {item.NB_Time2}) </span> | <span>Train 3: {item.NB_Time3_Arrival} (arrives in {item.NB_Time3})</span>
                                 
                                 <div style={{marginTop:'4px'}}>Southbound</div>
                                 <span>Train 1: {item.SB_Time1_Arrival} (arrives in {item.SB_Time1}) </span> | <span>Train 2: {item.SB_Time2_Arrival} (arrives in {item.SB_Time2}) </span> | <span>Train 3: {item.SB_Time3_Arrival} (arrives in {item.SB_Time3})</span>

                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}
ReactDOM.render(<App />, document.getElementById('root'));