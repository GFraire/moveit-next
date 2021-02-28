import { useContext } from "react"
import { ChallengesContext } from "../contexts/ChallengesContexts"

import styles from "../styles/components/Profile.module.css"

export function Profile() {
  const { level } = useContext(ChallengesContext)
  return (
    <div className={styles.profileContainer}>
      <img draggable="false" src="https://github.com/GFraire.png" alt="Foto Github"/>
      <div>
        <strong>Gabriel Freire</strong>
        <p>
          <img draggable="false" src="icons/level.svg" alt="Level"/>
          Level {level}
          </p>
      </div>
    </div>
  )
}