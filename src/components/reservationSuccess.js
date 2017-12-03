import React from 'react'
import {Segment, Container, Header, Message } from 'semantic-ui-react'
import {connect} from 'react-redux'
import Loader from './loader'


const Success = ({reservation, isFetching, error}) => {
  console.log(reservation)
  if (error) {
    return <Message error size='huge' header={error} />
  }

return (
  <Container  >
    {isFetching === 'true' ? <Loader /> : null}
    <Header block size='huge'>Your Reservation Details</Header>
    <Container style={{width: '59%' , float: 'left'}}>
      <Segment >
        <Header>Flight Resevation<div style={{float: 'right', border: 'dashed 2px grey', paddingRight: '4%', paddingLeft: '4%', textAlign: 'center'}}>Flight Confirmation #<br /> {reservation.confirmation_number}</div> </Header>
          <strong>Flight Number</strong> JL{reservation.route.id}  <br /> <br />
          <span><strong>Departs:</strong> {reservation.route.departure_airport.city}  <br />
          {reservation.flight.departure_date}, {reservation.flight.departure_time} </span> <br /> <br />
          <span><strong>Arives:</strong> {reservation.route.arival_airport.city}<br /> {reservation.flight.departure_date}, {reservation.flight.arival_time} </span>
          <Header dividing>Passenger Info</Header>
          <strong>Name: </strong> <span> {reservation.passenger.first_name} {reservation.passenger.middle_name} {reservation.passenger.last_name} </span> <br />
          <strong>Seat:</strong> <span>16D</span>
      </Segment>
    </Container>

    <Container style={{width: '39%', float: 'right' }} >
      <Segment >
        <Header dividing size='large'>Payment Summary</Header>
        {reservation.payment_info && (<div><strong style={{marginRight: '4%'}}>Method of Payment:</strong><span> VI {reservation.payment_info.card_number}</span></div>)} <br />
        <strong style={{marginRight: '4%'}}>Total Price:</strong>
        <span>${reservation.route.base_price}</span>
      </Segment>
    </Container  >


  </Container>
)}


const mapStateToProps = state => {
  return {reservation: state.reservations.reservation, isFetching: state.reservations.isFetching, error: state.reservations.error}
}

export default connect(mapStateToProps)(Success)
