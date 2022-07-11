import { FC } from "react";
import "./style/index.css"

interface ITriangle { }
const Triangle: FC<ITriangle> = () => {
    return (
        <div className="Triangle">
            <svg xmlns="http://www.w3.org/2000/svg" width="313" height="278">
                <path stroke="#000" stroke-width="15" fill="none" opacity=".2" d="M156.5 262 300 8H13z" />
            </svg>
        </div>
    )
}

export default Triangle