function ThemeButton ({theme, setTheme}) {
    return(
        <button onClick={
            () => setTheme(theme === 'Light' ? 'Dark' : 'Light')
        } style={{
            backgroundColor: theme === 'Light' ? '#3498db' : '#2c3e50',
            color: "white",
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
        }}>Toggle Theme {theme}</button>
    )
}


export default ThemeButton