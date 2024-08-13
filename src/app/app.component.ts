import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { DemoComponent } from './nav/demo.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DemoComponent, RouterModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'task';
  data = {
    count:'the new prop'
  }




}

