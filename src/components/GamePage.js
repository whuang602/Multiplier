import styles from "./styles/GamePage.module.css"
import {
    useState
} from 'react';

const maxFactor = 12; // this will later be modified by difficult selector
let random1 = Math.floor(maxFactor * Math.random() ) + 1;
let random2 = Math.floor(maxFactor * Math.random() ) + 1;
let score = 0;

const GamePage = () => {
    const [showAnswer, setShowAnswer] = useState(false);
    const [userAnswer, setUserAnswer] = useState(0);

    const checkAnswer = () => {
        score += (userAnswer == random1*random2 && showAnswer == false) ? 1 : 0;
        setShowAnswer(true);
    }

    const changeInput = (event) => {
        setUserAnswer(event.target.value);
    }

    const reset = () => {
        setShowAnswer(false);
        random1 = Math.floor(maxFactor * Math.random() ) + 1;
        random2 = Math.floor(maxFactor * Math.random() ) + 1;
    }

    return (
        <div className={styles.GamePage}>
            <h1 className={styles.score}>Score: {score}</h1>
            <h1>{random1}</h1>
            <h1>{random2}</h1>
            <input type='text' value={userAnswer} onChange={changeInput} placeholder='Answer'/>
            <button onClick={checkAnswer}> Submit </button>
            {showAnswer && <h1>Answer: {random1*random2}</h1>}
            {showAnswer && <button onClick={reset}> Next </button>}
        </div>
    )
}

export default GamePage;