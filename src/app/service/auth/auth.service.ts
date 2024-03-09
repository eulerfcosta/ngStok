import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../../model/responseModel/user';
import { Observable, throwError} from 'rxjs';


@Injectable({providedIn: 'root'})
export class AuthService {
    constructor(private http: HttpClient) {
    }

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
        }),
    };

    handleError(error: any) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
        } else {
            // Get server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        window.alert(errorMessage);
        return throwError(() => {
            return errorMessage;
        });
    }

    login(email: string | null, password: string | null): Observable<any> {

        let user = new User();
        if (email != null) {
            user.email = email;
        }
        user.nome = 'usuario';

        //return <user>;

        console.log('AuthService.login => ' + user.nome);

        return this.http.get<User>('http://localhost/ciapiteste/public/api/teste');

    }
}
