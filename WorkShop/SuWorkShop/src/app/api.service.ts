import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {environment} from '../environments/environment'
import { Theme } from './interfaces/theme';
import { Post } from './interfaces/post';



const apiURL = environment.apiURL


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) {

  }
  loadThemes() {
    return this.httpClient.get<Theme[]>(apiURL + '/themes')
  }

  loadPosts(limit? : number) {
    return this.httpClient.get<Post[]>(`${apiURL}/posts${limit? `?limit=${limit}` : ''}`)
  }
}
