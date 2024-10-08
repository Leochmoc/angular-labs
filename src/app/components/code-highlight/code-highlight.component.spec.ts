import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeHighlightComponent } from './code-highlight.component';

describe('CodeHighlightComponent', () => {
  let component: CodeHighlightComponent;
  let fixture: ComponentFixture<CodeHighlightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodeHighlightComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodeHighlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
