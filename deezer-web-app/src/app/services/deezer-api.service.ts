import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IArtist, IgetAllGenre } from '../interfaces/Interface';

@Injectable({
  providedIn: 'root'
})
export class DeezerApiService {

  apiUrl:string = "https://api.deezer.com";
  constructor(private http:HttpClient) { 

  }

    getArtist(query:string): Observable<IArtist>{
    let url = `${this.apiUrl}/search?q=${query}`;
    return  this.http.get<IArtist>(url);
  }

   getAllGenres():Observable<IgetAllGenre>{
    let url = `${this.apiUrl}/genre`;
    return  this.http.get<IgetAllGenre>(url);
  }

  getAlbumsforArstist(id:string){
    let url = `${this.apiUrl}/artist/${id}/albums`;
    return  this.http.get(url);
  }

  getArtistTopTracks(id:string){
    let url = `${this.apiUrl}/artist/${id}/top`;
    return  this.http.get(url);
  }

  getArtistById(id:string){
    let url = `${this.apiUrl}/artist/${id}`;
    return  this.http.get(url);
  }
  getArtistByGenre(id:string){
    let url = `${this.apiUrl}/genre/${id}/artists`;
    return this.http.get(url);
  }
  getAlbumTracks(id:string){
    let url = `${this.apiUrl}/album/${id}/tracks`;
    return this.http.get(url);
  }
  getAlbum(id:string){
    let url = `${this.apiUrl}/album/${id}`;
    return this.http.get(url);
  }
}
