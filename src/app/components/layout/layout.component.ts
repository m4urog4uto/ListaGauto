import { Component, OnInit } from '@angular/core';

import { Students } from 'src/app/shared/models';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  
  public studentsList: Students[] = [
    { id: 1, firstName: 'Carlos', lastName: 'Calvo', email: 'carlos.calvo@gmail.com', age: 22, birthdate: new Date('2001-02-11'), isApproved: false },
    { id: 2, firstName: 'Melina', lastName: 'Perez', email: 'melina.perez@gmail.com', age: 21, birthdate: new Date('2002-05-01'), isApproved: true },
    { id: 3, firstName: 'Julieta', lastName: 'Rodriguez', email: 'julieta.rodriguez@gmail.com', age: 22, birthdate: new Date('2002-03-23'), isApproved: true },
    { id: 4, firstName: 'Juan', lastName: 'Hernandez', email: 'juan.hernandez@gmail.com', age: 22, birthdate: new Date('2001-06-13'), isApproved: false },
    { id: 5, firstName: 'Pablo', lastName: 'Escobar', email: 'pablo.escobar@gmail.com', age: 22, birthdate: new Date('2001-08-30'), isApproved: true },
    { id: 6, firstName: 'Roberto', lastName: 'Carlos', email: 'roberto.carlos@gmail.com', age: 21, birthdate: new Date('2002-08-22'), isApproved: false },
    { id: 7, firstName: 'Armando', lastName: 'Paredes', email: 'armando.paredes@gmail.com', age: 21, birthdate: new Date('2002-09-19'), isApproved: true },
  ];

  isLoading: boolean = true;

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 2000)
  }
}
