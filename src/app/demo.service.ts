import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  tasks=[{name:"rishabh",url:"assets/demo/photos/josh-calabrese-66153-500.jpg",back:" assets/demo/faces/female/7.jpg",date:"24 days ago",caption:"sample picture 1"},{name:"rishabh",url:"assets/demo/photos/ilnur-kalimullin-218996-500.jpg",back:"assets/demo/faces/female/7.jpg",date:"20 days ago",caption:"sample picture 2"}];
  constructor() { }
}
