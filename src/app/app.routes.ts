import { Routes } from '@angular/router';
import { QueryPage } from './features/query/query-page';
import { DocumentsPage } from './features/documents/documents-page';

export const routes: Routes = [
    { path: '', redirectTo: 'consultas', pathMatch: 'full' },
    { path: 'consultas', component: QueryPage },
    { path: 'documentos', component: DocumentsPage },
];
