import React, { PureComponent } from 'react'

class PureComp extends PureComponent {
  render() {
    console.log("Pu")
    return (
      <div>
        <h1>
            Im pure component. {this.props.name}
        </h1>
      </div>
    )
  }
}

export default PureComp