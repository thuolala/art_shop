import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {
  isNavbarCollapsed = false;

  toggleNavbar() {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }

  isOpen: boolean = true;

  toggleDropdownMenu() {
    this.isOpen = !this.isOpen;
  }

  ngOnInit() {
  }

  value: number = 1;

  minusCount(){
    if(this.value >= 1){
      this.value -= 1;
    }
  }

  plusCount(){
    if(this.value >= 0){
      this.value += 1;
    }
  }
}
