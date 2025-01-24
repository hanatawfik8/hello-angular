import { Component } from '@angular/core';
import { BlueStarComponent } from '../blue-star/blue-star.component';

@Component({
  selector: 'app-portfolio',
  imports: [BlueStarComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {

  images: string[] = [
    "house.png", "cake.png", "circus.png", "house.png", "cake.png", "circus.png"
  ]

  displayedImg!: string;

  sendImg(img: string) {
    this.displayedImg = img;
  }
}
