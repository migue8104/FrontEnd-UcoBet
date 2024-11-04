import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import { InicioComponent } from './components/inicio/inicio.component';
import { CrearCiudadComponent } from './components/crear-ciudad/crear-ciudad.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
// Import the AuthService type from the SDK
import { AuthModule} from '@auth0/auth0-angular';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    CrearCiudadComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    AuthModule.forRoot({
      domain: 'dev-j8rv38aw3lc7xt4x.us.auth0.com',
      clientId: '0pTjIqgFT26xLGwpm5Mo4cqbShc8Iy7b',
      authorizationParams:{
        redirect_uri:window.location.origin
      }
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }