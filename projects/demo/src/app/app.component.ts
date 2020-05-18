import { Component } from '@angular/core';

let count = 0;

const makeItem = () => {
  count++;
  return {
    id: count,
    content: `Item ${count}`,
  };
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  list: { id: number; content: string }[] = [makeItem()];

  addItem(): void {
    this.list.push(makeItem());
  }

  delete(id: number): void {
    this.list = this.list.filter((item) => item.id !== id);
  }
}
