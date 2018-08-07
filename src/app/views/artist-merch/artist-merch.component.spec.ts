import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistMerchComponent } from './artist-merch.component';

describe('ArtistMerchComponent', () => {
  let component: ArtistMerchComponent;
  let fixture: ComponentFixture<ArtistMerchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistMerchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistMerchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
