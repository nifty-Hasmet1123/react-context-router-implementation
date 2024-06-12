import { Outlet } from "react-router-dom"

function App() {
  return (
    <>
        <header>
            <h1>WELCOME</h1>
        </header>
        <Outlet />   {/* This will render the matched child route */}   
    </>
  )
}

export default App
