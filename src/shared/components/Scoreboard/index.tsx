import { FC } from "react";
import "./style/index.css"

interface IScoreboard {
    score: number;
}
const Scoreboard: FC<IScoreboard> = ({ score }) => {
    return (
        <div className="container-general-scoreboard">
            <div className="container-scoreboard">
                <div className="container-scoreboard-separates">
                    <div className="can-play">
                        <p>PEDRA</p>
                        <p className="paper">PAPEL</p>
                        <p>TESOURA</p>
                    </div>
                    <div className="box-scoreboard">
                        <p className="score">pontuação</p>
                        <span className="score-number">{score}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Scoreboard