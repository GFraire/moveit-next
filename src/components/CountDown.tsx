import { useContext } from "react"
import { CountDownContext } from "../contexts/CountDownContext"

import styles from "../styles/components/CountDown.module.css"

export function CountDown() {
  const { minutes, seconds, hasFinished, isActive, startCountDown, resetCountDown} = useContext(CountDownContext)

  const [minutesLeft, minutesRight] = String(minutes).padStart(2, "0").split("")
  const [secondsLeft, secondsRight] = String(seconds).padStart(2, "0").split("")

  return (
    <div>
      <div className={styles.countDownContainer}>
        <div>
          <span>{minutesLeft}</span>
          <span>{minutesRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondsLeft}</span>
          <span>{secondsRight}</span>
        </div>
      </div>

      { hasFinished ? (
        <button disabled className={styles.countDownButton}>
        Ciclo encerrado
        <img draggable="false" src="icons/check.svg" alt="Check"/>
        </button>
      ) : (
        <>
          { isActive ? (
            <button type="button" onClick={resetCountDown} className={`${styles.countDownButton} ${styles.countDownButtonActive}`}>
              Encerrar ciclo
            </button>
          ) : (
            <button type="button" onClick={startCountDown} className={styles.countDownButton}>
              Iniciar ciclo
            </button>
          ) }
        </>
      )}
    </div>
  )
}