import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private tokenUidSessionKeyName = 'uid-session-taskchat';

  get sessionUid() {
    return sessionStorage.getItem(this.tokenUidSessionKeyName) || '';
  }

  set sessionUid(tokenUid: string) {
    if (this.sessionUid) {
      return;
    }

    sessionStorage.setItem(this.tokenUidSessionKeyName, tokenUid);
  }
}
