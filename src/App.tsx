import { useState } from 'preact/hooks'
import preactLogo from '/preact.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://preactjs.com" target="_blank">
          <img src={preactLogo} className="logo react" alt="Preact logo" />
        </a>
      </div>
      <h1>Vite + Preact</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and Preact logos to learn more
      </p>
    </>
  )
}

export default App
