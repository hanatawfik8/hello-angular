import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    { path: "", redirectTo: "home", pathMatch: "full" },
    { path: "home", component: HomeComponent, title: "Hello Angular | Home" },
    { path: "about", component: AboutComponent, title: "Hello Angular | About" },
    { path: "portfolio", component: PortfolioComponent, title: "Hello Angular | Portfolio" },
    { path: "contact", component: ContactComponent, title: "Hello Angular | Contact" }
];
