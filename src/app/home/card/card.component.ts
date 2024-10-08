import { Component, Input } from '@angular/core';
import { ICities } from '../home.component.models';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgClass],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input({required: true}) city: ICities = {} as ICities;


}