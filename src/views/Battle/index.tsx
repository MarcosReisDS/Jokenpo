import { FC, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { resultBattles } from "../../shared/helpers/resultBattle";
import Contexts, { IContext } from "../../shared/contexts";
import Paper from "../../shared/components/Paper";
import Scissors from "../../shared/components/Scissors";
import Rock from "../../shared/components/Rock";
import PlayAgain from "../../shared/components/PlayAgain";
import Button from "../../shared/components/Button";
import "./style/index.css"

interface IBattle { }
const Battle: FC<IBattle> = () => {

    const navigate = useNavigate()
    const [youWinLoser, setYouWinLoser] = useState<"win" | "loss" | null | undefined>(undefined)
    const [randomChoiceElement, setRandomChoiceElement] = useState<JSX.Element | null>(null)
    const [resultComponent, setResultComponent] = useState<JSX.Element | null>(null)
    const { contexts, score, setScore } = useContext(Contexts) as IContext

    const renderMyChoice = () => {
        switch (contexts.jokenpo.myChoice) {
            case "paper":
                return <Paper />
            case "scissors":
                return <Scissors />
            case "rock":
                return <Rock />
            default:
                return ""
        }
    }

    const result = () => {
        if (!!contexts.jokenpo.myChoice) {
            const random = Math.floor(Math.random() * 3)
            switch (random) {
                case 0:
                    setRandomChoiceElement(<Paper />)
                    resultBattles(contexts.jokenpo.myChoice, "paper", setYouWinLoser)
                    break;
                case 1:
                    setRandomChoiceElement(<Scissors />)
                    resultBattles(contexts.jokenpo.myChoice, "scissors", setYouWinLoser)
                    break;
                case 2:
                    setRandomChoiceElement(<Rock />)
                    resultBattles(contexts.jokenpo.myChoice, "rock", setYouWinLoser)
                    break;
                default:
                    throw "error"
            }
        } else {
            navigate("/")
        }
    }

    const winLose = () => {
        switch (youWinLoser) {
            case "win":
                setScore(score + 1);
                setResultComponent(<PlayAgain>VITÓRIA</PlayAgain>)
                break
            case "loss":
                setScore(score - 1);
                setResultComponent(<PlayAgain>DERROTA</PlayAgain>)
                break
            case null:
                setResultComponent(<PlayAgain>EMPATE</PlayAgain>)
                break
        }
    }

    useEffect(() => {
        result()
    }, [])

    useEffect(() => {
        winLose()
    }, [youWinLoser !== undefined])

    return (
        <div>
            <div className="container-choice">
                <div className="separate-choice">
                    <div className="you-picked">
                        <p>Você escolheu</p>
                        {renderMyChoice()}
                    </div>
                    {resultComponent}
                    <div className="the-house-picked">
                        <p>A casa escolhida</p>
                        {!!randomChoiceElement && randomChoiceElement}
                    </div>
                </div>
            </div>
            <div className="button-rules-battle">
                <Button />
            </div>
        </div>
    )
}

export default Battle