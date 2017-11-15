import React from 'react'
import {Container} from 'semantic-ui-react'
import getAirports from '../actions/getAirports'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'




class WhereWeFly extends React.Component {

  componentDidMount = () => {
    this.props.getAirports()
  }

  render(){
    const airportCityList = this.props.airports.map((airport) => <li key={airport.id}>{ airport.city} ({airport.iata_code})</li>)
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
  console.log(dispatch)
  return bindActionCreators({getAirports}, dispatch)
}

const mapStateToProps = (state) => (
  {airports: state.airports.airports}
)





export default connect(mapStateToProps, mapDispatchToProps)(WhereWeFly)
