import { fireEvent, render, screen, act, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Tennis from './Tennis';

const addScoresMultipleTimes = (serverTimes) => {
    const startGameButton = screen.getByRole('button', { name: /Start Game/i });
    const serverButton = screen.getByRole('button', { name: /Server Scores/i });
    fireEvent.click(startGameButton)
    serverTimes && [...Array(serverTimes)].forEach(() => fireEvent.click(serverButton))
}

describe("Tennis Scoring Tests", () => {

    test("Server scores", async () => {
        render(<Tennis />)
        addScoresMultipleTimes(1, 0)
        const message = screen.getByTestId("message");

        expect(message.innerHTML).toBe("15 - Love");
    });

    test("Server scores 2 times", () => {
        render(<Tennis />)
        addScoresMultipleTimes(2, 0)
        const message = screen.getByTestId("message");

        expect(message.innerHTML).toBe("30 - Love");
    });

});
