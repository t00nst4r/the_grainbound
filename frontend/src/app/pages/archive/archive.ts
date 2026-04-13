import {Component, inject, input, signal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {toObservable, toSignal} from '@angular/core/rxjs-interop';
import {catchError, of, switchMap} from 'rxjs';
import {Freebie} from '@models/freebie';
import {Section} from '../../components/section/section';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'gb-archive',
  imports: [
    Section
  ],
  templateUrl: './archive.html',
  styleUrl: './archive.css',
})
export class Archive {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:3000/api/freebies/archive';

  key = input<string | undefined>();

  freebies = toSignal(
    toObservable(this.key).pipe(
      switchMap(accessKey => {
        if (!accessKey) return of([]);

        return this.http.get<Freebie[]>(`${this.apiUrl}?key=${accessKey}`).pipe(
          catchError(() => of([])) // Quietly return empty on 403 or 500
        );
      })
    ),
    { initialValue: [] as Freebie[] }
  );

  private sanitizer = inject(DomSanitizer);

  playingVideoId = signal<string | null>(null);

  getSafeUrl(id: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.youtube.com/embed/${id}?autoplay=1&modestbranding=1&rel=0`
    );
  }

  playInPlace(id: string) {
    this.playingVideoId.set(id);
  }
}
