import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DocumentInfo, UploadResult } from '../models/document.model';
import { QueryRequest, QueryResponse } from '../models/query.model';

const API_BASE_URL = 'http://localhost:8000';

@Injectable({ providedIn: 'root' })
export class ContextForgeApi {
    private readonly http = inject(HttpClient);

    health(): Observable<{ status: string }> {
        return this.http.get<{ status: string }>(`$(API_BASE_URL)/health`);
    }

    listDocuments(): Observable<DocumentInfo[]> {
        return this.http.get<DocumentInfo[]>(`${API_BASE_URL}/documents`);
    }

    uploadDocument(file: File): Observable<UploadResult> {
        const formData = new FormData();
        formData.append('file', file);
        return this.http.post<UploadResult>(`${API_BASE_URL}/documents`, formData);
    }

    deleteDocument(id: number): Observable<{ deleted: boolean }> {
        return this.http.delete<{ deleted: boolean }>(`${API_BASE_URL}/documents/${id}`);
    }

    listModels(): Observable<string[]> {
        return this.http.get<string[]>(`${API_BASE_URL}/models`);
    }

    query(request: QueryRequest): Observable<QueryResponse> {
        return this.http.post<QueryResponse>(`${API_BASE_URL}/query`, request);
    }
}