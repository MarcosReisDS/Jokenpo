export interface IRequest {
    property: string;
}

export interface IRequestGet extends IRequest {
    query?: {
        id?: number;
        score?: string;
    }
}

export interface IRequestPut extends IRequest {
    data: {
        score: string;
    }
}