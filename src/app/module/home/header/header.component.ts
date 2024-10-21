import { Component, computed, HostListener, OnInit, signal, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit  {
  isBrowser: boolean | undefined;
  
  isMobile: boolean = false;
  isNavListVisible = signal(false);
  @HostListener('window:resize', ['$event'])
  onResize(event:any) {
    this.checkScreenWidth();
  }

  ngOnInit(): void {
    if (this.isBrowser) {
      this.checkScreenWidth();
    }
  }

  isDropdownVisible: boolean = false;
  collapsed = signal(true)

  sidenavWidth = computed(() => {
    if (this.isMobile) {
      return '0px'; // Hide sidebar on mobile by setting width to 0
    } else {
      return this.collapsed() ? '60px' : '220px'; // Desktop/tablet widths
    }
  });


  toggleDropdown() {
    this.isDropdownVisible = !this.isDropdownVisible;
  }

  checkScreenWidth(): void {
    if (this.isBrowser) {
      // Only execute this if running in the browser
      console.log(window.innerWidth);
      // Your screen width logic here
    }
  }
  toggleNavList() {
    // Toggle navigation list only on mobile
    if (this.isMobile) {
      this.isNavListVisible.set(!this.isNavListVisible());
    } else {
      this.collapsed.set(!this.collapsed());
    }
  }
  menuItems() {
    return [
      { label: 'Home', icon: 'bi bi-house', router: '/home' },
      { label: 'Profile', icon: 'bi bi-person', router: '/profile' },
      { label: 'Settings', icon: 'bi bi-gear', router: '/settings' },
      { label: 'Help', icon: 'bi bi-question-circle', router: '/help' },
    ];
  }
}
