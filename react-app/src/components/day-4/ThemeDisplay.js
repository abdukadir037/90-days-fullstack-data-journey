import { lightTheme, darkTheme } from "../../styles"
import { THEME, UseTheme } from "../Day-5/ThemeContext"

export function ThemeDisplay() {
    const {theme} = UseTheme()
    return(
        <div style={{
            padding: '20px',
            backgroundColor: theme === THEME.LIGHT ? lightTheme.bg : darkTheme.bg,
            color: theme === THEME.LIGHT ? lightTheme.text : darkTheme.text,
            textAlign: "center",
            minHeight: '100vh',
            transition: 'background-color 0.3s ease'
        }}>
            <h1>Current theme : {theme}</h1>
            {/* <h2>Abdukadir Gbw</h2> */}
        </div>
    )
}