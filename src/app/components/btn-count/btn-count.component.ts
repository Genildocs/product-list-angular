import {
  Component,
  Input,
  signal,
  effect,
  computed,
  OnInit,
} from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { CountService } from '../../service/count.service';
@Component({
  selector: 'app-btn-count',
  standalone: true,
  imports: [AngularSvgIconModule],
  templateUrl: './btn-count.component.html',
  styleUrl: './btn-count.component.css',
})
export class BtnCountComponent implements OnInit {
  @Input() name!: string;

  count: number = 0;

  isValid: boolean = false;

  constructor(private countService: CountService) {}

  ngOnInit(): void {}

  showButton() {
    this.isValid = true;
    this.count = 1;
    this.countService.updateItem(this.name, this.count);
  }

  increment() {
    this.count++;
    this.countService.updateItem(this.name, this.count);
  }

  decrement() {
    this.count--;
    this.countService.updateItem(this.name, this.count);
    if (this.count === 0) {
      this.isValid = false;
    }
  }
}
