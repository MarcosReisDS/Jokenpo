import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style/index.css"

interface IPlayAgain {
    children: string;
}
const PlayAgain: FC<IPlayAgain> = ({ children }) => {

    const navigate = useNavigate()

    return (
        <div className="play-again">
            <p>{children}</p>
            <button className="button-play-again" onClick={() => navigate("/")}>JOGAR DE NOVO</button>
        </div>
    )
}
export default PlayAgain