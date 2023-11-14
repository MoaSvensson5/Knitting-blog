import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-text-block',
  templateUrl: './image-text-block.component.html',
  styleUrls: ['./image-text-block.component.css'],
})
export class ImageTextBlockComponent {
  @Input() title: string = '';
  @Input() text: string = '';
  @Input() image: string = '';
}
