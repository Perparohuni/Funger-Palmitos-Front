import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { ButtonDirective } from "primeng/button";

@Component({
  selector: 'app-perdido',
  imports: [RouterLink, ButtonDirective],
  templateUrl: './perdido.html',
  styleUrl: './perdido.scss',
})
export class Perdido {}
