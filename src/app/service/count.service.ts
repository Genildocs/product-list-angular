import { Injectable } from '@angular/core';
import { Signal, signal } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class CountService {
  private itemsMap = new Map<string, number>();

  cartObject: any = {};

  updateItem(name: string, count: number): void {
    this.itemsMap.set(name, count);

    console.log(this.itemsMap);
  }

  constructor() {}
}
