import { Component } from '@angular/core';
import { Members } from './Classes/members';
import { Projects } from './Classes/projects';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ShapeUp';
  currentM: Members;
  Members: Members[];
  currentP: Projects;
  Projects: Projects[];
}
