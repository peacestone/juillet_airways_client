import React from 'react'
import {Container} from 'semantic-ui-react'
import getAirports from '../actions/getAirports'
import getAirportDestinations from '../actions/getAirportDestinations'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'




class WhereWeFly extends React.Component {

  componentDidMount = () => {
    this.props.getAirports()
  }

   handleClick = (a, b) => {
    debugger
    this.props.getAirportDestinations()
  }

  render(){
    const airportCityList = this.props.airports.map((airport) => <div key={airport.id}><li  onClick={this.handleClick}>{ airport.city} ({airport.iata_code})</li>{null && '<Destinations'}</div>)
    return(
      <div id='whereWeFly' style={{display: 'inlineBlock', backgroundColor: 'pink', width: '18%', right: '8%', position: 'absolute', top: '4%'}} >
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
  {airports: state.airports.airports}
)





export default connect(mapStateToProps, mapDispatchToProps)(WhereWeFly)
