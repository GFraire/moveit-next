import { useState, useEffect } from "react"
import styles from "../styles/components/CountDown.module.css"

let countDownTimeout: NodeJS.Timeout

export function CountDown() {
  const [time, setTime] = useState(0.05 * 60)
  const [isActive, setIsActive] = useState(false)
  const [hasFinished, setHasFinished] = useState(false)

  const minutes = Math.floor(time / 60)
  const seconds = time % 60

  const [minutesLeft, minutesRight] = String(minutes).padStart(2, "0").split("")
  const [secondsLeft, secondsRight] = String(seconds).padStart(2, "0").split("")

  function starCountDown() {
    setIsActive(true)
  }

  function resetCountDown() {
    clearTimeout(countDownTimeout)
    setIsActive(false)
    setTime(25 * 60)
  }

  useEffect(()=> {
   if(isActive && time > 0) {
     countDownTimeout = setTimeout(() => {
      setTime(time - 1)
     }, 1000)
   } else if(isActive && time === 0) {
     setHasFinished(true)
     setIsActive(false)
   }
  }, [isActive, time])


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
        <img src="icons/check.svg" alt="Check"/>
        </button>
      ) : (
        <>
          { isActive ? (
            <button type="button" onClick={resetCountDown} className={`${styles.countDownButton} ${styles.countDownButtonActive}`}>
              Encerrar ciclo
            </button>
          ) : (
            <button type="button" onClick={starCountDown} className={styles.countDownButton}>
              Iniciar ciclo
            </button>
          ) }
        </>
      )}
    </div>
  )
}