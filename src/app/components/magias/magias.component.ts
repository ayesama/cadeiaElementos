import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-magias',
  templateUrl: './magias.component.html',
  styleUrls: ['./magias.component.css']
})
export class MagiasComponent {
  @Input()
  nome:string = ""
  @Input()
  nivel:string = ""
  @Input()
  elemento:string = ""
  @Input()
  img:string = ""
}
