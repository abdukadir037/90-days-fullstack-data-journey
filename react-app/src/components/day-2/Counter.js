import { useState } from "react";


function Counter() {

  function decrementCount() {
    if (count > 0) {
      setCount(count - 1);
    }
    
  }

  const [count, setCount] = useState(0);
  
  return (
    <div className="countainer" style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundColor: '#f0f0f0',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{
        color: '#333',
        fontSize: '2rem',
        marginBottom: '20px'
      }}>Counter App</h1>
      <h2 style={{
        color: '#555',
        fontSize: '1.8rem',
        marginBottom: '20px'
      }}>{count}</h2>

      <div className="buttons" style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '10px'
      }}>
        <button onClick={() => setCount(count + 1)} style={{
        backgroundColor: '#3498db',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        padding: '8px 40px',
        fontSize: '1.2rem',
        cursor: 'pointer'
      }}>+</button>

      <button disabled={count === 0} onClick={decrementCount} style={{
        backgroundColor: '#e74c3c',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        padding: '8px 40px',
        fontSize: '1.2rem',
        cursor: 'pointer'
      }}>
        -
      </button>
      </div>
    </div>
  );
}

export default Counter;
