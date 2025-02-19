import { animate, state, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-animations',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './animations.component.html',
  styleUrl: './animations.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('move-ball',[
      state('move-left', style({
        transform: 'scale(1) translateX(0) rotate(0deg)'
      })),
      state('move-right', style({
        transform: 'scale(0.7) translateX(300px) rotate(360deg)'
      })),
      transition('* => move-right', animate('1s ease-in')),
      transition('* => move-left', animate('1s ease-in')),
    ]),
  ],
})
export class AnimationsComponent {
  public moveIn = signal('');
}
