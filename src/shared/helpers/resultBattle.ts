import { Dispatch, SetStateAction } from "react"
import { setResult } from "./setResult"

export const resultBattles = (
    myChoice: "paper" | "scissors" | "rock",
    randomChoice: "paper" | "scissors" | "rock",
    setState: Dispatch<SetStateAction<"win" | "loss" | null | undefined>>
) => {

    if (myChoice === "paper") {
        if (randomChoice === "paper") {
            setResult(null, setState)
        }
        if (randomChoice === "rock") {
            setResult("win", setState)
        }
        if (randomChoice === "scissors") {
            setResult("loss", setState)
        }
    }

    if (myChoice === "scissors") {
        if (randomChoice === "paper") {
            setResult("win", setState)
        }
        if (randomChoice === "rock") {
            setResult("loss", setState)
        }
        if (randomChoice === "scissors") {
            setResult(null, setState)
        }
    }

    if (myChoice === "rock") {
        if (randomChoice === "paper") {
            setResult("loss", setState)
        }
        if (randomChoice === "rock") {
            setResult(null, setState)
        }
        if (randomChoice === "scissors") {
            setResult("win", setState)
        }
    }
}