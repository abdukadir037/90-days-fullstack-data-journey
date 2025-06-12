import { lightTheme, darkTheme } from "../../styles"

export function ThemeDisplay({theme}) {
    return(
        <div style={{
            padding: '20px',
            backgroundColor: theme === 'Light' ? lightTheme.bg : darkTheme.bg,
            color: theme === 'Light' ? lightTheme.text : darkTheme.text,
            textAlign: "center",
            minHeight: '100vh'
        }}>
            <h1>Current theme : {theme}</h1>
        </div>
    )
}