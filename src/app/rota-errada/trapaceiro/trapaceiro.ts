import { Component } from '@angular/core';
import { ButtonDirective } from "primeng/button";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-trapaceiro',
  imports: [ButtonDirective, RouterLink],
  templateUrl: './trapaceiro.html',
  styleUrl: './trapaceiro.scss',
})
export class Trapaceiro {}
