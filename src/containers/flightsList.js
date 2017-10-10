import React from 'react'
import Flight from '../components/flight'
import {connect } from 'react-redux'
import { Link} from 'react-router-dom'
import { Grid , Container, Message, Dropdown, Header} from 'semantic-ui-react'
import fetchFlights from '../actions/fetchFlights'
import {bindActionCreators} from 'redux'
import selectFlight from '../actions/selectFlight'
import Loader from '../components/loader'

const InlineStyle = () => (
<style>{`
  .price:hover {
    background-color: blue;
    color: #fff;
  }
  .price:hover .hiddenText {
    visibility: visible;
    font-weight: bold
  }
  .hiddenText {
    visibility: hidden
  }
  `}</style>
)

class flightsList extends React.Component {

  constructor() {
    super()
    this.state = {
      filterValue: 'departure_datetime'
    }
  }

  handlePriceClick = (event, data) => {
    this.props.history.push('/flights/trip-summary')
  }
  handleFilterChange = (event, data) => {
    this.setState({filterValue: data.value})
    const requestWithSort = Object.assign({}, this.props.flights.request, {sort_by: data.value} )

    this.props.fetchFlights(requestWithSort)
  }

render() {
 const sortOptions = [ {text: 'Departure Time', value: 'departure_datetime'}, {  text: 'Arival Time', value: 'arival_datetime'}, {text: 'Price', value: 'price'}]

 if (this.props.isLoading === 'true') {
    return <Loader />
  }

 if (this.props.flights.error) {
   return <Message warning  size='huge' header={this.props.flights.error} />
  }


  const flights = this.props.flights.flights.map((flight, index) => <Flight key={index}   flight={flight} /> )

  return (
    <div id='flights-list'>
    <InlineStyle />


      <Container   style={{fontSize: '18px', lineHeight: '200%'}}>
      <Container textAlign='right' style={{ width: '70%'}}>
      <Link to='/'>Search Again</Link>
      </Container >

        <Grid  celled style={{width: '70%', margin: 'auto', marginBottom: '4%'}} >

          <Grid.Row >


          <Header color='violet'  >  {this.props.flights.request.departure_city} > {this.props.flights.request.arival_city}    <br /> {this.props.flights.request.departure_date}</Header >

            <span style={{marginRight: '70%',  color: '#6f51b0'}}><strong>Sorted By</strong> {' '}

               <Dropdown inline onChange={this.handleFilterChange} options={sortOptions} value={this.state.filterValue} />
            </span>
          </Grid.Row>

          {flights}
        </Grid>
      </Container>


    </div> )
  }
}



const mapStateToProps = (state) => {
  return {flights: state.flights, selectedFlight: state.selectedFlight, isLoading: state.flights.isLoading}
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchFlights, selectFlight }, dispatch)
}







export default connect(mapStateToProps, mapDispatchToProps)(flightsList)
