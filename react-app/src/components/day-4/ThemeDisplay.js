export function ThemeDisplay({theme}) {
    return(
        <div style={{
            padding: '20px',
            backgroundColor: theme === 'Light' ? '#f0f0f0' : '#1a1a1a',
            color: theme === 'Light' ? '#333' : '#fff',
            textAlign: "center",
            minHeight: '100vh'
        }}>
            <h1>Current theme : {theme}</h1>
        </div>
    )
}