import { Component, OnInit, Input } from '@angular/core';
import {DisqusModule} from "ng2-awesome-disqus";
import {Location} from '@angular/common';
 

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html'
})
export class DetailsComponent implements OnInit {

	
	
	@Input() selectedItem: any;
	 myUrl: string

  constructor(private location: Location) { 
  	 

	}






  ngOnInit() {
  	
  	
 
 }
}
