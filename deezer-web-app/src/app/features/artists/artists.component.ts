import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IArtist, IArtistContent, IGenre, IgetAllGenre } from 'src/app/interfaces/Interface';
import { ArtistService } from 'src/app/services/artist.service';
import { DeezerApiService } from 'src/app/services/deezer-api.service';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})
export class ArtistsComponent implements OnInit {
  genres: IgetAllGenre = {
    data :[]
  };
  artist:any;
  artistDataPopulated: boolean = false ;
  isLoading:boolean = false;
  error:any = null;
  constructor(private deezerApiService: DeezerApiService, private router: Router , private artistService:ArtistService) { }

  ngOnInit(): void {
    this.isLoading = true;
   this.deezerApiService.getAllGenres().subscribe((data) => {
     this.isLoading = false;
     this.error = null;
      this.genres = data;

    }, (error) =>{
      this.error = error;
    })
   this.artistDataPopulated = false
  }
  imageClicked(genreData:IGenre){
    this.router.navigateByUrl("/artist-genre/"+genreData.id);
   // console.log("searched data =  for " + name, this.artistService.getArtistData())
    //this.artist = this.artistService.getArtistData();
    //this.artistDataPopulated = true;
  }

  artistNameimage(data:IArtistContent){
    let c = `artist-album/${data.artist.id}`;
    this.router.navigateByUrl(c);
  }
}
