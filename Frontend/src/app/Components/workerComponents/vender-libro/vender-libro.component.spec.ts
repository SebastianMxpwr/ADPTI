import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenderLibroComponent } from './vender-libro.component';

describe('VenderLibroComponent', () => {
  let component: VenderLibroComponent;
  let fixture: ComponentFixture<VenderLibroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VenderLibroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VenderLibroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
