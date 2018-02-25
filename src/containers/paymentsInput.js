import React from 'react'
import {Table, Form, Header, Segment, Container, Divider, Message} from 'semantic-ui-react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import createReservation from '../actions/createReservation'

class paymentsInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      card_number: '',
      month: '',
      year: '',
      security_code: '',
      name_on_card: '',
      billing_postal_code: '',
      errors: {valid: true}
    }
  }

  validateForm = (formInput) => {
    let errors = {valid: true}
    for (let field in formInput ) {
      if ( formInput[field] === '') {
        errors[field] = `Please enter a ${field}`
        errors.valid = false
      }
    }
    return errors
  }


  handleSubmit = (event, data) => {
    event.preventDefault()
    const isValid = this.validateForm(this.state)
    if (isValid.valid) {
      this.props.createReservation(Object.assign({},  this.props.traveler_info, {flight_id: this.props.selectedFlight.id}, {payment_info: Object.assign({}, this.state)})
    )

      this.props.history.push('/reservations/confirmed')
    }
    else {
      this.setState({errors: isValid})
    }
  }

  handleChange = (event, data) => {
    this.setState({[data.name]: data.value})
  }


  render() {
    return (
      <div id='paymentsInput'>
    <Container style={{marginTop: '4%', marginBottom: '4%'}}>
    <Header size='large'>Your Flight</Header>
        <Segment>
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Date</Table.HeaderCell>
                <Table.HeaderCell>Departs/Arrives</Table.HeaderCell>
                <Table.HeaderCell>Route</Table.HeaderCell>
                <Table.HeaderCell>Flight Number</Table.HeaderCell>
                <Table.HeaderCell>Traveler</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row>
                <Table.Cell>{this.props.request.departure_date}</Table.Cell>
                <Table.Cell>{this.props.selectedFlight.departure_time} to {' '}{this.props.selectedFlight.arival_time}</Table.Cell>
                <Table.Cell>{this.props.selectedFlight.route.departure_airport.iata_code} - {this.props.selectedFlight.route.arival_airport.iata_code} </Table.Cell>
                <Table.Cell>{this.props.selectedFlight.id}</Table.Cell>
                <Table.Cell>{this.props.traveler_info.first_name} {this.props.traveler_info.middle_name} {this.props.traveler_info.last_name} </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Segment>

        <Divider section  />

        <Header  size='large'>Payment Details</Header>
        <Header >Total: ${this.props.selectedFlight.route.base_price}</Header>

        <Divider section hidden />

        <Header block attached='top' >Enter Payment Information</Header>
        <Form error={!this.state.errors.valid} onSubmit={this.handleSubmit}>

        <Message error header={`Please Fix the ${Object.values(this.state.errors).length - 1 } fields indicated`}  list={Object.values(this.state.errors).slice(1) } />

        <Segment attached >
          <Form.Group inline>
            <Form.Input error={!!this.state.errors.card_number} name='card_number' value={this.state.card_number} onChange={this.handleChange} label='Card Number' width='5' placeholder='Enter Credit Card Number'  />
          </Form.Group>

          <Form.Group inline>
            <label>Expiration Date</label>

            <Form.Input name='month' error={!!this.state.errors.month} value={this.state.month} onChange={this.handleChange} placeholder='Month' width='2' />

            <Form.Input name='year' error={!!this.state.errors.year} value={this.state.year} onChange={this.handleChange} placeholder='Year' width='3' />
            <label>Security Code</label>

            <Form.Input name='security_code' value={this.state.security_code} error={!!this.state.errors.security_code} onChange={this.handleChange} placeholder='Enter Code' width='3' />
          </Form.Group>

          <Form.Group inline>
            <Form.Input  name='name_on_card' error={!!this.state.errors.name_on_card} value={this.state.name_on_card} onChange={this.handleChange} label='Name On Card' placeholder='Enter Name' />
            <Form.Input  name='billing_postal_code' error={!!this.state.errors.billing_postal_code} value={this.state.billing_postal_code} onChange={this.handleChange} label='Billing Postal Code' placeholder='Enter Postal Code' />
          </Form.Group>
        </Segment> <br />
        <Form.Button size='large' color='orange'>Complete Purchase</Form.Button>
      </Form>


      </Container>


      </div>
    )
  }


}

const mapStateToProps = state => (
   {request: state.flights.request, selectedFlight: state.flights.selectedFlight, traveler_info: state.reservations.traveler_info}
 )

 const mapDispatchToProps = dispatch => (
   bindActionCreators({createReservation: createReservation}, dispatch)
 )




export default connect(mapStateToProps, mapDispatchToProps)(paymentsInput)
