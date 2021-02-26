import "../styles/global.css"

import { ChallengesContext } from "../contexts/ChallengesContexts"

function MyApp({ Component, pageProps }) {
  return (
    <ChallengesContext.Provider value={"Teste"}>
      <Component {...pageProps} />
    </ChallengesContext.Provider>
  )
}

export default MyApp