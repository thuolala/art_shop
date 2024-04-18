import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-productlist',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './productlist.component.html',
  styleUrl: './productlist.component.css'
})
export class ProductlistComponent implements OnInit{
  isNavbarCollapsed = false;
  // @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  
  constructor(){
  }

  toggleNavbar() {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }

  windowScrolled = false;
  dataSource: any; 

  ngOnInit() {
    window.addEventListener('scroll', () => {
      this.windowScrolled = window.pageYOffset !== 0;
    });

    // this.dataSource.paginator = this.paginator;
  }

  scrollToTop(): void {
    window.scrollTo(0, 0);
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

  isOpen: boolean = true;

  toggleDropdownMenu() {
    this.isOpen = !this.isOpen;
  }

  isVisible: boolean = false;
  toggleSidebar() {
    this.isVisible = !this.isVisible;
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
