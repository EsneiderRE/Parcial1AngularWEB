import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { CafeComponent } from './cafe.component';
import { Cafe } from './cafe';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CafeComponent', () => {
  let component: CafeComponent;
  let fixture: ComponentFixture<CafeComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [CafeComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CafeComponent);
    component = fixture.componentInstance;
    const cafes: Cafe[] = [];
    for (let i = 1; i < 3; i++) {
      const cafe = new Cafe(
        i,
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.address.country(),
        faker.lorem.sentence(),
        faker.datatype.number(),
        faker.image.imageUrl()
      )
      component.cafes.push(cafe);
    }

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

 it("Component has a table", () => {
   expect(debug.query(By.css("thead")).childNodes.length).toBeGreaterThan(0);
  });

  it('should have 3 tr elements', () => {
    expect(debug.queryAll(By.css('tr'))).toHaveSize(3)
  });


});


