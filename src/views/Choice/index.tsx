import { FC, useContext, useEffect, useState } from "react";
import Contexts, { IContext } from "../../shared/contexts";
import Paper from "../../shared/components/Paper";
import Scissors from "../../shared/components/Scissors";
import Rock from "../../shared/components/Rock";
import Triangle from "../../shared/components/Triangle";
import Button from "../../shared/components/Button";
import "./style/index.css"
import Rules from "../../shared/components/Rules";

interface IMainPage { }
const MainPage: FC<IMainPage> = () => {

    const { contexts, handleMyChoice } = useContext(Contexts) as IContext
    const [showRules, setShowRules] = useState<boolean>(false)

    

    return (
        <div>
            <div className="container">
                <Triangle />
                <div className="paper-scissors-rock">
                    <div className="paper-scissors">
                        <Paper onClick={() => handleMyChoice("paper", "/batalha")} />
                        <Scissors onClick={() => handleMyChoice("scissors", "/batalha")} />
                    </div>
                    <Rock onClick={() => handleMyChoice("rock", "/batalha")} />
                </div>
            </div>
       {showRules && <Rules handleClose={() => setShowRules(false)}/>}
            <div className="button-rules-choice">
                <Button onClick={() => setShowRules(true)} />
            </div>
        </div>
    )
}

export default MainPage