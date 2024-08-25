import styles from './styles/LandingPage.module.css'
import {
    Link
  } from 'react-router-dom';

const LandingPage = () => {
    return (
        <div className={styles.LandingPage}>
            <h1 className={styles.title}> Multiplier </h1>
            <Link to='/game' className={styles.GameLinkCentered}>
                <button className={styles.StartButton}>
                    Start Game
                </button>
            </Link>
        </div>
    )
}

export default LandingPage;