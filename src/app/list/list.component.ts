import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: []
})
export class ListComponent implements OnInit {
  itemsReceived: string[] = [''];

  getItemsFromServiceClass() {
    this.itemsReceived = this.dataService.getItems();

  }

  addNewItem(form: any) {
    console.log(form.value.itemName);
    this.dataService.addItem(form.value.itemName);
  }

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

}
