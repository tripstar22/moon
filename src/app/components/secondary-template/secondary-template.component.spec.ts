import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondaryTemplateComponent } from './secondary-template.component';

describe('SecondaryTemplateComponent', () => {
  let component: SecondaryTemplateComponent;
  let fixture: ComponentFixture<SecondaryTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondaryTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondaryTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
