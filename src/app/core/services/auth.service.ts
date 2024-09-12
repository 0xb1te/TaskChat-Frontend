import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private tokenUidSessionKeyName = 'uid-session-taskchat';
  private usernameSessionKeyName = 'username-session-taskchat';

  get sessionUid() {
    return sessionStorage.getItem(this.tokenUidSessionKeyName) || '';
  }

  set sessionUid(tokenUid: string) {
    if (this.sessionUid) {
      return;
    }

    sessionStorage.setItem(this.tokenUidSessionKeyName, tokenUid);
  }

  get fullUsername() {
    return `${this.username}-${this.sessionUid.substring(0, 8)}` || '';
  }

  get username() {
    return sessionStorage.getItem(this.usernameSessionKeyName) || '';
  }

  set username(username: string) {
    if (this.sessionUid) {
      return;
    }

    sessionStorage.setItem(this.usernameSessionKeyName, username);
  }
}
