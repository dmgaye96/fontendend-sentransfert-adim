import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-signin",
  templateUrl: "./signin.component.html",
  styleUrls: ["./signin.component.scss"]
})
export class SigninComponent implements OnInit {
  constructor(private authService: AuthService, private _router: Router) {}

  ngOnInit() {}
  onLogin(data) {
    this.authService.login(data).subscribe(
      resp => {
          console.log(resp);
        //  console.log();
        let jwt = resp.body;
        this.authService.saveToken(jwt);
        if (this.isAdmin()) {
          this._router.navigate(["/register"]);
        } else if (this.isUser()) {
          this._router.navigate(["/envoi"]);
        } else if (this.isCaissier()) {
          this._router.navigate(["/depot"]);
        } else this._router.navigate(["/addpartanduser"]);
      },
      err => {}
    );
  }

  isAdmin() {
    return this.authService.isAdmin();
  }

  isUser() {
    return this.authService.isUser();
  }
  isAdminP() {
    return this.authService.isAdminP();
  }

  isCaissier() {
    return this.authService.isCaissier();
  }
}
