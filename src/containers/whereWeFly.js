import React from 'react'
import {Container} from 'semantic-ui-react'


class WhereWeFly extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount = () => {
    
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

export default WhereWeFly
