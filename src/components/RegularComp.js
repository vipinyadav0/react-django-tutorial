import React, { Component } from 'react'

export class RegularComp extends Component {
  render() {
    return (
      <div>
      Im a regular component. {this.props.name}</div>
    )
  }
}

export default RegularComp