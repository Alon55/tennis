import { fireEvent, render, screen, act, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Tennis from './Tennis';

describe("Tennis Scoring Tests", () => {

    test("Server scores", async () => {
        render(<Tennis />)
        const startGameButton = screen.getByRole('button', { name: /Start Game/i });
        const serverButton = screen.getByRole('button', { name: /Server Scores/i });
        const message = screen.getByTestId("message");
        fireEvent.click(startGameButton)
        fireEvent.click(serverButton)


        expect(message.innerHTML).toBe("15 - Love");
    });


});
