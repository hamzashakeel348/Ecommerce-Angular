import { ComponentFixture, TestBed } from "@angular/core/testing";

import { GoogleFBloginComponent } from "./googleFBlogin.component";
describe("LoginComponent", () => {
  let component: GoogleFBloginComponent;
  let fixture: ComponentFixture<GoogleFBloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GoogleFBloginComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleFBloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
