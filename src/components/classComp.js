import React from "react";

export class ClassComp extends React.Component{
    render(){
        return <div> 
        <p>This is a class component. And this is already rendered.</p> 
        <h1>
            Hii, Im inside class component.
        </h1>
        </div>
    }
}

// Nesting Componenets
export class ClassComp1  extends React.Component{
    render(){
        return <div>
            <h1>
                I'm from next class Component
            </h1>
        </div>
    }
}