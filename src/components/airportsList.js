import React from 'react'
import {connect} from 'react-redux'
import DestinationList from './destinationList'


const airportList = props => (
    <div> <li onClick={props.onClick} id={props.airport.id} style={{color: 'blue', textDecoration: 'underline'}}> { props.airport.city} ({props.airport.iata_code})</li>
    {props.origin_airport_id === props.airport.id &&
        <DestinationList />
       }

  </div>
)

const mapStateToProps = (state) => (
  {origin_airport_id: state.airports.destinations.origin_airport_id}
)

export default connect(mapStateToProps)(airportList)
