import { Component } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';
import { ButtonDirective } from "primeng/button";

@Component({
  selector: 'app-mestrices',
  imports: [RouterOutlet, RouterLinkWithHref, ButtonDirective],
  templateUrl: './mestrices.html',
  styleUrl: './mestrices.scss',
})
export class Mestrices {
  limparCache() {
    localStorage.clear();
  }
}
