import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminViewService } from 'src/app/services/admin-view.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  constructor(private router: Router, private adminViewService: AdminViewService) {} 

  isAdminView: boolean = true;
  isMenuOpen: boolean = false;

  toggleView(): void {
    this.isAdminView = !this.isAdminView;
    this.adminViewService.setIsAdminView(this.isAdminView);
    this.router.navigate(['/']);
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}
