import axios from "axios";
import { IRequest, IRequestGet, IRequestPut } from "../types/request.interface";

class Api {
    private apiUrl = "" as string;

    private configUrl = (req: IRequest) => {
        switch (req.property) {
            case "scoreboard":
                this.apiUrl = "http://localhost:5000"
        }
    }

    get(req: IRequestGet) {
        this.configUrl(req)
        let query: string = "";
        const objQueryes: any = req.query;
        if (req.query) {
            query = new URLSearchParams(objQueryes).toString();
        }
        return axios.get(`${this.apiUrl}/${req.property}?${query}`)
    }

    put(req: IRequestPut) {
        this.configUrl(req)
        return axios.put(`${this.apiUrl}/${req.property}/1`, req.data)
    }
}

export default new Api();