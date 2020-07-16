import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HelloAngular';

  bob:{name: String};
  
  mynums: any;
  
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    
  }

  getTasks(){
    this._httpService.getTasks()
  }

}
