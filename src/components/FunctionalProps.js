import React from "react";

function Functionalprops(props) {
    console.log(props)
    return (<h3>This is functional component</h3>,
    <h1>Hello {props.name} from {props.place} ! Welcome to my tutorials.</h1>
    )
    
}

export default Functionalprops