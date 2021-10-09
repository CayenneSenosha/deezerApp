import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistAlbumComponent } from './features/artist-album/artist-album.component';
import { ArtistsComponent } from './features/artists/artists.component';
import { NavbarComponent } from './features/navbar/navbar.component';

const routes: Routes = [
  {path: 'home', component: ArtistsComponent},
  {path: 'artist-album/:id', component: ArtistAlbumComponent},
  { path: '',   redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
