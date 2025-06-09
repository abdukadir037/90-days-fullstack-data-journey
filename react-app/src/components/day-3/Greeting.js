function Greeting(props) {
    const day = new Date().toLocaleDateString('en-US', {weekday: 'long'});
    return(
        <div>
            <h1> {props.name ? `Hello, ${props.name}!`: 'Hello, Guest!'}
            <br/>
            Today is {day}</h1>
        </div>
    )
}


export default Greeting