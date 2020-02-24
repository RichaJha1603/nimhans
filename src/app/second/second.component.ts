import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { DataSource } from '@angular/cdk/table';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {


  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource =new MatTableDataSource (ELEMENT_DATA);

  /**setupFilter(column: string) {
    this.dataSource.filterPredicate = (d: dataSource, filter: string) => {
      const textToSearch = d[column] && d[column].toLowerCase() || '';
      return textToSearch.indexOf(filter) !== -1;
    };
  }*/
  
  applyFilter(filtervalue: string){
   this.dataSource.filter= filtervalue.trim().toLowerCase();
    
  
  
 /**  this.dataSource.filterPredicate = function(data, filter: string): boolean {
    return data.name.toLowerCase().includes(filter) || data.symbol.toLowerCase().includes(filter) || data.position.toString().includes(filter);
  }*/
  
};

  constructor() {
   
  }

  ngOnInit():void {
  
  }
}
