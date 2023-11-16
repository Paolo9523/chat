import { Component, OnInit } from '@angular/core';

interface Componente {
  icon: string;
  name: string;
  redirectTo: string;
}


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Componente[] = [
    {
      icon: 'american-football-outline',
      name: 'Action Sheet',
      redirectTo: '/action-sheet'
    },
    {
      icon: 'alert-circle-outline',
      name: 'Alert',
      redirectTo: '/alert'
    },
    {
      icon:'person-circle-outline',
      name: 'Avatar',
      redirectTo: '/avatar'
    },
    {
      icon: 'checkmark-circle-outline',
      name: 'Button',
      redirectTo: '/button'
    }


  ];
  constructor() { }

  ngOnInit() {
  }

}
