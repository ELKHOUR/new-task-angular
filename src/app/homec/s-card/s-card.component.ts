import { Component, Input } from '@angular/core';
import { ICities } from '../homec.component.models';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-s-card',
  standalone: true,
  imports: [NgClass],
  templateUrl: './s-card.component.html',
  styleUrl: './s-card.component.css'
})
export class SCardComponent {
  @Input({required: true}) city: ICities = {} as ICities;

}
