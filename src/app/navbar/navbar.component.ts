import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  isScrolling = false;
  @HostListener('window:scroll') onScrolling() {
    if (scrollY > 0) {
      this.isScrolling = true;
    }
    else {
      this.isScrolling = false;
    }
  }

}
