import { Injectable } from '@angular/core';

const SIDE_KEY = 'auth-side';

@Injectable({
  providedIn: 'root'
})

export class TokenStorageService {

  constructor() { }

  signOut(): void {
    window.localStorage.clear();
  }

  public saveSideBar(side: string): void {
    window.localStorage.removeItem(SIDE_KEY);
    window.localStorage.setItem(SIDE_KEY, side);
  }

  public getSideBar(): string | null {
    return window.localStorage.getItem(SIDE_KEY);
  }


}
