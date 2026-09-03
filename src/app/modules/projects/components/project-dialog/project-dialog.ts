import { Component, inject, input, output } from '@angular/core';
import { Project } from '../../interface/project.interface';
import { DialogModule } from 'primeng/dialog';
import { ButtonDirective } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { Router } from '@angular/router';
@Component({
  selector: 'app-project-dialog',
  imports: [DialogModule, ButtonDirective, TooltipModule],
  templateUrl: './project-dialog.html',
  styleUrl: './project-dialog.css',
})
export class ProjectDialog {
  visible = input.required<boolean>();

  project = input<Project | null>(null);

  close = output<void>();

  router = inject(Router)

  goToProject() {
    this.close.emit();

    this.router.navigate(['/proyectos', this.project()!.id]);
  }
}
