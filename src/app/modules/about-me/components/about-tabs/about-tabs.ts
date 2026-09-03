import { Component, input, output, signal } from '@angular/core';
import { BasicInfo } from '../basic-info/basic-info';
import { Biography } from '../biography/biography';
import { Education } from '../education/education';
import { Philosophy } from '../philosophy/philosophy';
import { Certifications } from '../certifications/certifications';
import { AboutTab } from '../../pages/about-me-page/about-me-page';
import { WorkExperience } from '../work-experience/work-experience';


@Component({
  selector: 'app-about-tabs',
  imports: [BasicInfo, Biography, Education, Philosophy, Certifications, WorkExperience],
  templateUrl: './about-tabs.html',
  styleUrl: './about-tabs.css',
})
export class AboutTabs {
  currentTab = input<AboutTab>('basic');


}
