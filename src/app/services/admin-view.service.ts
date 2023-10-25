import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminViewService {
  private isAdminViewSubject = new BehaviorSubject<boolean>(true);
  isAdminView$ = this.isAdminViewSubject.asObservable();

  setIsAdminView(isAdminView: boolean): void {
    this.isAdminViewSubject.next(isAdminView);
  }
}
