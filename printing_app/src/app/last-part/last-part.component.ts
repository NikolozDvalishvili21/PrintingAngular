import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-last-part',
  imports: [CommonModule],
  templateUrl: './last-part.component.html',
  styleUrl: './last-part.component.scss'
})
export class LastPartComponent {
  selectedIndex: number = 0; 

  // Function to handle item selection
  selectItem(index: number): void {
    if (this.selectedIndex === index) {
      this.selectedIndex = -1; 
    } else {
      this.selectedIndex = index;
    }
  }
}
