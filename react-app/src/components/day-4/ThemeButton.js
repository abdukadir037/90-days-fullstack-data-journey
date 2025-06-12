import {lightTheme, darkTheme} from '../../styles'

function ThemeButton ({theme, setTheme}) {
    return(
        <button onClick={
            () => setTheme(theme === 'Light' ? 'Dark' : 'Light')
        } style={{
            backgroundColor: theme === 'Light' ? lightTheme.button : darkTheme.button,
            color: darkTheme.text,
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
        }}>Toggle Theme {theme}</button>
    )
}


export default ThemeButton