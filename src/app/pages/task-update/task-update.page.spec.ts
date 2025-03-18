import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TaskUpdatePage } from './task-update.page';

describe('TaskUpdatePage', () => {
  let component: TaskUpdatePage;
  let fixture: ComponentFixture<TaskUpdatePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskUpdatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
