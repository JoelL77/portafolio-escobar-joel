import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { TabsModule } from 'primeng/tabs';
import { AboutImage } from '../../components/about-image/about-image';
import { AboutTabs } from '../../components/about-tabs/about-tabs';



export type AboutTab =
  'basic' | 'biography' | 'philosophy' | 'education' | 'certifications' | 'work-experience';


@Component({
  selector: 'app-about-me-page',
  imports: [CommonModule, TabsModule, BadgeModule, AvatarModule, AboutImage, AboutTabs],
  templateUrl: './about-me-page.html',
  styleUrl: './about-me-page.css',
})
export class AboutMePage {
   currentTab = signal<AboutTab>('basic');


  selectedTab = signal('basic');

  changeTab(tab: AboutTab) {
    this.currentTab.set(tab);
  }
}
