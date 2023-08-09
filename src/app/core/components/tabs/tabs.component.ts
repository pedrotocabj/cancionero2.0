import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent {
  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        switch (event.urlAfterRedirects) {
          case '/inicio':
            this.seleccionado = [true, false, false];
            break;
          case '/canciones':
            this.seleccionado = [false, true, false];
            break;
          case '/perfil':
            this.seleccionado = [false, false, true];
            break;
        }
      }
    });
  }

  seleccionado = [false, false, false];

  navegar(direccion: string) {
    console.log(direccion);
    this.router.navigate([direccion]);
  }
}
