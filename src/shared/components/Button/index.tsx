import { FC } from "react";
import { useNavigate } from "react-router-dom";
import "./style/index.css"

interface IButton { 
    onClick?: () => void;
}
const Button: FC<IButton> = ({onClick}) => {

    return (
        <div>
            <button className="button" onClick={onClick}>REGRAS</button>
        </div>
    )
}

export default Button