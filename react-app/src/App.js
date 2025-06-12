import ThemeButton from './components/day-4/ThemeButton'
import { ThemeDisplay } from "./components/day-4/ThemeDisplay";
import {ThemeProvider} from "./components/Day-5/ThemeContext"

function App() {
  return (
    <div>

      <ThemeProvider>
        <ThemeButton />
        <ThemeDisplay/>
      </ThemeProvider>
    </div>
  )
}

export default App;
