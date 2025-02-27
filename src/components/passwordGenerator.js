import React, { useState } from "react";
import "../styles/passwordGenerator.css";

function PasswordGenerator() {
  const [length, setLength] = useState(12);
  const [includeUppercase, setIncludeUppercase] = useState(false);
  const [includeLowercase, setIncludeLowercase] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [password, setPassword] = useState("");

  const generatePassword = () => {
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+[]{}|;:,.<>?";

    let characterPool = "";

    if (includeUppercase) characterPool += uppercaseChars;
    if (includeLowercase) characterPool += lowercaseChars;
    if (includeNumbers) characterPool += numberChars;
    if (includeSymbols) characterPool += symbolChars;

    if (characterPool === "") {
      setPassword("Selecione ao menos um critério!");
      return;
    }

    let generatedPassword = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characterPool.length);
      generatedPassword += characterPool[randomIndex];
    }

    setPassword(generatedPassword);
  };

  return (
    <div className="password-generator">
      <div className="controls">
        <label>
          Comprimento da Senha:
          <input
            type="number"
            min="4"
            max="32"
            value={length}
            onChange={(e) => setLength(e.target.value)}
          />
        </label>
        <label className="checkbox">
          <input
            type="checkbox"
            checked={includeUppercase}
            onChange={(e) => setIncludeUppercase(e.target.checked)}
          />
          Incluir Letras Maiúsculas
        </label>
        <label className="checkbox">
          <input
            type="checkbox"
            checked={includeLowercase}
            onChange={(e) => setIncludeLowercase(e.target.checked)}
          />
          Incluir Letras Minúsculas
        </label>
        <label className="checkbox">
          <input
            type="checkbox"
            checked={includeNumbers}
            onChange={(e) => setIncludeNumbers(e.target.checked)}
          />
          Incluir Números
        </label>
        <label className="checkbox">
          <input
            type="checkbox"
            checked={includeSymbols}
            onChange={(e) => setIncludeSymbols(e.target.checked)}
          />
          Incluir Símbolos
        </label>
      </div>
      <button onClick={generatePassword}>Gerar Senha</button>
      <div className="output">
        <h3>Senha Gerada:</h3>
        <p className="passwordArea" data-testid="password-display">
          {password}
        </p>
        {/* <button
          className="copy-button"
          onClick={() => {
            navigator.clipboard.writeText(password);
            // Opcional: Você pode adicionar um feedback visual aqui
            alert("Senha copiada!");
          }}
        >
          Copiar
        </button> */}
      </div>
    </div>
  );
}

export default PasswordGenerator;
