export interface QueryRequest {
    question: string;
    top_k: number;
    model?: string | null;
}


export interface QueryResponse {
    answer: string;
    sources: string[];
}