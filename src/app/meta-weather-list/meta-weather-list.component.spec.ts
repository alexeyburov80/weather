import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetaWeatherListComponent } from './meta-weather-list.component';

describe('MetaWeatherListComponent', () => {
  let component: MetaWeatherListComponent;
  let fixture: ComponentFixture<MetaWeatherListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetaWeatherListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetaWeatherListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
