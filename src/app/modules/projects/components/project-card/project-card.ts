import { Component, input, output } from '@angular/core';
import { Project } from '../../interface/project.interface';
import { TooltipModule } from 'primeng/tooltip';


@Component({
  selector: 'app-project-card',
  imports: [TooltipModule],
  templateUrl: './project-card.html',
  styleUrl: './project-card.css',
})
export class ProjectCard {
  project = input.required<Project>();

  open = output<Project>();

  viewProject() {
    this.open.emit(this.project());
  }
}
