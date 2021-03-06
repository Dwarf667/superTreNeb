import {Component, EventEmitter,OnChanges, SimpleChanges, Input, OnInit, Output} from '@angular/core';
import {GLOBAL} from "../../../services/global";

@Component({
  selector: 'table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit, OnChanges {

  @Input() headsTable:any;
  @Input() bodyTableContent: any = [];
  @Input() countRecord:number;
  // public bodyTableContent:any;
  public propertiesContent:any;
  public pagination:number;
  public  counter = Array;
  public url = "";
  @Output() changeItem = new EventEmitter();
  @Output() paginationParams = new EventEmitter();

  constructor() {
    this.url = GLOBAL.url
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(this.bodyTableContent !== undefined){
      if(this.bodyTableContent.length !== 0){
        this.propertiesContent = Object.keys(this.bodyTableContent[0]);
        this.pagination = Math.ceil(this.countRecord/10);
      }
    }
  }
  orderByIndexASC(index) {
    let columnProperties = this.propertiesContent[index];
    let table = this.bodyTableContent;
    table.sort(function (a,b) {
      if(a[columnProperties] > b[columnProperties]){
        return 1;
      }
      if(a[columnProperties] < b[columnProperties]){
        return -1;
      }
      return 0;
    });
    this.bodyTableContent = [];
    this.bodyTableContent = table;
  }

  getRecordByPage(event){
    this.paginationParams.emit({
      page:event
    })
  }

  selectElement(item){
    this.changeItem.emit({
      object: item
    })
  }

}
