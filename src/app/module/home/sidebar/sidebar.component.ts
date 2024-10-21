import { Component, Input, signal } from '@angular/core';
import { faBook } from '@fortawesome/free-solid-svg-icons';

export type MenuItem = {
  icon: any; // Use 'any' as the type to accept FontAwesome icons
  label: string;
  router: string;
};

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  sideNavCollapsed: any;
  @Input() set collapsed(val: boolean) {
    this.sideNavCollapsed.set(val);
  }

  menuItems = signal<MenuItem[]>([
    {
      icon: 'fas fa-book',
      label: 'Lecturer',
      router: 'inventory',
    },
    {
       icon: 'fas fa-book',
      label: 'University',
      router: 'university',
    }, {
      icon: 'fas fa-book',
      label: 'Course',
      router: 'course',
    },
  ]);
}
