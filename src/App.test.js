import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import PasswordGenerator from "./components/passwordGenerator";

describe("PasswordGenerator Component", () => {
  test("renders all elements correctly", () => {
    render(<PasswordGenerator />);

    // Verifica se o input de comprimento está presente
    expect(screen.getByLabelText(/Comprimento da Senha/i)).toBeInTheDocument();

    // Verifica se os checkboxes estão presentes
    const checkboxLabels = [
      "Incluir Letras Maiúsculas",
      "Incluir Letras Minúsculas",
      "Incluir Números",
      "Incluir Símbolos",
    ];

    const [
      uppercaseCheckbox,
      lowercaseCheckbox,
      numbersCheckbox,
      symbolsCheckbox,
    ] = checkboxLabels.map((label) =>
      screen.getByLabelText(new RegExp(label, "i"))
    );

    expect(uppercaseCheckbox).toBeInTheDocument();
    expect(lowercaseCheckbox).toBeInTheDocument();
    expect(numbersCheckbox).toBeInTheDocument();
    expect(symbolsCheckbox).toBeInTheDocument();
    // Verifica se o botão de gerar senha está presente
    expect(screen.getByText(/Gerar Senha/i)).toBeInTheDocument();

    // Verifica se a área de saída está presente
    expect(screen.getByText(/Senha Gerada:/i)).toBeInTheDocument();

    // Verifica se a senha gerada está presente
    expect(screen.getByText(/Senha Gerada:/i)).toBeInTheDocument();
  });

  test("generates a password with the specified length", () => {
    render(<PasswordGenerator />);

    const checkboxLabels = [
      "Incluir Letras Maiúsculas",
      "Incluir Letras Minúsculas",
      "Incluir Números",
      "Incluir Símbolos",
    ];

    const [
      uppercaseCheckbox,
      lowercaseCheckbox,
      numbersCheckbox,
      symbolsCheckbox,
    ] = checkboxLabels.map((label) =>
      screen.getByLabelText(new RegExp(label, "i"))
    );
    fireEvent.click(uppercaseCheckbox);
    fireEvent.click(lowercaseCheckbox);
    fireEvent.click(numbersCheckbox);
    fireEvent.click(symbolsCheckbox);

    // Seleciona o input de comprimento
    const lengthInput = screen.getByLabelText(/Comprimento da Senha/i);
    // Define o comprimento desejado
    fireEvent.change(lengthInput, { target: { value: "10" } });
    // Dispara um evento de clique no botão de gerar senha
    fireEvent.click(screen.getByText(/Gerar Senha/i));
    // Verifica se a senha gerada tem o comprimento desejado

    const passwordElement = screen.getByTestId("password-display");

    expect(passwordElement.textContent.length).toBe(10);
  });

  test("generates a password with uppercase letters", () => {
    render(<PasswordGenerator />);
    // Seleciona o checkbox de letras maiúsculas
    const uppercaseCheckbox = screen.getByLabelText(
      /Incluir Letras Maiúsculas/i
    );
    // Dispara um evento de clique no checkbox
    fireEvent.click(uppercaseCheckbox);
    // Dispara um evento de clique no botão de gerar senha
    fireEvent.click(screen.getByText(/Gerar Senha/i));
    // Verifica se a senha gerada contém pelo menos uma letra maiúscula
    const passwordElement = screen.getByTestId("password-display");
    const password = passwordElement.textContent;
    const uppercaseLetters = password.match(/[A-Z]/g);

    expect(uppercaseLetters).toBeTruthy();
  });

  test("generates a password with lowercase letters", () => {
    render(<PasswordGenerator />);
    // Seleciona o checkbox de letras maiúsculas
    const lowercaseCheckbox = screen.getByLabelText(
      /Incluir Letras Minúsculas/i
    );
    // Dispara um evento de clique no checkbox
    fireEvent.click(lowercaseCheckbox);
    // Dispara um evento de clique no botão de gerar senha
    fireEvent.click(screen.getByText(/Gerar Senha/i));
    // Verifica se a senha gerada contém pelo menos uma letra maiúscula
    const passwordElement = screen.getByTestId("password-display");
    const password = passwordElement.textContent;
    const lowercaseLetters = password.match(/[a-z]/g);

    expect(lowercaseLetters).toBeTruthy();
  });
  test("generates a password with numbers", () => {
    render(<PasswordGenerator />);
    // Seleciona o checkbox de letras maiúsculas
    const numbersCheckbox = screen.getByLabelText(/Incluir Números/i);
    // Dispara um evento de clique no checkbox
    fireEvent.click(numbersCheckbox);
    // Dispara um evento de clique no botão de gerar senha
    fireEvent.click(screen.getByText(/Gerar Senha/i));
    // Verifica se a senha gerada contém pelo menos uma letra maiúscula
    const passwordElement = screen.getByTestId("password-display");
    const password = passwordElement.textContent;
    const numbers = password.match(/[0-9]/g);
    expect(numbers).toBeTruthy(); // Verifica se a senha gerada contém pelo menos um número
  });
  test("generates a password with symbols", () => {
    render(<PasswordGenerator />);
    // Seleciona o checkbox de letras maiúsculas
    const symbolsCheckbox = screen.getByLabelText(/Incluir Símbolos/i);
    // Dispara um evento de clique no checkbox
    fireEvent.click(symbolsCheckbox);
    // Dispara um evento de clique no botão de gerar senha
    fireEvent.click(screen.getByText(/Gerar Senha/i));
    // Verifica se a senha gerada contém pelo menos uma letra maiúscula
    const passwordElement = screen.getByTestId("password-display");
    const password = passwordElement.textContent;
    const symbols = password.match(/[^a-zA-Z0-9]/g);
    expect(symbols).toBeTruthy(); // Verifica se a senha gerada contém pelo menos um símbolo
  });
});
