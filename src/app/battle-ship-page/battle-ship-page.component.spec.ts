import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BattleShipPageComponent } from './battle-ship-page.component';

describe('BattleShipPageComponent', () => {
  let component: BattleShipPageComponent;
  let fixture: ComponentFixture<BattleShipPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BattleShipPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BattleShipPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
