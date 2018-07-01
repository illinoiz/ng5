import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  //ตัวแปรหรือ properties
  itemCount:number = 4;
  btnText:string = 'เพิ่มรายการใหม่';
  listText:string = '';
 listall = [];

  constructor() { }

  ngOnInit() {
    this.itemCount = this.listall.length;
  }
  addItem()
  {
    if(this.listText != ""){
    //รับค่าจาก form และบันทึกลง arrey listall
  this.listall.push(this.listText);

  this.listText = '';

this.itemCount = this.listall.length;
  }
  }
}
