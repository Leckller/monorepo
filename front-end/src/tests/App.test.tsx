import { render, screen } from '@testing-library/react';
import App from '../App';
import { vi } from 'vitest';
// import { userEvent } from '@testing-library/user-event';

describe('Testes Home', () => {
  it('Testa se a logo aparece na tela', () => {
    render(<App />);
    expect(screen.getByText(/tarefas do ruy/i)).toBeInTheDocument();
  });

  it('Testa se uma tarefa é renderizada', async () => {
    const MOCK_RESPONSE = {
      ok: true,
      status: 200,
      json: async () => [{
        task_name: 'testes',
        id: 3,
        stated: '2024-02-15T03:00:00.000Z'
      }]
    } as Response;
    vi.spyOn(global, 'fetch').mockResolvedValue(MOCK_RESPONSE);

    render(<App />);
    const renderTask = await screen.findByText('testes');
    expect(renderTask).toBeInTheDocument();
  });
})