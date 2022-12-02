import { render } from "@testing-library/react";
import React from "react";

const UpdatedComp = OriginalComp =>{
    class NewComp extends React.Component{
        render(){
            return <OriginalComp name="The User" />
        }
    };
    return NewComp
} 
export default UpdatedComp;