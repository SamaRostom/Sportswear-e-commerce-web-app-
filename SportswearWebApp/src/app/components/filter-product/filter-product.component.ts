import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter-product',
  templateUrl: './filter-product.component.html',
  styleUrls: ['./filter-product.component.css']
})
export class FilterProductComponent implements OnInit {

  
  categories: Array<String> = [];
  @Output() FilterEmitter = new EventEmitter<Array<String>>();
  constructor() { }

  ngOnInit(): void {
  }

  changeCategory(event:any,value:String){
    if (event.target.checked) {
      this.categories.push(value);
    } else {
      let index = this.categories.findIndex((x) => x=value);
      this.categories.splice(index, 1);
    }
    this.FilterEmitter.emit(this.categories);
  }
  

  

}
