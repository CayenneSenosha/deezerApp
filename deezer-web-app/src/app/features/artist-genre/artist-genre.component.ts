import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DeezerApiService } from 'src/app/services/deezer-api.service';

@Component({
  selector: 'app-artist-genre',
  templateUrl: './artist-genre.component.html',
  styleUrls: ['./artist-genre.component.css']
})
export class ArtistGenreComponent implements OnInit {

  artistInGenre: any  = [] ;
  constructor(private deezerApiService: DeezerApiService,private router: Router) { }

  ngOnInit(): void {
    let url =  window.location.href;
    var id = url.substring(url.lastIndexOf('/') + 1);
    this.deezerApiService.getArtistByGenre(id).subscribe((data:any) =>{
      this.artistInGenre = data.data;
      console.log(this.artistInGenre);
      
      } , (err) =>{
        console.log(err);
      });
  }

  artistNameimage(data:any){
    let c = `artist-album/${data.id}`;
    this.router.navigateByUrl(c);
  }
}
