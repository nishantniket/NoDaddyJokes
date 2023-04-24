import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-randomjokes',
  templateUrl: './randomjokes.component.html',
  styleUrls: ['./randomjokes.component.css']
})
export class RandomjokesComponent implements OnInit {

  constructor(private http: HttpClient) { }
  randomJoke:any;
  jokesCount:number = 0;
  isLoaded:boolean=false;
  ngOnInit(): void {
    this.GetRandomJokes();
    this.GetJokesCount();
  }
  GetRandomJokes() {
    this.http.get<any>('https://localhost:44378/api/weatherforecast/Check').subscribe(res => {
      this.randomJoke = JSON.parse(res.data).body[0] ;
      this.isLoaded=true;
  }) ;
}
  
  GetJokesCount(){
    this.http.get<any>('https://localhost:44378/api/weatherforecast/Count').subscribe(res => {
      this.jokesCount = JSON.parse(res.data).body;
  }) ;
  }
}
