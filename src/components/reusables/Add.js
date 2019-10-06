import React from "react";
import {ButtonStyles} from "./AddStyles"

const Add=({handleClick,children,radius,color,width, disabled,name})=>{
   return <ButtonStyles color={color} width={width} name={name} radius={radius} onClick={handleClick} disabled={disabled}>{children}</ButtonStyles>
}

export default (Add);