import { fireEvent, render, screen, act, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Tennis from './Tennis';

const addScoresMultipleTimes = (serverTimes, opponentTimes) => {
    const startGameButton = screen.getByRole('button', { name: /Start Game/i });
    const serverButton = screen.getByRole('button', { name: /Server Scores/i });
    const opponentScores = screen.getByRole('button', { name: /Opponent Scores/i });
    fireEvent.click(startGameButton)
    serverTimes && [...Array(serverTimes)].forEach(() => fireEvent.click(serverButton))
    opponentTimes && [...Array(opponentTimes)].forEach(() => fireEvent.click(opponentScores))
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

    test("Opponent scores 3 times", () => {
        render(<Tennis />)
        addScoresMultipleTimes(0, 3)
        const message = screen.getByTestId("message");

        expect(message.innerHTML).toBe("Love - 40");
    });

    test("Server scores 3 times and Opponent scores 2 times.", () => {
        render(<Tennis />);
        addScoresMultipleTimes(3, 2);
        const message = screen.getByTestId("message");

        expect(message.innerHTML).toBe("40 - 30");
    });

    test("Server scores 4 times", () => {
        render(<Tennis />);
        addScoresMultipleTimes(4, 0);
        const message = screen.getByTestId("message");

        expect(message.innerHTML).toBe("Game - Server");
    });

    test("Server scores 5 times", () => {
        render(<Tennis />);
        addScoresMultipleTimes(5, 0);
        const message = screen.getByTestId("gameOver");

        expect(message.innerHTML).toBe("Game is already over. You can't score anymore.");
    });

});
