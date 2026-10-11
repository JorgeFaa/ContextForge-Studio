import { Component, OnInit, inject, signal } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { ContextForgeApi } from './core/services/contextforge-api';

type BackendStatus = 'checking' | 'online' | 'offline';

@Component({
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App implements OnInit{
  private readonly api = inject(ContextForgeApi);

  protected readonly title = signal('ContextForge-Studio');
  protected readonly backendStatus = signal<BackendStatus> ('checking');

  ngOnInit(): void {
    this.api.health().subscribe({
      next: () => this.backendStatus.set('online'),
      error: () => this.backendStatus.set('offline')
    });
  }
}
