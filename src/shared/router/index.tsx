import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import Battle from "../../views/Battle";
import Choice from "../../views/Choice";
import Rules from "../components/Rules";

interface IRouter { }
const Router: FC<IRouter> = () => {
    return (
        <Routes>
            <Route path="/" element={<Choice />} />
            <Route path="/batalha" element={<Battle />} />
        </Routes>
    )
}

export default Router