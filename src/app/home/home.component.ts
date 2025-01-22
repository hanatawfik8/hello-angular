import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
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
