import React from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../actions';


class DisplayTemp extends React.Component {

constructor(props) {
  super(props);
  this.state = { roomNum: 0 };
}

  componentDidMount() {
      this.props.fetchData();
  }

  selectRoom = (room) => {
    this.setState({roomNum: room.target.value});
  }

  renderTemp() {

      return (
        <div>
    <div className="container">
        <div className="menu"></div>

        <div className="select_room">
            <select onChange={this.selectRoom}>
              <option value="0">Bedroom</option>
              <option value="1">Bathroom</option>
              <option value="2">Lounge</option>
              <option value="3">Living room</option>
            </select>
        </div>
        <div className="display_circle" key={this.state.roomNum}>
              <div className="temp">{this.props.temp[this.state.roomNum]['temperature']}</div>
              <div className="humidity">{this.props.temp[this.state.roomNum]['humidity']}</div>
        </div>
    </div>



    <div className="chart_container">
      <div className="chart">
        <img src={ require('../images/asset_chart.png') } alt="" />
      </div>
      <div className="days">
        <span>M</span>
        <span>T</span>
        <span>W</span>
        <span>Th</span>
        <span>F</span>
        <span>S</span>
        <span>S</span>
      </div>
    </div>



    </div>

    );
  }

  render() {
    return <div>{this.renderTemp()}</div>;
  }
}

const mapStateToProps = state => {
  return { temp: state.temp };
};

export default connect(mapStateToProps, { fetchData })(DisplayTemp);
