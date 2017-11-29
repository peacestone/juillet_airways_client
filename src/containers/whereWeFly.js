import React from 'react'
import getAirports from '../actions/getAirports'
import getAirportDestinations from '../actions/getAirportDestinations'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import AirportList from '../components/airportsList'



class WhereWeFly extends React.Component {

  componentDidMount = () => {
    this.props.getAirports()
  }

   handleClick = (event) => {
    const airportId = event.target.id
    this.props.getAirportDestinations(airportId)
  }

  render(){
    const airportCityList = this.props.airports.map((airport) => <AirportList key={airport.id} onClick={this.handleClick} airport={airport}  /> )

    return(

      <div id='whereWeFly' style={{display: 'inlineBlock', backgroundColor: 'pink', zIndex: '1', width: '18%', right: '8%', position: 'absolute', top: '4%'}} >
      <ul>
        {airportCityList}
      </ul>
      </div>

    )
  }

}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({getAirports, getAirportDestinations}, dispatch)
}

const mapStateToProps = (state) => (
  {airports: state.airports.airports, destinations: state.airports.destinations}
)





export default connect(mapStateToProps, mapDispatchToProps)(WhereWeFly)
