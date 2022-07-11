import { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Contexts, { IGeneralContext } from './shared/contexts';
import api from './shared/api';
import Scoreboard from './shared/components/Scoreboard';
import Router from './shared/router';
import './App.css';

interface IApp { }
const App: FC<IApp> = () => {

  const navigate = useNavigate()
  const [score, setScore] = useState<number>(0)
  const [contexts, setContexts] = useState<IGeneralContext>({
    loader: {
      show: false
    },
    jokenpo: {
      myChoice: null,
    }
  })

  const startLoader = () => {
    setContexts({
      ...contexts,
      loader: {
        ...contexts.loader,
        show: true
      }
    })
  }

  const stopLoader = () => {
    setContexts({
      ...contexts,
      loader: {
        ...contexts.loader,
        show: false
      }
    })
  }

  const handleMyChoice = (myChoice: "paper" | "scissors" | "rock", goTo: string) => {
    setContexts({
      ...contexts,
      jokenpo: {
        myChoice: myChoice,
      }
    })
    navigate(goTo)
  }

  const getScore = () => {
    api.get({
      property: 'scoreboard'
    }).then(res => {
      const score = res.data[0].score
      setScore(score)
    })
  }

  useEffect(() => {
    getScore()
  }, [])

  return (
    <Contexts.Provider value={{ contexts, setContexts, startLoader, stopLoader, handleMyChoice, score, setScore }}>
      <Scoreboard score={score} />
      <Router />
    </Contexts.Provider>
  )
}

export default App;