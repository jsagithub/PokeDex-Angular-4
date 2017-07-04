import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchpokemonComponent } from './searchpokemon.component';

describe('SearchpokemonComponent', () => {
  let component: SearchpokemonComponent;
  let fixture: ComponentFixture<SearchpokemonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchpokemonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchpokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
