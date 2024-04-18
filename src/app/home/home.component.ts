import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  safeURL: any;
  videoURL: string = '';
  isNavbarCollapsed = false;
  
  constructor(private _sanitizer: DomSanitizer){
    this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/aezstCBHOPQ?si=Ue8mAxilp8WOgXZE");
  }

  toggleNavbar() {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }

  windowScrolled = false;

  ngOnInit() {
    window.addEventListener('scroll', () => {
      this.windowScrolled = window.pageYOffset !== 0;
    });
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
