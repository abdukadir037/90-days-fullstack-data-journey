import { getCurrentDay } from "../../utils/date";

function Greeting(props) {
    const day = getCurrentDay()
    return(
        <div>
            <h1> {props.name ? `Hello, ${props.name}!`: 'Hello, Guest!'}
            <br/>
            Today is {day}</h1>
        </div>
    )
}


export default Greeting