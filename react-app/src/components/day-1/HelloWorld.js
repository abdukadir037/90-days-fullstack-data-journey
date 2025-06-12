import React from "react"
import { DataUse } from "../Day-5/dataContext"
function HelloWorld() {
    const name = DataUse()
    console.log(name);
    
    return(
        <div>
            <h1>Hello World!, {name}</h1>
        </div>
    )
}


export default HelloWorld