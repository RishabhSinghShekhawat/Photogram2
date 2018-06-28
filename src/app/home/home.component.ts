import { Component, OnInit } from '@angular/core';
import { DemoService} from '../demo.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   
  tasks=[];
  next=[];
  name;
  url;
  date;
  back;
  caption;
  constructor(private dataService: DemoService) 
  {
    this.tasks=this.dataService.tasks;
   }
  add()
  {
    this.dataService.tasks.push({name:this.name,url:this.url,date:this.date,back:this.back,caption:this.caption})
    console.log(this.dataService.tasks)
  }
  ngOnInit() {
  }

}
