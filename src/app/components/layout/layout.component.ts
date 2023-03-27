import { Component, OnInit } from '@angular/core';

import { Students } from 'src/app/shared/models';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  
  public studentsList: Students[] = [
    { id: 42333222, firstName: 'Carlos', lastName: 'Calvo', date_of_delivery: new Date('2023-02-13'), qualification: 4, isApproved: false },
    { id: 41332232, firstName: 'Melina', lastName: 'Perez', date_of_delivery: new Date('2023-02-20'), qualification: 8, isApproved: true },
    { id: 42541232, firstName: 'Julieta', lastName: 'Rodriguez', date_of_delivery: new Date('2023-02-24'), qualification: 9, isApproved: true },
    { id: 42556277, firstName: 'Juan', lastName: 'Hernandez', date_of_delivery: new Date('2023-02-18'), qualification: 6, isApproved: false },
    { id: 41663443, firstName: 'Pablo', lastName: 'Roca', date_of_delivery: new Date('2023-02-15'), qualification: 10, isApproved: true },
    { id: 42663434, firstName: 'Roberto', lastName: 'Carlos', date_of_delivery: new Date('2023-02-11'), qualification: 5, isApproved: false },
    { id: 41555432, firstName: 'Armando', lastName: 'Paredes', date_of_delivery: new Date('2023-02-22'), qualification: 7, isApproved: true },
  ];

  isLoading: boolean = true;

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 2000)
  }
}
