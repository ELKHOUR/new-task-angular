import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DemoComponent } from './nav/demo.component';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from "./create/create.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DemoComponent, HomeComponent, CreateComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'task';
  data = {
    count:'the new prop'
  }




}

