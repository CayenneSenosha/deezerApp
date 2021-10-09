import { Injectable } from '@angular/core';
import { IArtist } from '../interfaces/Interface';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  constructor() { }
  artist:any = null;

  public setArtistData(artistData: IArtist): void{
      this.artist = artistData;
  }
  
  public getArtistData() : IArtist {
    return this.artist;
  }
}
