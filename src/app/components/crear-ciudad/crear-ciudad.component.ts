import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StatesService } from '../../services/states/states.service';
import { CitiesService } from '../../services/cities/cities.service';

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
      city: ['', Validators.required],
      name: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.stateServices.getAllStates().subscribe(
      resp => {
        this.states = resp;
      },
      error => { console.error(error); }
    );
  }

  register(): void {
    this.citiesServices.saveCity(this.cityForm.value).subscribe(
      resp => {
        this.cityForm.reset();
        this.city = this.city.filter((city: { id: any; }) => resp.id != city.id);
        this.city.push(resp);
      },
      error => { console.error(error); }
    );
  }
}

