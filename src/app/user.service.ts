import { Injectable } from '@angular/core';
import {UserPrincipal} from '../UserPrincipal';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AccessToken} from '../AccessToken';
import {UserPass} from '../UserPass.model';

let httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  accessToken: AccessToken;

  constructor(private http: HttpClient) {
  }

  authenticate(userpass: UserPass) {
    const body = JSON.stringify(userpass);
    this.http.post('/server/api/auth/signin', body, httpOptions).subscribe(data => {
        console.log(JSON.stringify(data.valueOf()));
        this.accessToken = data as AccessToken;
        localStorage.setItem('auth', 'true');
        httpOptions = {
          headers: new HttpHeaders({'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.accessToken.accessToken})
        };
      }
    );
  }

  logout() {
    this.removeUserFromStorage();
  }

  addUser(user) {
    const body = JSON.stringify(user);
    localStorage.setItem('', '');
    return this.http.post('/server/addNewUser', body, httpOptions);
  }

  getUser() {
    return this.http.get('/server/CurrentUser', httpOptions);
  }

  removeUserFromStorage() {
    localStorage.removeItem('auth');
    localStorage.removeItem('email');
    localStorage.removeItem('username');
    localStorage.removeItem('name');
    localStorage.removeItem('authorities');
    localStorage.removeItem('role');
    localStorage.removeItem('id');
    localStorage.removeItem('password');
    localStorage.removeItem('accountNonLocked');
    localStorage.removeItem('credentialsNonExpired');
    localStorage.removeItem('accountNonExpired');
    localStorage.removeItem('enabled');
    httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json', 'Authorization': 'nothing'})
    };
    console.log('user removed  from local storage .');
  }
  saveToStorage(user: UserPrincipal) {
    localStorage.setItem('email', user.email);
    localStorage.setItem('username', user.username);
    localStorage.setItem('name', user.name);
    localStorage.setItem('authorities', user.authorities);
    localStorage.setItem('role', user.role);
    localStorage.setItem('id', user.id);
    localStorage.setItem('password', user.password);
    localStorage.setItem('accountNonLocked', user.accountNonLocked);
    localStorage.setItem('credentialsNonExpired', user.credentialsNonExpired);
    localStorage.setItem('accountNonExpired', user.accountNonExpired);
    localStorage.setItem('enabled', user.enabled);

    console.log('user saved to local storage .');
  }

  getUserFromStorage() {
    const userPrincipal = new UserPrincipal();
    userPrincipal.email = localStorage.getItem('email');
    userPrincipal.username = localStorage.getItem('username');
    userPrincipal.name = localStorage.getItem('name');
    userPrincipal.authorities = localStorage.getItem('authorities');
    userPrincipal.role = localStorage.getItem('role');
    userPrincipal.id = localStorage.getItem('id');
    userPrincipal.password = localStorage.getItem('password');
    userPrincipal.accountNonLocked = localStorage.getItem('accountNonLocked');
    userPrincipal.credentialsNonExpired = localStorage.getItem('credentialsNonExpired');
    userPrincipal.accountNonExpired = localStorage.getItem('accountNonExpired');
    userPrincipal.enabled = localStorage.getItem('enabled');
    console.log('user retrieved from local storage .');
    return userPrincipal;
  }
}
