import {Component} from '@angular/core';
import {TooltipPosition} from "../../shared/directives/tooltip.enums";

@Component({
  selector: 'app-custom-tooltip',
  templateUrl: './custom-tooltip.component.html',
  styleUrls: ['./custom-tooltip.component.scss']
})
export class CustomTooltipComponent {
  position: TooltipPosition = TooltipPosition.DEFAULT;
  inputData: any;
  left: number = 0;
  top: number = 0;
}
