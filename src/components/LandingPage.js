import styles from './styles/LandingPage.module.css'
import {
    Link
  } from 'react-router-dom';

const LandingPage = () => {
    return (
        <div className={styles.LandingPage}>
            <h1 className={styles.title}> Multiplier </h1>
            <Link to='/game'>
                <button type='button'>
                    Start Game Poggies
                </button>
            </Link>
        </div>
    )
}

export default LandingPage;