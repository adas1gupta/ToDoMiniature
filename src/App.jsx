import React from "react";
import ReactDOM from "react-dom/client";
import './App.css';


const App = () => {
    return (
        <ToDo title="Brush Teeth" description="Get up in the morning, take the toothbrush and toothpaste, and brush teeth for two minutes" />
    )
}

const container = document.getElementById("root")
const root = ReactDOM.createRoot(container)
root.render(<App />)
