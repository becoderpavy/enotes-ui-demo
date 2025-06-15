import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouritNoteComponent } from './favourit-note.component';

describe('FavouritNoteComponent', () => {
  let component: FavouritNoteComponent;
  let fixture: ComponentFixture<FavouritNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FavouritNoteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavouritNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
