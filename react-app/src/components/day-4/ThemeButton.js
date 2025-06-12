import {lightTheme, darkTheme} from '../../styles'
import { THEME, UseTheme } from '../Day-5/ThemeContext'

function ThemeButton () {
    const {theme, setTheme} = UseTheme()
    console.log(setTheme);
    
    return(
        <button onClick={
            () => setTheme(theme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT)
        } style={{
            backgroundColor: theme === THEME.LIGHT ? lightTheme.button : darkTheme.button,
            color: darkTheme.text,
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
        }}>Toggle Theme {theme}</button>
    )
}


export default ThemeButton