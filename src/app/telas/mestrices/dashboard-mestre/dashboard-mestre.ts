import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { Button, ButtonDirective } from "primeng/button";

@Component({
  selector: 'app-dashboard-mestre',
  imports: [ButtonDirective, RouterLink],
  templateUrl: './dashboard-mestre.html',
  styleUrl: './dashboard-mestre.scss',
})
export class DashboardMestre {

  constructor(private router: Router) {}
}
