import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StatesService } from '../../services/states/states.service';
import { CitiesService } from '../../services/cities/cities.service';
import { state } from '@angular/animations';

@Component({
  selector: 'app-crear-ciudad',
  templateUrl: './crear-ciudad.component.html',
  styleUrls: ['./crear-ciudad.component.css']
})
export class CrearCiudadComponent implements OnInit {

  cityForm: FormGroup;
  states: any;
  city: any;

  constructor(
    public fb: FormBuilder,
    public stateServices: StatesService,
    public citiesServices: CitiesService,
  ) {
    this.cityForm = this.fb.group({
      name: ['', Validators.required], 
      state: ['', Validators.required], 
    });
  }

  ngOnInit(): void {
    this.stateServices.getAllStates().subscribe(
      resp => {
        this.states = resp.datos;
        console.log(this.states);
      },
      error => { 
        console.error(error); 
      }
    );
  }
  

  register(): void {
    const cityData = {
      name: this.cityForm.value.name, 
      state: this.cityForm.value.state.id 
    };

    console.log("datos de formulario", cityData)
  
    this.citiesServices.saveCity(cityData).subscribe(
      resp => {
        alert(resp.mensajes[0]);
        this.cityForm.reset();
        this.city.push(resp);
        console.log(resp);
      },
      error => {
        console.error(error);
        // Verificamos que 'mensajes' exista antes de acceder a él
        const errorMessage = error.error?.mensajes?.length > 0 ? error.error.mensajes[0] : 'Ocurrió un error inesperado';
        alert(errorMessage);
      }
    );
  }
  
}
