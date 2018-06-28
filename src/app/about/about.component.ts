import { Component, OnInit } from '@angular/core';
import { DemoService} from '../demo.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  tasks=[];

  constructor(private dataService: DemoService) {
    this.tasks=this.dataService.tasks;
   }

  ngOnInit() {
  }

}
