import { Api } from 'src/environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Account } from '../_models/account';

@Injectable({providedIn:"root"})
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<Account>;
    public currentUser: Observable<Account>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<Account>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): Account {
        return this.currentUserSubject.value;
    }

    public get authorized() : boolean {
        if (this.currentUserSubject.value) return true;
        return false;
    }

    public get isAdmin() : boolean {
        if (this.currentUserValue) return this.currentUserValue.roles.some(v => v.title == "admin");
        return false;
       /*  return this.currentUserValue.roles.some(v => v.title == "admin"); */
    }

    login(data) {
        return this.http.post<any>(`${Api}/account/`, JSON.stringify(data), { headers : new HttpHeaders({'Content-Type': 'application/json'})})
            .pipe(map(user => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user.account));
                this.currentUserSubject.next(user.account);
                return user.account;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
}