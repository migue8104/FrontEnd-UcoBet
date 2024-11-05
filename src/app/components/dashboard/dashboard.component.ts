import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user: any = null;

  constructor(public auth: AuthService) {}

  ngOnInit(): void {
    // Suscribirse a auth.user$ para obtener la información del usuario
    this.auth.user$.subscribe(user => {
      this.user = user;
    });
  }

  logOut(): void {
    this.auth.logout();
  }
}
