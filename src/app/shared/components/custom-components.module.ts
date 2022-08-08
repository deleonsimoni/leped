import { NgModule } from "@angular/core";
import { CustomPipesModule } from "../pipes/custom-pipes.module";
import { CoordinatorCardComponent } from "./coordinator-card/coordinator-card.component";
import { NewsCardComponent } from './news-card/news-card.component';
import { EventsCardComponent } from './events-card/events-card.component';
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CoordinatorCardComponent,
    NewsCardComponent,
    EventsCardComponent
  ],
  exports: [
    CoordinatorCardComponent,
    NewsCardComponent,
    EventsCardComponent,
    CustomPipesModule
  ]
})
export class CustomComponentsModule { }
