import styles from "./styles/GamePage.module.css"
import {
    useState
} from 'react';

const maxFactor = 24; // this will later be modified by difficult selector
let random1 = Math.floor(maxFactor * Math.random() ) + 1;
let random2 = Math.floor(maxFactor * Math.random() ) + 1;
let score = 0;

const GamePage = () => {
    const [showAnswer, setShowAnswer] = useState(false);
    const [userAnswer, setUserAnswer] = useState();

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
        setUserAnswer('');
    }

    return (
        <div className={styles.GamePage}>
            <h1 className={styles.score}>Score: {score}</h1>
            <div className={styles.prompt}>
                <h1>{random1}</h1>
                <h1>{random2}</h1>
            </div>
            <div className={styles.solution}>
                <input type='text' placeholder="Answer" value={userAnswer} onChange={changeInput} className={styles.inputBox}/>
                <button onClick={checkAnswer} className={styles.solutionSubmitButton}> Submit </button>
            </div>
            <div className={styles.postSolution}>
                {showAnswer && <h1 className={styles.showAnswer}>Answer: {random1*random2}</h1>}
                {showAnswer && <button onClick={reset} className={styles.nextButton}> Next </button>}
            </div>
        </div>
    )
}

export default GamePage;