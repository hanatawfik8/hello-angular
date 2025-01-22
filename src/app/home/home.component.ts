import { Component } from '@angular/core';
import { StarComponent } from '../star/star.component';

@Component({
  selector: 'app-home',
  imports: [StarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  imgInfo: ImgInfo = {
    imgSrc: "assets/images/hero-img.png",
    imgAlt: "Flower hero image"
  }
}

interface ImgInfo {
  imgSrc: string;
  imgAlt: string;
}
