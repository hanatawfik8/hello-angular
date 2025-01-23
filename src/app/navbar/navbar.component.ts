import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
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
