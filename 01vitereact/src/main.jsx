import React from "react"
import reactDom from "react-dom/client"
import App from "./App"

function myApp() {
    return (
        <div>
            <h1>Hello World</h1>
        </div>
    )
}
reactDom.createRoot(document.getElementById('root')).render(
    //<App/>
    myApp()
)
