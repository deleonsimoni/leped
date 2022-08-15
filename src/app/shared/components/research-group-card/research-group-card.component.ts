import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Coordenadora } from "@app/shared/types";

@Component({
  selector: "research-group-card-component",
  templateUrl: "./research-group-card.component.html",
  styleUrls: ["./research-group-card.component.scss"]
})
export class ResearchGroupCardComponent {

  @Input() researchGroup: any;
  @Output() delete: EventEmitter<Coordenadora> = new EventEmitter();
  @Output() edit: EventEmitter<boolean> = new EventEmitter();

}
