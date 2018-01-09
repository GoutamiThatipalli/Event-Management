import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
 
@Injectable()
export class AuthenticationService {
    private authUrl = 'http://localhost:8080/events/auth';
    
    constructor(private http: Http) {
    }
 
    login(username: string, password: string): Observable<boolean> {
    
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.authUrl, JSON.stringify({userName: username, password: password}),options)
        .map((response)=> {
            response["_body"]
                // login successful if there's a jwt token in the response
                let headers = response.headers;
               let token=response["_body"];
                 if (response["_body"]!="") {  
                //     // store username and jwt token in local storage to keep user logged in between page refreshes
                     localStorage.setItem('currentUser', JSON.stringify({ userName: username, token: token }));
                //     // return true to indicate successful login
                     return true;
                 } else {
                //     // return false to indicate failed login
                     return false;
                 }
            }).catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }
 
    getToken(): String {
      var currentUser = JSON.parse(localStorage.getItem('currentUser'));
      var token = currentUser && currentUser.token;
      return token ? token : "";
    }
    isLoggedIn(): boolean {
      var token: String = this.getToken();
      return token ? true : false;;
    }
 
    logout(): void {
        // clear token remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}