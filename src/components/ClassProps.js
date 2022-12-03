import React, { Component } from 'react'

class ClassProps extends Component {
  render() {
    console.log("This is : ",this)
    return (
      <div>
      <h1>Hello {this.props.name}. <br></br>{this.props.place} <br></br> This is props.
      </h1></div>
    )
  }
}

export default ClassProps