import { Component, OnInit, ContentChild, AfterContentInit, forwardRef, ViewChild } from '@angular/core';
import {ControlValueAccessor, FormControl, NgModel, NG_VALUE_ACCESSOR, DefaultValueAccessor} from '@angular/forms';
import {trigger, state, transition, animate, style, query, animateChild, group} from '@angular/animations';
import {MatAutocomplete} from '@angular/material/autocomplete';
import { DeezerApiService } from 'src/app/services/deezer-api.service';
import { ArtistService } from 'src/app/services/artist.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [
    { 
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => SearchComponent),
    }
  ],
  animations: [
    trigger('clearExpand', [
      transition(':enter', [
        style({width: '0', opacity: 0}),
        group([
          animate(200, style({width: '*'})),
          animate('100ms 100ms', style({opacity:'{{finalOpacity}}'}))
        ])
      ], {params: {finalOpacity: 1}}),
      transition(':leave', [
        group([
          animate(200, style({width: '0px'})),
          animate('100ms', style({opacity:0}))
        ])
      ]),
      // TODO: opacity is not good enough. When hidden, button should also be disabled and aria-hidden (or removed completely)
      state('1', style({opacity: '*'})),
      state('0', style({opacity: '0'})),
      transition('1<=>0', animate(200)),
    ]),
    trigger('searchExpand', [
      state('1', style({width: '*', backgroundColor: '*', margin: '*'})),
      state('0', style({width: '60px', backgroundColor: 'transparent', color: 'white', margin: '0'})),
      transition('0=>1', [
        group([
          style({width: '60px', backgroundColor: 'transparent'}),
          animate(200, style({width: '*', backgroundColor: '*', color: '*'})),
          query('@inputExpand', [
            style({width: '0'}),
            animate(200, style({
              width: '*',
              margin: '*',
            })),
          ]),
          query('@clearExpand', [
            animateChild(),
          ])
        ])
      ]),
      transition('1=>0', [
        group([
          style({width: '*'}),
          animate(200, style({
            backgroundColor: 'transparent',
            width: '40px',
            color: 'white',
          })),
          query('@clearExpand', [
            animateChild(),
          ]),
          query('@inputExpand', [
            animate(200, style({
              width: '0',
              backgroundColor: 'transparent',
              opacity: '0',
              margin: '0',
            }))
          ]),
        ])
      ]),
    ]),
    trigger('inputExpand', [
      state('0', style({width: '0', margin: '0'})),
      // Without this transition, the input animates to an incorrect width
      transition('0=>1', []),
    ]),
  ],

})
export class SearchComponent implements ControlValueAccessor, OnInit {
  @ContentChild(MatAutocomplete)
  autocomplete: MatAutocomplete | any;

  @ViewChild(DefaultValueAccessor)
  inputModel: DefaultValueAccessor | any;

  _value:any = '';
  _onChangesFn : ((any: any) => null) | undefined ;
  filteredOptions:any = []
  expanded = false;
  artistSearched: string = '';

  constructor(private deezerApiService: DeezerApiService, private artistService:ArtistService) { }

  ngOnInit() { 
    if(this.autocomplete){
      this.autocomplete.optionSelected.subscribe((option:any)=>{
        this.writeValue(option.option.value);
        this._onChangesFn && this._onChangesFn(option.option.value);
      })
    }
 
  }

  registerOnChange(fn: any) {
    this._onChangesFn = fn;
    this.inputModel.registerOnChange(fn)
  }

  registerOnTouched(fn: any) {
    this.inputModel.registerOnTouched(fn);
  }

  setDisabledState(isDisabled: boolean) {
    this.inputModel.setDisabledState(isDisabled);
  }

  writeValue(obj: any) {
    this._value = obj;
    this.inputModel.writeValue(obj);
  }

  Searching(e:any){
    this.artistSearched = e.target.value;

  }
  close() {
    this._value = '';
  }

  onSearchClicked() {
    if(!this.expanded) {
      this.expanded = true;
      this.deezerApiService.getArtist(this.artistSearched).subscribe((data:any) =>{
        this.artistService.setArtistData(data);
      }) ; 
    } else {
      console.log('search')
    }
  }

  onBlur() {
    if(!(this._value && this._value.length>0)){
      this.expanded = false;
    }
  }

}