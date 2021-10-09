import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DeezerApiService } from 'src/app/services/deezer-api.service';

@Component({
  selector: 'app-artist-album',
  templateUrl: './artist-album.component.html',
  styleUrls: ['./artist-album.component.css']
})
export class ArtistAlbumComponent implements OnInit {

  albums:any = null;
  topTracks:any = null;
  artist:any = null;
  isLoading:boolean = false;
  error:any = null;
  constructor(private deezerApiService: DeezerApiService,private router: Router) { }
id :string = "";

albumView(album:any):void{
  console.log(album);
  let c = `album-tracks/${album.id}`;
  this.router.navigateByUrl(c);
}
  ngOnInit(): void {
    let url =  window.location.href;
    var id = url.substring(url.lastIndexOf('/') + 1);
    console.log(id);
    this.deezerApiService.getAlbumsforArstist(id).subscribe((data:any) =>{
      this.isLoading = false;
      this.error = null;
      this.albums = data;
    }, (error) =>{
      this.error = error;
    })
    this.deezerApiService.getArtistTopTracks(id).subscribe((data:any) =>{
      this.isLoading = false;
      this.error = null;
      this.topTracks = data;
    }, (error) =>{
      this.error = error;
    })

    this.deezerApiService.getArtistById(id).subscribe((data:any) =>{
      this.isLoading = false;
      this.error = null;
      this.artist = data;
    }, (error) =>{
      this.error = error;
    })
  
  }

}
