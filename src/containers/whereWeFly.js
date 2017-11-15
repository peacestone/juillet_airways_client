import React from 'react'
import {Container} from 'semantic-ui-react'
import getAirports from '../actions/getAirports'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'




class WhereWeFly extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount = () => {
    this.props.getAirports()
  }

  render(){
    return(
      <div id='test' style={{display: 'inlineBlock', backgroundColor: 'pink', width: '18%', right: '8%', position: 'absolute', top: '4%', minHeight: '33%'}} >
      Queens, NY<br />
      Atlanta, GA, USA<br />
      Los Angeles, CA, USA<br />
      hi<br />


      </div>

    )
  }

}

const mapDispatchToProps = (dispatch) => {
  console.log(dispatch)
  return bindActionCreators({getAirports}, dispatch)
}





export default connect(null, mapDispatchToProps)(WhereWeFly)
