import { Component } from '@angular/core';
import { Button, ButtonDirective } from "primeng/button";

@Component({
  selector: 'app-dashboard-mestre',
  imports: [Button, ButtonDirective],
  templateUrl: './dashboard-mestre.html',
  styleUrl: './dashboard-mestre.scss',
})
export class DashboardMestre {}
