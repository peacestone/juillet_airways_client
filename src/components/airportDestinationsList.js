import React from 'react'


    const airportCityList = this.props.airports.map((airport) => <div><li key={airport.id}>{ airport.city} ({airport.iata_code})</li> {55 && 'this is awesomme'}</div>)

const airportsList = (props) => {
  const airports = this.props.airports.map(airport => (
    <li key={airport.id}>{ airport.city} ({airport.iata_code})</li>
    )
  )

  return (
    <ul>airportsList</ul>
  )

}
