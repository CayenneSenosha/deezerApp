import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistGenreComponent } from './artist-genre.component';

describe('ArtistGenreComponent', () => {
  let component: ArtistGenreComponent;
  let fixture: ComponentFixture<ArtistGenreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtistGenreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistGenreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
