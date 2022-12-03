import React, { Component } from 'react'
import PureComp from './PureComp'
import RegularComp from './RegularComp'
export class ParentComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        name : "Vipin Yadav"
      }
    }
    componentDidMount(){
        setInterval(() =>{
            this.setState({
                name: "Vipin Learning"
            });
        }, 4000)

    }  
    render() {
    return (
      <div>I'm the parent component.
      <RegularComp name={this.state.name}/>
      <PureComp name={this.state.name}/>

      </div>
    )
  }
}

export default ParentComp