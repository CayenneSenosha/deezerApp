import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumTracksComponent } from './features/album-tracks/album-tracks.component';
import { ArtistAlbumComponent } from './features/artist-album/artist-album.component';
import { ArtistGenreComponent } from './features/artist-genre/artist-genre.component';
import { ArtistsComponent } from './features/artists/artists.component';

const routes: Routes = [
  {path: 'home', component: ArtistsComponent},
  {path: 'artist-album/:id', component: ArtistAlbumComponent},
  {path: 'album-tracks/:id', component: AlbumTracksComponent},
  {path:'artist-genre/:id',component:ArtistGenreComponent},
  { path: '',   redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
