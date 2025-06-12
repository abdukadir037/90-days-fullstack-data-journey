import {lightTheme, darkTheme} from '../../styles'
import { THEME, UseTheme } from '../Day-5/ThemeContext'
import PropTypes from 'prop-types'


function ThemeButton () {
    const {theme, setTheme} = UseTheme()
    console.log(setTheme);
    
    return(
        <button aria-label={`Switch to ${theme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT} mode`} onClick={
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

ThemeButton.propTypes = {
    theme: PropTypes.oneOf(['Light', 'Dark']),
    setTheme: PropTypes.func
}

export default ThemeButton