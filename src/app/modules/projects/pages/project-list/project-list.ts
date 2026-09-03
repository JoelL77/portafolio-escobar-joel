import { Component, inject, signal } from '@angular/core';
import { Project } from '../../interface/project.interface';
import { ProjectCard } from '../../components/project-card/project-card';
import { ProjectDialog } from '../../components/project-dialog/project-dialog';
import { ProjectsService } from '../../services/projects.service';

@Component({
  selector: 'app-project-list',
  imports: [ProjectCard, ProjectDialog],
  templateUrl: './project-list.html',
  styleUrl: './project-list.css',
})
export class ProjectList {
  projectService = inject(ProjectsService);

  projects = signal(this.projectService.getProjects());

  selectedCategory = signal('Todos');

  categories = signal(['Todos', 'Frontend', 'Backend', 'Full Stack']);

  selectCategory(category: string) {
    this.selectedCategory.set(category);
  }

  selectedProject = signal<Project | null>(null);

  dialogVisible = signal(false);

  openProject(project: Project) {
    this.selectedProject.set(project);

    this.dialogVisible.set(true);
  }

  closeDialog() {
    this.dialogVisible.set(false);
  }
}
