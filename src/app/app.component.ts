import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ServiceService } from './data/service.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  data: any;
  constructor(private service: ServiceService) {}

  ngOnInit(): void {
    this.service.getData().subscribe((response) => {
      this.data = response;
    });
  }
}
