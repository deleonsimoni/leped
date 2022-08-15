import { NgModule } from "@angular/core";
import { CustomPipesModule } from "../pipes/custom-pipes.module";
import { CoordinatorCardComponent } from "./coordinator-card/coordinator-card.component";
import { NewsCardComponent } from './news-card/news-card.component';
import { EventsCardComponent } from './events-card/events-card.component';
import { CommonModule } from "@angular/common";
import { ResearchGroupCardComponent } from "./research-group-card/research-group-card.component";

@NgModule({
  imports: [
    CommonModule,
    CustomPipesModule
  ],
  declarations: [
    CoordinatorCardComponent,
    NewsCardComponent,
    EventsCardComponent,
    ResearchGroupCardComponent
  ],
  exports: [
    CoordinatorCardComponent,
    NewsCardComponent,
    EventsCardComponent,
    ResearchGroupCardComponent
  ]
})
export class CustomComponentsModule { }
