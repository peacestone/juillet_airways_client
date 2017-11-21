import React from 'react'
import {connect} from 'react-redux'

const destinationList = props => {
  const destinationList = props.destinations.map(airport => (
    <li key={airport.id} >{ airport.city} ({airport.iata_code})</li>
  ))
  return(
    <ul>{destinationList}</ul>
  )
}

const mapStateToProps = state => (
  {destinations: state.airports.destinations.airports}
)

export default connect(mapStateToProps)(destinationList)
