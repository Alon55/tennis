import React, { useState, useEffect } from 'react';
import './App.css';

function Tennis() {
    const [score, setScore] = useState({
        serverScores: { number: 0, text: 'Love' },
        opponentScores: { number: 0, text: 'Love' }
    })

    const startTennisMatch = () => {
        setScore({
            serverScores: { number: 0, text: 'Love' },
            opponentScores: { number: 0, text: 'Love' }
        });
    }

    const addScores = (e) => {
        setScore({
            serverScores: { number: 0, text: '15' },
            opponentScores: { number: 0, text: 'Love' }
        })
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
