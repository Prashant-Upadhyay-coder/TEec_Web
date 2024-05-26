import { Component, inject } from '@angular/core';
import { ThemesService } from './Services/themes.service';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  logoImage="./assets/images/logo2.png"
  email="Support@Tectonas.com"
darkModeService:ThemesService = inject(ThemesService);

togglerDarkMode(){
this.darkModeService.updateDarkMode();
}
}
