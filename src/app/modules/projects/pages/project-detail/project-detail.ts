import { Component, computed, inject, signal } from '@angular/core';
import { Project } from '../../interface/project.interface';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProjectsService } from '../../services/projects.service';
import { GalleriaModule } from 'primeng/galleria';
@Component({
  selector: 'app-project-detail',
  imports: [GalleriaModule,RouterLink],
  templateUrl: './project-detail.html',
  styleUrl: './project-detail.css',
})
export class ProjectDetail {
  route = inject(ActivatedRoute);

  service = inject(ProjectsService);

  id = Number(this.route.snapshot.paramMap.get('id'));

  project = computed(() => this.service.getProject(this.id));

  visibleGallery = signal(false);

  activeIndex = signal(0);

  openGallery(index:number){

    this.activeIndex.set(index);

    this.visibleGallery.set(true);

}
}
