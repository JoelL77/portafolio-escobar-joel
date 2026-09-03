import { Component } from '@angular/core';
import { Main } from "../main/main";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-menu',
  imports: [Main, RouterLink],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {


  menuOpen = false;
}
