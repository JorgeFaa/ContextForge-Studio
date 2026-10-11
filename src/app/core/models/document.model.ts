export interface DocumentInfo {
    id: number;
    filename: string;
    created_at: string;
    chunk_count: number;
}


export interface UploadResult {
    document_id: number;
    chunks_indexed: number;
}