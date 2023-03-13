import React, { useState, useEffect } from 'react';
import './App.css';

const initialScore = {
    serverScores: { number: 0, text: 'Love' },
    opponentScores: { number: 0, text: 'Love' }
}

function Tennis() {
    const [score, setScore] = useState(initialScore)
    const [gameOver, setGameOver] = useState(false)

    const startTennisMatch = () => {
        setScore(initialScore);
        setGameOver(false);
    }

    const getScoreInText = (score) => {
        switch (score) {
            case 0:
                return "Love";
            case 1:
                return "15";
            case 2:
                return "30";
            case 3:
                return "40";
            case 4:
                return "Game";
            default:
                return "Love";
        }
    }

    const addScores = (e) => {
        if (score.serverScores.text === 'Game' || score.opponentScores.text === 'Game') { setGameOver("Game is already over. You can't score anymore.") } else {
            setScore(prev => {
                return {
                    ...prev,
                    [e.target.id]: {
                        number: prev[e.target.id].number + 1, text: getScoreInText(prev[e.target.id].number + 1)
                    },
                    ...(e.target.id === 'serverScores' && prev.serverScores.number + 1 === 4 && { opponentScores: { text: 'Server' } }),
                    ...(e.target.id === 'opponentScores' && prev.opponentScores.number + 1 === 4 && { serverScores: { text: 'Opponent' } })
                }
            });
        }
    }

    return (
        <div className="App-header">
            <h3>Tennis Kata TDD</h3>
            <img src="http://tennisalberta.com/wp-content/uploads/2019/04/tennis-cartoon.jpg" className="App-logo" alt="logo" />
            <button onClick={startTennisMatch}>Start Game</button>
            <div>
                <button id='serverScores' onClick={addScores}>Server Scores</button>
                <button id='opponentScores' onClick={addScores}>Opponent Scores</button>
            </div>
            <p data-testid="message">{`${score.serverScores.text} - ${score.opponentScores.text}`}</p>
            <span data-testid="gameOver">{gameOver}</span>
        </div>
    );
}

export default Tennis;
