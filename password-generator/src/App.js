import React from "react";
import PasswordGenerator from "./components/passwordGenerator";
import "./App.css";

function App() {
  return (
    <div className="background">
      <div className="app">
        <h1>Gerador de Senhas</h1>
        <PasswordGenerator />
      </div>
    </div>
  );
}

export default App;
