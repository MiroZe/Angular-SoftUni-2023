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
    return this.httpClient.get<Theme[]>('/api/themes')
  }

  loadPosts(limit? : number) {
    return this.httpClient.get<Post[]>(`/api/posts${limit? `?limit=${limit}` : ''}`)
  }

  loadOneTheme(id: string) {
    return this.httpClient.get<Theme>(`/api/themes/${id}`)
  }

  createTheme(name:string, text: string) {
    return this.httpClient.post<Theme>('/api/themes', {themeName: name, postText: text})
  }

  updateTheme(id: string, name:string, text: string) {
    return this.httpClient.put<Theme>('/api/themes' +id, {themeName: name, themeText: text})
  }

  deleteTheme(id: string) {
    return this.httpClient.delete<Theme>('/api/themes' +id)
  }
}
