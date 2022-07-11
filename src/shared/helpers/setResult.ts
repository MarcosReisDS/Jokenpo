import { Dispatch, SetStateAction } from "react"
import api from "../api"

export const setResult = (
    result: "win" | "loss" | null,
    setState: Dispatch<SetStateAction<"win" | "loss" | null | undefined>>
) => {

    if (!!result) {
        api.get({
            property: "scoreboard"
        }).then(res => {
            const score = parseInt(res.data[0].score)
            api.put({
                property: "scoreboard",
                data: {
                    score: result === "win" ? (score + 1).toString() : (score - 1).toString()
                }
            })
        })
    }

    setState(result)
}