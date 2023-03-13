import React, { useState, useEffect } from 'react';
import './App.css';

const initialScore = {
    serverScores: { number: 0, text: 'Love' },
    opponentScores: { number: 0, text: 'Love' }
}

function Tennis() {
    const [score, setScore] = useState(initialScore)

    const startTennisMatch = () => {
        setScore(initialScore);
    }

    const getScoreInText = (score) => {
        switch (score) {
            case 0:
                return "Love";
            case 1:
                return "15";
            case 2:
                return "30";
        }
    }

    const addScores = (e) => {
        setScore(prev => {
            return {
                ...prev,
                [e.target.id]: {
                    number: prev[e.target.id].number + 1, text: getScoreInText(prev[e.target.id].number + 1)
                }
            }
        });
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
        </div>
    );
}

export default Tennis;
