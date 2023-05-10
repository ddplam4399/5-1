import React from "react"
import Route from "./route"
import { userContext } from "./context"

function App() {
 return (
    <userContext.Provider value={'Plamy kub'}>
    <Route />
    </userContext.Provider>
 )
}

export default App;