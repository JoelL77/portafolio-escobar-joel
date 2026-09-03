import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BackgroundAnimation } from "../background-animation/background-animation";

@Component({
  selector: 'app-main',
  imports: [RouterOutlet, BackgroundAnimation],
  templateUrl: './main.html',
  styleUrl: './main.css',
})
export class Main {}
