import { Component, OnInit } from "@angular/core";
import { SocialAuthService } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";
import {
  GoogleLoginProvider,
  FacebookLoginProvider,
} from "angularx-social-login";
@Component({
  selector: "app-googleFBlogin",
  templateUrl: "./googleFBlogin.component.html",
  styleUrls: ["./googleFBlogin.component.css"],
})
export class GoogleFBloginComponent implements OnInit {
  public user: SocialUser = new SocialUser();
  constructor(private authService: SocialAuthService) {}

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
    });
  }
  public signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
  public loginWithFacebook(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }
  public signOut(): void {
    this.authService.signOut();
  }

  getValues(val: any) {
    console.log(val);
  }
}
