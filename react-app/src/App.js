import { useState } from "react";
import Day1 from './components/day-1/HelloWorld'
import Day2 from './components/day-2/Counter'
import Day3 from './components/day-3/Greeting'

function App() {
  const [currentDay, setCurrentDay] = useState(1)
  return (
    <div>
      {currentDay === 1 && <Day1 />}
      {currentDay === 2 && <Day2 />}
      {currentDay === 3 && <Day3 name=''/>}

      <button onClick={() => setCurrentDay(1)}>Day 1</button>
      <button onClick={() => setCurrentDay(2)}>Day 2</button>
      <button onClick={() => setCurrentDay(3)}>Day 3</button>
    </div>
  )
}

export default App;
