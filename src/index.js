import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ArrivalTimes from './ArrivalTimes';

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
                <p>For more information about current maintenance schedules and planned service outages, <a href='https://www.miamidade.gov/transportation-publicworks/rail_schedules.asp'>click here</a>.</p>
                <div className="station-list">
                    {this.state.stations.length === 0 ? 'Loading...' : this.state.stations.map((station, index) => {
                        return (
                            <div className="train-tracker" key={Math.random() * 100}>
                                <h4 style={{marginBottom:'5px'}}>{station.StationName}</h4>
                                <ArrivalTimes station={station}/>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}
ReactDOM.render(<App />, document.getElementById('root'));