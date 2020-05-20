import React from 'react'

const Result = ({score, playAgain}) => (
    <div className="score-board">
    <div className="score">you scored {score} / 5 correct Answer!</div>
    <button className="playBtn" onClick={playAgain}>
    Play-Again!
    </button>
    </div>
);

export default Result;

