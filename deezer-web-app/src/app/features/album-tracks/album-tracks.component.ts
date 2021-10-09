import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DeezerApiService } from 'src/app/services/deezer-api.service';

@Component({
  selector: 'app-album-tracks',
  templateUrl: './album-tracks.component.html',
  styleUrls: ['./album-tracks.component.css']
})
export class AlbumTracksComponent implements OnInit {
  albumTracks: any  = [] ;
  album : any = {};
  constructor(private deezerApiService: DeezerApiService,private router: Router) { }

  ngOnInit(): void {
    let url =  window.location.href;
    var id = url.substring(url.lastIndexOf('/') + 1);
    console.log(id);
    this.deezerApiService.getAlbumTracks(id).subscribe((data:any) =>{
        this.albumTracks = data.data;
        console.log(this.albumTracks);
    })

    this.deezerApiService.getAlbum(id).subscribe((data:any) =>{
      this.album = data;
      console.log(this.album);
    })
  }

}
