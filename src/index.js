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
        fetch('https://miami-transit-api.herokuapp.com/api/TrainStations.json')
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
                            <li style={{listStyleType: 'none', paddingLeft: '1em'}}key={index}>{ item.Station }</li>
                        )
                    })}
                </div>
            </div>
        )
    }
}
ReactDOM.render(<App />, document.getElementById('root'));

