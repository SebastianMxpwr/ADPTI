import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarLibrosComponent } from './mostrar-libros.component';

describe('MostrarLibrosComponent', () => {
  let component: MostrarLibrosComponent;
  let fixture: ComponentFixture<MostrarLibrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarLibrosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostrarLibrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
