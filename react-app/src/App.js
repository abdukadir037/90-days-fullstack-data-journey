import { useState } from "react";
import Day1 from './components/day-1/HelloWorld'
import Day2 from './components/day-2/Counter'
import Day3 from './components/day-3/Greeting'
import Day4 from './components/day-4/ThemeButton'
import { ThemeDisplay } from "./components/day-4/ThemeDisplay";

function App() {
  const [currentDay, setCurrentDay] = useState(1)
  const [theme, setTheme] = useState('light')
  return (
    <div style={{
      // backgroundColor: theme === 'light' ? '#ecf0f1' : '#34495e',
      // color: theme === 'light' ? 'black' : 'white',
      // height: '100vh'
    }}>
      {/* {currentDay === 1 && <Day1 />}
      {currentDay === 2 && <Day2 />}
      {currentDay === 3 && <Day3 name=''/>}
      {currentDay === 4 && <Day4 theme={theme} setTheme={setTheme} />}

      <button onClick={() => setCurrentDay(1)}>Day 1</button>
      <button onClick={() => setCurrentDay(2)}>Day 2</button>
      <button onClick={() => setCurrentDay(3)}>Day 3</button>
      <button onClick={() => setCurrentDay(4)}>Day 4</button> */}
      <Day4 theme={theme} setTheme={setTheme}/>
      <ThemeDisplay theme={theme} />
      <h1 style={{color: '#2c3e50'}}>Hello</h1>
    </div>
  )
}

export default App;
