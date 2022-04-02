import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { MainComponent } from './main.component';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MainComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create main', () => {
    expect(component).toBeTruthy();
  });

  // it('should expect form to work if all informations are given', () => {
  //   expect(component.addWorkerForm('test1', 'test2', 111111111, 'test3', 11, 'test4', 'test5')).toBeTrue();
  // });

  it('should clear worker Id on click', () => {
    expect(component.clearWorkerId()).toBeTrue();
  });

  it('should show worker details on click', () => {
    expect(component.showDetails(1)).toBeTrue();
  });

  it('should show worker id on click', () => {
    expect(component.showId(1)).toBeTrue();
  });

  it('should delete worker from list on click', () => {
    expect(component.delete(1)).toBeTrue();
  });

  // it('should run personPlace', () => {
  //   expect(component.personPlace(1)).toBeTrue();
  // });

  // it('should cheack img url', () => {
  //   expect(component.ImageExist('adamadamex')).toBeTrue();
  // });


});
