import React from 'react'
import {Segment, Message, Divider,Header, Form, Container} from 'semantic-ui-react'
import {connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import addTravelersDetails from '../actions/addTravelersDetails'


class TripSummary extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
        formInput: {
        first_name: '',
        last_name: '',
        middle_name: '',
        frequent_flyer_number: '',
        gender: '',
        month: '',
        day: '',
        year: '',
        email: '',
        confirm_email: '',
        telephone: ''
      },
      errors: {
        valid: true,
        first_name: '',
        last_name: '',
        middle_name: '',
        frequent_flyer_number: '',
        gender: '',
        month: '',
        day: '',
        year: '',
        email: '',
        confirm_email: '',
        telephone: ''
            }
    }
  }

  validateForm = (formInput) => {
    let errors = {valid: true}

    for (let field in formInput) {
      if (formInput[field].trim() === '' ) {
        errors[field] = `Please enter a ${field}`
        errors.valid = false
      }
    }
    return errors
  }

  handleChange = (event, data) => {
    this.setState({formInput: Object.assign( {}, this.state.formInput , {[data.name]: data.value})})
  }

  handleSubmit = (event, data) => {
    event.preventDefault();
    let fieldsToCheckWhitespace = {...this.state.formInput}
    delete fieldsToCheckWhitespace.middle_name
    delete fieldsToCheckWhitespace.frequent_flyer_number

    this.setState({errors: this.validateForm(fieldsToCheckWhitespace)}, () => {
      if (this.state.errors.valid) {
        this.props.addTravelersDetails(this.state.formInput)
        this.props.history.push('/flights/payments')
        }
      }
    )
  }





  render() {
    return (
    <div id='tripSummary'>
    <Divider hidden  />
      <Segment   style={{width: '15%', position: 'fixed', right: '3.5%'}} raised>
        <Header>Flight Itinerary</Header>
        Departs:<strong> {this.props.request.departure_city}</strong> <br />
        <span> {this.props.request.departure_date}, {this.props.selectedFlight.departure_time} </span> <br /> <br />
        Arrives: <strong> {this.props.request.arival_city}</strong> <br />
        <span>{this.props.request.departure_date}, {this.props.selectedFlight.arival_time}</span><br /> <br />
        <span>Total:</span><strong>${this.props.selectedFlight.price}</strong>
      </Segment>

      <Header  textAlign='center'  as='h1'>Traveler Information</Header>
     <Container style={{width: '70%', float: 'left', paddingLeft: '10%'}}>

        <Form error={!this.state.errors.valid} onSubmit={this.handleSubmit} >

        { !this.state.errors.valid && <Message error header={`Please Fix the ${Object.values(this.state.errors).length - 1 } fields indicated`}  list={Object.values(this.state.errors).slice(1) } />}

        <Form.Group widths='equal' >
          <Form.Input error={!!this.state.errors.first_name} value={this.state.formInput.first_name}  name='first_name' label='First Name' onChange={this.handleChange}/>

          <Form.Input  name='last_name' error={!!this.state.errors.last_name} value={this.state.formInput.last_name} label='Last Name' onChange={this.handleChange}/>

          <Form.Input  name='middle_name' value={this.state.formInput.middle_name} label='Middle Name' onChange={this.handleChange} error={!!this.state.errors.middle_name} />
        </Form.Group>

        <Divider   />

        <Form.Group widths='4' >
          <Form.Input name='frequent_flyer_number'  value={this.state.formInput.frequent_flyer_number} label='Frequent Flyer Number' onChange={this.handleChange} error={!!this.state.errors.frequent_flyer_number} />
        </Form.Group>

        <Divider  section />

        <Form.Group inline >
          <label  htmlFor='gender'>Gender</label>
          <Form.Radio error={!!this.state.errors.gender} name='gender' id='gender' label='Male' checked={this.state.formInput.gender === 'male'} value='male' onChange={this.handleChange} />
          <Form.Radio id='gender' name='gender' label='Female' value='female'  checked={this.state.formInput.gender === 'female'} onChange={this.handleChange} error={!!this.state.errors.gender} />
          <Form.Radio  name='gender' label='Other' value="other" checked={this.state.formInput.gender === 'other'} onChange={this.handleChange} error={!!this.state.errors.gender} />
        </Form.Group>

        <Form.Group inline>
          <label>Date of birth</label>
          <Form.Input name='month' value={this.state.formInput.month}placeholder='MM' width='2' onChange={this.handleChange} error={!!this.state.errors.month} />

          <Form.Input name='day' placeholder='DD'value={this.state.formInput.day} width='2' onChange={this.handleChange}  error={!!this.state.errors.day}/>

          <Form.Input name='year' placeholder='YYYY' value={this.state.formInput.year} width='3' onChange={this.handleChange} error={!!this.state.errors.year}/>
        </Form.Group>


        <Form.Group inline>
          <label>Email</label>
          <Form.Input  name='email'  width='6' value={this.state.formInput.email} onChange={this.handleChange} error={!!this.state.errors.email} />
        </Form.Group>

        <Form.Group inline>
          <label>Confirm Email</label>
          <Form.Input  name='confirm_email' error={!!this.state.errors.confirm_email} value={this.state.formInput.confirmEmail}  width='6'  onChange={this.handleChange} />
        </Form.Group>

        <Form.Group inline>
          <label>Telphone Number</label>
          <Form.Input name='telephone'   width='6' value={this.state.formInput.telephone}  onChange={this.handleChange} error={!!this.state.errors.telephone}/>
        </Form.Group>

        <Form.Button color='orange'>Continue</Form.Button>
        </Form>
       </Container>
       </div>
      )
    }
  }

const mapStateToProps = state => (
  {request: state.flights.request, selectedFlight: state.flights.selectedFlight}
)

const mapDispatchToProps = dispatch => (
  bindActionCreators({addTravelersDetails}, dispatch)
)


export default connect(mapStateToProps, mapDispatchToProps)(TripSummary)
