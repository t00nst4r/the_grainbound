import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError, Observable, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FreebiesService {
  private http = inject(HttpClient);
  // Garbage link for now as requested
  private apiUrl = 'http://localhost:3000/api/';

  subscribeToFreebies(email: string, name: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}freebies/subscribe`, { email, name }).pipe(
      catchError(err => {
        // Log to an external service or format the error
        console.error('Ledger Error:', err);
        return throwError(() => new Error('The Archive is currently blocked.'));
      })
    );
  }

}
