import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenderLibroAComponent } from './vender-libro-a.component';

describe('VenderLibroAComponent', () => {
  let component: VenderLibroAComponent;
  let fixture: ComponentFixture<VenderLibroAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VenderLibroAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VenderLibroAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
