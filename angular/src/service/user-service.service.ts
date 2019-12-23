import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Auth } from 'src/entities/auth';
import { Observable, EMPTY, throwError } from 'rxjs';
import { SnackbarService } from './snackbar.service';
import { catchError, mapTo, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  url = 'http://192.168.1.108:1203/';
  constructor(private http: HttpClient, private snackbarService: SnackbarService) { }

  login(auth: Auth): Observable<string> {
    return this.http
      .post(this.url + 'login', auth, { responseType: 'text' })
      .pipe(
        tap(() => this.snackbarService.successMessage('Login successful')),
        catchError(error => this.httpErrorProcess(error)));
  }

  httpErrorProcess(error) {
    console.log(JSON.stringify(error));
    if (error instanceof HttpErrorResponse) {
      this.httpErrorToMesage(error);
      return EMPTY;
    } else {
      throwError(error);
    }
  }

  httpErrorToMesage(error: HttpErrorResponse): void {
    if (error.status === 0) {
      this.snackbarService.errorMessage('Server unavailable');
      return;
    }
    if (error.status >= 400 && error.status < 500) {
      const message = error.error.errorMessage
      ? error.error.errorMessage
      : JSON.parse(error.error).errorMessage;

      if (error.status === 401 && message === 'unknown token') {
            this.snackbarService.errorMessage('Session timeout');
            return;
      }
      this.snackbarService.errorMessage(message);
    }
    this.snackbarService.errorMessage(error.message);
  }
}
