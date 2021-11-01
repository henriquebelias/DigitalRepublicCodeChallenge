import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('renderiza a pagina inicial', () => {
  beforeEach(() => {
    render(<App />);
  })

  it('os inputs renderizam', () => {
    const heigthLabel = screen.getAllByText(/informe a altura da parede/i);
    expect(heigthLabel.length).toBe(4);
  });

  it('os checkboxs renderizam', () => {
    const checkboxs = screen.getAllByRole('checkbox');
    expect(checkboxs.length).toBe(8);
  });

  it('o texto total renderiza', () => {
    const totalText = screen.getByText(/total/i);
    expect(totalText).toBeInTheDocument();
  });

  it('os botões renderizam', () => {
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBe(5);
  })
});

describe('testa os inputs', () => {
  beforeEach(() => {
    render(<App />);
  });

  it('o input de altura pode ser manipulado', () => {
    const heigthInputs = screen.getAllByLabelText(/informe a altura da parede/i);

    userEvent.type(heigthInputs[0], '5');

    expect(heigthInputs[0].value).toBe('05');
  });

  it('o input de largura pode ser manipulado', () => {
    const widthInputs = screen.getAllByLabelText(/informe a largura da parede/i);

    userEvent.type(widthInputs[0], '5');

    expect(widthInputs[0].value).toBe('05');
  });

  it('os checkbox podem ser clicados', () => {
    const checkboxs = screen.getAllByRole('checkbox');

    expect(checkboxs[0].value).toBe('false');

    userEvent.click(checkboxs[0]);

    expect(checkboxs[0].value).toBe('true');
  });

  it('o botão de enviar valores pode ser clicado', () => {
    const submitButton = screen.getAllByText(/enviar valores/i);

    userEvent.click(submitButton[0]);

    const errorMsg = screen.getByText(/área da parede inválida/i);

    expect(errorMsg).toBeInTheDocument();

  });
});

describe('se os inputs forem preenchidos corretamente, o valor total muda', () => {
  beforeEach(() => {
    render(<App />);
  });

  it('preenche os valores de uma parede e checa o total', () => {
    const heigthInputs = screen.getAllByLabelText(/informe a altura da parede/i);
    const widthInputs = screen.getAllByLabelText(/informe a largura da parede/i);
    const submitButton = screen.getAllByText(/enviar valores/i);
    const totalText = screen.getByText(/total/i);

    expect(totalText.innerHTML).toBe('Total: 0.00 litros');

    userEvent.type(heigthInputs[0], '3');
    userEvent.type(widthInputs[0], '5');
    userEvent.click(submitButton[0]);

    expect(totalText.innerHTML).toBe('Total: 3.00 litros');

  });

  it('se o valor preenchido não for válido o total não muda', () => {
    const heigthInputs = screen.getAllByLabelText(/informe a altura da parede/i);
    const widthInputs = screen.getAllByLabelText(/informe a largura da parede/i);
    const submitButton = screen.getAllByText(/enviar valores/i);
    const totalText = screen.getByText(/total/i);

    expect(totalText.innerHTML).toBe('Total: 0.00 litros');

    userEvent.type(heigthInputs[0], '5');
    userEvent.type(widthInputs[0], '5');
    userEvent.click(submitButton[0]);

    expect(totalText.innerHTML).toBe('Total: 0.00 litros');
  });
});

describe('calcula o total de latas necessárias', () => {
  it('se preenchido corretamente as opções aparecem', () => {
    render(<App />);

    const heigthInputs = screen.getAllByLabelText(/informe a altura da parede/i);
    const widthInputs = screen.getAllByLabelText(/informe a largura da parede/i);
    const submitButton = screen.getAllByText(/enviar valores/i);
    const calcButton = screen.getByText(/calcular quantidade de/i);

    userEvent.type(heigthInputs[0], '3');
    userEvent.type(widthInputs[0], '5');
    userEvent.click(submitButton[0]);
    userEvent.click(calcButton);

    const optionText = screen.getAllByText(/tamanho da lata/i);

    expect(optionText.length).toBe(4);

    expect(optionText[0]).toBeInTheDocument();
  });
});
