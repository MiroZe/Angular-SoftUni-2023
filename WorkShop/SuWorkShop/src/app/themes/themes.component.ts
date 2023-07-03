import { Component,OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Theme } from '../interfaces/theme';

@Component({
  selector: 'app-themes',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.css']
})
export class ThemesComponent implements OnInit{

  themeList : Theme[] | null = [];
  isLoaded: boolean = true

  constructor(private apiService: ApiService) {}

  
  ngOnInit() : void {
    this.apiService.loadThemes().subscribe( {
      next: (value)=> 
        {this.themeList = value
        this.isLoaded = false},
      error: (error) => console.log(error)
      
  })
  
}
}
