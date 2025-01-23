import React from "react";
import { render, screen } from "@testing-library/react";
import PasswordGenerator from "./components/passwordGenerator";

describe("PasswordGenerator Component", () => {
  test("renders all elements correctly", () => {
    render(<PasswordGenerator />);

    // Verifica se o input de comprimento está presente
    expect(screen.getByLabelText(/Comprimento da Senha/i)).toBeInTheDocument();

    // Verifica se os checkboxes estão presentes
    expect(
      screen.getByLabelText(/Incluir Letras Maiúsculas/i)
    ).toBeInTheDocument();
    expect(
      screen.getByLabelText(/Incluir Letras Minúsculas/i)
    ).toBeInTheDocument();
    expect(screen.getByLabelText(/Incluir Números/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Incluir Símbolos/i)).toBeInTheDocument();

    // Verifica se o botão de gerar senha está presente
    expect(screen.getByText(/Gerar Senha/i)).toBeInTheDocument();

    // Verifica se a área de saída está presente
    expect(screen.getByText(/Senha Gerada:/i)).toBeInTheDocument();
  });
});
